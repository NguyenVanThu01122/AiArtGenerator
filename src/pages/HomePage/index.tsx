import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import ImageGeneral from '../../components/Ui/image'
import iconEmail from '../../images/HomePage/icon-mail.9ce7672789a3a4ae3a7e47c761232abf.svg'
import logoCreator from '../../images/iconLogin1.png'

import HeaderHomePage from './components/Header'
import SectionTextToImage from './components/SectionTextToImage/indext'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import FollowSocialMedia from '../../components/FollowSocialMedia'
import ButtonGeneral from '../../components/Ui/button'
import { ROUTES } from '../../routes/routes'
import { useChangeLanguage } from '../../utils/useChangeLanguage'
import ListFeature from './components/ListFeature'
import SocialMediaContent from './components/SocialMediaContent'
import { UserTestimonial } from './components/UserTestimonial'
import {
  Address,
  CreatorHup,
  Describe,
  Email,
  Finalcontent,
  Footer,
  GroupText,
  HeaderPage,
  InfoAboutUs,
  InfoMy,
  ItemSocialMedia,
  MainContent,
  ProjectName,
  ReadyText,
  StyledContainer,
  TextFinal,
  TextFooter
} from './home.styles'

export function HomePage() {
  const { t } = useTranslation()
  useChangeLanguage()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const showMenu = () => setIsOpenMenu(true)
  const navigate = useNavigate()

  return (
    <StyledContainer>
      <MainContent>
        <HeaderPage>
          <FontAwesomeIcon className='ic-menu' icon={faBars} onClick={showMenu} />
          <HeaderHomePage isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        </HeaderPage>
        <SectionTextToImage />
        <ListFeature />
        <SocialMediaContent />
        <UserTestimonial />
        <Finalcontent>
          <TextFinal>
            <ReadyText>{t('Ready to Elevate Your Creativity?')}</ReadyText>
            <Describe>{t('Describe')}</Describe>
            <ButtonGeneral
              i18nKey='Sign up for free'
              onClick={() => navigate(ROUTES.REGISTER)}
              variant='contained'
              color='primary'
            />
          </TextFinal>
        </Finalcontent>
      </MainContent>
      <InfoAboutUs>
        <ProjectName>
          <ImageGeneral src={logoCreator} />
          <CreatorHup>CreatorHup</CreatorHup>
        </ProjectName>
        <InfoMy>
          <Address>
            <ImageGeneral src={iconEmail} />
            <Email>creatorhub.support@gmail.com</Email>
          </Address>
          <ItemSocialMedia>
            <FollowSocialMedia />
          </ItemSocialMedia>
        </InfoMy>
      </InfoAboutUs>
      <Footer>
        <TextFooter>{t('© 2023 by VisionLab., Inc. All Rights Reserved.')}</TextFooter>
        <GroupText>
          <TextFooter>{t('Privacy Policy')}</TextFooter>
          <TextFooter>{t('Terms of Service')}</TextFooter>
          <TextFooter>{t('Cookies Policy')}</TextFooter>
        </GroupText>
      </Footer>
    </StyledContainer>
  )
}
