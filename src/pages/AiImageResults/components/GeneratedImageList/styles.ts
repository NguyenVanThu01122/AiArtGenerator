import styled from "styled-components";
import ImageGeneral from "../../../../components/Ui/image";

export const ContainerImage = styled.div`
  position: relative;
  overflow-y: auto;
  padding: 0px 10px;
  margin: 20px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  height: 520px;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px !important;
  }
  &::-webkit-scrollbar {
    width: 4px !important;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent !important; //Màu của vùng cuộn
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
  }
`;
export const StyledImageGeneral = styled(ImageGeneral)`
  width: 95%;
  height: 95%;
  object-fit: cover;
  position: relative;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    filter: brightness(0.4);
    ~ div {
      opacity: 1; /* Chọn tất cả các div ngay sau thẻ img */
    }
  }
  @media screen and (max-width: 768px) {
  }
`;

export const ClickToView = styled.div`
  font-size: 14px;
  opacity: 0;
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: opacity 0.3s ease;
  transform: translate(-50%, -50%);
  background: linear-gradient(90deg, #f23061 -7.43%, #faa227);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  width: 90%;
  text-align: center;
  &:hover {
    cursor: pointer;
    opacity: 1;
    ${StyledImageGeneral} {
      filter: brightness(0.4) !important;
    }
  }
`;

export const ResultImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SelectItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 50px;
  height: 50px;
`;

export const StyledInputCheckbox = styled.input`
  height: 25px;
  width: 25px;
`;
