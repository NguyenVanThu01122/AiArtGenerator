import { Drawer } from "antd";
import styled from "styled-components";
export const WrapperHeader = styled.div`
  position: relative;
  background-color: rgb(9, 9, 23);
  height: 75px;
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgb(30, 36, 49);
  .item-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    color: white;
    .ic-close {
      cursor: pointer;
    }
    & > div:last-child {
      font-size: 17px;
      font-weight: 600;
      display: flex;
      gap: 10px;
      & span {
        color: gray;
        &:hover {
          color: white;
          cursor: pointer;
        }
      }
    }
  }

  .logo-creator {
    display: none;
  }
  .box-account {
    display: flex;
    align-items: center;
    gap: 10px;
    .account-information {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      & > div {
        color: white;
        font-size: 14px;
      }
      & > div:first-child {
        font-weight: 800;
        margin-bottom: 3px;
      }
    }
    .custom-popover {
      .ant-popover-inner {
        padding: 0px !important;
      }
      .ant-popover {
        /* Định nghĩa padding cho popover */
        padding: 0px !important; /* Sửa giá trị padding theo nhu cầu của bạn */
      }
    }
    .avatar {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      object-fit: contain;
      cursor: pointer;
    }
  }
  .btn-login {
    color: white !important;
    background: linear-gradient(
      190deg,
      rgb(226, 80, 229) 0%,
      rgb(75, 80, 230) 100%
    );
    font-weight: bold;
    border: none;
    &:hover {
      filter: brightness(0.6);
    }
  }

  // responsive
  @media screen and (max-width: 768px) {
    & {
      .item-title {
        display: none !important;
      }
      .ant-drawer .ant-drawer-content {
        background-color: red !important;
      }
      .item-menu {
        .title-menu {
          display: flex !important;
          .icon-angles {
            color: white;
            border: 1px solid white;
          }
        }
        .ant-drawer .ant-drawer-content {
          background-color: red !important;
        }
        .ic-menu {
          display: block;
          font-size: 20px;
          color: white;
        }
        .custom-menu {
          .title-menu {
            display: flex !important;
            .icon-angles {
              color: white;
              border: 1px solid white;
            }
          }
        }
      }
      .logo-creator {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
          width: 30px;
        }
        span {
          color: white;
          font-size: 22px;
          font-weight: bold;
        }
      }
      .box-account {
        .account-information {
          display: none;
        }
        .avatar {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
`;

export const BoxProfile = styled.div`
  z-index: 100;
  position: absolute;
  bottom: -280%;
  right: 0px;
  width: 280px;
  background: rgb(20, 20, 31);
  border-radius: 8px;
  .detail-user {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    .avatar {
      width: 50px;
      height: 50px;
      object-fit: contain;
      border-radius: 50%;
    }
    .content-user {
      display: flex;
      flex-direction: column;
      gap: 6px;
      .name {
        color: white;
        font-size: 17px;
        font-weight: bold;
      }
      .credits {
        display: flex;
        align-items: center;
        color: var(--text-secondary, #d2d2d2);
      }
    }
  }
  .option-container {
    padding: 20px;
    border-top: 1px solid rgb(30, 36, 49);
    .item-menu {
      padding: 10px;
      cursor: pointer;
      color: white;
      &:hover {
        background: rgb(36, 36, 60);
        border-radius: 5px;
      }
    }
  }
  @media screen and (max-width: 768px) {
  }
`;

export const ItemMenu = styled.div`
  .ic-menu {
    display: none;
  }
  @media screen and (max-width: 768px) {
    & {
      .ic-menu {
        display: block;
        color: white;
        font-size: 22px;
      }
    }
  }
`;

export const ItemDrawer = styled(Drawer)`
  display: none;
  gap: 50px;
  background-color: rgb(9, 9, 23) !important;
  .title-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon-angles {
      color: white;
      font-size: 20px;
    }
  }
  .parent-content {
    display: flex;
    flex-direction: column;
    gap: 60px;
    .select-item {
      padding: 10px 0px 10px 0px;
      margin-top: 10px;
      .section-products {
        display: flex;
        flex-direction: column;
        gap: 10px;
        & > div:first-child {
          color: white;
          margin: 18px 0px;
          font-size: 16px;
          font-weight: 300;
        }
      }
      .item-menu {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        margin-bottom: 15px;
        font-size: 16px;
        &:hover {
          background: rgb(36, 36, 60);
          border-radius: 5px;
        }
        img {
          /* width: 35px; */
          background: rgb(36, 36, 60);
          border-radius: 50%;
          padding: 10px;
        }
        span {
          color: white;
        }
        .ic-avatar {
          color: white;
          font-size: 20px;
          background: rgb(36, 36, 60);
          border-radius: 50%;
          padding: 10px;
        }
      }
      .border-item {
        background: rgb(36, 36, 60);
        border-radius: 5px;
        box-shadow: 0 0 2px 1px violet;
      }
    }
    .follow-options {
      text-align: center;
      & > div:first-child {
        color: white;
        font-size: 18px;
        font-weight: 300;
      }
      .group-icon {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        gap: 12px;
        & img {
          width: 45px;
          height: 45px;
          object-fit: contain;
          border-radius: 50%;
          background: rgb(36, 36, 60);
          padding: 10px;
          cursor: pointer;
          background-color: #03e9f4;
          box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
            0 0 600px #03e9f4;
          -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
          transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
