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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
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
      .ant-pagination-item a {
        color: #4b50e6;
      }
      .anticon svg {
        color: white;
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
`;

export const ModalDetailImage = styled(Modal)`
  position: relative;
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
        display: grid;
        grid-template-columns: repeat(2, 2fr);
        gap: 25px;
        flex: 1;
        .detail-parameter {
          & > div:first-child {
            font-weight: 600;
          }
          & > div:last-child {
            color: gray;
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
`;
