import styled from "styled-components";

export const ResultsItem = styled.div`
  width: 100%;
  height: calc(100% - 74px);
  display: flex;
  flex-direction: column;
  .back-item {
    height: 80px;
    display: flex;
    gap: 10px;
    padding: 0px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: max-content;
    img {
      width: 24px;
    }
    & > div:last-child {
      color: white;
      font-weight: bold;
    }
  }
  .box-result {
    width: 100%;
    height: calc(100% - 80px);
    gap: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0px 27px;

    .display-image {
      position: relative;
      width: 40%;
      .image-result {
        height: 512px;
        width: 100%;
        object-fit: contain;
        cursor: pointer;
      }
      .edit-photo {
        display: none;
        position: absolute;
        top: 0px;
        left: 0px;
        color: white;
        width: 100%;
        height: 100%;
        border: 1px solid white;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        .btn-edit {
          display: flex;
          cursor: pointer;
          gap: 10px;
        }
      }
      &:hover .edit-photo {
        display: flex !important;
      }
    }
    .section-parameter {
      padding: 20px 0px;
      padding-right: 8px;
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 32px;
      color: white;
      overflow-y: auto;
      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
      }
      &::-webkit-scrollbar {
        width: 4px;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent; //Màu của vùng cuộn
      }
      &:hover {
        &::-webkit-scrollbar-thumb {
          background: linear-gradient(217deg, #e250e5, #4b50e6);
        }
      }
      & > div:first-child {
        color: #fff;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;
      }
      .information-result {
        display: flex;
        /* justify-content: space-between; */
        gap: 150px;
        .detail-result {
          /* flex: 1; */
          /* border: 1px solid white; */
          .text-group {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 22px;
            & > div:first-child {
              font-weight: bold;
            }
            & > div:last-child {
              color: #ffffffcc;
            }
          }
        }
      }
      .item-prompt {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .text-prompt {
          & > div:first-child {
            font-weight: bold;
            margin-bottom: 5px;
          }
          & > div:last-child {
            color: #ffffffcc;
          }
          div {
            word-break: break-all; // chữ sẽ tự động xuống dòng khi vượt quá chiều dài mẹ
          }
        }
        img {
          background-color: white;
        }
      }
      .button-group {
        display: flex;
        gap: 15px;
        .copy-button {
          display: flex;
          padding: 12px 24px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 8px;
          border: 1px solid #e250e5;
          background: #101010;
          color: white;
          height: 45px;
          font-weight: bold;
        }
        .download-button {
          color: white;
          height: 45px;
          font-weight: bold;
          border-radius: 8px;
          border: none;
          background: linear-gradient(217deg, #e250e5 5.32%, #4b50e6 94.32%);
        }
      }
    }
  }
`;
