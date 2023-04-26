import styled from "styled-components";

interface Props {
  page: boolean;
}

export const Container = styled.div<Props>`
  /* width: 100vw;
  min-height: 100vh; */
  background-color: var(--gray-color-0);
  color: var(--gray-color-3);
  display: ${(props) => {
    if (props.page) return "block";
    else return "none";
  }};

  .buttonBack {
    text-decoration: none;
    color: var(--gray-color-0);
    background-color: var(--gray-color-3);
    border: 1px solid var(--gray-color-0);

    width: 120px;
    height: 40px;
    margin-top: 10px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
  }

  .buttonBack:hover {
    overflow: hidden;
    background-color: var(--gray-color-0);
    color: var(--gray-color-3);
    border: 1px solid var(--gray-color-3);
  }

  .divRegister {
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
    /* justify-content: flex-end; */

    .div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      /* margin-right: 20px; */
    }
    .divImgDesktop {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .logoLinke2 {
      display: flex;
      width: 350px;
      height: 120px;
      /* margin-left: 20px;
      margin-top: 22px; */
    }

    h3 {
    visibility: visible;
    font-size: 18px;
    margin: -12px 0px 0px 20px;
    }

    .imgLogin {
      display: flex;
      width: 580px;
      /* margin: 22px 0px 0px 0px */
    }

    .divRegister {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }

  @media (min-width: 1100px) {
    .div {
      display: flex;
      margin: 0px 8.5%;
      flex-direction: row;
      justify-content: space-between;
      height: 100vh;
    }

    .imgLogin {
      display: flex;
      /* width: 100vh; */
      width: 90.8%;
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
    width: 250px;
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

  select {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12px;
    gap: 8px;

    width: 280px;
    height: 38px;

    background-color: #d0cbd3;

    border: 1px solid var(--gray-color-0);
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #343b41;
  }

  p {
    color: #b9030f;
    font-size: 9px;
    font-weight: 600;
  }

  .back {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .buttonRegister {
    width: 120px;
    height: 40px;
    margin-right: 2px;
    margin-top: 10px;
    border-radius: 8px;
    font-size: 16px;
  }

  .buttonRegister:hover {
    background-color: var(--primary-focus-color);
  }

  @media (min-width: 1100px) {
    margin-bottom: 10px;
    width: 300px;

    label {
      font-size: 10px;
    }

    input {
      width: 300px;
      height: 30px;
    }

    select {
      width: 300px;
      height: 30px;
    }
  }
`;
