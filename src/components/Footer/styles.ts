import styled from "styled-components";

export const WrapperFooter = styled.div`
  border-top: 1px solid #1a202f;
  margin-top: 70px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  background-image: url("https://creatorhub.ai/static/media/ready-start-bg.c80579052a6e6eeee38e.png");
  background-repeat: no-repeat;
  background-size: cover;
  & > div:first-child {
    color: #d2d2d2;
    font-size: 13px;
  }
  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
    padding: 0px;
    & > div:first-child {
      margin-top: 15px;
    }
  }
`;

export const GroupText = styled.div`
  display: flex;
  gap: 20px;
  div {
    color: #d2d2d2;
    cursor: pointer;
    font-size: 13px;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 15px;
    margin: 10px 0px;
    div {
      font-size: 12px;
    }
  }
`;
