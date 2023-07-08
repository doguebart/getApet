import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .Section-1 {
    position: relative;
    max-width: 100%;
    height: 100%;

    h1 {
      z-index: 1;
      position: absolute;
      top: 50%;
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

  @media screen and (max-width: 1024px) {
    .Section-1 h1 {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 900px) {
    .Section-1 h1 {
      font-size: 1.5rem;
    }
  }
`;
