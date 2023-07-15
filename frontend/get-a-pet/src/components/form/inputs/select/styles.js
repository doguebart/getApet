import styled from "styled-components";

export const Container = styled.div`
  select {
    width: 100%;
    padding: 1em;
    margin-bottom: 1em;
    outline: none;
    border: 1px solid #dadada;
    border-radius: 5px;
    background-color: transparent;

    option {
      color: #141414;
    }
  }

  @media screen and (max-width: 1024px) {
    select {
      padding: 1em;
      font-size: 1.2rem;
    }

    ::placeholder {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 900px) {
    select {
      padding: 1em;
      font-size: 0.8rem;
    }

    ::placeholder {
      font-size: 0.8rem;
    }
  }
`;
