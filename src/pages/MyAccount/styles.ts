import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* .box-user { */
  .content-users {
    display: flex;
    align-items: center;
    gap: 30px;
    border-radius: 8px;
    background: var(--bg-on-blue, #141420);
    padding: 24px;
    .avatar {
      border-radius: 50%;
      width: 60px;
      height: 60px;
    }
    .information-users {
      color: white;
      display: flex;
      flex-direction: column;
      gap: 18px;
      .name {
        display: flex;
        gap: 5px;
        font-size: 22px;
        font-weight: bold;
      }
      .address {
        display: flex;
        gap: 30px;
        .content {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-secondary, #d2d2d2);
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
        }
      }
    }
  }
  .content-profile {
    border-radius: 8px;
    background: var(--bg-on-blue, #141420);
    padding: 24px;
    color: white;
    & > div:first-child {
      padding-bottom: 30px;
      color: white;
      font-weight: bold;
      font-size: 22px;
      border-bottom: 1px solid var(--stroke-2, #242c3d);
    }
    .detail-profile {
      margin-top: 30px;
      display: flex;
      gap: 60px;
      .title {
        div {
          color: var(--text-secondary, #d2d2d2);
        }
        & > div:first-child {
          margin-bottom: 20px;
        }
      }
      .group-text {
        .name {
          margin-bottom: 20px;
        }
      }
    }
  }
  .btn-signOut {
    height: 40px;
    width: 12%;
    font-size: 18px;
    font-weight: bold;
    color: white !important;
    border: none;
    background: var(
      --primary-main,
      linear-gradient(217deg, #e250e5 0%, #4b50e6 100%)
    );
  }
  /* } */

  @media screen and (max-width: 768px) {
    .content-users {
      gap: 14px;
      .avatar {
        width: 40px;
        height: 40px;
      }
      .information-users {
        gap: 8px;
        .name {
          /* font-size: 20px; */
        }
        .address {
          display: flex;
          flex-direction: column;
          gap: 8px;
          .content {
            gap: 0px;
          }
        }
      }
    }
    .btn-signOut {
      width: 40%;
    }
  }
`;
