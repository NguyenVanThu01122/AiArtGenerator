import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
  }
`;

export const ChangeImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  .icon-cancel {
    cursor: pointer;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 30px;
    z-index: 6;
    &:hover {
      scale: 1.4;
    }
  }
`;

export const UploadedImage = styled.div`
  position: relative;
  margin: auto;
  height: 400px;
  width: 400px;
  border-radius: 8px;
  background: rgb(35, 32, 44);
  &:hover {
    .image {
      filter: brightness(0.5);
    }
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }

  &:hover {
    .image {
      filter: brightness(0.5);
    }
    ${ChangeImage} {
      display: flex;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    .image {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ChangeItem = styled.div`
  margin: auto;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e8e8e8;
  position: absolute;
  gap: 5px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.7);
    transition: 0.3s;
  }

  .input-upload {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    opacity: 0;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const ChangePhoto = styled.div`
  color: black;
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

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const IconUpload = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(217deg, #e250e5 0%, #4b50e6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ContentUpload = styled.div`
  color: var(--text-color);
  font-weight: bold;
  margin: 8px 0px;
`;

export const FormatFile = styled.div`
  color: var(--text-color);
  text-align: center;
  font-size: 15px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const CustomInput = styled.input`
  cursor: pointer;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 10000;
  background-color: rgb(33, 43, 54);
`;
