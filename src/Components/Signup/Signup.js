import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { Wrapper, Form, Input, Button } from "./Signup.style";
import { ThreeDots } from "react-loader-spinner";
import { signUp } from "../../services/shortlyService";
import Header from "../Header/Header";
import Swal from "sweetalert2";

export default function Signup() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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

  function sendSignUp(e) {
    e.preventDefault();

    if (form.confirmPassword !== form.password) {
      return alert("Passwords must match!");
    }

    setIsLoading(true);

    const promise = signUp(form);
    promise.catch((res) => {
      Swal.fire(res.response.data.message);
      setIsLoading(false);
    });

    promise.then(() => {
      setIsLoading(false);
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      Swal.fire("Parabéns!", "Sua conta foi criada.", "success");
      navigate("/");
    });
  }

  return (
    <>
      <Wrapper>
        <Header />
        {isLoading ? (
          <>
            <Form onSubmit={sendSignUp}>
              <Input disabled placeholder="Nome" name="name" type="name" />
              <Input disabled placeholder="E-mail" name="email" type="email" />
              <Input
                disabled
                placeholder="Senha"
                name="password"
                type="password"
              />
              <Input
                disabled
                placeholder="Confirme a senha"
                name="confirmPassword"
                type="password"
              />

              <Button disabled type="submit">
                <ThreeDots color="rgba(255,255,255,1)" height={10} with={45} />
              </Button>
            </Form>
          </>
        ) : (
          <>
            <Form onSubmit={sendSignUp}>
              <Input
                placeholder="Nome"
                name="name"
                type="name"
                value={form.name}
                onChange={handleForm}
                required
              />
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
              <Input
                placeholder="Confirmar senha"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleForm}
                required
              />
              <Button type="submit">Criar conta</Button>
            </Form>
          </>
        )}
      </Wrapper>
    </>
  );
}
