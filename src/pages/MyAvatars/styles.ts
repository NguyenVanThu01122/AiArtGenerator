import { Modal } from "antd";
import styled from "styled-components";

export const WrapperMyAvatars = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  .error-text {
    text-align: center;
    color: red;
    font-size: 20px;
    font-style: italic;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 5px;
  }
`;

export const BoxImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    .content-header {
      font-weight: bold;
      font-size: 22px;
      color: white;
    }
    .item-select {
      display: flex;
      align-items: center;
      gap: 30px;
      .select-img {
        display: flex;
        align-items: center;
        gap: 8px;
        color: white;
        Button {
          border: none;
          color: white;
          font-weight: bold;
          &:hover {
            filter: brightness(0.6);
          }
        }
        .group-btn {
          display: flex;
          gap: 10px;
          .btn-cancel-all {
            background: var(--Stroke-2, #242c3d);
            color: yellow;
          }
        }
        .btn-select-all,
        .btn-select {
          background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
        }
        .btn-delete {
          background-color: red;
        }
      }
      .select-sort-date {
        .ant-select-selector {
          border: none;
          color: white;
          background: var(--Stroke-2, #242c3d);
        }
        .ant-select-arrow {
          color: white;
        }
        .select-date {
          width: 200px;
        }
      }
    }
  }
  .list-image {
    flex: 1;
    overflow-y: auto;
    padding: 0px 10px;
    margin: 20px 0px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
    &::-webkit-scrollbar-thumb {
      border-radius: 5px !important;
    }
    &::-webkit-scrollbar {
      width: 4px !important;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent !important; //Màu của vùng cuộn
    }
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
    }

    .result-img {
      position: relative;
      img {
        width: 100%;
      }
      .item-select {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: rgb(0, 0, 0, 0.6);
        .custom-checkbox {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
  .item-pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .custom-pagination {
      .ant-pagination-item-active {
        border: none !important;
        background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
      }
      .ant-pagination-item a {
        color: white;
        font-weight: bold;
      }
      .anticon svg {
        color: white;
        font-size: 16px;
      }
    }
    .display-total-img {
      .ant-select-selector {
        color: white;
        border: none;
        background: var(--Stroke-2, #242c3d);
      }
      .ant-select-arrow {
        color: white;
      }
      color: white;
      font-style: italic;
    }
  }
  @media screen and (max-width: 768px) {
    .header {
      display: block;
      .content-header {
        margin-bottom: 15px;
        font-size: 18px;
      }
      .item-select {
        display: flex;
        justify-content: space-between;
        .select-sort-date {
          .select-date {
            width: 120px;
          }
        }
        .select-img {
          button {
            font-size: 14px;
          }
        }
      }
    }
    .list-image {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .item-pagination {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .custom-pagination {
        .ant-pagination-item-active {
          background: orange !important;
        }
      }
      .display-total-img {
        display: block;
        font-size: 12px;
        .ant-select-selector {
        }
      }
    }
  }
`;

export const ModalDetailImage = styled(Modal)`
  position: relative;
  .ant-modal-content {
    padding: 5px;
  }
  .box-detail {
    width: 100%;
    padding: 20px;
    padding-bottom: 0px;
    display: flex;
    gap: 20px;
    .item-img {
      width: 50%;
      img {
        width: 100%;
      }
    }
    .product-parameters {
      width: 50%;
      display: flex;
      flex-direction: column;
      .title {
        margin: 10px 0px;
        font-size: 25px;
        font-weight: bold;
      }
      .item-parameters {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex: 1;
        .head-box {
          width: 40%;
        }
        .end-box {
          width: 60%;
        }
        .head-box,
        .end-box {
          .detail-parameter {
            margin-bottom: 20px;
            & > div:first-child {
              font-weight: 600;
            }
            & > div:last-child {
              color: gray;
            }
            .prompt {
              height: 50px;
              overflow: auto;
              &::-webkit-scrollbar-thumb {
                border-radius: 5px !important;
              }
              &::-webkit-scrollbar {
                width: 4px !important;
              }
              &::-webkit-scrollbar-track {
                background-color: transparent !important; //Màu của vùng cuộn
              }
              &::-webkit-scrollbar-thumb {
                background: linear-gradient(
                  217deg,
                  #e250e5,
                  #4b50e6
                ) !important;
              }
            }
          }
        }
      }
      .group-btn {
        display: flex;
        gap: 20px;
      }
      button:hover {
        filter: brightness(0.6);
      }
      .download {
        border: none;
        width: 50%;
        height: 40px;
        color: white !important;
        font-weight: bold;
        background: linear-gradient(217deg, #e250e5 5.32%, #4b50e6 94.32%);
      }
      .copy {
        width: 50%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border: none;
        font-weight: bold;
        color: white !important;
        border: 2px solid #e250e5;
        background: var(--Stroke-2, #242c3d);
      }
    }
  }
  .ic-next {
    transition: 0.3s ease;
    opacity: 0;
    position: absolute;
    background: rgb(0, 0, 0, 0.6);
    color: white;
    width: 15px;
    height: 15px;
    padding: 10px;
    border-radius: 50%;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .ic-prev {
    transition: 0.3s ease;
    opacity: 0;
    width: 15px;
    height: 15px;
    position: absolute;
    background: rgb(0, 0, 0, 0.6);
    color: white;
    padding: 10px;
    border-radius: 50%;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .icon-none {
    display: none;
  }
  &:hover {
    .ic-prev,
    .ic-next {
      opacity: 1;
      transition: 0.5s ease;
    }
  }
  @media screen and (max-width: 768px) {
    width: 400px !important;
    .box-detail {
      padding: 0px;
      padding-top: 10px;
      padding-left: 10px;
      .item-img {
        width: 25%;
        img {
          width: 100%;
        }
      }
      .product-parameters {
        .item-parameters {
          .head-box,
          .end-box {
            .detail-parameter {
              & > div:first-child {
                font-size: 11px;
                font-weight: 700;
              }
              & > div:last-child {
              }
            }
          }
        }
        .group-btn {
          button {
            height: 28px;
            width: 90px;
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export const ModalDeleteImg = styled(Modal)`
  .ant-modal-content {
    padding: 4px 30px !important;
  }
  .item-remind {
    text-align: center;
    img {
      width: 120px;
      height: 120px;
      object-fit: contain;
    }
    div {
      font-weight: bold;
      font-size: 18px;
    }
  }
  .group-btn {
    margin-top: 10px;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    .btn-cancel {
      background: linear-gradient(217deg, #e250e5 5.32%, #4b50e6 94.32%);
      color: white !important;
      font-weight: bold;
      border: none;
      &:hover {
        filter: brightness(0.6);
      }
    }
    .btn-delete {
      width: 20%;
      font-weight: bold;
      border: none;
      background-color: red;
      color: white !important;
      &:hover {
        filter: brightness(0.6);
      }
    }
  }
  @media screen and (max-width: 768px) {
    & {
    }
  }
`;
