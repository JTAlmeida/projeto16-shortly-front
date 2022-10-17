import trophy from "../../assets/trophy.png";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getRanking } from "../../services/shortlyService";
import Header from "../Header/Header";
import UserContext from "../../contexts/UserContext";
import {
  Wrapper,
  RankingContainer,
  RankingWrapper,
  Footer,
} from "./Ranking.style";
import Swal from "sweetalert2";

export default function Ranking() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [ranking, setRanking] = useState([]);
  const [hasRanking, setHasRanking] = useState(false);

  useEffect(() => {
    if (user !== "") {
      setUser(JSON.parse(localStorage.getItem("shortly")));
    }

    const promise = getRanking();

    promise.catch((res) => {
      Swal.fire(res.response.data.message);
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
        <Header />
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
                    <p key={index}>
                      {index + 1}. {rank.name} - {rank.linksCount} links -{" "}
                      {rank.visitCount} visualizações
                    </p>
                  );
                })}
              </>
            ) : (
              <h1>Nenhuma URL foi encurtada ainda!</h1>
            )}
          </RankingContainer>
        </RankingWrapper>
      </Wrapper>
    </>
  );
}
