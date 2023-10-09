import styled from "styled-components";

export const PageAIBackgroundChanger = styled.div`
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
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgb(9, 9, 23);
  overflow-y: auto;
`;

export const ItemBackgroundChange = styled.div`
  width: 56%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-right: 40px;
  .title-page {
    padding: 13px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    & > div:first-child {
      color: rgb(182, 154, 255);
      font-family: "GT Walsheim Pro", sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: 1.4px;
      text-transform: uppercase;
    }
    & > div:nth-child(2) {
      position: relative;
      div {
        color: rgb(255, 255, 255);
        font-family: "GT Walsheim Pro", san, sans-serif;
        font-size: 40px;
        font-weight: 700;
        line-height: 120%;
      }
      span {
        background: linear-gradient(
          190deg,
          rgb(252, 128, 255) 0%,
          rgb(123, 127, 255) 100%
        );
        -webkit-background-clip: text; /* Sử dụng tiền tố -webkit- cho trình duyệt Safari */
        color: transparent; /* Đặt màu chữ thành trong suốt */
      }
      img {
        position: absolute;
        top: 0px;
        left: 57%;
      }
    }
    & > div:last-child {
      color: var(--neutral-100, #d2d2d2);
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
    }
  }
  .create-upload {
    position: relative;
    text-align: center;
    padding: 35px;
    border: 2px dashed rgb(164, 120, 219);
    border-radius: 12px;
    background: linear-gradient(
      225deg,
      rgba(108, 63, 164, 0.25) 0%,
      rgba(246, 238, 255, 0.05) 100%
    );
    .not-uploaded {
      img {
        width: 70px;
        margin-bottom: 10px;
        border-radius: 50%;
        padding: 18px;
        background: var(
          --linear,
          linear-gradient(217deg, #e250e5 0%, #4b50e6 100%)
        );
      }
      .format-information {
        & > div:first-child {
          margin-bottom: 6px;
          font-weight: bold;
          color: white;
        }
        & > div:last-child {
          font-size: 13px;
          color: var(--neutral-100, #d2d2d2);
        }
      }
      .input-upload {
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        cursor: pointer;
      }
    }
    .uploaded {
      height: 195px;
      position: relative;
      .img-uploaded {
        height: 100%;
        width: 293px;
        object-fit: contain;
      }
      .box-change {
        .icon-cancel {
          cursor: pointer;
          position: absolute;
          top: 10px;
          right: 10px;
        }
        .item-change {
          width: 25%;
          display: none;
          border-radius: 8px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          &:hover {
            filter: brightness(0.7);
            transition: 0.3s;
          }
          .change-img {
            padding: 10px;
            border-radius: 8px;
            display: flex;
            justify-content: space-around;
            background-color: white;
            gap: 5px;
          }
          .input-upload {
            opacity: 0;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
        }
      }
      &:hover .item-change {
        display: block;
      }
    }
  }
  .active-boder {
    padding: 0px;
    border: 2px solid rgb(164, 120, 219);
    &:hover {
      filter: brightness(0.6);
    }
  }
  .btn-change {
    height: 50px;
    border: none;
    margin-top: 20px;
    outline: 0px;
    border-radius: 8px;
    padding: 8px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    background: var(
      --linear,
      linear-gradient(182deg, #e250e5 0%, #4b50e6 100%)
    );
    color: var(--status-white, #fff);
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;
    &:hover {
      filter: brightness(0.6);
    }
  }
`;

export const ItemImage = styled.div`
  width: 44%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
