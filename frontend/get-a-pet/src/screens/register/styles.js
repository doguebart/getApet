import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .img-container {
    width: 50%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .form-container {
    width: 50%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      max-width: 100%;
      color: #141414;
      border-bottom: 3px solid #dadada;
      margin-bottom: 1em;
    }

    form {
      width: 50%;
      max-height: 100%;

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
      h2 {
        max-width: 50%;
      }

      form {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .img-container {
      display: none;
    }

    .form-container {
      width: 100%;

      h2 {
        max-width: 100%;
        font-size: 1.2rem;
      }

      form {
        width: 100%;
      }
    }
  }
`;
