import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Carousel from "react-material-ui-carousel";
import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

export const ChooseStyleTitle = styled.div`
  color: var(--text-color);
  font-weight: 800;
  font-size: 17px;
`;

export const TextContent = styled.div`
  color: gray;
  margin-top: 10px;
  font-size: 13px;
  font-weight: bold;
`;

export const StyledCarousel = styled(Carousel)`
  height: 150px;
  @media screen and (max-width: 768px) {
    .css-1g04gm2-MuiButtonBase-root-MuiIconButton-root {
      display: none !important;
    }
  }
`;
export const StyledFontAwesomeIconLeft = styled(FontAwesomeIcon)<{
  isScrollAtStart?: boolean;
}>`
  font-size: 25px;
  font-weight: bold;
  display: ${(props) => (props.isScrollAtStart ? "none" : "block")};
  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;

export const StyledFontAwesomeIconRight = styled(FontAwesomeIcon)<{
  isScrollAtEnd: boolean;
}>`
  font-weight: bold;
  font-size: 25px;
  display: ${(props) => (props.isScrollAtEnd ? "none" : "block")};
  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;

export const CustomGrid = styled(Grid)`
  display: flex;
  align-items: center;
  height: 150px;
  overflow-x: auto;
  .item-none {
    padding: 12px;
    position: relative;
    background-color: #1a1d21;
    width: 100px;
    height: 100px;
    margin-right: 10px;
    margin-left: 30px;
    border-radius: 10px;
    & img {
      width: 70px;
      height: 70px;
    }
  }
  .active-none {
    outline: 2px solid violet !important;
  }
  .active-style {
    filter: brightness(1);
    img {
      border: 2px solid violet !important;
    }
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px !important;
  }
  &::-webkit-scrollbar {
    margin: 0px 50px;
    width: 4px !important;
    height: 4px;
    background-color: rgb(26, 29, 33);
  }
  &::-webkit-scrollbar-track {
    background-color: transparent !important; //Màu của vùng cuộn
  }
  &::-webkit-scrollbar-thumb {
    width: 350px;
    background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
  }
  @media screen and (max-width: 768px) {
    &::-webkit-scrollbar-thumb {
      width: 150px;
      background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
    }
    .item-none {
      margin-left: 10px;
    }
  }
`;

export const None = styled.div`
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5px;
`;

export const CustomPaper = styled(Paper)`
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 12px;
  margin-right: 10px;
  pointer-events: all; // mở sự kiện click
  filter: brightness(0.6);
  border: 0.5px solid gray;
  .image-ai {
    width: 100px !important;
    height: 100px !important;
    cursor: pointer;
    object-fit: contain;
    border-radius: 12px;
    border: 0.5px solid gray;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const NameStyle = styled.div`
  left: 0;
  width: calc(100% - 10px);
  z-index: 100;
  color: white;
  position: absolute;
  bottom: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 12px;
`;
