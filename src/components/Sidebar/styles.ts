import styled from "styled-components";

export const WrapperSidebar = styled.div`
  background-color: rgb(9, 9, 23);
  width: 280px;
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
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    padding: 22px;
    border-bottom: 1px solid rgb(30, 36, 49);
    img {
      width: 22px;
      height: 22px;
      object-fit: cover;
    }
    & > div:last-child {
      color: white;
      font-size: 24.5px;
      font-weight: 500;
    }
  }
  .select-item {
    flex: 1;
    overflow-y: auto;
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
    padding: 18px;
    .home,
    .pricing {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      cursor: pointer;
      margin-bottom: 10px;
      &:hover {
        background: rgb(36, 36, 60);
        border-radius: 5px;
      }
      & > div:last-child {
        color: white;
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
      .ai-art-generator,
      .ai-photo-enhancer {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 10px;
        cursor: pointer;
        & > div:last-child {
          color: white;
          font-size: 14px;
          font-weight: bold;
        }
        &:hover {
          background: rgb(36, 36, 60);
          border-radius: 5px;
        }
      }
    }
  }
  .follow-options {
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
