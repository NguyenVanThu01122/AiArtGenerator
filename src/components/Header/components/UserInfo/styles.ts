import styled from "styled-components";

export const NameUser = styled.div`
  color: var(--text-color);
  font-size: 17px;
  font-weight: bold;
`;

export const CreditUser = styled.div`
  display: flex;
  align-items: center;
  color: var(--text-color);
  gap: 5px;
  span {
    background: linear-gradient(90deg, #f23061 -7.43%, #faa227);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
    font-size: 18px;
  }
  img {
  }
`;

export const DetailUser = styled.div<{ isBoxProfile: boolean }>`
  display: flex;
  flex-direction: column;
  /* gap: 6px; */
  @media screen and (max-width: 768px) {
    display: ${(props) => props.isBoxProfile && "block"} !important;
    display: none;
    ${CreditUser} {
      margin-top: 10px;
    }
  }
`;
