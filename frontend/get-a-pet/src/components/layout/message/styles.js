import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 80px;
  border-radius: 5px;
  margin-bottom: 2em;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Success = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 5px;
  margin-bottom: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #617a55;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Error = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 5px;
  margin-bottom: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ff6666;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
