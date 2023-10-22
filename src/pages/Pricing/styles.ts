import { Carousel, Collapse } from "antd";
import styled from "styled-components";

export const WrapperPricing = styled.div`
  width: 100% !important;
  height: 100%;
  overflow-y: auto;
  padding: 15px;
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
`;

export const BlockContents = styled.div`
  margin: auto;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  .box-pricing {
    width: 100%;
    .title-pricing {
      margin: 80px 0px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 12px;
      & > div:first-child {
        color: var(--brand-color-pastel-purple, #b69aff);
        font-size: 14px;
        font-weight: 500;
        line-height: 150%; /* 21px */
        letter-spacing: 2px;
      }
      & > div:nth-child(2) {
        color: var(--text-primary, #fff);
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        line-height: 120%; /* 48px */
      }
      & > div:last-child {
        color: var(--text-primary, #fff);
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%; /* 24px */
      }
    }
    .list-pricing {
      color: white;
      display: flex;
      gap: 24px;
      .option2 {
        border: 2px solid rgb(151, 80, 230);
      }
      .option-container {
        width: 33%;
        border-radius: 12px;
        background: #10101f;
        padding: 25px;
        padding-top: 35px;
        position: relative;
        .detail-pricing {
          #popular {
            position: absolute;
            border-top: 2px solid rgb(151, 80, 230);
            border-left: 2px solid rgb(151, 80, 230);
            border-right: 2px solid rgb(151, 80, 230);
            left: -1.5px;
            right: -1.6px;
            top: -25px;
            height: max-content;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            text-align: right;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            background: rgb(16, 16, 31);
            padding: 16px;
            & > div:first-child {
              border-radius: 24px;
              background: rgba(182, 154, 255, 0.2);
              box-shadow: 0px 4.23407px 7.40962px 0px rgba(30, 14, 49, 0.63);
              color: var(--brand-color-pastel-purple, #b69aff);
              font-size: 12px;
              padding: 6px;
              font-weight: 700;
              line-height: 150%; //18px
            }
          }
          .title-eco {
            color: #00ffe0;
            font-weight: 600;
            line-height: 150%; /* 27px */
            margin-bottom: 8px;
          }
          .title-basic {
            color: #e250e5;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
            line-height: 150%; /* 27px */
          }
          .title-pro {
            color: #67acff;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
            line-height: 150%; /* 27px */
          }

          .pricing {
            color: var(--text-primary, #fff);
            font-size: 32px;
            font-weight: 700;
            line-height: 100%; /* 32px */
            span {
              color: var(--text-primary, #fff);
              font-size: 12px;
              font-weight: 600;
              line-height: 100%; /* 12px */
            }
          }
          .credits-eco {
            margin: 18px 0px;
            color: #02e1c8;
            font-size: 16px;
            font-weight: 700;
            line-height: 100%; /* 16px */
          }
          .credits-basic {
            margin: 18px 0px;
            color: #e250e5;
            font-size: 16px;
            font-weight: 700;
            line-height: 100%; /* 16px */
          }
          .credits-pro {
            margin: 18px 0px;
            color: #67acff;
            font-size: 16px;
            font-weight: 700;
            line-height: 100%; /* 16px */
          }
          .content {
            /* border: 1px solid white; */
            height: 80px;
            color: var(--text-primary, #fff);
            font-size: 12px;
            font-weight: 400;
            line-height: 170%; /* 20.4px */
          }
        }
        .btn-eco {
          width: 100%;
          margin-bottom: 28px;
          height: 35px;
          border-radius: 8px;
          background: #24c6b2;
          color: white !important;
          font-weight: bold;
          border: none;
          font-size: 16px;
        }
        .btn-basic {
          width: 100%;
          margin-bottom: 28px;
          height: 35px;
          border-radius: 8px;
          background: var(
            --primary-main,
            linear-gradient(217deg, #e250e5 5.32%, #4b50e6 94.32%)
          );
          color: white !important;
          font-weight: bold;
          border: none;
          font-size: 16px;
        }
        .btn-pro {
          width: 100%;
          margin-bottom: 28px;
          height: 35px;
          border-radius: 8px;
          background: var(--Stroke-2, #242c3d);
          color: white !important;
          font-weight: bold;
          border: none;
          font-size: 16px;
        }
        .list-benefit {
          display: flex;
          flex-direction: column;
          gap: 10px;
          .all-benefit {
            color: var(--text-primary, #fff);
            font-weight: 600;
            line-height: 100%; /* 16px */
          }
          .conten-benefit {
            display: flex;
            align-items: center;
            gap: 8px;
            img {
              width: 25.404px;
              height: 25.404px;
            }
            & > div:last-child {
              color: var(--text-secondary, #d2d2d2);
              font-size: 12px;
              font-weight: 500;
              line-height: 150%; /* 18px */
            }
          }
        }
      }
    }
  }
  .box-choosers {
    position: relative;
    width: 100%;
    border-radius: 12px;
    background: var(--Box-Field-Blue, #1c1c2c);
    padding: 0px 70px 70px;
    .header-choosers {
      display: flex;
      align-items: center;
      gap: 50px;
      .title {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 58%;
        & > div:first-child {
          color: var(--brand-color-pastel-purple, #b69aff);
          font-size: 14px;
          font-weight: 500;
          line-height: 150%; /* 21px */
        }
        & > div:nth-child(2) {
          font-size: 40px;
          color: var(--text-primary, #fff);
          font-weight: 500;
        }
        & > div:last-child {
          color: var(--text-secondary, #d2d2d2);
          font-size: 14px;
          font-weight: 500;
          line-height: 150%; /* 21px */
        }
      }
      .item-img {
        width: 42%;
        img {
          width: 100%;
        }
      }
    }
    .item-carousel {
      position: relative;
      &:hover {
        .icon-next,
        .icon-prev {
          opacity: 1;
        }
      }
      .icon-prev {
        padding: 5px;
        opacity: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        &:hover {
          border-radius: 50%;
          background-color: rgb(16, 16, 31);
        }
      }
      .icon-next {
        padding: 5px;
        opacity: 0;
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%);
        &:hover {
          border-radius: 50%;
          background-color: rgb(16, 16, 31);
        }
      }
    }
  }
  .box-question {
    .ant-collapse {
      border: none !important;
    }
    .ant-collapse > .ant-collapse-item {
      margin-bottom: 15px;
      border: 1px solid var(--outline-stroke, #1a202f);
      border-radius: 10px;
    }
    width: 100%;
    .title-question {
      color: white;
      & > div:first-child {
        color: #fff;
        text-align: center;
        font-family: GT Walsheim Pro;
        font-size: 40px;
        font-weight: 700;
        line-height: 120%; /* 48px */
        letter-spacing: -1px;
      }
      & > div:last-child {
        color: var(--text-secondary, #d2d2d2);
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%; /* 24px */
        margin-top: 5px;
        margin-bottom: 25px;
      }
    }
  }
`;

export const ItemCarousel = styled(Carousel)`
  width: 100% !important;
  .section-feedback {
    width: 300px !important;
    padding: 0px 25px;
    img {
      width: 22px;
      height: 22px;
    }
    .content {
      color: var(--text-secondary, #d2d2d2);
      font-size: 13px;
      font-weight: 600;
      line-height: 150%;
      margin: 20px 0px;
    }
    .information-user {
      & > div:first-child {
        color: var(--text-primary, #fff);
        font-size: 14px;
        font-weight: 600;
        line-height: 150%; /* 21px */
        margin-bottom: 5px;
      }
      & > div:last-child {
        color: var(--text-secondary, #d2d2d2);
        font-size: 14px;
        font-weight: 500;
        line-height: 150%; /* 21px */
      }
    }
  }
`;

export const ItemCollase = styled(Collapse)`
  width: 100%;
  .ant-collapse-header {
    color: white !important;
    padding: 12px 0px !important;
  }
  .ant-collapse-content {
    border-top: none !important;
    border-radius: 10px;
    color: white;
    background-color: rgb(9, 9, 23);
  }
  .ant-collapse-content-box {
    padding-top: 5px !important;
    padding-bottom: 12px !important;
    padding-left: 50px !important;
  }
  .ant-collapse-arrow {
    font-size: 16px !important;
    color: gray !important;
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
`;
