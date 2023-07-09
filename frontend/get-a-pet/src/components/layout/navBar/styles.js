import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dadada;
  padding: 0.5em 0;

  .brand {
    margin-left: 0.5em;
    img {
      width: 50px;
      height: 50px;
    }
  }

  .nav {
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .adopt {
      border-right: 1px solid #dadada;

      a {
        padding: 1em;
        text-decoration: none;
        font-weight: 500;
        color: #141414;
      }

      a:hover {
        opacity: 50%;
        transition: 0.2s;
      }
    }

    .login {
      a {
        padding: 1em;
        text-decoration: none;
        font-weight: 500;
        color: #141414;
      }

      a:hover {
        opacity: 50%;
        transition: 0.2s;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .nav {
      .adopt {
        a {
          font-size: 1.1rem;
        }
      }

      .login {
        a {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .brand img {
      width: 30px;
      height: 30px;
    }

    .nav {
      .adopt {
        a {
          font-size: 0.8rem;
        }
      }

      .login {
        a {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
