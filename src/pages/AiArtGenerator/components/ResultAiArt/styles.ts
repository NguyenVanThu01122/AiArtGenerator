import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import ImageGeneral from "../../../../components/Ui/image";

export const ResultsItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    .box-result {
      gap: 0px;
      flex-direction: column;
      .display-image {
        width: 100%;
      }
      .section-parameter {
        width: 100%;
        overflow-y: visible;
        display: flex;
        flex-direction: column;
        gap: 25px;
        .information-result {
          display: flex;
          gap: 0px;
          justify-content: space-between;
          .detail-result {
            .text-group {
            }
          }
        }
      }
      .button-group {
        margin: 10px 0px;
        .copy-button,
        .download-button {
          width: 50%;
          font-size: 13px;
          font-weight: 700 !important;
        }
      }
    }
  }
`;

export const BackItem = styled.div`
  height: 80px;
  display: flex;
  gap: 10px;
  padding: 0px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: max-content;
  img {
    width: 24px;
  }
`;
export const IconBack = styled(FontAwesomeIcon)`
  color: var(--text-color);
  font-size: 20px;
  margin-right: 6px;
  font-weight: bold;
`;

export const BackToGenerate = styled.div`
  color: var(--text-color);
  font-weight: bold;
`;

export const BoxResult = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  gap: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0px 27px;
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
    gap: 0px;
    flex-direction: column;
    padding: 0px 18px;
  }
`;

export const DisplayImage = styled.div`
  position: relative;
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const TitlePage = styled.div`
  color: var(--text-color);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
`;

export const ImageResult = styled(ImageGeneral)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export const SectionParameter = styled.div`
  padding: 20px 0px;
  padding-right: 8px;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: var(--text-color);
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent; //Màu của vùng cuộn
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(217deg, #e250e5, #4b50e6);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-y: visible;
    display: flex;
    flex-direction: column;
    gap: 25px;
    .information-result {
      display: flex;
      gap: 0px;
      justify-content: space-between;
      .detail-result {
        .text-group {
        }
      }
    }
  }
`;

export const InfoParameter = styled.div`
  height: 500px;
  border: 1px solid #e250e5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding: 20px;
  @media screen and (max-width: 768px) {
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 22px;
`;

export const TitleParameter = styled.div`
  font-weight: 600;
`;

export const Content = styled.div`
  width: 200px;
  overflow: auto;
  color: var(--text-color);
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent; //Màu của vùng cuộn
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(217deg, #e250e5, #4b50e6);
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  .copy-button {
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #e250e5;
    background: #101010;
    color: white;
    height: 45px;
    font-weight: bold;
    &:hover {
      filter: brightness(0.6);
    }
  }
  .download-button {
    padding: 12px 24px;
    color: white;
    height: 45px;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    background: linear-gradient(217deg, #e250e5 5.32%, #4b50e6 94.32%);
    &:hover {
      filter: brightness(0.6);
    }
  }
  @media screen and (max-width: 768px) {
    margin: 10px 0px;
    .copy-button,
    .download-button {
      padding: 10px 0px;
      width: 100%;
      font-size: 10px;
    }
  }
`;
