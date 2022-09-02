import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;

  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;

  .divImgPage {
    display: none;
  }

  .logoLinke2 {
    width: 250px;
    height: 76px;
    margin-top: 20px;
  }

  h2 {
    position: absolute;
    top: 126px;

    font-size: 18px;
    font-weight: 500;
    word-break: break-word;
    width: 220px;
    text-align: center;

    color: #ffffff;
  }

  h3 {
    position: relative;
    top: 220px;

    font-size: 16px;
    font-weight: 500;

    color: #000;

    word-break: break-word;
    width: 224px;
    text-align: center;
  }

  h4 {
    position: relative;
    top: 265px;

    font-size: 18px;
    font-weight: 500;
    word-break: break-word;
    width: 224px;
    text-align: center;

    color: #000;
  }

  .vector {
    width: 100%;
    margin-top: 60px;
  }

  @media (min-width: 480px) {
    h2 {
      top: 134px;
      font-size: 20px;
    }

    h3 {
      position: absolute;
      top: 389px;
      width: 236px;
      font-size: 20px;
    }

    h4 {
      top: 400px;
      font-size: 20px;
    }
    .vector {
      width: 100%;
      margin-top: 106px;
    }
  }

  @media (min-width: 700px) {
    h2 {
      top: 174px;
      font-size: 20px;
    }

    h3 {
      position: absolute;
      top: 450px;
      width: 288px;
      font-size: 20px;
    }

    h4 {
      top: 490px;
      font-size: 20px;
      width: 300px;
    }
    .vector {
      width: 100%;
      margin-top: 200px;
    }
  }

  @media (min-width: 900px) {
    .div {
      border: solid red;
    }
    .divImgPage {
      display: block;
      /* display: flex;
      flex-direction: column; */
      width: 300px;

      border: yellow solid;
    }

    .divTeste {
      display: none;
    }

    .vector {
      display: none;
    }
  }
`;
