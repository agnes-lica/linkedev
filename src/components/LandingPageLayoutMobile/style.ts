import styled from "styled-components";

export const Container = styled.section`
  font-family: "roboto", sans-serif;

  display: flex;
  flex-direction: column;

  height: 100vh;

  overflow-y: hidden;
  img {
    width: 60rem;

    margin: auto;
    padding: 3rem 5rem 3rem 5rem;
  }

  h2 {
    color: var(--gray-color-3);
    font-weight: 700;
    font-size: 24px;

    padding: 2rem 10rem;
  }

  div {
    background-image: url("./backgroundmobile.svg");
    background-repeat: no-repeat;
    background-size: 100vw;

    height: 80vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    padding-top: 5rem;
  }

  @media (max-width: 693px) {
    div {
      display: flex;
      flex-direction: column;

      background-size: 100vw 70vh;
    }
  }

  @media (max-width: 615px) {
    img {
      width: 50rem;
    }

    h2 {
      padding-bottom: 0px;
    }

    div {
      display: flex;
      flex-direction: column;

      background-size: 100vw 85vh;

      padding: 0px;

      button:nth-child(1) {
        margin-top: 10rem;
      }
    }
  }

  @media (max-width: 550px) {
    img {
      width: 50rem;
    }

    h2 {
      margin-top: 6rem;
      padding-bottom: 0px;
    }

    div {
      display: flex;
      flex-direction: column;

      background-size: 100vw 90vh;

      padding: 0px;

      button:nth-child(1) {
        margin-top: 25rem;
      }
    }
  }

  @media (max-width: 475px) {
    img {
      width: 40rem;
    }

    h2 {
      font-size: 20px;

      margin-top: 6rem;
      padding-bottom: 0px;
    }

    div {
      display: flex;
      flex-direction: column;

      background-size: 100vw 90vh;

      padding: 0px;

      button:nth-child(1) {
        margin-top: 25rem;
      }
    }
  }
`;
