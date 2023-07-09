import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;

  .footer-column {
    max-width: 300px;
    margin: 0 2em;
    display: flex;
    flex-direction: column;
    align-items: left;

    h2 {
      border-bottom: 3px solid #dadada;
      margin-bottom: 0.5em;
    }

    a {
      margin-bottom: 0.5em;
      font-weight: 500;
      color: #141414;
    }

    a:hover {
      opacity: 50%;
      transition: 0.2s;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: space-between;

    .footer-column {
      margin: 1em;

      h2 {
        font-size: 1.2rem;
        margin-bottom: 1em;
      }

      a {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: space-between;

    .footer-column {
      margin: 1em;

      h2 {
        font-size: 1rem;
        margin-bottom: 1em;
      }

      a {
        font-size: 0.8rem;
      }
    }
  }
`;
