import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .section-1 {
    position: relative;
    max-width: 100%;
    height: 100%;

    h1 {
      z-index: 1;
      position: absolute;
      top: 40%;
      left: 5%;
      text-align: center;
      font-size: 5rem;
      color: #fff;
    }

    .background-image {
      z-index: 0;

      img {
        max-width: 100%;
      }
    }
  }

  .section-3 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    background-color: #141414;

    .content-container {
      width: 30%;
      padding: 1em;
      display: flex;
      flex-direction: column;

      h2 {
        width: 40%;
        color: #dadada;
        border-bottom: 3px solid #dadada;
        margin-bottom: 1em;
      }

      p {
        text-transform: uppercase;
        color: #dadada;
        opacity: 50%;
        font-weight: 500;
        font-size: 1.2rem;
        margin-bottom: 1em;
      }

      a {
        width: 30%;
        padding: 1em;
        border-radius: 5px;
        text-align: center;
        text-decoration: none;
        font-weight: 600;
        color: #141414;
        background-color: #dadada;
      }

      a:hover {
        opacity: 70%;
        transition: 0.2s;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .section-1 h1 {
      font-size: 3rem;
    }

    .section-3 {
      .content-container {
        width: 100%;

        h2 {
          width: 40%;
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .section-1 h1 {
      font-size: 1.5rem;
    }

    .section-3 {
      flex-wrap: wrap;

      .content-container {
        width: 100%;

        h2 {
          width: 50%;
          font-size: 1.2rem;
          margin-top: 1em;
        }

        p {
          font-size: 0.8rem;
        }

        a {
          width: 50%;
          font-size: 0.8rem;
        }
      }

      .image-container {
        width: 100%;

        img {
          width: 100%;
        }
      }
    }
  }
`;
