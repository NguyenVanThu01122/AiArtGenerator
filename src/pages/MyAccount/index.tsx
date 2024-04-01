import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonGeneral from "../../components/Ui/button";
import ImageGeneral from "../../components/Ui/image";
import icCredits from "../../images/MyAccount/icon-credit.svg";
import icEmail from "../../images/MyAccount/icon-email.svg";
import imgAvatarDefault from "../../images/avatar-default.jpg";
import { RootState } from "../../reduxToolkit/Slices/RootReducer";
import {
  AddressWrapper,
  ContentCredits,
  ContentEmail,
  ContentProfile,
  ContentUsers,
  CreditsNumber,
  CreditsText,
  EmailLabel,
  EmailUser,
  FirstName,
  FullName,
  GroupInfoName,
  ImageAvatar,
  InformationUsers,
  LabelProfile,
  LastName,
  NameText,
  ProfileDetail,
  SectionProfile,
  UserName,
  Wrapper,
} from "./styles";

export function MyAccount() {
  const users = useSelector((state: RootState) => state.app.user);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ContentUsers>
        <ImageAvatar src={users?.avatar || imgAvatarDefault} alt="avatar" />
        <InformationUsers>
          <UserName>
            <LastName>{users?.lastName}</LastName>
            <FirstName>{users?.firstName}</FirstName>
          </UserName>
          <AddressWrapper>
            <ContentEmail>
              <ImageGeneral src={icEmail} alt="" />
              <EmailUser>{users?.email}</EmailUser>
            </ContentEmail>
            <ContentCredits>
              <ImageGeneral src={icCredits} alt="" />
              <CreditsNumber>{users?.credits}</CreditsNumber>
              <CreditsText>Credits</CreditsText>
            </ContentCredits>
          </AddressWrapper>
        </InformationUsers>
      </ContentUsers>
      <SectionProfile>
        <ProfileDetail>Profile Details</ProfileDetail>
        <ContentProfile>
          <LabelProfile>
            <FullName>Full Name</FullName>
            <EmailLabel>Email</EmailLabel>
          </LabelProfile>
          <GroupInfoName>
            <NameText>
              <LastName>{users?.lastName}</LastName>
              <FirstName>{users?.firstName}</FirstName>
            </NameText>
            <EmailUser>{users?.email}</EmailUser>
          </GroupInfoName>
        </ContentProfile>
      </SectionProfile>
      <ButtonGeneral
        className="btn-signOut"
        onClick={() => navigate("/sign-in")}
      >
        Sign Out
      </ButtonGeneral>
    </Wrapper>
  );
}
