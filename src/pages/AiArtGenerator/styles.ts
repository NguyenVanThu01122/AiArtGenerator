import { Modal } from "antd";
import styled from "styled-components";
export const WrapperAiArtGenerator = styled.div`
  background-color: rgb(9, 9, 23);
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
  padding: 24px 16px;
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
`;

export const ModalNotificationLogin = styled(Modal)`
  .anticon svg {
    font-size: 18px;
    &:hover {
      color: red;
    }
  }
  .ant-modal-content {
    padding: 10px;
    background-color: rgb(242, 245, 245, 0.904);
  }
  .content {
    margin: 10px;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
  }
  .group-btn {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 10px;
    .btn-login {
      font-weight: bold;
      color: white !important ;
      width: 30%;
      border: none;
      background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
      &:hover {
        filter: brightness(0.8);
      }
    }
    .btn-cancel {
      width: 25%;
      border: none;
      font-weight: bold;
      color: red !important;
      background-color: orange;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
  @media screen and (max-width: 768px) {
    .content {
      font-size: 18px;
      margin-top: 15px;
      margin-bottom: 0px;
    }
    .ant-modal-close {
      top: 5px;
      right: 6px;
    }
    .ant-modal-content {
      padding: 5px;
    }
  }
`;
