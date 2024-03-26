import styled from "styled-components";

export const WrapperPhotoEnhancer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(9, 9, 23);
  display: flex;
  flex-direction: column;
`;
export const SectionContents = styled.div`
  overflow-y: auto;
  flex: 1;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent; //Màu của vùng cuộn
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(217deg, #e250e5, #4b50e6);
  }
`;

export const BoxUploadedImage = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 0px 15px;
  }
`;

export const ItemBack = styled.div`
  z-index: 100 !important;
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 30px 20px;
  cursor: pointer;
  .icon-back {
    color: white;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 0px;
    margin-bottom: 10px;
  }
`;

export const BackGenerate = styled.div`
  color: white;
  font-weight: bold;
  pointer-events: all;
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
    background: linear-gradient(182deg, #e250e5 0%, #4b50e6 100%);
    &:hover {
      filter: brightness(0.6);
    }
  }
  @media screen and (max-width: 768px) {
    .btn-download {
      margin-top: 20px;
      width: 100%;
    }
  }
`;

export const ImageResult = styled.div`
  max-width: 500px;
  height: max-content;
  margin: auto;
  img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

export const NotUploaded = styled.div`
  margin: auto;
  flex: 1;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContentNotUploaded = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const TitlePage = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  color: rgb(255, 255, 255);
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  margin-bottom: 25px;
  & > span {
    background: linear-gradient(
      190deg,
      rgb(252, 128, 255) 0%,
      rgb(123, 127, 255) 100%
    );
    -webkit-background-clip: text; /* Sử dụng tiền tố -webkit- cho trình duyệt Safari */
    color: transparent; /* Đặt màu chữ thành trong suốt */
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
    margin-bottom: 0px;
  }
`;

export const PhotoEnhancer = styled.div`
  position: relative;
  img {
    left: -40px;
    top: -60px;
    position: absolute;
  }
`;

export const TextContent = styled.div`
  text-align: center;
  color: #d2d2d2;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CreateUpload = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .btn-generate {
    width: 30%;
    border: none;
    height: 50px;
    color: white;
    background: linear-gradient(
      190deg,
      rgb(226, 80, 229) 0%,
      rgb(75, 80, 230) 100%
    );
    font-weight: bold;
    margin: 30px;
    &:hover {
      filter: brightness(0.5);
      background: linear-gradient(
        190deg,
        rgb(75, 80, 230) 0%,
        rgb(226, 80, 229) 100%
      );
    }
  }
  @media screen and (max-width: 768px) {
    .btn-generate {
      width: 100%;
    }
  }
`;

export const ChangePhotoItem = styled.div`
  position: relative;
  opacity: 0;
  display: flex;
  gap: 10px;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
  &:hover {
    filter: brightness(0.7);
    transition: 0.3s;
  }
  .input-upload {
    opacity: 0;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;

export const ChangeItem = styled.div<{ loading: boolean }>`
  position: relative;
  background: rgb(35, 32, 44);
  .image-upload {
    width: 500px;
    height: 500px;
    object-fit: contain;
    cursor: pointer;
  }

  &:hover {
    background-color: transparent;
    filter: ${({ loading }) => (loading ? "none" : "brightness(0.8)")};
  }
  &:hover ${ChangePhotoItem} {
    opacity: ${({ loading }) => (loading ? 0 : 1)};
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    .image-upload {
      width: 100%;
      height: 100%;
    }
  }
`;

export const LoadingItem = styled.div`
  width: 101%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: brightness(0.9);
  background-color: rgb(0, 0, 0, 0.9);
  .img-loading {
    border-radius: 50%;
    width: 152px;
    height: 152px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 768px) {
    .img-loading {
      width: 100px;
      height: 100px;
    }
  }
`;

export const ChangePhoto = styled.div``;

export const InputFile = styled.input`
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

export const BoxMainContent = styled.div`
  display: flex;
  flex: 1;
  gap: 90px;
  padding: 0px 22px;
  @media screen and (max-width: 768px) {
    padding: 15px;
    display: block;
  }
`;

export const ContentText = styled.div`
  width: 51%;
  .icon-star {
    position: relative;
    top: 60px;
    left: 125px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    .icon-star {
      margin-top: -90px;
      top: 60px;
      left: 125px;
    }
  }
`;

export const AiPhotoEnhancerText = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  color: rgb(255, 255, 255);
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  margin-bottom: 25px;
  & > span {
    background: linear-gradient(
      190deg,
      rgb(252, 128, 255) 0%,
      rgb(123, 127, 255) 100%
    );
    -webkit-background-clip: text; /* Sử dụng tiền tố -webkit- cho trình duyệt Safari */
    color: transparent; /* Đặt màu chữ thành trong suốt */
  }
  @media screen and (max-width: 768px) {
    font-size: 25px;
    margin-bottom: 0px;
  }
`;

export const DescriptionEnhancer = styled.div`
  text-align: center;
  color: #d2d2d2;
  font-weight: 400;
  line-height: 150%;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const UploadItem = styled.div`
  margin: 22px 0px;
`;

export const UploadImage = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed rgb(164, 120, 219);
  background: linear-gradient(
    225deg,
    rgba(108, 63, 164, 0.25) 0%,
    rgba(246, 238, 255, 0.05) 100%
  );
  border-radius: 12px;
  cursor: pointer;
`;

export const ImageItem = styled.div`
  width: 50px;
  height: 50px;
  background: var(--linear, linear-gradient(217deg, #e250e5 0%, #4b50e6 100%));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const UploadText = styled.div`
  color: white;
  font-weight: bold;
  margin: 8px 0px;
`;

export const FormatUploadFile = styled.div`
  color: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const TermsOfService = styled.div`
  color: #d2d2d2;
  font-weight: 400;
  line-height: 150%;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const ImagePhotoEnhancer = styled.div`
  position: relative;
  width: 46%;
  img {
    width: 100%;
    position: relative;
    z-index: 2;
  }
  & > div:nth-child(2) {
    width: 153.739px;
    height: 151.284px;
    flex-shrink: 0;
    background-color: rgb(255, 117, 216);
    opacity: 0.25;
    filter: blur(45.9788px);
    position: absolute;
    top: 20px;
    left: 0px;
  }
  & > div:nth-child(3) {
    width: 127.974px;
    height: 128.741px;
    flex-shrink: 0;
    background: linear-gradient(217deg, #e250e5 0%, #4b50e6 100%);
    opacity: 0.25;
    filter: blur(30.6525px);
    position: absolute;
    top: 380px;
    right: 40px;
  }
  & > div:last-child {
    width: 163.739px;
    height: 161.284px;
    flex-shrink: 0;
    background-color: rgb(255, 117, 216);
    opacity: 0.35;
    filter: blur(45.9788px);
    position: absolute;
    bottom: 40px;
    right: 35px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
