import { DialogActions } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import styled from "styled-components";
import DialogCommon from "../../../../components/Ui/dialog";

export const DialogDetailImage = styled(DialogCommon)`
  position: relative;
  .ic-next {
    z-index: 100;
    transition: 0.3s ease;
    opacity: 0;
    position: absolute;
    background: blueviolet;
    color: white;
    width: 15px;
    height: 15px;
    padding: 10px;
    border-radius: 50%;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    cursor: pointer;
    &:hover {
      background-color: orange;
    }
  }
  .ic-prev {
    z-index: 100;
    transition: 0.3s ease;
    opacity: 0;
    width: 15px;
    height: 15px;
    position: absolute;
    background: blueviolet;
    color: white;
    padding: 10px;
    border-radius: 50%;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    cursor: pointer;
    &:hover {
      background-color: orange;
    }
  }
  &:hover {
    .ic-prev,
    .ic-next {
      opacity: 1;
      transition: 0.5s ease;
    }
  }
  @media screen and (max-width: 768px) {
    .css-ypiqx9-MuiDialogContent-root {
      padding: 10px 20px;
    }
  }
`;

export const StyledDialogContent = styled(DialogContent)`
  width: 100%;
  padding: 20px;
  padding-bottom: 0px;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledDialogActions = styled(DialogActions)`
  display: flex;
  gap: 20px;
  .download {
    border: none;
    width: 50%;
    height: 40px;
    color: white !important;
    font-weight: bold;
    background: linear-gradient(217deg, #e250e5 5.32%, #4b50e6 94.32%);
  }
  .copy {
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    font-weight: bold;
    color: white !important;
    border: 2px solid #e250e5;
    background: #242c3d !important;
    &:hover {
      color: red !important;
      border-color: red;
    }
  }
`;

export const ItemImage = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    img {
      margin-top: 30px;
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }
`;

export const ContainerParameter = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  button:hover {
    filter: brightness(0.6);
  }
  @media screen and (max-width: 768px) {
    width: 100% !important;
    margin: auto;
  }
`;

export const ProductParameters = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const HeadParameter = styled.div`
  width: 30%;
`;

export const DetailParameter = styled.div`
  margin-bottom: 20px;
  width: 100%;
  /* height: 200px;   */
`;

export const Label = styled.div`
  font-weight: 600;
`;

export const Value = styled.div`
  color: gray;
  height: 60px;
  overflow: auto;
  word-break: break-all; // Tự động ngắt dòng khi vượt quá chiều rộng
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
  &::-webkit-scrollbar {
    width: 2px !important;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent !important; //Màu của vùng cuộn
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
  }
`;

export const EndParameter = styled.div`
  width: 70%;
`;
