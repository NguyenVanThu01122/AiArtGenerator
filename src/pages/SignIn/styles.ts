import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import styled from 'styled-components'
import { movingGradient } from '../../components/Sidebar/styles'

export const WrapperSignIn = styled.div`
  height: 100vh;
  overflow-y: auto;
  display: flex;
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
`

export const BoxSignIn = styled.div`
  height: 100%;
  width: 47%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://melkior-nguyen.github.io/Portfolio/static/media/bg2.e6fe0abcb2a72bd51eee.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  animation: signInAnimation 1s linear;
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
        box-shadow:
          0 0 5px #03e9f4,
          0 0 25px #03e9f4,
          0 0 50px #03e9f4,
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
    width: 100%;
    .group-img {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`

export const ContentSignIn = styled.div`
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
    padding: 20px 10px;
  }
`

export const SignInOptions = styled.div``

export const TitleForm = styled.div`
  font-size: 35px;
  font-weight: 800;
  -webkit-text-fill-color: transparent; //Chữ trong suốt
  font-family: Barlow, sans-serif;
  animation: ${movingGradient} 10s linear infinite;
  background: -webkit-linear-gradient(
      300deg,
      rgb(0, 167, 111) 0%,
      rgb(255, 171, 0) 25%,
      rgb(0, 167, 111) 50%,
      rgb(255, 171, 0) 75%,
      rgb(0, 167, 111) 100%
    )
    0% 0% / 400% text; //Màu chữ

  @media screen and (max-width: 768px) {
    font-size: 25px;
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

export const GroupSpan = styled.span`
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
    width: 120px;
  }
  & > span:last-child {
    border-bottom: 1px solid gray;
    width: 100%;
  }
`

export const StyledFormControl = styled(FormControl)`
  padding: 0px 10px;
  border: 1px solid red;
  .css-17vbkzs-MuiFormControl-root-MuiTextField-root {
    margin-bottom: 0px;
  }
  /* Sử dụng props của Material UI */
  .MuiOutlinedInput-input {
    color: white;
    padding: 14px;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%) !important;
  }
  /* Thêm class custom */
  .custom-label {
    color: gray;
    font-style: italic;
  }
`

export const StyledFormGroup = styled.div`
  height: 180px;
  overflow-y: auto;
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
`

export const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  border: 1px dashed gray;
  @media screen and (max-width: 768px) {
  }
`

export const ForgotPassword = styled.div`
  font-size: 17px;
  color: #6366f1;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: orangered;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const SubmitItem = styled.div`
  margin-top: 20px;

  & > div:last-child {
    color: gray;
  }
`

export const SubmitSignIn = styled.div`
  height: 50px;
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
    box-shadow:
      0 0 5px #03e9f4,
      0 0 25px #03e9f4,
      0 0 50px #03e9f4,
      0 0 600px #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
`

export const RedirectSignOut = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  margin: 15px;
  & > div:first-child {
    color: gray;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    margin: 20px 0px;
  }
`

export const Register = styled.div`
  color: blueviolet;
  font-style: italic;
  font-size: large;
  font-weight: 600;
  letter-spacing: 3px; //xác định khoảng cách giữa các ký tự trong văn bản
  &:hover {
    color: red;
  }
`

export const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    color: white;
    margin-left: 15px;
    font-size: 18px;
  }
  .MuiSvgIcon-root {
    font-size: 28px;
    color: gray;
  }
  @media screen and (max-width: 768px) {
    .MuiFormControlLabel-label {
      font-size: 10px;
      margin-left: 0px;
    }
    .MuiSvgIcon-root {
      font-size: 26px;
      color: gray;
    }
  }
`
