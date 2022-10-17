import { Link } from "react-router-dom";
import { HeaderMenus, HeaderLogo } from "./Header.style";
import logo from "../../assets/logo.png";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { getUserInfo } from "../../services/shortlyService";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("");

  useEffect(() => {
    if (user !== "") {
      const userPromise = getUserInfo();

      userPromise.catch((res) => {
        alert(res.response.data.message);
      });

      userPromise.then((res) => {
        setName(res.data.name);
      });
    }
  }, []);

  return (
    <>
      {user ? (
        <>
          <HeaderMenus>
            <span>Seja bem-vindo(a), {name.split(" ")[0]}!</span>
            <Link to="/me">Home</Link>
            <Link to="/ranking">Ranking</Link>
            <Link
              to="/"
              onClick={() => {
                setUser("");
                localStorage.removeItem("shortly");
              }}
            >
              Sair
            </Link>
          </HeaderMenus>
          <HeaderLogo>
            <Link to="/">
              Shortly
              <img src={logo} alt="logo" />
            </Link>
          </HeaderLogo>
        </>
      ) : (
        <>
          <HeaderMenus>
            <Link to="/sign-in">Entrar</Link>
            <Link to="/sign-up">Cadastrar-se</Link>
          </HeaderMenus>
          <HeaderLogo>
            <Link to="/">
              Shortly
              <img src={logo} alt="logo" />
            </Link>
          </HeaderLogo>
        </>
      )}
    </>
  );
}
