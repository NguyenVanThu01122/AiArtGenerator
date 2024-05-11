import FormControl from '@mui/material/FormControl/FormControl'
import styled, { css } from 'styled-components'

export const WrapperRegister = styled.div`
  overflow-y: auto;
  height: 100vh;
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%);
  .custom-dialog {
    background-color: red;
  }
`

export const ItemSidebar = styled.div`
  width: 53%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ContainerRegister = styled.div<{ animate: boolean }>`
  height: 100%;
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url('https://melkior-nguyen.github.io/Portfolio/static/media/bg2.e6fe0abcb2a72bd51eee.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  ${({ animate }) =>
    animate &&
    css`
      animation: signInAnimation 1s linear;
      @keyframes signInAnimation {
        from {
          transform: rotateY(180deg);
        }
        to {
          transform: rotateY(0deg);
        }
      }
    `}

  @media screen and (max-width: 768px) {
    width: 100%;
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
`

export const BoxContent = styled.div`
  width: 560px;
  height: 650px;
  padding: 20px;
  box-shadow: 0px 0px 20px 2px gray;
  border: 1px solid gray;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px !important;
  }
  &::-webkit-scrollbar {
    width: 3px !important;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent !important; //Màu của vùng cuộn
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
`

export const SignUpOptions = styled.div`
  .logo-login {
  }
`

export const GroupImageGeneral = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0px;
  & img {
    width: 50px;
    height: 50px;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
    &:hover {
      /* box-shadow: 0 0 20px 5px violet; */
      transform: scale(1.2);
      background-color: #03e9f4;
      box-shadow:
        0 0 5px #03e9f4,
        0 0 25px #03e9f4,
        0 0 50px #03e9f4,
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
`

export const StyledFormControl = styled(FormControl)`
  height: 250px;
  overflow-y: auto;
  padding: 0px 10px;
  .css-17vbkzs-MuiFormControl-root-MuiTextField-root {
    margin-bottom: 0px;
  }
  .MuiOutlinedInput-input {
    color: white;
    padding: 14px;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%) !important;
  }
  .custom-label {
    color: gray;
    font-style: italic;
  }
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

  @media screen and (max-width: 768px) {
    padding-top: 0px;
  }
`

export const OptionSubmit = styled.div`
  margin-top: 20px;
  & > div:last-child {
    color: gray;
  }
`

export const SubmitRegister = styled.div`
  height: 50px;
  width: 96%;
  margin: auto;
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
    box-shadow:
      0 0 5px #03e9f4,
      0 0 25px #03e9f4,
      0 0 50px #03e9f4,
      0 0 600px #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
`

export const OptionLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  margin: 15px 0px 5px 0px;

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
    &:hover {
      color: red;
    }
  }
`

export const RedirectLogin = styled.div`
  animation: signInAnimation 1s linear;
  @keyframes signInAnimation {
    from {
      transform: rotateY(180deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
`
