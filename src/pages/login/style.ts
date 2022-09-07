import styled from "styled-components";

interface Props {
  page: boolean;
}

export const Container = styled.div<Props>`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--gray-color-0);
  display: ${(props) => {
    if (props.page) return "block";
    else return "none";
  }};

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

  .divLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imgLogin {
    display: none;
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
    visibility: hidden;
  }

  .logoLinke2 {
    display: none;
  }

  @media (min-width: 900px) {
    display: ${(props) => {
      if (props.page) return "flex";
      else return "none";
    }};
    flex-direction: column;
    justify-content: flex-end;

    .div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-right: 20px;
    }
    .divImgDesktop {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .logoLinke2 {
      display: flex;
      width: 350px;
      height: 120px;
      margin-left: 20px;
    }

    h3 {
      visibility: visible;
      color: var(--gray-color-3);
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 60px;
      margin-left: 20px;
    }

    .imgLogin {
      display: flex;
      width: 580px;
      margin-top: 80px;
    }

    .divLogin {
      margin-right: 20px;
      display: flex;
      justify-content: center;
    }
  }

  @media (min-width: 1100px) {
    .div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    h3 {
      margin-bottom: 10px;
      margin-left: 40px;
    }

    .imgLogin {
      display: flex;
      width: 640px;
      margin-top: 10px;
    }

    .divLogin {
      margin-right: 40px;
    }

    h2 {
      width: 300px;
      height: 38px;
      font-size: 14px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  .logoLinke {
    width: 258px;
    margin-top: 20px;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

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
  }

  .buttonLogin:hover {
    background-color: var(--primary-focus-color);
  }

  @media (min-width: 900px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1100px) {
    width: 300px;

    input {
      width: 300px;
      height: 38px;
    }
  }
`;
