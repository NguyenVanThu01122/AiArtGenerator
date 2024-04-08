import styled from "styled-components";
export const WrapperAiArtGenerator = styled.div`
  /* background-color: rgb(9, 9, 23); */
  width: 100%;
  height: 100%;
`;

export const SectionContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
    overflow-y: auto;
    &::-webkit-scrollbar-thumb {
      border-radius: 5px !important;
    }
    &::-webkit-scrollbar {
      width: 4px !important;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent !important; //Màu của vùng cuộn
    }
    &:hover {
      &::-webkit-scrollbar-thumb {
        background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
      }
    }
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 22px;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px !important;
  }
  &::-webkit-scrollbar {
    width: 4px !important;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent !important; //Màu của vùng cuộn
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;
