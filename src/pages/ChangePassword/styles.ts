import { Form } from "antd";
import styled from "styled-components";

export const WrapperChangePassword = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  color: white;
  overflow-y: auto;
  display: flex;
`;

export const ItemImage = styled.div`
  width: 50%;
  padding: 20px;
  color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 60%;
  }
  .contents {
    & > div:first-child {
      color: var(--noble-black-0, #fff);
      font-size: 24px;
      font-weight: 500;
      line-height: 150%;
      margin: 24px 0px;
    }
    .last-content {
      & > div:first-child {
        color: var(--noble-black-0, #fff);
        font-size: 18px;
        font-weight: 700;
        line-height: 100%;
        margin-bottom: 8px;
      }
      & > div:last-child {
        color: rgb(194, 255, 234);
        font-size: 14px;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 0.122px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FormChangePassword = styled(Form)`
  color: white;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  .parent-form {
    width: 500px;
    .title {
        margin-bottom: 20px;
      text-align: center;
      div {
        font-size: 40px;
        font-weight: bold;
      }
    }
    .title-input {
      /* color: var(--noble-black-300, #9b9c9e); */
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.15px;
      margin-bottom: 16px;
    }
    .input {
      height: 46px;
      color: white;
      border: none;
      background-color: #1c1c2c;
      &::placeholder {
        color: gray;
        font-style: italic;
      }
      &:hover {
        outline: 1px solid violet;
      }
      &:focus {
        outline: 1px solid skyblue;
      }
    }
    .btn {
      width: 100%;
      color: white !important;
      font-weight: bold;
      font-size: large;
      border: none;
      height: 46px;
      background: linear-gradient(
        217deg,
        rgb(226, 80, 229) 0%,
        rgb(75, 80, 230) 100%
      );
      &:hover {
        filter: brightness(0.6);
      }
    }
    .item-back {
      width: max-content;
      margin: auto;
      margin-top: 50px;
      display: flex;
      gap: 15px;
      cursor: pointer;
      div {
        font-weight: bold;
      }
    }
    .visionlab {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 100%;
      font-size: 16px;
      font-style: italic;
      font-weight: 400;
      line-height: 20px;
      text-align: center;
      color: rgb(102, 112, 133);
    }
  }
`;
