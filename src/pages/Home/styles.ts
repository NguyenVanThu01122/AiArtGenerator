import { Carousel } from "antd";
import styled from "styled-components";

export const WrapperHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 110px;
  padding: 20px 20px 0px 20px;
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
`;

export const ItemCarousel = styled(Carousel)`
  width: 100%;
  height: 515px;
  margin-top: -50px;
  .slick-dots li {
    width: 10px !important;
    height: 10px !important;
    button {
      background-color: white;
      border-radius: 50%;
      width: 100% !important;
      height: 100% !important;
    }
  }
  .introduce-item {
    display: flex !important;
    gap: 40px;
    padding-top: 0px !important;
    padding: 60px 40px;
    width: 100%;
    .contents {
      width: 55%;
      padding: 40px 30px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      & > div:first-child {
        color: #d5b4ff;
        font-size: 16px;
        font-weight: 500;
        line-height: 150%; /* 24px */
        letter-spacing: 2px;
      }
      & > div:nth-child(2) {
        color: var(--text-primary, #fff);
        font-size: 40px;
        font-weight: 700;
        line-height: 120%; /* 48px */
      }
      & > div:nth-child(3) {
        color: var(--text-secondary, #d2d2d2);
        font-size: 16px;
        font-weight: 400;
        line-height: 150%; /* 24px */
        span {
          color: white;
          font-weight: bold;
          line-height: 150%; /* 24px */
        }
      }
      .custom-btn {
        width: 280px;
        height: 48px;
        display: flex;
        padding: 8px 24px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        background: linear-gradient(217deg, #e250e5 5.32%, #4b50e6 94.32%);
        border: none;
        margin-top: 25px;
        &:hover {
          filter: brightness(0.6);
          background: linear-gradient(280deg, #e250e5 5.32%, #4b50e6 94.32%);
        }
        img {
          width: 20px;
          height: 20px;
        }
        span {
          color: var(--status-white, #fff);
          font-size: 16px;
          font-weight: 600;
          line-height: 100%; /* 16px */
        }
      }
    }
    .item-img {
      width: 45%;
      img {
        width: 433px;
        height: 401px;
        object-fit: contain;
      }
    }
  }
  @media screen and (max-width: 768px) {
    & {
      margin-top: -90px;
      .slick-dots li {
        button {
          margin-top: 235px;
        }
      }
      .introduce-item {
        display: block !important;
        width: 100% !important;
        padding: 0px;
        .contents,
        .item-img {
          padding: 0px;
          width: 100%;
          img {
            width: 100%;
          }
          & > div:nth-child(2) {
            font-size: 25px;
          }
        }
      }
    }
  }
`;

export const SectionContents = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 120px;
  .title {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    & > div:first-child {
      color: var(--brand-color-pastel-purple, #b69aff);
      font-size: 14px;
      font-weight: 500;
      line-height: 150%; /* 21px */
      letter-spacing: 2px;
    }
    & > div:nth-child(2) {
      color: var(--text-primary, #fff);
      font-size: 40px;
      font-weight: 700;
      line-height: 120%; /* 48px */
    }
    & > div:last-child {
      color: var(--text-secondary, #d2d2d2);
      font-size: 16px;
      font-weight: 400;
      line-height: 150%; /* 24px */
    }
  }
  .item-products {
    .list-products {
      margin-top: 40px;
      color: white;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 24px;
      grid-row-gap: 32px;
      .detail-product {
        .item-img {
          height: 221px;
          cursor: pointer;
          overflow: hidden;
          border-radius: 10px;
          img {
            height: 100%;
            object-fit: cover;
            transition: 0.4s;
            width: 100%;
            &:hover {
              transform: scale(1.4);
            }
          }
        }
        .contents-products {
          margin: 15px 0px;
          & > div:first-child {
            color: var(--text-primary, #fff);
            font-size: 17px;
            font-weight: 700;
            line-height: 150%; /* 24px */
            margin-bottom: 4px;
          }
          & > div:last-child {
            color: var(--text-secondary, #d2d2d2);
            font-size: 14px;
            font-weight: 400;
            line-height: 150%; /* 21px */
          }
        }
        .btn-try-now {
          display: flex;
          padding: 5px 12px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 4px;
          border: none;
          background: linear-gradient(217deg, #e250e5 5.32%, #4b50e6 94.32%);
          span {
            font-weight: bold;
            color: white;
          }
          &:hover {
            filter: brightness(0.5);
            /* transform: rotate(360deg); */
          }
        }
      }
    }
  }
  .item-benefits {
    .box-benefits {
      margin-top: 40px;
      color: white;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      .detail-benefit {
        position: relative;
        border-radius: 12px;
        padding: 24px;
        /* width: 264px;
        height: 256px; */
        cursor: pointer;
        background: var(--BG-on-Blue, #141420);
        .empty-box {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          opacity: 0;
          z-index: 2;
          transition: opacity 0.5s ease;
          &:hover {
            opacity: 1;
            background: linear-gradient(
              180deg,
              rgba(70, 14, 96, 0.06) 0%,
              rgba(159, 84, 255, 0) 39.86%,
              rgba(159, 84, 255, 0.5) 100%
            );
          }
        }
        &:hover .item-img {
          transform: scale(1.4);
        }
        .item-img {
          width: 100px;
          height: 100px;
          overflow: hidden;
          transition: 0.5s ease;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .contents {
          & > div:first-child {
            margin: 10px 0px 16px 0px;
            color: var(--text-primary, #fff);
            font-size: 18px;
            font-weight: 700;
            line-height: 24px; /* 133.333% */
          }
          & > div:last-child {
            color: var(--text-secondary, #d2d2d2);
            font-size: 16px;
            font-weight: 400;
            line-height: 24px; /* 150% */
          }
        }
      }
    }
  }
  .item-testimonials {
    .list-testimonials {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      margin-top: 40px;
      .detail-item {
        border-radius: 10px;
        background: var(--BG-on-Blue, #141420);
        display: flex;
        padding: 24px;
        flex-direction: column;
        gap: 12px;
        .img-user {
          width: 68px;
          height: 68px;
        }
        .img-quote {
          width: 32px;
          height: 32px;
        }
        .contents {
          color: var(--text-primary, #fff);
          font-size: 14px;
          font-weight: 400;
          line-height: 150%; /* 21px */
        }
        .information-user {
          & > div:first-child {
            color: var(--text-primary, #fff);
            font-size: 14px;
            font-weight: 500;
            line-height: 150%; /* 21px */
          }
          & > div:last-child {
            color: var(--text-secondary, #d2d2d2);
            font-size: 12px;
            font-weight: 400;
            line-height: 150%; /* 18px */
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      gap: 50px;
      margin-top: 180px;
      .title {
        gap: 0px;
        & > div:nth-child(2) {
          font-size: 22px;
          margin: 8px 0px;
        }
      }
      .item-products {
        .list-products {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      }
    }
    .item-benefits {
      .box-benefits {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
    .item-testimonials {
      .list-testimonials {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
  }
`;

export const LastItem = styled.div`
  background-image: url("https://creatorhub.ai/static/media/ready-start-bg.c80579052a6e6eeee38e.png");
  background-repeat: no-repeat;
  background-size: contain;
  .header {
    text-align: center;
    & > div:first-child {
      color: var(--text-primary, #fff);
      font-size: 40px;
      font-weight: 700;
      line-height: 120%; /* 48px */
    }
    & > div:nth-child(2) {
      margin-top: 10px;
      color: var(--text-secondary, #d2d2d2);
      font-size: 16px;
      font-weight: 400;
      line-height: 150%; /* 24px */
    }
    button {
      font-size: 17px;
      margin-top: 45px;
      width: 12%;
      height: 46px;
      border: none;
      font-weight: bold;
      color: white;
      background: linear-gradient(190deg, #e250e5 5.32%, #4b50e6 94.32%);
      &:hover {
        filter: brightness(0.6);
        color: white !important;
      }
    }
  }
  @media screen and (max-width: 768px) {
    & {
      .header {
        & > div:first-child {
          font-size: 22px;
        }
      }
      button {
        width: 40% !important;
      }
    }
  }
`;
