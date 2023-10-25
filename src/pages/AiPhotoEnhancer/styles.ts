import styled from "styled-components";

export const PageAiPhotoEnhancer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(9, 9, 23);
  display: flex;
  flex-direction: column;
`;

export const SectionContents = styled.div`
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
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(217deg, #e250e5, #4b50e6);
  }
  flex: 1;
  .box-upload {
    display: flex;
    flex-direction: column;
    .item-back {
      z-index: 100 !important;
      display: flex;
      gap: 15px;
      align-items: center;
      padding: 30px 20px;
      cursor: pointer;
      & > div:last-child {
        color: white;
        font-weight: bold;
        pointer-events: all;
      }
      .icon-back {
        color: white;
        font-size: 16px;
      }
    }
    .item-upload {
      margin: auto;
      /* width: 50%; */
      flex: 1;
      .title-upload {
        position: relative;
        .ai-photo {
          display: flex;
          justify-content: center;
          gap: 10px;
          color: rgb(255, 255, 255);
          font-size: 40px;
          font-weight: 700;
          line-height: 50px;
          margin-bottom: 25px;
          & > span {
            background: linear-gradient(
              190deg,
              rgb(252, 128, 255) 0%,
              rgb(123, 127, 255) 100%
            );
            -webkit-background-clip: text; /* Sử dụng tiền tố -webkit- cho trình duyệt Safari */
            color: transparent; /* Đặt màu chữ thành trong suốt */
          }
          .photo-enhance {
            position: relative;
            img {
              left: -40px;
              top: -60px;
              position: absolute;
            }
          }
        }
        & > div:nth-child(2) {
          text-align: center;
          color: var(--text-secondary, #d2d2d2);
          font-weight: 400;
          line-height: 150%;
          margin-bottom: 25px;
        }
      }
      .create-upload {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .item-change {
          position: relative;
          background: rgb(35, 32, 44);
          border-radius: 10px;
          &:hover {
            background-color: transparent;
            filter: brightness(0.5);
          }
          .image-upload {
            width: 512px;
            height: 512px;
            object-fit: contain;
            cursor: pointer;
          }
          .item-loading {
            filter: brightness(0.9);
            background-color: rgb(0, 0, 0, 0.9);
            .img-loading {
              border-radius: 10px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 152px;
              height: 152px;
            }
          }

          .change-photo {
            position: relative;
            opacity: 0;
            display: flex;
            gap: 10px;
            background-color: white;
            padding: 10px;
            border-radius: 8px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%);
            cursor: pointer;
            &:hover {
              filter: brightness(0.7);
              transition: 0.3s;
            }
            .input-upload {
              opacity: 0;
              position: absolute;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
            }
          }
          &:hover .change-photo {
            opacity: 1;
          }
        }
        button {
          border: none;
          font-size: 18px;
          height: 50px;
          color: white;
          background: linear-gradient(
            190deg,
            rgb(226, 80, 229) 0%,
            rgb(75, 80, 230) 100%
          );
          font-weight: bold;
          margin: 30px;
          &:hover {
            filter: brightness(0.5);
            background: linear-gradient(
              190deg,
              rgb(75, 80, 230) 0%,
              rgb(226, 80, 229) 100%
            );
          }
        }
      }
    }
    .box-result {
      .result-img {
        max-width: 500px;
        height: max-content;
        margin: auto;
        img {
          width: 100%;
        }
      }
      .btn-downdload {
        width: 200px;
        height: 40px;
        display: block;
        margin: 50px auto;
        border: none;
        color: white !important;
        font-weight: bold;
        font-size: large;
        background: var(
          --linear,
          linear-gradient(182deg, #e250e5 0%, #4b50e6 100%)
        );
        &:hover {
          filter: brightness(0.6);
        }
      }
    }
  }
  .box-contents {
    display: flex;
    flex: 1;
    gap: 90px;
    padding: 0px 22px;
    .create-photo {
      width: 51%;
      .icon-star {
        position: relative;
        top: 60px;
        left: 125px;
      }
      & > div:nth-child(2) {
        display: flex;
        justify-content: center;
        gap: 10px;
        color: rgb(255, 255, 255);
        font-size: 40px;
        font-weight: 700;
        line-height: 50px;
        margin-bottom: 25px;
        & > span {
          background: linear-gradient(
            190deg,
            rgb(252, 128, 255) 0%,
            rgb(123, 127, 255) 100%
          );
          -webkit-background-clip: text; /* Sử dụng tiền tố -webkit- cho trình duyệt Safari */
          color: transparent; /* Đặt màu chữ thành trong suốt */
        }
      }
      & > div:nth-child(3) {
        text-align: center;
        color: var(--text-secondary, #d2d2d2);
        font-weight: 400;
        line-height: 150%;
      }
      .select-upload-image {
        margin: 22px 0px;
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
            opacity: 0;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
          }
        }
      }
      & > div:last-child {
        color: var(--text-secondary, #d2d2d2);
        font-weight: 400;
        line-height: 150%;
      }
    }
    .image-ai {
      position: relative;
      width: 46%;
      img {
        width: 100%;
        position: relative;
        z-index: 2;
      }
      & > div:nth-child(2) {
        width: 153.739px;
        height: 151.284px;
        flex-shrink: 0;
        background-color: rgb(255, 117, 216);
        opacity: 0.25;
        filter: blur(45.9788px);
        position: absolute;
        top: 20px;
        left: 0px;
      }
      & > div:nth-child(3) {
        width: 127.974px;
        height: 128.741px;
        flex-shrink: 0;
        background: var(
          --primary-main,
          linear-gradient(217deg, #e250e5 0%, #4b50e6 100%)
        );
        opacity: 0.25;
        filter: blur(30.6525px);
        position: absolute;
        top: 380px;
        right: 40px;
      }
      & > div:last-child {
        width: 163.739px;
        height: 161.284px;
        flex-shrink: 0;
        background-color: rgb(255, 117, 216);
        opacity: 0.35;
        filter: blur(45.9788px);
        position: absolute;
        bottom: 40px;
        right: 35px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .box-contents {
      padding: 15px;
      display: block;
      .create-photo {
        width: 100%;
        .icon-star {
          margin-top: -90px;
          top: 60px;
          left: 125px;
        }
        & > div:nth-child(2) {
          font-size: 25px;
          margin: 0px;
        }
        & > div:nth-child(3) {
          font-size: 14px;
        }
        .select-upload-image {
          margin: 16px auto;
          .upload-image {
            padding: 12px;
            .image {
              width: 45px;
              height: 45px;
            }
            & > div:nth-child(2) {
              font-size: 15px;
            }
            & > div:nth-child(3) {
              text-align: center;
              font-size: 10px;
            }
          }
        }
        & > div:last-child {
          text-align: center;
          font-size: 14px;
        }
      }
      .image-ai {
        width: 100%;
      }
    }
    .box-upload {
      padding: 0px 15px;
      .item-back {
        padding: 20px 0px;
      }
      .item-upload {
        width: 100%;
        .title-upload {
          margin-top: 20px;
          .ai-photo {
            font-size: 25px;
            margin-bottom: 0px;
            .photo-enhance {
            }
          }
          & > div:nth-child(2) {
            font-size: 14px;
          }
        }
        .create-upload {
          .item-change {
            .image-upload {
              width: 100%;
              height: 100%;
            }
          }
          .btn-generate {
            margin: 20px 0px;
            width: 100%;
            height: 45px;
          }
        }
      }
      .box-result {
        .result-img {
          img {
            width: 100%;
          }
        }
        .btn-downdload {
          margin-top: 20px;
          width: 100%;
        }
      }
    }
  }
`;
