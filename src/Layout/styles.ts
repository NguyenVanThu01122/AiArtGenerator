import styled from "styled-components";

export const WrapperLayout = styled.div`
  background-color: rgb(9, 9, 23);
  width: 100vw;
  height: 100vh;

  .box-content {
    display: flex;
    width: 100%;
    height: 100%;
    .main-content {
      width: calc(100vw - 280px);
      .parent-content {
        height: calc(100vh - 74px);
      }
    }
  }
  .item-loading {
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
  }
`;