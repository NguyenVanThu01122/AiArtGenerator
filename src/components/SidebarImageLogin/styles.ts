import styled from "styled-components";

export const WrapperSidebarImage = styled.div`
  width: 50%;
  height: 90vh;
  background-color: rgb(13, 18, 32);
  border-radius: 8px;  
  .ant-carousel .slick-dots li {
    position: relative;
    top: -80px !important;
    background-color: orangered;
  }
  .item-carousel {
    & img {
    }
  }
`;
