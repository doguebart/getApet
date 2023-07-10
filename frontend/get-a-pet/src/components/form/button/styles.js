import styled from "styled-components";

export const Container = styled.div`
  button {
    width: 100%;
    margin-top: 2em;
    cursor: pointer;
    padding: 1em;
    border: 1px solid #dadada;
    border-radius: 5px;
    background-color: #dadada;
    color: #141414;
    font-weight: 600;
    text-transform: uppercase;
  }

  button:hover {
    opacity: 70%;
    transition: 0.2s;
  }
`;
