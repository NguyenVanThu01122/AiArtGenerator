import { Form, Modal } from "antd";
import styled from "styled-components";

export const WrapperRegister = styled.div`
  overflow-y: auto;
  height: 100vh;
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%);
`;

// css ỉtem đăng ký
export const ItemFormSignUp = styled(Form)`
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 50px 95px;
  background-image: url("https://melkior-nguyen.github.io/Portfolio/static/media/bg2.e6fe0abcb2a72bd51eee.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  /* background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%); */
  animation: signUpAnimation 1s linear;
  @keyframes signUpAnimation {
    from {
      transform: rotateY(180deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
  & > div:nth-child(2) {
    font-size: 45px;
    font-weight: bold;
    color: white;
  }
  .group-img {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 30px 0px;
    & img {
      width: 55px;
      height: 55px;
      padding: 10px;
      cursor: pointer;
      border-radius: 50%;
      transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
      &:hover {
        /* box-shadow: 0 0 20px 5px violet; */
        transform: scale(1.2);
        background-color: #03e9f4;
        box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
          0 0 600px #03e9f4;
        -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
      }
    }
    .icon-google {
      background-color: white;
      box-shadow: 0 0 30px 5px gray;
    }
    .icon-discord {
      background-color: rgb(88, 101, 242);
      box-shadow: 0 0 20px 5px rgb(88, 101, 242);
    }
    .icon-facebook {
      background-color: rgb(24, 119, 242);
      box-shadow: 0 0 20px 5px rgb(24, 119, 242);
    }
  }
  .group-span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0px 10px;
    & span {
      display: block;
    }
    & > span:first-child {
      border-bottom: 1px solid gray;
      width: 100%;
    }
    & > span:nth-child(2) {
      color: white;
    }
    & > span:last-child {
      border-bottom: 1px solid gray;
      width: 100%;
    }
  }
  .submit-register {
    width: 96%;
    margin: auto;
    margin-top: 10px;
    border-radius: 8px;
    padding: 10px 0px;
    color: white;
    background-color: blueviolet;
    font-size: 20px;
    cursor: pointer;
    letter-spacing: 3px; //xác định khoảng cách giữa các ký tự trong văn bản
    transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
    &:hover {
      transform: scale(0.9);
      color: #12141d;
      background-color: #03e9f4;
      box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
        0 0 600px #03e9f4;
      -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    }
  }
  .item-login {
    display: flex;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    margin: 18px;

    & > div:first-child {
      color: gray;
      font-size: 16px;
    }
    & > div:last-child {
      color: blueviolet;
      font-style: italic;
      font-size: large;
      font-weight: 600;
      letter-spacing: 4px; //xác định khoảng cách giữa các ký tự trong văn bản
    }
    .signInAnimation {
      animation: signInAnimation 1s linear;
      @keyframes signInAnimation {
        from {
          transform: rotateY(180deg);
        }
        to {
          transform: rotateY(0deg);
        }
      }
    }
  }
  & > div:last-child {
    color: gray;
  }
  @media screen and (max-width: 768px) {
    padding: 15px;
    .submit-register {
      margin-top: 0px;
    }
    .group-img {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

// css Form đăng ký
export const FormSignUp = styled(Form)`
  height: 220px;
  margin-top: 20px;
  overflow-y: auto;
  padding: 10px;
  // css thanh scroll
  &::-webkit-scrollbar-thumb {
    background-color: violet; /* Màu của nút kéo */
    border-radius: 5px; /* Bo góc của nút kéo */
  }
  &::-webkit-scrollbar {
    width: 2px; /* Độ rộng của thanh cuộn */
  }
  &::-webkit-scrollbar-track {
    /* background-color: #cccccc; Màu của vùng cuộn */
  }
  // class text error ant
  .ant-form-item .ant-form-item-explain-error {
    color: #ff4d4f;
    display: flex;
    justify-content: flex-start;
    font-style: italic;
    font-size: 16px;
  }
  .custom-input-name {
    display: flex;
    gap: 16px;
    .first-name {
      width: 30%;
    }
    .last-name {
      width: 70%;
    }
  }
  // class input password (phần conten)
  .ant-input-affix-wrapper > input.ant-input {
    /* background-color: rgb(13, 18, 32); */
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%);
    color: white;
    &::placeholder {
      color: gray;
      font-style: italic;
    }
  }
  // class ant icon hiện, ẩn password
  .anticon svg {
    color: gray;
    font-size: 18px;
  }
  .custom-input {
    color: white;
    height: 50px;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%);
    border: none;
    &::placeholder {
      color: gray;
      font-style: italic;
    }
    &:hover {
      box-shadow: 0 0 0 1px #6366f1;
    }
    &:focus {
      box-shadow: 0 0 0 1px violet !important;
    }
  }
  .border-violet {
    box-shadow: 0 0 0 1px violet;
  }
  @media screen and (max-width: 768px) {
    padding-top: 0px;
  }
`;

export const ModalSentEmail = styled(Modal)`
  .ant-modal-content {
    height: 500px;
  }
  // class ant
  .ant-modal-content {
    background-color: rgb(9, 9, 23);
  }
  // class icon x ant
  .ant-modal-close {
    transition: transform 0.6s ease;
    &:hover {
      transform: scale(1.6);
      cursor: pointer;
    }
    .anticon svg {
      color: white;
      &:hover {
        color: red;
      }
    }
  }
  .forgot-password {
    width: 80%;
    margin: auto;
    .title {
      text-align: center;
      & > div:last-child {
        font-weight: bold;
        font-size: 28px;
        color: white;
      }
    }
    .select-item {
      margin: 40px 0px;
      & > div:first-child {
        color: white;
        font-size: 18px;
      }
      .custom-input {
        width: 100%;
        color: white;
        margin: 20px 0px;
        padding: 10px;
        height: 46px;
        border: none;
        border-radius: 5px;
        background: radial-gradient(
          ellipse at bottom,
          #1b2735 0%,
          #12141d 100%
        );
        &:hover {
          outline: 1px solid skyblue;
        }
        &:focus {
          outline: 1px solid violet;
        }
        &::placeholder {
          color: gray;
          font-style: italic;
        }
      }
      /* .custom-password {
        input:focus-within {
          outline: 1px solid violet !important;
        }
      } */
      .custom-button {
        width: 100%;
        height: 40px;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 18px;
        background: linear-gradient(
          217deg,
          rgb(226, 80, 229) 0%,
          rgb(75, 80, 230) 100%
        );
        &:hover {
          filter: brightness(0.6);
        }
      }
      .error-email {
        margin-bottom: 5px;
        font-size: 14px;
        font-style: italic;
        color: red !important;
      }
    }
    .back {
      cursor: pointer;
      display: flex;
      justify-content: center;
      gap: 15px;
      & > div:last-child {
        color: white;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
`;

export const ItemVerifyEmail = styled.div`
  margin-top: 50px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  & > div:nth-child(2) {
    font-size: 40px;
    font-weight: bold;
  }
  & > div:nth-child(4) {
    span {
      margin-left: 4px;
      cursor: pointer;
      font-size: 17px;
      font-weight: bold;
      font-style: italic;
    }
  }
  .item-back {
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    gap: 15px;
    & > div:last-child {
      color: white;
      font-size: 18px;
      font-weight: bold;
    }
  }
  & > div:last-child {
    margin-top: 50px;
    width: 80%;
    color: gray;
    padding-bottom: 5px;
    border-bottom: 1px solid gray;
  }
`;
