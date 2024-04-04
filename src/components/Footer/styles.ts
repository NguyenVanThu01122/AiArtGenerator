import styled from "styled-components";

export const WrapperFooter = styled.div`
  width: 100%;
  border-top: 1px solid #1a202f;
  margin-top: 70px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  /* background-image: url("https://creatorhub.ai/static/media/ready-start-bg.c80579052a6e6eeee38e.png");
  background-repeat: no-repeat;
  background-size: cover; */
  & > div:first-child {
    color: var(--text-color);
  }
  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
    padding: 0px ;
    margin-top: 20px;

    & > div:first-child {
      margin-top: 15px;
    }
  }
`;

export const GroupText = styled.div`
  display: flex;
  gap: 20px;
  div {
    color: var(--text-color);
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 10px;
    margin: 10px 0px;
    font-size: 12px;
  }
`;
