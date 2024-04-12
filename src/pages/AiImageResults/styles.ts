import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import styled from "styled-components";
export const WrapperMyAvatars = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 12px 5px 0px 5px;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: brightness(0.9);
  img {
    border-radius: 50%;
    width: 152px;
    height: 152px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 768px) {
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const ContainerImageAi = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MessageNoPhoto = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
`;

export const NoPhoto = styled.div`
  color: red;
  font-size: 20px;
  font-style: italic;
`;

export const SectionPagination = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 100px;
  position: fixed;
  bottom: 10px;
  border-radius: 5px;
  padding: 10px;
  .MuiPaginationItem-root {
    color: white;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
    padding: 6px;
  }
`;

export const StyledPagination = styled(Pagination)`
  & .MuiPaginationItem-root {
    width: 35px;
    height: 35px;
    font-size: 1.4rem;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.1);
  }
  & .css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    & .MuiPaginationItem-root {
      width: 40px;
      height: 30px;
      font-size: 1.3rem;
    }
  }
`;

export const DisplayTotalImage = styled.div`
  color: var(--text-color);
  font-style: italic;
  .select-limit {
    height: 30px;
    color: white;
    margin: 0px 8px;
    background-color: rgba(97, 243, 243, 0.2);
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-top: 10px;
  }
`;
