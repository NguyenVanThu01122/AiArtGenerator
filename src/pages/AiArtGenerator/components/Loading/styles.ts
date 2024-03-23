import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .image-loading {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
