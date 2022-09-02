import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  max-width: 1300px;
  height: 100%;

  margin: auto;
  height: fit-content;
  min-height: 100%;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .headerLanding {
    padding-top: 13rem;

    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;

      img {
        height: 15rem;
      }
      h2 {
        color: var(--gray-color-3);
        font-size: 30px;
        font-weight: 300;
        font-family: var(--font-family-2);

        margin-left: 5.5rem;
      }
    }
    div:nth-child(2) {
      display: flex;
      justify-content: end;
      align-items: flex-end;
    }
  }

  .mainLanding {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    height: 100%;
    padding-bottom: 5rem;

    div:nth-child(1) {
      margin-right: -10rem;

      display: flex;
      justify-content: end;
      img {
        width: 80rem;

        position: bottom;
      }
    }
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      justify-content: start;
      p {
        color: var(--gray-color-3);
        font-size: 32px;
        font-weight: 300;
      }
      p:nth-child(2) {
        font-weight: 700;
      }
      button {
        margin-top: 4rem;
      }
    }
  }
`;
