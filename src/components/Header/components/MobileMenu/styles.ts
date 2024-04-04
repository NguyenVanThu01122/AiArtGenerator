// import { Drawer } from "antd";
import { Box, Drawer } from "@mui/material";
import styled from "styled-components";

export const WrapperMenu = styled.div`
  .ic-menu {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      color: var(--text-color);
      width: 28px;
      height: 28px;
    }
  }
`;

export const ItemDrawer = styled(Drawer)`
  display: none;
  gap: 50px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const StyledBox = styled(Box)`
  height: 100vh;
  padding: 20px;
  background: var(--background-color);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  .icon-angles {
    color: var(--text-color);
    font-size: 20px;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const SectionMenu = styled.div`
  flex: 1;
  padding: 10px 0px 10px 0px;
  margin-top: 10px;
  .section-products {
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > div:first-child {
      color: white;
      margin: 18px 0px;
      font-size: 16px;
      font-weight: 300;
    }
  }
  .border-item {
    /* background: rgb(36, 36, 60); */
    background-color: rgba(373, 169, 45, 0.09);
    border-radius: 5px;
    color: orange !important;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-bottom: 18px;
  font-size: 16px;
  &:hover {
    border-radius: 5px;
  }
  img {
    background: rgb(36, 36, 60);
    border-radius: 50%;
    padding: 10px;
  }
`;

export const ContentMenu = styled.span`
  color: var(--text-color);
  font-size: large;
  font-weight: bold;
`;

export const StyledDrawerMenu = styled(Drawer)`
  display: none;
  gap: 50px;
  padding: 20px;
  .css-4t3x6l-MuiPaper-root-MuiDrawer-paper {
    background-color: rgb(9, 9, 23);
    padding: 30px 20px;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
