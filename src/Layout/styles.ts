import styled from "styled-components";

export const WrapperLayout = styled.div`
  background-color: rgb(9, 9, 23);
  width: 100vw;
  height: 100vh;
  /* .item-loading {
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 300px;
      height: 300px;
      object-fit: contain;
      border-radius: 10px;
    }
  } */
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
