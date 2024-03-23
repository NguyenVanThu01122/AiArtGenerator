import styled from "styled-components";

export const DetailUser = styled.div<{ isBoxProfile: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media screen and (max-width: 768px) {
    display: ${(props) => props.isBoxProfile && "block"} !important;
    display: none;
  }
`;

export const NameUser = styled.div`
  color: white;
  font-size: 17px;
  font-weight: bold;
`;

export const CreditUser = styled.div`
  display: flex;
  align-items: center;
  color: var(--text-secondary, #d2d2d2);
`;
