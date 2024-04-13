import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import ButtonGeneral from '../../components/Ui/button'
import ImageGeneral from '../../components/Ui/image'
import iconAvatar from '../../images/MyAccount/avatar_25.jpg'
import icCredits from '../../images/MyAccount/icon-credit.svg'
import icEmail from '../../images/MyAccount/icon-email.svg'
import { RootState } from '../../reduxToolkit/Slices/RootReducer'
import { useLogout } from '../../utils/useLogout'
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
  Wrapper
} from './styles'
export type TypeMode = 'light' | 'dark' | 'system'
export function MyAccount() {
  const users = useSelector((state: RootState) => state.app.user)
  const handleLogout = useLogout()
  const { t } = useTranslation()

  return (
    <Wrapper>
      <ContentUsers sx={{ bgcolor: 'info.main' }}>
        <ImageAvatar src={users?.avatar || iconAvatar} alt='avatar' />
        <InformationUsers>
          <UserName>
            <LastName>{users?.lastName}</LastName>
            <FirstName>{users?.firstName}</FirstName>
          </UserName>
          <AddressWrapper>
            <ContentEmail>
              <ImageGeneral src={icEmail} alt='' />
              <EmailUser>{users?.email}</EmailUser>
            </ContentEmail>
            <ContentCredits>
              <ImageGeneral src={icCredits} alt='' />
              <CreditsNumber>{users?.credits}</CreditsNumber>
              <CreditsText>Credits</CreditsText>
            </ContentCredits>
          </AddressWrapper>
        </InformationUsers>
      </ContentUsers>

      <SectionProfile sx={{ bgcolor: 'info.main' }}>
        <ProfileDetail>{t('Profile Detail')}</ProfileDetail>
        <ContentProfile>
          <LabelProfile>
            <FullName>{t('Full Name')}</FullName>
            <EmailLabel>{t('Email')}</EmailLabel>
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
      <ButtonGeneral i18nKey='SIGN_OUT' className='btn-signOut' onClick={handleLogout} />
    </Wrapper>
  )
}
