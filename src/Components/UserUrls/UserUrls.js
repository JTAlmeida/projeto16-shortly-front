import Header from "../Header/Header";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import {
  getUserInfo,
  shortenUrl,
  deleteUrl,
} from "../../services/shortlyService";
import { ThreeDots } from "react-loader-spinner";
import { Wrapper, Form, Input, Button, UrlsContainer } from "./UserUrls.style";
import Swal from "sweetalert2";
import deleteIcon from "../../assets/deleteIcon.png";
import link from "../../assets/link.png";

export default function UserUrls() {
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ url: "" });
  const [userUrls, setUserUrls] = useState([]);
  const [checkUrl, setCheckUrl] = useState(false);

  useEffect(() => {
    if (user !== "") {
      setUser(JSON.parse(localStorage.getItem("shortly")));
    }

    const promise = getUserInfo();

    promise.catch((res) => {
      Swal.fire(res.response.data.message);
    });

    promise.then((res) => {
      setUserUrls(res.data);
      localStorage.setItem(
        "shortly",
        JSON.stringify({ ...user, userUrls: res.data.shortenedUrls })
      );
    });
  }, [isLoading]);

  function validateUrl(value) {
    return /^(?:(?:(?:https?|http):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
  }

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function urlShortener(e) {
    if (!validateUrl(form.url)) {
      return Swal.fire({
        icon: "error",
        title: "URL inválida!",
        text: "Tenha certeza que inseriu a URL completa (com 'http://' ou 'https://').",
      });
    }

    e.preventDefault();

    let checkUrl = "";
    if (userUrls.shortenedUrls) {
      checkUrl = userUrls.shortenedUrls.find(
        (thisUrl) => thisUrl.url === form.url
      );

      if (checkUrl) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Este mesmo link já foi encurtado por você!",
        });
      }
    }

    setIsLoading(true);

    const promise = shortenUrl(form);

    promise.catch((res) => {
      Swal.fire(res.response.data.message);
      setIsLoading(false);
    });

    promise.then((res) => {
      setIsLoading(false);
      Swal.fire("Parabéns!", "Seu link foi encurtado!", "success");
      setForm({ url: "" });
    });
  }

  return (
    <>
      <Wrapper>
        <Header />
        {isLoading ? (
          <>
            <Form>
              <Input
                disabled
                placeholder="Links que cabem no bolso"
                name="url"
                type="text"
              />
              <Button disabled type="submit">
                <ThreeDots color="rgba(255,255,255,1)" height={10} with={45} />
              </Button>
            </Form>
          </>
        ) : (
          <>
            <Form onSubmit={urlShortener}>
              <Input
                placeholder="Links que cabem no bolso"
                name="url"
                type="text"
                value={form.url}
                onChange={handleForm}
                required
              />
              <Button type="submit">Encurtar link</Button>
            </Form>
          </>
        )}
        {userUrls.shortenedUrls ? (
          <>
            {userUrls.shortenedUrls.map((thisUrl, index) => {
              return (
                <UrlsContainer key={index}>
                  <span>
                    <h5>{thisUrl.url}</h5>
                    <h5>
                      {thisUrl.shortUrl}{" "}
                      <img
                        src={link}
                        alt="link"
                        onClick={() => {
                          Swal.fire({
                            title: "Deseja visitar ou ver o link?",
                            showDenyButton: true,
                            showCancelButton: true,
                            confirmButtonText: "Visitar",
                            denyButtonText: `Ver`,
                          }).then((result) => {
                            if (result.isConfirmed) {
                              window.location.href = `https://project16shortly.herokuapp.com/urls/open/${thisUrl.shortUrl}`;
                            } else if (result.isDenied) {
                              Swal.fire(
                                "O link é: ",
                                `https://project16shortly.herokuapp.com/urls/open/${thisUrl.shortUrl}`,
                                "info"
                              );
                            }
                          });
                        }}
                      />
                    </h5>
                    <h5>{thisUrl.visitCount}</h5>
                    <img
                      src={deleteIcon}
                      alt="delIcon"
                      onClick={() => {
                        Swal.fire({
                          title: "Tem certeza que deseja apagar?",
                          showCancelButton: true,
                          confirmButtonText: "Apagar",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            const promise = deleteUrl(thisUrl.id);

                            promise.catch((res) => {
                              Swal.fire(res.response.data.message);
                            });

                            promise.then(() => {
                              Swal.fire("Apagado!", "", "success");

                              const promiseUser = getUserInfo();

                              promiseUser.catch((res) => {
                                Swal.fire(res.response.data.message);
                              });

                              promiseUser.then((res) => {
                                setUserUrls(res.data);
                              });
                            });
                          }
                        });
                      }}
                    />
                  </span>
                </UrlsContainer>
              );
            })}
          </>
        ) : (
          <h1>Nenhuma URL foi encurtada ainda!</h1>
        )}
      </Wrapper>
    </>
  );
}
