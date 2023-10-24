import { Modal } from "antd";
import styled from "styled-components";
export const WrapperAiArtGenerator = styled.div`
  background-color: rgb(9, 9, 23);
  width: 100%;
  height: 100%;
  .item-loading {
    z-index: 1000;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .image-loading {
      width: 300px;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }
  }

`;
export const SectionContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  .select-item {
    flex: 1;
    padding: 24px 16px;
    overflow-y: auto;
    &::-webkit-scrollbar-thumb {
      border-radius: 5px !important;
    }
    &::-webkit-scrollbar {
      width: 4px !important;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent !important; //Màu của vùng cuộn
    }
    &:hover {
      &::-webkit-scrollbar-thumb {
        background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
      }
    }
    .select-photo {
      margin-bottom: 40px;
      & > div:first-child {
        color: white;
        font-weight: 800;
        font-size: 17px;
      }
      & > div:nth-child(2) {
        color: gray;
        margin: 12px 0px;
        font-size: 13px;
        font-weight: bold;
      }
      .item-carousel {
        position: relative;
        .custom-carousel {
          * {
            outline: none !important; // xóa viền ngoài
          }
          .item-none {
            pointer-events: all;
            width: 100px !important;
            height: 100px !important;
            display: flex !important;
            margin-right: 10px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border-radius: 10px;
            background: var(--noble-black-600, #1a1d21);
            cursor: pointer;
            position: relative;
            & > div:last-child {
              color: white;
              position: absolute;
              bottom: 10px;
            }
          }
          .active-none {
            border: 2px solid violet !important;
          }
          .custom-images {
            position: relative;
            border-radius: 10px;
            margin-right: 10px;
            pointer-events: all; // mở sự kiện click
            filter: brightness(0.6);
            .image-ai {
              width: 100px !important;
              height: 100px !important;
              cursor: pointer;
              object-fit: cover;
              border-radius: 10px;
            }
            .name-style {
              left: 0;
              width: calc(100% - 10px);
              /* right: 10px; */
              z-index: 100;
              color: white;
              position: absolute;
              bottom: 10px;
              text-align: center;
              font-weight: 700;
              font-size: 12px;
            }
          }
          .active-style {
            filter: brightness(1);
            img {
              border: 2px solid violet !important;
            }
          }
        }
        .image-prev {
          width: 32px;
          height: 32px;
          background-color: rgb(9, 9, 23);
          font-size: large;
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: absolute;
          z-index: 1000;
          top: 50%;
          left: 5px;
          font-weight: bold;
          transform: translateY(-50%);
          &:hover {
            background-color: #ffcc33;
            color: #e8e8e8;
          }
        }
        .image-next {
          width: 32px;
          height: 32px;
          background-color: rgb(9, 9, 23);
          font-size: 20px;
          font-weight: bold;
          border-radius: 60%;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: absolute;
          z-index: 1000;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          right: 5px;
          &:hover {
            background-color: #ffcc33;
            color: #e8e8e8;
          }
        }
      }
    }
    .select-upload-image {
      & > div:first-child {
        color: white;
        font-weight: 800;
        font-size: 17px;
      }
      & > div:nth-child(2) {
        color: rgba(255, 255, 255, 0.5);
        margin: 12px 0px;
        font-size: 13px;
        font-weight: bold;
      }
      .box-image {
        position: relative;
        margin: auto;
        width: 512px;
        height: 512px;
        &:hover {
          .image {
            filter: brightness(0.5);
          }
        }
        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .item-change {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: none;
          align-items: center;
          justify-content: center;
          .icon-cancel {
            cursor: pointer;
            position: absolute;
            right: 8px;
            top: 8px;
            width: 30px;
            z-index: 6;
          }
          .change-images {
            margin: auto;
            padding: 10px;
            border-radius: 8px;
            display: flex;
            justify-content: space-around;
            background-color: #e8e8e8;
            position: absolute;
            gap: 5px;
            cursor: pointer;
            &:hover {
              filter: brightness(0.7);
              transition: 0.3s;
            }
            .input-upload {
              position: absolute;
              top: 0px;
              left: 0px;
              height: 100%;
              width: 100%;
              opacity: 0;
            }
          }
        }
        &:hover .item-change {
          display: flex;
        }
      }
      .upload-image {
        position: relative;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px dashed rgb(164, 120, 219);
        background: linear-gradient(
          225deg,
          rgba(108, 63, 164, 0.25) 0%,
          rgba(246, 238, 255, 0.05) 100%
        );
        border-radius: 12px;
        cursor: pointer;
        .image {
          width: 50px;
          height: 50px;
          background: var(
            --linear,
            linear-gradient(217deg, #e250e5 0%, #4b50e6 100%)
          );
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        & > div:nth-child(2) {
          color: white;
          font-weight: bold;
          margin: 8px 0px;
        }
        & > div:nth-child(3) {
          color: rgba(255, 255, 255, 0.5);
        }
        .input-upload {
          cursor: pointer;
          position: absolute;
          left: 0px;
          top: 0px;
          border: 1px solid white;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
    }
    .create-prompt {
      margin-top: 25px;
      .prompt-title {
        display: flex;
        justify-content: space-between;
        & > div:first-child {
          color: white;
          font-weight: 800;

          font-size: 17px;
        }
        .group-tool {
          display: flex;
          gap: 10px;
          cursor: pointer;
        }
      }
      & > div:nth-child(2) {
        color: rgba(255, 255, 255, 0.5);
        margin: 5px 0px;
        font-size: 13px;
        font-weight: bold;
      }
      & > div:nth-child(3) {
        color: white;
        font-size: 14px;
        margin: 15px 0px;
      }
      .textArea {
        .custom-textarea {
          resize: "none" !important;
          color: white;
          padding: 12px;
          height: 150px;
          border-radius: 8px;
          border: 1px solid var(--glass-stroke, rgba(255, 255, 255, 0.08));
          background: var(--bg-input-form, #23202c);
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
          &::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }
    }
    .negative-prompt {
      & > div:first-child {
        color: white;
        margin: 15px 0px;
        font-size: 14px;
      }
      .custom-textarea {
        resize: "none" !important;
        color: white;
        padding: 12px;
        height: 80px;
        border-radius: 8px;
        border: 1px solid var(--glass-stroke, rgba(255, 255, 255, 0.08));
        background: var(--bg-input-form, #23202c);
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
        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }

  .item-configs {
    display: flex;
    flex-direction: column;
    width: 300px;
    border-left: 1px solid rgb(30, 36, 49);
    border-top: 1px solid rgb(30, 36, 49);
    .content-configs {
      flex: 1;
      padding: 24px 16px;
      overflow-y: auto;
      &::-webkit-scrollbar-thumb {
        border-radius: 5px !important;
      }
      &::-webkit-scrollbar {
        width: 4px !important;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent !important; //Màu của vùng cuộn
      }
      &:hover {
        &::-webkit-scrollbar-thumb {
          background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
        }
      }
      // class ant slider
      .ant-slider-rail {
        width: 100%;
        height: 4px;
        color: violet !important;
        background-color: rgb(26, 29, 33);
      }
      // class ant slider
      .ant-slider-track {
        background: var(
          --linear,
          linear-gradient(217deg, #e250e5 0%, #4b50e6 100%)
        );
      }
      .header-config {
        & > div:first-child {
          color: white;
          font-weight: bold;
        }
        & > div:nth-child(2) {
          color: rgba(255, 255, 255, 0.5);
          margin: 12px 0px;
          font-size: 13px;
        }
        & > div:nth-child(3) {
          font-weight: bold;
          color: white;
          font-size: 14px;
        }
        & > div:nth-child(5) {
          color: white;
          font-weight: bold;
          font-size: 14px;
        }
        .item-slider {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 4px 0px;
          .custom-slider {
            width: 80%;
          }
          .value-slider {
            color: white;
          }
        }
      }
      .last-config {
        .advanced-settings {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 15px 0px;
          & > div:first-child {
            color: white;
            margin: 10px 0px;
            font-size: 14px;
          }
          .reverse-icon {
            transition: all 0.2s ease 0s;
            transform: rotate(180deg);
          }
          .reverse-initial {
            transform: rotate(0deg);
            transition: all 0.2s ease 0s;
          }
        }
        .block-settings {
          display: flex;
          flex-direction: column;
          gap: 10px;
          .select-alpha,
          .select-steps,
          .select-scale,
          .select-Seed {
            /* Ẩn các mũi tên lên xuống của input number */
            input[type="number"]::-webkit-inner-spin-button,
            input[type="number"]::-webkit-outer-spin-button {
              -webkit-appearance: none;
              appearance: none;
              margin: 0;
            }

            & > div:first-child {
              color: white;
              font-weight: bold;
              font-size: 14px;
            }
            & > div:nth-child(2) {
              margin: 10px 0px;
              color: rgba(255, 255, 255, 0.5);
              font-size: 13px;
            }
            .custom-input {
              background: var(--bg-input-form, #23202c);
              box-shadow: none;
              border-radius: 8px;
              border: 1px solid var(--glass-stroke, rgba(255, 255, 255, 0.08));
              color: white;
              font-weight: 500;
              font-size: 12px;
              line-height: 150%;
              letter-spacing: 0.15px;
              padding: 12px;
              margin-top: 5px;
              &::placeholder {
                font-weight: 600;
                color: rgba(255, 255, 255, 0.5);
              }
            }
          }
          .item-slider {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 4px 0px;
            .custom-slider {
              width: 80%;
            }
            .value-slider {
              color: white;
            }
          }
        }
      }
    }
    .button-create {
      padding: 16px;
      .button {
        height: 50px;
        width: 100%;
        color: white;
        padding: 0px 16px;
        border-radius: 8px;
        background: linear-gradient(
          190deg,
          rgb(226, 80, 229) 0%,
          rgb(75, 80, 230) 100%
        );
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 18px;
        &:disabled {
          cursor: not-allowed;
          filter: brightness(0.7);
        }
        &:hover {
          filter: brightness(0.7);
        }
      }
    }
  }
`;

export const ResultsItem = styled.div`
  width: 100%;
  height: 100%;
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
          &:hover {
            filter: brightness(0.6);
          }
        }
        .download-button {
          color: white;
          height: 45px;
          font-weight: bold;
          border-radius: 8px;
          border: none;
          background: linear-gradient(217deg, #e250e5 5.32%, #4b50e6 94.32%);
          &:hover {
            filter: brightness(0.6);
          }
        }
      }
    }
  }
`;

export const ModalNotificationLogin = styled(Modal)`
  .anticon svg {
    font-size: 18px;
    &:hover {
      color: red;
    }
  }
  .ant-modal-content {
    padding: 10px;
    background-color: rgb(242, 245, 245, 0.904);
  }
  .content {
    margin: 10px;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
  }
  .group-btn {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 10px;
    .btn-login {
      font-weight: bold;
      color: white !important ;
      width: 30%;
      border: none;
      background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
      &:hover {
        filter: brightness(0.8);
      }
    }
    .btn-cancel {
      width: 25%;
      border: none;
      font-weight: bold;
      color: red !important;
      background-color: orange;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
