import styled from "styled-components";

export const Container = styled.div`
  input {
    width: 100%;
    padding: 1em;
    margin-bottom: 1em;
    outline: none;
    border: 1px solid #dadada;
    border-radius: 5px;
    background-color: transparent;
  }

  @media screen and (max-width: 1024px) {
    input {
      padding: 2em;
    }

    ::placeholder {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 900px) {
    input {
      padding: 1em;
    }

    ::placeholder {
      font-size: 0.8rem;
    }
  }
`;
