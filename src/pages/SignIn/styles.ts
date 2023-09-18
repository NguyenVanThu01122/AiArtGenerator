import { Form } from "antd";
import styled from "styled-components";

export const WrapperSignIn = styled.div`
  width: calc(100%-50%);
  height: 100vh;
  display: flex;
  align-items: center;
  gap: 40px;
  background-color: black;
  padding-left: 35px;
`;

export const ItemSignIn = styled.div`
  width: 100%;
  text-align: center;
  padding: 50px 100px;
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
      width: 11%;
      height: 11%;
      padding: 10px;
      cursor: pointer;
      border-radius: 50%;
    }
    .icon-google {
      background-color: white;
    }
    .icon-discord {
      background-color: rgb(88, 101, 242);
    }
    .icon-facebook {
      background-color: rgb(24, 119, 242);
    }
  }
  .group-span {
    display: flex;
    justify-content: center;
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
`;

// css Form đăng nhập
export const FormSignIn = styled(Form)`
  margin-top: 35px;
  // class input password (phần conten)
  .ant-input-affix-wrapper > input.ant-input {
    background-color: rgb(13, 18, 32);
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
    background-color: rgb(13, 18, 32);
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
      letter-spacing: 4px; //xác định khoảng cách giữa các ký tự trong văn bản
    }
  }
  & > div:last-child {
    color: gray;
  }
`;
// export const FormSignIn = styled(Form)`
//   margin-top: 35px;
//   .custom-input-name {
//     display: flex;
//     gap: 16px;
//     .first-name {
//       width: 30%;
//     }
//     .last-name {
//       width: 70%;
//     }
//   }
//   .custom-input {
//     height: 45px;
//   }
// `;
