import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 0;
  border-top: 1px solid #dadada;

  .footer-column {
    max-width: 300px;
    margin: 0 2em;
    display: flex;
    flex-direction: column;
    align-items: left;

    h2 {
      width: 60%;
      font-size: 1rem;
      border-bottom: 3px solid #dadada;
      margin-bottom: 0.5em;
    }

    #link {
      font-size: 0.8rem;
      
      margin: 0.5em 0;
      font-weight: 500;
      color: #cdcdcd;
    }

    #link:hover {
      opacity: 80%;
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
