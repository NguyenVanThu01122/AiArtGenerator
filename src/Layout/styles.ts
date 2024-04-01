import Box from "@mui/material/Box";
import styled from "styled-components";

export const WrapperLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const StyledBox = styled(Box)<{ mode: any }>`
  display: flex;
  background-color: ${({ mode }) =>
    mode === "dark" ? "rgb(9, 9, 23)" : "blue"};
`;

export const BoxContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  .close-box {
    width: calc(100% - 120px) !important;
  }
`;

export const MainContent = styled.div`
  width: calc(100% - 280px);
  @media screen and (max-width: 768px) {
    width: 100vw !important;
  }
`;

export const ParentContent = styled.div`
  height: calc(100vh - 75px);
`;
