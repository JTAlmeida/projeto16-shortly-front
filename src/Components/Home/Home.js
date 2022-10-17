import logo from "../../assets/logo.png";
import trophy from "../../assets/trophy.png";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getRanking } from "../../services/shortlyService";
import UserContext from "../../contexts/UserContext";
import {
  Wrapper,
  HeaderMenus,
  HeaderLogo,
  RankingContainer,
  RankingWrapper,
  Footer,
} from "./Home.style";

export default function Home() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [ranking, setRanking] = useState([]);
  const [hasRanking, setHasRanking] = useState(false);

  useEffect(() => {
    if (user !== "") {
      setUser(JSON.parse(localStorage.getItem("shortly")));
      return navigate("/me");
    }

    const promise = getRanking();

    promise.catch((res) => {
      alert(res.response.data.message);
    });

    promise.then((res) => {
      setRanking(res.data);
      if (res.data.length > 0) {
        setHasRanking(true);
      } else {
        setHasRanking(false);
      }
    });
  }, []);

  return (
    <>
      <Wrapper>
        <HeaderMenus>
          <Link to="/sign-in">Entrar</Link>
          <Link to="/sign-up">Cadastrar-se</Link>
        </HeaderMenus>
        <HeaderLogo>
          Shortly
          <img src={logo} alt="logo" />
        </HeaderLogo>
        <RankingWrapper>
          <span>
            <img src={trophy} alt="trophy" />
            Ranking
          </span>
          <RankingContainer>
            {hasRanking ? (
              <>
                {ranking.map((rank, index) => {
                  return (
                    <>
                      <p>
                        {index + 1}. {rank.name} - {rank.linksCount} links -{" "}
                        {rank.visitCount} visualizações
                      </p>
                    </>
                  );
                })}
              </>
            ) : (
              <h1>Nenhuma URL foi encurtada ainda!</h1>
            )}
          </RankingContainer>
          <Footer>Crie sua conta para usar nosso serviço!</Footer>
        </RankingWrapper>
      </Wrapper>
    </>
  );
}
