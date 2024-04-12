import { Box } from '@mui/material'
import { Carousel } from 'antd'
import styled from 'styled-components'

export const WrapperHome = styled.div`
  width: 100%;
  height: 100%;
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

  .slick-dots {
    position: absolute;
    bottom: -25px;
    list-style: none;
    display: block;
    text-align: center;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .slick-dots li {
    position: relative;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin: 0 5px;
    padding: 0;
  }

  .slick-dots li button {
    border: 0;
    background: transparent;
    display: block;
    height: 20px;
    width: 20px;
    outline: none;
    line-height: 0;
    font-size: 0;
    color: transparent;
    padding: 5px;
    cursor: pointer;
  }
  @media screen and (max-width: 768pcustom-btnx) {
    gap: 90px;
  }
`

export const BoxContent = styled.div`
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 110px;
  @media screen and (max-width: 768px) {
    gap: 60px;
    padding: 15px 15px 0px 15px;
  }
`

export const ItemCarousel = styled(Carousel)`
  width: 100%;
  height: 515px;
  margin-top: -90px;
  .slick-dots li {
    width: 15px !important;
    height: 15px !important;
    button {
      background-color: #e250e5 !important;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
  .introduce-item {
    display: flex !important;
    padding-top: 0px !important;
    gap: 40px;
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
        font-size: 22px;
        font-weight: 900;
        line-height: 150%; /* 24px */
        letter-spacing: 2px;
      }
      & > div:nth-child(2) {
        color: var(--text-color);
        font-size: 35px;
        font-weight: 700;
        line-height: 120%; /* 48px */
      }
      & > div:nth-child(3) {
        /* color: #d2d2d2*/
        color: var(--text-color);
        font-size: 16px;
        font-weight: 400;
        line-height: 150%; /* 24px */
        span {
          /* color: white; */
          color: var(--text-color);
          font-weight: bold;
          line-height: 150%; /* 24px */
        }
      }
      .custom-btn {
        width: 60%;
        height: 48px;
        display: flex;
        padding: 8px 16px;
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
          color: white !important;
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
    margin-top: -50px;
    .slick-dots li {
      margin-bottom: 60px;
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
        .custom-btn {
          width: 100%;
          height: 46px;
        }
      }
    }
  }
`

export const SectionContents = styled.div`
  width: 94%;
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
      color: #b69aff;
      font-size: 22px;
      font-weight: 900;
      line-height: 150%; /* 21px */
      letter-spacing: 2px;
    }
    & > div:nth-child(2) {
      color: var(--text-color);
      font-size: 35px;
      font-weight: 700;
      line-height: 120%; /* 48px */
    }
    & > div:last-child {
      /* color: #d2d2d2; */
      color: var(--text-color);
      font-size: 16px;
      font-weight: 400;
      line-height: 150%; /* 24px */
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 50px;
    margin-top: 180px;
    .title {
      width: 100%;
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
`

export const ContainerProducts = styled.div`
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
        height: 80px;
        margin: 15px 0px;
        overflow-y: auto;
        &::-webkit-scrollbar-thumb {
          border-radius: 5px;
        }
        &::-webkit-scrollbar {
          width: 1px;
        }
        &::-webkit-scrollbar-track {
          background-color: transparent; //Màu của vùng cuộn
        }
        &::-webkit-scrollbar-thumb {
          background: linear-gradient(217deg, #e250e5, #4b50e6);
        }
        & > div:first-child {
          color: var(--text-color);
          font-size: 17px;
          font-weight: 700;
          line-height: 150%; /* 24px */
          margin-bottom: 4px;
        }
        & > div:last-child {
          /* color:  #d2d2d2; */
          color: var(--text-color);
          font-size: 14px;
          font-weight: 400;
          line-height: 150%; /* 21px */
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
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
        }
        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .list-products {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .detail-Product {
        .btn-try-now {
          border: 1px solid red;
          width: 100% !important;
        }
      }
    }
  }
`

export const TitleItem = styled.div``

export const ContainerBenefits = styled(Box)`
  padding: 40px 20px;
  border-radius: 10px;
  .title {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    & > div:first-child {
      color: #b69aff;
      font-size: 22px;
      font-weight: 900;
      line-height: 150%; /* 21px */
      letter-spacing: 2px;
    }
    & > div:nth-child(2) {
      color: white;
      font-size: 35px;
      font-weight: 700;
      line-height: 120%; /* 48px */
    }
    & > div:last-child {
      color: #d2d2d2;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%; /* 24px */
    }
  }
  .box-benefits {
    margin-top: 40px;
    color: white;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    .detail-benefit {
      position: relative;
      border-radius: 12px;
      padding: 20px;
      cursor: pointer;
      background: #141420;
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
          color: #fff;
          font-weight: 700;
          line-height: 24px; /* 133.333% */
        }
        & > div:last-child {
          color: #d2d2d2;
          line-height: 24px; /* 150% */
        }
      }
    }
  }
  @media screen and (max-width: 1500px) {
    padding: 15px;
  }
  @media screen and (max-width: 768px) {
    padding: 16px;
    .title {
      width: 100%;
      gap: 0px;
      & > div:nth-child(2) {
        font-size: 22px;
        margin: 8px 0px;
      }
    }
    .box-benefits {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`

export const ContainerTestimonials = styled.div`
  .list-testimonials {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 40px;
  }
  @media screen and (max-width: 768px) {
    .list-testimonials {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`

export const TestimonialBox = styled(Box)`
  border-radius: 10px;
  /* background: #141420; */
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
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
  .information-user {
    & > div:first-child {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      line-height: 150%; /* 21px */
    }
    & > div:last-child {
      color: #d2d2d2;
      font-size: 12px;
      font-weight: 400;
      line-height: 150%; /* 18px */
    }
  }
`

export const LastItem = styled.div`
  background-image: url('https://creatorhub.ai/static/media/ready-start-bg.c80579052a6e6eeee38e.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding: 40px;
  border-radius: 10px;
  .header {
    text-align: center;
    & > div:first-child {
      color: #fff;
      font-size: 35px;
      font-weight: 700;
      line-height: 120%; /* 48px */
    }
    & > div:nth-child(2) {
      margin-top: 10px;
      color: #d2d2d2;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%; /* 24px */
    }
    button {
      font-size: 17px;
      margin-top: 45px;
      width: 16%;
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
    padding-top: 0px;
    padding: 0px;
    background-image: none;
    color: var(--text-color);
    .header {
      box-shadow: 0px 0px 8px 2px rgb(255, 255, 255);
      padding: 25px 10px;
      & > div:first-child {
        font-size: 22px;
        color: var(--text-color);
      }
      & > div:nth-child(2) {
        color: var(--text-color);
      }
    }
    button {
      width: 100% !important;
    }
  }
`
