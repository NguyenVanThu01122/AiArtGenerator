import styled from "styled-components";
import { movingGradient } from "../Sidebar/styles";

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 30px;
  }
  span {
    display: block;
    font-size: 24px;
    font-weight: bold;
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
