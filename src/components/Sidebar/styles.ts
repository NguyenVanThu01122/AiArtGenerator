import styled from "styled-components";

export const WrapperSidebar = styled.div<{ closeMenu: boolean }>`
  background-color: rgb(9, 9, 23);
  width: ${(props) => (props?.closeMenu ? "120px" : "280px")};
  transition: 0.3s ease;
  height: 100%;
  border-right: 1px solid rgb(30, 36, 49);
  display: flex;
  flex-direction: column;
  .border {
    background: rgb(36, 36, 60);
    border-radius: 5px;
    box-shadow: 0 0 2px 1px violet;
  }
  .logo-AiArt {
    height: 75px;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    padding: 22px;
    border-bottom: 1px solid rgb(30, 36, 49);
    img {
      width: 25px;
      height: 25px;
      object-fit: cover;
    }
    span {
      display: ${(props: any) => (props.closeMenu ? "none" : "block")};
      color: white;
      font-size: 24px;
      font-weight: 500;
    }
  }
  .select-item {
    flex: 1;
    overflow-y: auto;
    padding: 18px;
    &::-webkit-scrollbar-thumb {
      border-radius: 5px !important;
    }
    &::-webkit-scrollbar {
      width: 3px !important;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent !important; //Màu của vùng cuộn
    }
    &:hover {
      &::-webkit-scrollbar-thumb {
        background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
      }
    }
    .section-products {
      display: flex;
      flex-direction: column;
      gap: 15px;
      & > div:first-child {
        color: white;
        margin: 18px 0px;
        font-size: 15px;
        font-weight: 300;
      }
    }
    .item-menu {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      cursor: pointer;
      margin-bottom: 10px;
      justify-content: ${(props: any) =>
        props.closeMenu ? "center" : "flex-start"} !important;
      span {
        display: ${(props: any) =>
          props.closeMenu ? "none" : "inline"} !important;
      }
      &:hover {
        background: rgb(36, 36, 60);
        border-radius: 5px;
      }
      span {
        color: white;
      }
      .ic-avatar {
        color: white;
        font-size: 20px;

      }
    }
  }
  .follow-options {
    display: ${(props: any) => (props.closeMenu ? "none" : "block")};
    text-align: center;
    & > div:first-child {
      color: white;
      font-size: 15px;
      font-weight: 300;
    }
    .group-icon {
      margin: 20px;
      display: flex;
      justify-content: center;
      gap: 8px;
      & img {
        width: 18%;
        width: 18%;
        border-radius: 50%;
        background: rgb(36, 36, 60);
        padding: 10px;
        cursor: pointer;
        transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
        &:hover {
          /* box-shadow: 0 0 20px 5px violet; */
          transform: scale(1.2);
          background-color: #03e9f4;
          box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
            0 0 600px #03e9f4;
          -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
        }
      }
    }
  }
`;
