import styled from "styled-components";

interface Props {
  page: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--gray-color-0);
  justify-content: space-between;

  .buttonBack {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--gray-color-0);
    background-color: var(--gray-color-3);
    border: 1px solid var(--gray-color-0);
    text-align: center;

    width: 120px;
    height: 40px;
    margin-top: 10px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
  }

  .buttonBack:hover {
    overflow: hidden;
    background-color: var(--gray-color-0);
    color: var(--gray-color-3);
    border: 1px solid var(--gray-color-3);
  }

  .landingImageContainer {
    display: flex;
    /* width: 100vw; */
    overflow: hidden;
  }

  .landingImage {
    filter: blur(4px);
    object-fit: cover;
  }

  .divLogin {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0vw;
    top: 35vh;
    background-color: rgba(202, 178, 206, 0.9);
    color: white;
  }

  h2 {
    width: 280px;
    height: 36px;
    padding: 10px;
    background-color: var(--primary-2-color);
    border-radius: 10px 10px 0px 0px;
    margin-top: 20px;
    color: var(--gray-color-0);
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }

  h3 {
    font-weight: 200;
  }

  @media (min-width: 900px) {
    display: ${(props) => {
      if (props.page) return "flex";
      else return "none";
    }};
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;

    .div {
      display: flex;
      flex-direction: row;
      
    }

    h3 {
      visibility: visible;
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 60px;
    }

    .divLogin {
      display: flex;
      justify-content: center;
      position: relative;
      top: 0px;
      left: 0px;
      width: 50vw;
      background-color: transparent;
      color: black;
    }

    .landingImage {
      filter: none;
    }
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;

    .div {
      margin: 0px 8.5%;
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    h3 {
      text-align: center;
      margin-bottom: 10px;
    }

    h2 {
      width: 300px;
      height: 38px;
      font-size: 14px;
    }

    .divLogin {
      width: 50vw;
      position: relative;
      top: 0px;
      left: 0px;
    }

    .mainLanding {
      display: flex;
      /* justify-content: space-between; */
    }

    .landingImageContainer {
      display: flex;
    }

    @media screen and (max-height: 768px) {
      .landingImage {
      width: 100%;
      min-width: 50vw;
    }
    }
    
  }
`;

// export const Header = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   .logoLinke {
//     width: 258px;
//     margin-top: 20px;
//   }

//   @media (min-width: 900px) {
//     display: none;
//   }
// `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 280px;

  label {
    color: var(--gray-color-3);
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 4px;
    margin-top: 4px;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12px;
    gap: 8px;

    width: 280px;
    height: 38px;

    background-color: #d0cbd3;

    box-sizing: border-box;
    border: 1px solid var(--gray-color-0);
    border-radius: 4px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #343b41;
  }

  p {
    color: #b9030f;
    font-size: 10px;
    font-weight: 600;
  }

  .back {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .buttonLogin {
    width: 120px;
    height: 40px;
    margin-top: 10px;
    background: var(--primary-2-color);
    border: none;
    color: var(--gray-color-0);
    border-radius: 8px;
    border: 1px solid var(--primary-2-color);
    font-size: 16px;
    font-weight: 500;
    padding: 0px;
  }

  .buttonLogin:hover {
    background-color: var(--primary-focus-color);
  }

  @media (min-width: 900px) {
    margin-bottom: 40px;
  }

  @media (min-width: 900px) {
    width: 300px;

    input {
      width: 300px;
      height: 38px;
    }
  }
`;
