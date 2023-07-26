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
      width: 15%;
      color: #141414;
      border-bottom: 3px solid #dadada;
      margin-bottom: 1em;
    }

    .cards-container {
      display: flex;
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

            .border {
              width: 100%;
              height: 2px;
              margin: 1em 0;
              background-color: #cdcdcd;
            }

            .owner-text {
              display: flex;
              flex-direction: column;

              #owner-infos-title {
                font-size: 1rem;
                color: #141414;
                margin-top: 1em;
              }

              #name {
                text-transform: capitalize;
                font-size: 1.3rem;
                font-weight: bold;
                color: #141414;
              }

              #phone {
                margin-top: 0.2em;
                font-size: 1rem;
                color: #141414;
                opacity: 40%;
              }

              #email {
                margin-top: 0.2em;
                font-size: 1rem;
                color: #141414;
                opacity: 40%;
              }
            }

            #schedule-button {
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

            #schedule-button:hover {
              opacity: 70%;
              transition: 0.2s;
            }

            #newUserVisit {
              margin: 2em 0;
              text-align: center;
              font-size: 1rem;
              color: #909090;

              > a {
                font-size: 1rem;
                padding: 0;
                color: blue;
                background-color: transparent;
              }
              > a:hover {
                transition: 0.2s;
                opacity: 50%;
              }
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

        a {
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
      }
    }
  }
`;
