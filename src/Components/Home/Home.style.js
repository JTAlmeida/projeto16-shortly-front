import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  h1{
    font-size: 20px;
    font-weight: 700;
  }
`;

export const RankingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 36px;
  font-weight: 700;
`;

export const RankingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  margin-top: 10vh;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(120, 177, 89, 0.25);
  padding: 15px;
  padding-left: 25px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
  font-size: 22px;
  font-weight: 400;

  p{
    width: 80vw;
    margin-bottom: 10px;
  }
`;

export const Footer = styled.div`
  width: 80vw;
  text-align: center;
  margin-top: 10vh;

  a {
    position: relative;
    color: rgba(100, 100, 100, 1);
  }

  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #a4a4a4;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;
