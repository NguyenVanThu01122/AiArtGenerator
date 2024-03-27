import { Box, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  background: #1c1c2c;
  padding: 0px 70px 70px;

  @media screen and (max-width: 768px) {
    padding: 20px 12px;
  }
`;

export const HeaderCreator = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 58%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CreatorHub = styled.div`
  color: #b69aff;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

export const Title = styled.div`
  font-size: 40px;
  color: #fff;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const DescriptionText = styled.div`
  color: #d2d2d2;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%; /* 21px */
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ItemImage = styled.div`
  width: 42%;
  img {
    width: 100%;
  }
`;

export const CarouselItem = styled.div`
  width: 100%;
  position: relative;
  &:hover {
    .icon-next,
    .icon-prev {
      opacity: 1;
    }
  }
  .icon-prev {
    padding: 5px;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
      border-radius: 50%;
      background-color: rgb(16, 16, 31);
    }
  }
  .icon-next {
    padding: 5px;
    opacity: 0;
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    &:hover {
      border-radius: 50%;
      background-color: rgb(16, 16, 31);
    }
  }
`;

export const StyledCarousel = styled(Carousel)`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 768px) {
    .css-1g04gm2-MuiButtonBase-root-MuiIconButton-root {
      display: none !important;
    }
  }
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  height: 250px;
  overflow-x: auto !important;
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
    background-color: #a0c9eb;
    border-radius: 8px;
    /* background: #24c6b2 !important; */
    /* background: linear-gradient(217deg, #e250e5, #4b50e6) !important; */
  }
  @media screen and (max-width: 768px) {
    &::-webkit-scrollbar-thumb {
      width: 150px;
      background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
    }
  }
`;

export const DetailFeedback = styled(Box)`
  padding-left: 50px;
  width: 300px;
  background-color: #1c1c2c !important;
  img {
    width: 22px;
    height: 22px;
  }
`;

export const CommentItem = styled.div`
  color: #d2d2d2;
  font-size: 13px;
  font-weight: 600;
  line-height: 150%;
  margin: 20px 0px;
`;

export const InfoUser = styled.div``;

export const NameUser = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%; /* 21px */
  margin-bottom: 5px;
`;

export const JobUser = styled.div`
  color: #d2d2d2;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;
