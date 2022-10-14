import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeaderMenus = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 5vh;
  margin-right: 9vw;
  margin-bottom: 25px;

  h3 {
    display: flex;
    margin-left: 15px;
    font-size: 18px;
  }

  h3:nth-child(1) {
    color: green;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 64px;
  font-weight: 200;

  img {
    width: 102px;
    height: 96.33px;
  }
`;
