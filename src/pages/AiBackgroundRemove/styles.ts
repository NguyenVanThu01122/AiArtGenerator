import { LoadingButton } from "@mui/lab";
import styled from "styled-components";

export const WrapperAIBackgroundChanger = styled.div`
  padding: 20px 20px 0px 20px;
  width: 100%;
  height: 100%;
  /* background-color: mode; */
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent; //Màu của vùng cuộn
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(217deg, #e250e5, #4b50e6);
    }
  }
  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const BoxResult = styled.div`
  .btn-download {
    width: 200px;
    height: 40px;
    display: block;
    margin: 50px auto;
    border: none;
    color: white !important;
    font-weight: bold;
    font-size: large;
    background: var(
      --linear,
      linear-gradient(182deg, #e250e5 0%, #4b50e6 100%)
    );
    &:hover {
      filter: brightness(0.6);
    }
  }

  @media screen and (max-width: 768px) {
    .back {
      margin-bottom: 30px;
      div {
        font-size: 14px !important;
      }
    }
    .btn-download {
      margin-top: 20px;
      width: 100%;
    }
  }
`;

export const ItemBack = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  margin-bottom: 50px;
  width: max-content;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const ImageResult = styled.div`
  border: 1px solid white;
  margin: auto;
  max-width: 450px;
  background-image: url("https://t3.ftcdn.net/jpg/03/76/74/78/360_F_376747823_L8il80K6c2CM1lnPYJhhJZQNl6ynX1yj.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .img-result {
    width: 100%;
    margin-bottom: -5px;
  }
`;

export const BackGenerate = styled.div`
  color: white;
  font-weight: bold;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 14px !important;
  }
`;

export const BoxUploadImage = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ItemBackgroundChange = styled.div`
  width: 56%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-right: 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;

export const SectionContent = styled.div`
  padding: 13px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 768px) {
    gap: 10px;
    padding: 0px;
    padding-top: 10px;
  }
`;

export const TitlePage = styled.div`
  color: rgb(182, 154, 255);
  font-family: "GT Walsheim Pro", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    div {
      font-size: 21px;
    }
  }
`;

export const TextContent = styled.div`
  position: relative;
`;

export const ContentHeader = styled.div`
  color: rgb(255, 255, 255);
  font-family: "GT Walsheim Pro", san, sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 120%;
  span {
    background: linear-gradient(
      190deg,
      rgb(252, 128, 255) 0%,
      rgb(123, 127, 255) 100%
    );
    -webkit-background-clip: text; /* Sử dụng tiền tố -webkit- cho trình duyệt Safari */
    color: transparent; /* Đặt màu chữ thành trong suốt */
  }
  img {
    position: absolute;
    top: -15px;
    left: 55%;
  }
`;

export const AdditionalInfo = styled.div`
  color: #d2d2d2;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ChangeItem = styled.div`
  width: 25%;
  display: none;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    filter: brightness(0.7);
    transition: 0.3s;
  }
  @media screen and (max-width: 768px) {
    width: 130px;
  }
`;

export const SectionUploadImage = styled.div<{
  fileUpload: any;
  loading: boolean;
}>`
  height: 195px;
  position: relative;
  text-align: center;
  border-radius: 12px;
  background: linear-gradient(
    225deg,
    rgba(108, 63, 164, 0.25) 0%,
    rgba(246, 238, 255, 0.05) 100%
  );
  padding: ${(props) => (props.fileUpload ? "0px" : "35px")};
  border: ${(props) =>
    props.loading && props.fileUpload
      ? "none"
      : props.fileUpload
      ? "2px solid rgb(164, 120, 219)"
      : "2px dashed rgb(164, 120, 219)"};
  &:hover {
    filter: ${(props) => props.fileUpload && "brightness(0.6)"};
    background-color: ${(props) =>
      props.fileUpload ? "rgba(108, 63, 164, 0.25)" : "transparent"};
  }
  @media screen and (max-width: 768px) {
    height: 140px;
    padding: ${(props) => (props.fileUpload ? "0px" : "15px")};
  }
`;

export const Uploaded = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  .img-uploaded {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  &:hover ${ChangeItem} {
    display: block;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 0px;
    .img-uploaded {
      height: 100%;
    }
  }
`;

export const ItemLoading = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  .img-loading {
    height: 100%;
    width: 180px;
    margin: auto;
    object-fit: cover;
  }
`;

export const BoxChange = styled.div<{ loading: boolean }>`
  display: ${(props) => props.loading && "none"} !important;
  .icon-cancel {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    &:hover {
      scale: 1.5;
    }
  }
  @media screen and (max-width: 768px) {
    .icon-cancel {
      top: -15px;
      right: -15px;
      width: 30px;
    }
  }
`;

export const InputFile = styled.input`
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const TextChange = styled.div`
  padding: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  background-color: white;
  gap: 5px;
  @media screen and (max-width: 768px) {
    gap: 0px;
    div {
      font-weight: bold;
      font-size: 12px;
    }
  }
`;

export const ChangePhoto = styled.div``;

export const NotUploaded = styled.div`
  img {
    width: 70px;
    margin-bottom: 10px;
    border-radius: 50%;
    padding: 18px;
    background: var(
      --linear,
      linear-gradient(217deg, #e250e5 0%, #4b50e6 100%)
    );
  }
  @media screen and (max-width: 768px) {
    height: 100px;
    img {
      padding: 10px;
      height: 45px;
      width: 45px;
      object-fit: contain;
    }
  }
`;

export const FormatInfo = styled.div``;

export const TextFormat = styled.div`
  margin-bottom: 6px;
  font-weight: bold;
  color: white;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-weight: 900;
  }
`;

export const FormatFile = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const StyledButton = styled(LoadingButton)<{ fileUpload: any }>`
  height: 50px;
  border: none;
  outline: 0px;
  border-radius: 8px;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  margin-top: 20px !important;
  background: var(--linear, linear-gradient(182deg, #e250e5 0%, #4b50e6 100%));
  color: var(--status-white, #fff) !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 100% !important;
  filter: ${(props) => !props.fileUpload && "brightness(0.5)"};
  &:hover {
    filter: brightness(0.7);
  }
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed !important;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px !important;
    margin-top: 0px !important;
    height: 45px;
    margin-bottom: 12px;
    gap: 10px;
  }
`;

export const ItemImage = styled.div`
  width: 44%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
