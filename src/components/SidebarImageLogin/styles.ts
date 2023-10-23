import styled from "styled-components";

export const WrapperSidebarImage = styled.div`
  width: 53%;
  height: 100vh;
  background-color: rgb(13, 18, 32);
  /* background-image: url('https://melkior-nguyen.github.io/Portfolio/static/media/bg2.e6fe0abcb2a72bd51eee.jpg');
  background-repeat: no-repeat;
  background-size: cover; */
  /* background-color: black; */
  /* background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%); */

  border-radius: 8px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  .ant-carousel .slick-dots li {
    position: relative;
    top: -20px !important;
    background-color: orangered;
  }
  .item-carousel {
    height: 100%;
    & img {
      width: 100%;
      height: 650px;
    }
  }
  .welcome-text {
    color: white;
    font-weight: 600;
    font-style: italic;
    text-align: center;
    font-size: large;
    letter-spacing: 4px; //xác định khoảng cách giữa các ký tự trong văn bản
    margin-top: 16px;
    /* animation: welcomAnimationLeftRigth 5s  infinite;
    animation-delay: 2s;
    border: 1px solid red;
    @keyframes welcomAnimationLeftRigth {
      from {
        transform: translatey(100px);
        opacity: 0;
      }
      to {
        transform: translatey(0);
        opacity: 1;
      }
    } */
  }
`;
