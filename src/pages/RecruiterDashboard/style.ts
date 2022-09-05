import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  .title {
    font-family: var(--font-family-2);
    h2 {
      font-weight: 400;
    }
  }

  .recruiterContainer {
    display: flex;
    margin: 30px;
    justify-content: space-evenly;
  }

  .recruiterMain {
    min-width: 700px;
    width: 65%;
    border: 1px solid lightgray;
    border-radius: 8px;
  }

  .recruiterMainHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    nav {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: 100%;
    }

    .buttons {
      button {
        padding: 10px;
      }
      display: flex;
      gap: 12px;
    }

    .search {
      display: flex;
      /* height: 32px; */

      input {
        border: 1px solid #b1b5ba;
        border-radius: 5px 0 0 5px;
        padding: 11px 5px;
      }

      button {
        width: 66px;
        border: 1px solid #b1b5ba;
        border-left: 0px;
        border-radius: 0 5px 5px 0;

        background-color: #ffffff;
      }

      svg {
        color: var(--primary-3-color);

        &:hover {
          color: var(--primary-focus-color);
        }
      }
    }

    .filter {
      p {
        font-size: 12px;
        span {
          font-size: 16px;
        }
      }

      svg {
        cursor: pointer;
      }
    }
  }

  .recruiterMainList {
    width: 100%;
    padding: 40px 55px;
  }

  .card {
    display: flex;
    gap: 10px;
  }

  .pic {
    img {
      height: 80px;
      border-radius: 50%;
    }
  }

  .content {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  .details {
    display: flex;
    flex-direction: column;
  }
`;
