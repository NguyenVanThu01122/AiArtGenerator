import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-color: r  gb(9, 9, 23); */
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  .img-error {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .btn {
    position: absolute;
    width: 10%;
    margin: auto;
    left: 0px;
    right: 0px;
    bottom: 60px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    height: 45px;
    color: white !important;
    background: linear-gradient(217deg, #e250e5 5.32%, #4b50e6 94.32%);
    &:hover {
      filter: brightness(0.7);
    }
  }
  @media screen and (max-width: 768px) {
    background-color: rgb(9, 9, 23);
    .img-error {
      img {
        object-fit: contain;
      }
    }
    .btn {
      width: 60%;
      bottom: 140px;
    }
  }
`;
