import styled from "styled-components";
export const HeaderAiArt = styled.div`
  background-color: rgb(9, 9, 23);
  height: 74px;
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgb(30, 36, 49);
  .title-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    color: white;
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
  .account {
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
    .ant-popover-inner {
      padding: 60px !important;
      background-color: red !important; /* Màu nền tùy chỉnh */
    }
    .custom-popover {
      .item-account {
        .information {
          display: flex !important;
        }
      }
    }
    .avatar {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
  .login {
    color: white;
  }
`;
