import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .section-2 {
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;
    background-color: #fff;

    .message {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-height: 100%;
    }

    h2 {
      width: 10%;
      color: #141414;
      border-bottom: 3px solid #dadada;
      margin-bottom: 1em;
    }

    .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1em;
      max-width: 100%;
      padding: 1em;
      justify-content: center;
      background-color: #fff;

      .card {
        width: 300px;
        min-height: 300px;
        border: 1px solid #dadada;
        border-radius: 5px;
        background-color: transparent;
        margin: 0 1em;

        .img-container {
          width: 100%;
          height: 200px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom: 1px solid #dadada;

          img {
            width: 100%;
            height: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 0;
            border-bottom-right-radius: 0;
            object-fit: cover;
          }
        }

        .text-content-container {
          display: flex;
          flex-direction: column;
          padding: 0.5em;

          #name {
            text-transform: capitalize;
            font-size: 1.3rem;
            font-weight: bold;
            color: #141414;
          }

          .text-content {
            display: flex;
            flex-direction: column;

            #conclude-adoption {
              width: 100%;
              text-decoration: none;
              text-align: center;
              padding: 1em;
              border-radius: 5px;
              margin-top: 1em;
              font-size: 1rem;
              color: #fff;
              background-color: green;
              border: none;
            }

            #conclude-adoption:hover {
              transition: 0.2s;
              opacity: 80%;
            }

            #adopted-text {
              margin-top: 1em;
              color: green;
              text-align: center;
            }

            #dog-infos-title {
              font-size: 1rem;
              color: #141414;
              margin-top: 1em;
            }

            #age {
              margin-top: 0.2em;
              font-size: 1rem;
              color: #141414;
              opacity: 40%;
            }

            #weight {
              margin-top: 0.2em;
              font-size: 1rem;
              color: #141414;
              opacity: 40%;
            }

            #sex {
              margin-top: 0.5em;
              font-size: 1rem;
              color: #1b6b93;
              padding: 0.5em 0;
              border-radius: 5px;
              text-align: center;
              background-color: #4fc0d0;
            }

            > a {
              width: 100%;
              text-decoration: none;
              text-align: center;
              padding: 1em;
              border-radius: 5px;
              margin-top: 1em;
              font-size: 1rem;
              color: #141414;
              background-color: #dadada;
            }

            a:hover {
              transition: 0.2s;
              opacity: 80%;
            }

            .controll {
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 1em;

              > button {
                border: none;
                background-color: transparent;
              }

              .icon {
                margin: 0 1em;
                font-size: 1.2rem;
              }

              .icon:hover {
                opacity: 70%;
              }

              .edit {
                color: blue;
              }

              .trash {
                color: red;
              }
            }
          }

          .text-content.female {
            #sex {
              margin-top: 0.5em;
              font-size: 1rem;
              color: #6528f7;
              padding: 0.5em 0;
              border-radius: 5px;
              text-align: center;
              background-color: #e893cf;
            }
          }

          .text-content.male {
            #sex {
              margin-top: 0.5em;
              font-size: 1rem;
              color: #1b6b93;
              padding: 0.5em 0;
              border-radius: 5px;
              text-align: center;
              background-color: #4fc0d0;
            }
          }
        }
      }
    }
  }

  /* Passo 4: Estilize o modal de confirmação */
  .confirmation-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 1em;
    border: 1px solid #dadada;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 999;
    width: 300px;
    text-align: center;

    p {
      font-size: 1.1rem;
      color: #141414;
    }

    button {
      margin: 0.5em;
      padding: 0.5em 1em;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      color: #fff;
      background-color: #1b6b93;
    }

    button:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 1024px) {
    .section-2 {
      h2 {
        width: 20%;
      }

      .cards-container {
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        padding: 0;
      }

      .card {
        margin: 0;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .section-2 {
      h2 {
        width: 40%;
        font-size: 1.2rem;
      }

      .cards-container {
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        padding: 0;
      }

      .card {
        margin: 0;
      }
    }
  }
`;
