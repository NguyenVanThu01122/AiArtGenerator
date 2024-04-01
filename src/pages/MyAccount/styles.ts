import styled from "styled-components";
import ImageGeneral from "../../components/Ui/image";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .btn-signOut {
    height: 40px;
    width: 12%;
    font-size: 18px;
    font-weight: bold;
    color: white !important;
    border: none;
    background: linear-gradient(217deg, #e250e5 0%, #4b50e6 100%);
    &:hover {
      filter: brightness(0.7);
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    .btn-signOut {
      width: 100%;
      height: 45px;
    }
  }
`;

export const ContentUsers = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  background: #141420;
  padding: 24px;
`;

export const ImageAvatar = styled(ImageGeneral)`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  @media screen and (max-width: 768px) {
    justify-content: start;
  }
`;

export const InformationUsers = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const UserName = styled.div`
  display: flex;
  gap: 5px;
  font-size: 22px;
  font-weight: bold;
  color: white;
`;

export const LastName = styled.div``;
export const FirstName = styled.div``;

export const EmailUser = styled.div`
  color: #d2d2d2;
  font-size: 15px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const AddressWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentCredits = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #d2d2d2;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const ContentEmail = styled.div`
  display: flex;
  gap: 10px;
`;

export const CreditsNumber = styled.div`
  background: linear-gradient(90deg, #f23061 -7.43%, #faa227);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  font-size: 18px;
`;

export const CreditsText = styled.div``;

export const SectionProfile = styled.div`
  border-radius: 8px;
  background: #141420;
  padding: 24px;
  color: white;
`;
export const ProfileDetail = styled.div`
  padding-bottom: 30px;
  color: white;
  font-weight: bold;
  font-size: 22px;
  border-bottom: 1px solid #242c3d;
`;

export const ContentProfile = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 60px;
`;

export const LabelProfile = styled.div`
  color: #d2d2d2;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const FullName = styled.div`
  margin-bottom: 20px;
`;
export const EmailLabel = styled.div``;

export const GroupInfoName = styled.div`
  margin-bottom: 20px;
`;

export const NameText = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
`;
