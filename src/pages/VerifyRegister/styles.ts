import styled from "styled-components";

export const Wrapper = styled.div`
  span {
    font-size: 20px;
    color: blueviolet;
    font-weight: 700;
    cursor: pointer;
    margin: 0px 5px;
    font-style: italic;
    &:hover {
      color: red;
    }
  }
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent
    radial-gradient(
      circle farthest-side at right bottom,
      #40a7ec 5%,
      #1eb0e9 25%,
      #1bcbd8 80%,
      #187ec2 98%
    )
    repeat scroll 0 0;
  font-size: 18px;
  color: #013d64;
  font-weight: 600;
`;
