import { Carousel } from "antd";
import styled from "styled-components";

export const PageHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgb(9, 9, 23);
`;
export const WrapperHome = styled.div`
  width: calc(100vw - 295px);
  /* flex: 1; */
  display: flex;
  flex-direction: column;
`;

export const BoxContents = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
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
  width: 100% !important;
  border: 1px solid white;
  height: 515px;
  flex-shrink: 0;
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
    border: 1px solid white;
    padding: 40px;
    width: 100%;
    .contents {
      width: 55%;
      padding: 40px 30px;
      border: 1px solid red;
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
        width: 40%;
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
      border: 1px solid red;
      img {
        width: 433px;
        height: 401px;
        flex-shrink: 0;
        object-fit: contain;
      }
    }
  }
`;

export const SectionContents = styled.div`
  .item-products {
    width: 90%;
    margin: auto;
    .title-products {
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
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%; /* 24px */
      }
    }
    .list-products {
      margin-top: 40px;
      color: white;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 24px;
      grid-row-gap: 32px;
      .detail-product {
        .item-img { 
          /* height: 221px; */
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
          padding: 8px 12px;
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
`;
