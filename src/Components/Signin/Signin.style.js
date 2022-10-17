import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  height: 60px;
  width: 60vw;
  margin-bottom: 25px;
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
  margin-top: 36px;
  background-color: rgba(93, 144, 64, 1);
  border-radius: 12px;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
