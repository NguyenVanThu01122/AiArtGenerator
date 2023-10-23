import { Form, Modal } from "antd";
import styled from "styled-components";

export const WrapperSignIn = styled.div`
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%);
  .empty-div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
  }
`;

export const ItemSignIn = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 50px 100px;
  background-image: url("https://melkior-nguyen.github.io/Portfolio/static/media/bg2.e6fe0abcb2a72bd51eee.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  animation: signInAnimation 1s linear;

  & > div:nth-child(2) {
    font-size: 45px;
    font-weight: bold;
    color: white;
  }
  .group-img {
    display: flex;
    justify-content: center;
    gap: 25px;
    margin: 35px 0px;
    img {
      width: 55px;
      height: 55px;
      padding: 10px;
      cursor: pointer;
      border-radius: 50%;
      transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
      &:hover {
        transform: scale(1.2);
        background-color: #03e9f4;
        box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
          0 0 600px #03e9f4;
        -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
        //-webkit-box-reflect: dùng để định nghĩa hiệu ứng phản chiếu
        //.below: Đây là hướng của phản chiếu. Trong trường hợp này, "below" nghĩa là phản chiếu sẽ nằm phía dưới phần tử gốc.
        //1px: Đây là độ dài của phản chiếu. Trong trường hợp này, phản chiếu chỉ cao 1 pixel.
        //linear-gradient(transparent, #0005): Đây là một hình dạng phản chiếu mà bạn đang sử dụng. Nó là một dãy màu gradient bắt đầu từ trong suốt (transparent) và kết thúc ở một màu đen có độ trong suốt 0.05 (#0005).
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
  @media screen and (max-width: 768px) {
    padding: 15px;
    .group-img {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

// css Form đăng nhập
export const FormSignIn = styled(Form)`
  margin-top: 30px;
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
  // class text error ant
  .ant-form-item .ant-form-item-explain-error {
    color: #ff4d4f;
    display: flex;
    justify-content: flex-start;
    font-style: italic;
    font-size: 16px;
  }

  .custom-input {
    color: white;
    height: 50px;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%);
    /* background-color: rgb(13, 18, 32); */
    border: none;
    &::placeholder {
      color: gray;
      font-style: italic;
    }
    &:hover {
      box-shadow: 0 0 0 1px #6366f1;
    }
  }
  .border-violet {
    box-shadow: 0 0 0 1px violet;
  }
  .select-item {
    display: flex;
    justify-content: space-between;
    .checkbox {
      margin-bottom: 10px;
      color: gray;
      font-size: 17px;
    }
    & > div:last-child {
      font-size: 17px;
      color: #6366f1;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .submit-signin {
    border-radius: 8px;
    padding: 10px 0px;
    color: white;
    background-color: blueviolet;
    font-size: 20px;
    cursor: pointer;
    letter-spacing: 4px; //xác định khoảng cách giữa các ký tự trong văn bản
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
  .item-register {
    display: flex;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    margin: 25px;
    & > div:first-child {
      color: gray;
      font-size: 16px;
    }
    & > div:last-child {
      color: blueviolet;
      font-style: italic;
      font-size: large;
      font-weight: 600;
      letter-spacing: 3px; //xác định khoảng cách giữa các ký tự trong văn bản
    }
  }
  & > div:last-child {
    color: gray;
  }
  @media screen and (max-width: 768px) {
    .select-item {
      .checkbox {
        /* margin: 0px; */
      }
    }
    .item-register {
      margin: 35px 0px 10px 0px;
      gap: 5px;
      & > div:first-child {
      }
    }
  }
`;

export const ModalForgotPassword = styled(Modal)`
  .ant-modal-content {
    /* height: 500px; */
    @media screen and (max-width: 768px) {
      padding: 15px 0px;
    }
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
        margin-bottom: 20px;
      }
      .custom-input {
        width: 100%;
        color: white;
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
      .border-red {
        outline: 1px solid red !important;
      }
      .custom-button {
        margin-top: 20px;
        width: 100%;
        height: 45px;
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
        &:disabled {
          filter: brightness(0.6);
        }
      }
      .error-email {
        margin-top: 5px;
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
  .ic-logo {
  }

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
