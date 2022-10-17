import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x:hidden;

  h1{
    margin: auto;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const Input = styled.input`
  height: 60px;
  width: 60vw;
  padding: 21px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
  border-radius: 24px;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-weight: 400;

  &::placeholder {
    color: rgba(156, 156, 156, 1);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  min-width: 11vw;
  background-color: rgba(93, 144, 64, 1);
  border-radius: 12px;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const UrlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  margin: 0 auto;
  margin-top: 6vh;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(128, 204, 116, 1);
  padding: 15px;
  padding-left: 25px;
  border-radius: 12px;
  box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
  font-size: 22px;
  font-weight: 400;

  :last-child{
    margin-bottom: 50px;
  }

  span {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-between;

    img{
      max-height: 80%;
      cursor:pointer;
    }
  }

  h5 {
    margin-bottom: 10px;

    img{
      max-height: 25px;
    }
  }
`;
