import styled from "styled-components";

export const WrapperPricing = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 15px;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px !important;
  }
  &::-webkit-scrollbar {
    width: 4px !important;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent !important; //Màu của vùng cuộn
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
  }
`;

export const BoxContent = styled.div`
  margin: auto;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  @media screen and (max-width: 768px) {
    gap: 50px;
  }
`;
