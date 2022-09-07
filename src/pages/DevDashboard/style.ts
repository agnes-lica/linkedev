import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  font-family: "roboto", sans-serif;

  .mainContent {
    width: 80%;
    max-width: 1300px;
    height: 75%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 0 30px;
    margin: auto;
    margin-top: 3rem;

    .jobContainer {
      background: var(--gray-color-new);

      border: solid 2px rgba(0, 0, 0, 0.15);
      border-radius: 8px;

      padding: 2rem;
      width: 65%;
      max-height: 100%;
      overflow-y: scroll;

      .jobContainerHeader {
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        nav {
          width: 100%;
          height: fit-content;

          margin-top: 1rem;

          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .search {
            height: 2.5rem;
            margin: 0px;

            display: flex;
            flex-direction: row;
            align-items: center;

            input {
              max-height: 100%;
              border: 1px solid #b1b5ba;
              border-radius: 5px 0 0 5px;
              padding: 11px 5px;
            }

            .searchButton {
              width: 66px;
              height: 100%;
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
        }
      }
    }
  }

  .jobList {
    width: 90%;
    height: 85%;

    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .card {
      background-color: #ffffff;
      border: solid 2px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      padding: 1rem;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .right {
        width: 80%;

        display: flex;
        flex-direction: column;
        gap: 5px;

        span {
          font-weight: 200;
          font-size: 12px;
        }
        h2 {
          font-weight: 300;
          font-size: 20px;
        }
        p {
          font-weight: 300;
          font-size: 14px;
        }
      }

      .left {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 5px;

        margin-left: 1rem;

        .textDescription {
          display: flex;
          flex-direction: column;
        }

        span {
          font-size: 12px;
          font-weight: 200;
        }

        span:nth-child(3) {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .more {
          display: none;

          width: fit-content;
          height: fit-content;
        }
      }
    }
  }
  @media (max-width: 1300px) {
    .mainContent {
      width: 70%;
      gap: 2rem;

      .jobContainerHeader {
        nav {
          height: fit-content;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          justify-content: center;
          align-items: center;

          .filter {
            display: flex;
            flex-direction: row;
            justify-content: center;

            width: 100%;
            margin-top: 1rem;
          }
        }
      }
    }
  }

  @media (max-width: 1230px) {
    .jobContainerHeader {
      nav {
        height: fit-content;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        justify-content: center;
        align-items: center;

        .buttons {
          display: flex;
          flex-direction: row;
          justify-content: center;

          width: 100%;
          margin-bottom: 1rem;
        }

        .search {
          display: flex;
          flex-direction: row;
          justify-content: center;

          width: 100%;
        }
      }
    }
    .jobList {
      .card {
        border: none;
        .right {
          span {
            font-size: 10px;
          }

          h2 {
            font-size: 16px;
          }

          p {
            font-size: 12px;
          }
        }
        .left {
          justify-content: flex-start;
          align-items: flex-start;
          .textDescription {
            display: none;
          }
          .more {
            display: block;

            border: none;
            background-color: transparent;
            color: black;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .mainContent {
      width: 100%;

      margin-top: 1rem;
      padding: 0px;

      display: flex;
      justify-content: center;

      .jobContainerHeader {
        border-bottom: solid 2px rgba(0, 0, 0, 0.15);
        padding-bottom: 1rem;
        margin-bottom: 1rem;
      }

      .jobContainer {
        width: 90%;
        height: 100%;

        background-color: transparent;

        border: none;
        margin-bottom: 3rem;

        overflow-y: visible;

        .search {
          input {
            width: 80%;
          }
        }
      }
    }
    .jobContainerHeader {
      nav {
        height: fit-content;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        justify-content: center;
        align-items: center;

        .buttons {
          display: flex;
          flex-direction: row;
          justify-content: center;

          width: 100%;
          margin-bottom: 1rem;
        }

        .search {
          display: flex;
          flex-direction: row;
          justify-content: center;

          width: 100%;
        }
      }
    }
    .jobList {
      display: flex;

      .textDescription {
        display: none;
      }
      .more {
        display: flex;

        width: fit-content;
        height: fit-content;
      }
    }
  }
`;
