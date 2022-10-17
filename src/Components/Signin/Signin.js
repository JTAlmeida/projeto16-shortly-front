import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { signIn } from "../../services/shortlyService";
import Header from "../Header/Header";
import { ThreeDots } from "react-loader-spinner";
import { Wrapper, Form, Input, Button } from "./Signin.style";
import Swal from "sweetalert2";

export default function Signup() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/me");
    }
  }, []);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function sendSignIn(e) {
    e.preventDefault();

    setIsLoading(true);

    const promise = signIn(form);
    promise.catch((res) => {
      Swal.fire(res.response.data.message);
      setIsLoading(false);
    });

    promise.then((res) => {
      const timestamp = +new Date();
      setIsLoading(false);
      setUser(res.data);
      localStorage.setItem(
        "shortly",
        JSON.stringify({
          token: res.data.token,
          timestamp,
        })
      );
      setForm({
        email: "",
        password: "",
      });
      navigate("/me");
    });
  }

  return (
    <>
      <Wrapper>
        <Header />
        {isLoading ? (
          <>
            <Form onSubmit={sendSignIn}>
              <Input disabled placeholder="E-mail" name="email" type="email" />
              <Input
                disabled
                placeholder="Senha"
                name="password"
                type="password"
              />
              <Button disabled type="submit">
                <ThreeDots color="rgba(255,255,255,1)" height={10} with={45} />
              </Button>
            </Form>
          </>
        ) : (
          <>
            <Form onSubmit={sendSignIn}>
              <Input
                placeholder="E-mail"
                name="email"
                type="email"
                value={form.email}
                onChange={handleForm}
                required
              />
              <Input
                placeholder="Senha"
                name="password"
                type="password"
                value={form.password}
                onChange={handleForm}
                required
              />
              <Button type="submit">Entrar</Button>
            </Form>
          </>
        )}
      </Wrapper>
    </>
  );
}
