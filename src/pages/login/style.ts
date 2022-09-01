import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #000;

  .buttonBack {
    visibility: hidden;
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
    background-color: #bf90dc;
    border-radius: 10px 10px 0px 0px;
    margin-bottom: 10px;
    margin-top: 20px;
    color: #000;
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
  @media (min-width: 200px) {
    height: 100vh;
  }
  @media (min-width: 900px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .buttonBack {
      visibility: visible;
      width: 80px;
      height: 24px;
      text-decoration: none;
      margin-bottom: 20px;
      color: #f8f9fa;
      border: 1px solid #f8f9fa;
      border-radius: 4px;
      text-align: center;
      padding: 4px;
      font-size: 14px;
      font-weight: 600;
    }

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
      margin: 0px;
    }

    .logoLinke2 {
      display: flex;
      width: 320px;
      height: 100px;
      margin-left: 20px;
    }

    h3 {
      visibility: visible;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 80px;
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
    .buttonBack {
      width: 80px;
      height: 24px;
      margin-left: 12%;
    }

    .div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .logoLinke2 {
      width: 300px;
      height: 80px;
      margin-left: 40px;
    }

    h3 {
      visibility: visible;
      font-size: 18px;
      font-weight: 600;
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
    width: 200px;
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
  /* height: 26px; */

  label {
    color: #f8f9fa;
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

    background-color: #f8f9fa;

    box-sizing: border-box;
    border: 1px solid #f8f9fa;
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

    background-color: #f8f9fa;

    border: 1px solid #f8f9fa;
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
    font-size: 10px;
    font-weight: 600;
  }

  .buttonLogin {
    width: 120px;
    height: 40px;
    margin-left: 100px;
    margin-top: 20px;
    background: #bf90dc;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
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

    select {
      width: 300px;
      height: 38px;
    }
  }
`;
