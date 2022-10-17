import styled from "styled-components";

export const HeaderMenus = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 5vh;
  margin-right: 9vw;
  margin-bottom: 25px;

  span {
    position: absolute;
    left: 9vw;
    color: rgba(93, 144, 64, 1);
    font-size: 18px;
    font-weight: 600;
  }

  a {
    position: relative;
    display: flex;
    color: rgba(100, 100, 100, 1);
    margin-left: 15px;
    font-size: 18px;
  }

  a:nth-child(1) {
    color: green;
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

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 64px;
  font-weight: 200;
  margin-bottom: 5vh;
  a {
    display: flex;
    color: rgba(0, 0, 0, 1);
  }

  img {
    width: 102px;
    height: 96.33px;
  }
`;
