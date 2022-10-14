import logo from "../../assets/logo.png";
import { Wrapper, HeaderMenus, HeaderLogo } from "./Home.style";

export default function Home() {
  return (
    <>
      <Wrapper>
        <HeaderMenus>
          <h3>Entrar</h3>
          <h3>Cadastrar-se</h3>
        </HeaderMenus>
        <HeaderLogo>
          Shortly
          <img src={logo} alt="logo" />
        </HeaderLogo>
      </Wrapper>
    </>
  );
}
