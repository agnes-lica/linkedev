import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  font-family: "roboto", sans-serif;

  .mainContent {
    width: 80%;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        nav {
          width: 100%;
          height: 2.5rem;

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
`;
