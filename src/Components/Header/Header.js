import { Link } from "react-router-dom";
import { HeaderMenus, HeaderLogo } from "./Header.style";
import logo from "../../assets/logo.png";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect } from "react";
import { getUserInfo } from "../../services/shortlyService";

export default function Header() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user !== "") {
      const userPromise = getUserInfo();

      userPromise.catch((res) => {
        alert(res.response.data.message);
      });

      userPromise.then((res) => {
        console.log(res.data);
      });
    }
  }, []);
  return (
    <>
      {user ? (
        <>Tem user</>
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
