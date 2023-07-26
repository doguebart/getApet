import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form-container {
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .pet-image-container {
      width: 100px;
      height: 100px;
      margin-bottom: 1em;
      border-radius: 100%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        object-fit: cover;
      }
    }

    h2 {
      max-width: 100%;
      color: #141414;
      border-bottom: 3px solid #dadada;
      margin-bottom: 1em;
    }

    form {
      min-width: 20%;
      max-height: 100%;

      h2 {
        font-size: 1rem;
        width: 35%;
        margin-top: 2em;
      }

      span {
        color: #141414;

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 70%;
          transition: 0.2s;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .form-container {
      form {
        width: 50%;

        h2 {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .form-container {
      h2 {
        font-size: 1.2rem;
      }

      form {
        width: 80%;

        h2 {
          width: 50%;
          font-size: 1rem;
        }
      }
    }
  }
`;
