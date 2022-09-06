import styled from "styled-components";

export const Container = styled.section`
  font-family: "roboto", sans-serif;

  width: 100vw;
  max-height: 100vh;

  background-color: var(--gray-color-3);

  padding: 0px 20%;
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    width: 7rem;
    height: 3rem;

    border: none;
    border-radius: 8px;
  }

  button:hover {
    background-color: var(--primary-color);
  }

  .headerLanding {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    img {
      width: 50rem;
    }
    h2 {
      font-size: 40px;
      font-weight: 200;
    }
  }

  .mainLanding {
    display: flex;
    flex-direction: row;

    p {
      font-size: 32px;
      font-weight: 400;
      color: var(--gray-color-1);
    }

    p:nth-child(2) {
      font-weight: 700;
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 5%;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 2544px) {
    padding-top: 3rem;
    padding: 0px 10%;

    .headerLanding {
      img {
        width: 40rem;
      }
    }

    .mainLanding {
      height: 100vh;

      display: flex;
      flex-direction: row;
      align-items: flex-end;

      img {
        width: 55rem;
      }

      div:nth-child(2) {
        height: 80%;

        display: flex;
        flex-direction: column;
        gap: 6%;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (max-width: 1798px) {
    padding-top: 10rem;
    padding: 0px 10%;

    .headerLanding {
      img {
        width: 30rem;
      }

      .mainLanding {
        height: 100vh;

        display: flex;
        flex-direction: row;
        align-items: flex-end;

        img {
          width: 50rem;
        }

        div:nth-child(2) {
          height: 80%;

          display: flex;
          flex-direction: column;
          gap: 6%;
          align-items: center;
          justify-content: center;
        }
      }
    }

    @media (max-width: 1522px) {
      padding-top: 10rem;
      padding: 0px 10%;

      .headerLanding {
        img {
          width: 20rem;
        }

        h2 {
          font-size: 30px;
        }
      }

      .mainLanding {
        img {
          width: 40rem;
        }

        p {
          font-size: 28px;
          font-weight: 300;
        }

        p:nth-child(2) {
          font-weight: 600;
        }
      }
    }

    @media (max-width: 1127px) {
      padding-top: 10rem;
      padding: 0px 10%;

      .headerLanding {
        img {
          width: 15rem;
        }

        h2 {
          font-size: 24px;
        }
      }

      .mainLanding {
        img {
          width: 30rem;
        }

        p {
          font-size: 20px;
          font-weight: 300;
        }

        p:nth-child(2) {
          font-weight: 600;
        }
      }
    }
  }
`;
