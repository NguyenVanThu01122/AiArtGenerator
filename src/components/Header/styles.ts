import styled from "styled-components";
export const WrapperHeader = styled.div`
  position: relative;
  /* background-color: rgb(9, 9, 23); */
  height: 75px;
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgb(30, 36, 49);
  .custom-button {
    width: 10%;
    color: white !important;
    background: linear-gradient(
      190deg,
      rgb(226, 80, 229) 0%,
      rgb(75, 80, 230) 100%
    );
    font-weight: bold;
    border: none;
    &:hover {
      filter: brightness(0.6);
    }
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const MobileLogoCreator = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const DisPlayPathName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: white;
  .ic-close {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;

export const PathNameItem = styled.div`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  gap: 10px;
`;

export const PathNameProducts = styled.div`
  & span {
    margin-left: 5px;
    background: linear-gradient(90deg, #f23061 -7.43%, #faa227);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
    font-size: 18px;
    &:hover {
      color: white;
      cursor: pointer;
    }
  }
`;

export const BoxAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AccountInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NameUser = styled.div`
  font-weight: 800;
  margin-bottom: 3px;
  color: white;
  font-size: 14px;
`;

export const CreditUser = styled.div`
  color: white;
  font-size: 14px;
`;

export const ContainerProfile = styled.div`
  .avatar {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: contain;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }
`;

export const BoxProfile = styled.div`
  z-index: 100;
  position: absolute;
  bottom: -280%;
  right: 0px;
  width: 280px;
  background: rgb(20, 20, 31);
  border-radius: 8px;
  @media screen and (max-width: 768px) {
  }
`;

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  .avatar {
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 50%;
    @media screen and (max-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }
`;

export const SelectItem = styled.div`
  padding: 20px;
  border-top: 1px solid rgb(30, 36, 49);
`;

export const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: white;
  &:hover {
    background: rgb(36, 36, 60);
    border-radius: 5px;
  }
`;
