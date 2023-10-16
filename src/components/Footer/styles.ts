import styled from "styled-components";

export const WrapperFooter = styled.div`
  border-top: 1px solid var(--outline-stroke, #1a202f);
  margin-top: 70px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  & > div:first-child {
    color: white;
    font-size: 13px;
  }
  .group-text {
    display: flex;
    gap: 20px;
    div {
      color: white;
      cursor: pointer;
      font-size: 13px;
    }
  }
`;
