import styled from "styled-components";
import ImageGeneral from "../Ui/image";

export const WrapperSidebar = styled.div<{ closeMenu: boolean }>`
  background-color: rgb(9, 9, 23);
  width: ${(props) => (props?.closeMenu ? "120px" : "280px")};
  transition: 0.3s ease;
  height: 100%;
  border-right: 1px solid rgb(30, 36, 49);
  display: flex;
  flex-direction: column;
  .border {
    background: rgb(36, 36, 60);
    border-radius: 5px;
    box-shadow: 0 0 2px 1px violet;
  }
  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const WrapperMenu = styled.div<{ closeMenu: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  justify-content: ${(props: any) =>
    props.closeMenu ? "center" : "flex-start"} !important;
  span {
    display: ${(props: any) =>
      props.closeMenu ? "none" : "inline"} !important;
  }
  &:hover {
    background: rgb(36, 36, 60);
    border-radius: 5px;
  }
  span {
    color: white;
  }
  .ic-avatar {
    color: white;
    font-size: 20px;
  }
`;

export const SectionProductMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TitleMenu = styled.div`
  color: white;
  margin: 18px 0px;
  font-size: 15px;
  font-weight: 300;
`;

export const LogoCreator = styled.div`
  height: 75px;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  padding: 22px;
  border-bottom: 1px solid rgb(30, 36, 49);
`;

export const StyledImageGeneral = styled(ImageGeneral)`
  width: 25px;
  height: 25px;
  object-fit: cover;
`;

export const NameApp = styled.span<{ closeMenu: boolean }>`
  display: ${(props: any) => (props.closeMenu ? "none" : "block")};
  color: white;
  font-size: 24px;
  font-weight: 500;
`;

export const ContainerMenu = styled.div<{ closeMenu: boolean }>`
  flex: 1;
  overflow-y: auto;
  padding: 18px;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px !important;
  }
  &::-webkit-scrollbar {
    width: 3px !important;
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

