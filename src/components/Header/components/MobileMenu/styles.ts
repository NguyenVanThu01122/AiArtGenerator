// import { Drawer } from "antd";
import { Drawer } from "@mui/material";
import styled from "styled-components";

export const WrapperMenu = styled.div`
  .ic-menu {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      color: white;
      font-size: 22px;
    }
  }
`;

export const ItemDrawer = styled(Drawer)`
  display: none;
  gap: 50px;
  background-color: rgb(9, 9, 23) !important;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon-angles {
    color: white;
    font-size: 20px;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const SectionMenu = styled.div`
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
    background: rgb(36, 36, 60);
    border-radius: 5px;
    box-shadow: 0 0 2px 1px violet;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-bottom: 15px;
  font-size: 16px;
  &:hover {
    background: rgb(36, 36, 60);
    border-radius: 5px;
  }
  img {
    /* width: 35px; */
    background: rgb(36, 36, 60);
    border-radius: 50%;
    padding: 10px;
  }

  .ic-avatar {
    color: white;
    font-size: 20px;
    background: rgb(36, 36, 60);
    border-radius: 50%;
    padding: 10px;
  }
`;

export const ContentMenu = styled.span`
  color: white;
`;

export const StyledDrawerMenu = styled(Drawer)`
  display: none;
  gap: 50px;
  .css-4t3x6l-MuiPaper-root-MuiDrawer-paper {
    background-color: rgb(9, 9, 23);
    padding: 30px 20px;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
