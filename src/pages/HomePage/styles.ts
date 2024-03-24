import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background: url(/static/media/icon-bg.13b9fb0….svg) center center / cover
    no-repeat rgb(3, 7, 18);
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
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  /* background: rgb(3, 7, 18); */
  padding: 25px;
  .item-menu {
    color: white;
    display: flex;
    gap: 35px;
    & > div:first-child {
      font-size: 18px;
      color: white;
      font-weight: 800;
      font-weight: 500;
      line-height: 150%;
      cursor: pointer;
    }
    & > div:last-child {
      cursor: pointer;
      color: var(--text-secondary, #d2d2d2);
      font-weight: 500;
      line-height: 150%;
      font-size: 18px;
    }
  }
  .btn-signUp {
    border: none;
    font-size: 18px;
    font-weight: bold;
    color: white !important;
    height: 40px;
    background: var(--Brand-color_sOLID, #6366f1);
    box-shadow: rgba(129, 140, 248, 0.25) 0px 8px 24px 0px;
  }
`;

export const BoxContents = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  .first-child {
    max-width: 1128px;
    /* width: 80%; */
    margin: auto;

    border: 1px solid white;

    .parent-contents {
      display: flex;
      align-items: center;
      gap: 50px;
      .title {
        width: 60%;
        border: 1px solid white;
        & > div:first-child {
          color: rgb(165, 180, 252);
          font-size: 14px;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: 0.7px;
        }
        & > div:last-child {
          margin-top: 16px;
          color: rgb(255, 255, 255);
          font-size: 45px;
          font-weight: 700;
          line-height: 120%;
          span {
            color: rgb(129, 140, 248);
          }
        }
      }
      .content {
        border: 1px solid white;
        width: 40%;
        & > div:first-child {
          color: var(--text-primary, #fff);
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
        }
        img {
          margin-top: 20px;
          width: 100%;
        }
      }
    }

    .parent-text {
      display: flex;
      margin-top: 50px;
      .child-text {
        position: relative;
        width: 75%;
        padding: 20px;
        border: 1px solid white;
        background: linear-gradient(
          rgba(8, 7, 23, 0) 43.92%,
          rgb(8, 7, 23) 94.74%
        );
        .video-container {
          position: relative;
          width: 100%;
          height: 80vh;
          video {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
        .text-to-video {
          padding: 20px;
          position: absolute;
          bottom: 40px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 30px;
          .detail-contents {
            width: 70%;
            & > div:first-child {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-weight: 700;
              line-height: 150%;
            }
            & > div:last-child {
              /* width: 583px; */
              color: var(--text-primary, #fff);
              font-size: 14px;
              font-weight: 400;
              line-height: 150%;
            }
          }
          .ic-arrow {
            width: 30%;
            padding: 10px;
            cursor: pointer;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: var(--Brand-color_sOLID, #6366f1);
            transition: all 0.3s ease 0s;
          }
        }
      }
    }
  }
`;
