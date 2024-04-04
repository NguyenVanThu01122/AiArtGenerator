import { Box } from "@mui/material";
import styled from "styled-components";
import { movingGradient } from "../Sidebar/styles";
export const WrapperHeader = styled.div`
  position: relative;
  height: 75px;
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgb(30, 36, 49);
  .custom-button {
    width: 10%;
    color: white !important;
    background: linear-gradient(
      190deg,
      rgb(226, 80, 229) 0%,
      rgb(75, 80, 230) 100%
    );
    font-weight: bold;
    border: none;
    &:hover {
      filter: brightness(0.6);
    }
  }
  @media screen and (max-width: 768px) {
    .custom-button {
      font-size: 12px;
    }
    background: radial-gradient(black, transparent);
  }
`;

export const MobileLogoCreator = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    -webkit-text-fill-color: transparent; //Chữ trong suốt
    font-weight: 900;
    letter-spacing: 4px;
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
  }
`;

export const DisPlayPathName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: var(--text-color);
  .ic-close {
    cursor: pointer;
    color: var(--text-color);
    border-radius: 20%;
    background-color: rgb(9, 9, 23);
  }
  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;

export const PathNameItem = styled.div`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  gap: 10px;
  color: var(--text-color);
`;

export const PathNameProducts = styled.div`
  & span {
    margin-left: 5px;
    background: linear-gradient(90deg, #f23061 -7.43%, #faa227);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
    font-size: 18px;
    &:hover {
      color: var(--text-color);
      cursor: pointer;
    }
  }
`;

export const BoxAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemModeToggle = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const AccountInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NameUser = styled.div`
  font-weight: 800;
  margin-bottom: 3px;
  color: var(--text-color);
  font-size: 14px;
`;

export const CreditUser = styled.div`
  color: var(--text-color);
  font-size: 14px;
`;

export const ContainerProfile = styled.div`
  .avatar {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: contain;
    padding: 3px;
    border: 2px solid var(--text-color);
    color: transparent;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      width: 40px;
      height: 40px;
      .avatar {
      }
    }
  }
`;

export const BoxProfile = styled(Box)`
  z-index: 100;
  position: absolute;
  bottom: -280%;
  right: 0px;
  width: 280px;
  border: 1px solid gray;
  background-color: rgb(9, 9, 23);
  border-radius: 8px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 768px) {
  }
`;

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  .avatar {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    color: transparent;
    @media screen and (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const SelectItem = styled.div`
  padding: 20px;
  border-top: 1px solid rgb(30, 36, 49);
`;

export const MenuItem = styled.div`
  padding: 10px;
  font-weight: bold;
  color: var(--text-color);

  &:hover {
    cursor: pointer;
    border-radius: 8px;
    color: rgb(253, 169, 45);
    background-color: rgba(253, 169, 45, 0.08);
  }
`;
