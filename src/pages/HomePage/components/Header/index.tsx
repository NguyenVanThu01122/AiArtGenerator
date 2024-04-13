// import icRight from "../../images/HomePage/";
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Grid from '@mui/material/Grid'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import FollowSocialMedia from '../../../../components/FollowSocialMedia'
import LanguageSelection from '../../../../components/Header/components/LanguageSelection'
import { TypeMenuItems } from '../../../../components/Header/components/MobileMenu'
import {
  ContentMenu,
  ContentSection,
  Header,
  MenuItem,
  SectionMenu,
  StyledBox,
  StyledDrawerMenu
} from '../../../../components/Header/components/MobileMenu/styles'
import { LogoCreatorHub } from '../../../../components/LogoCreatorHub'
import ButtonGeneral from '../../../../components/Ui/button'
import ImageGeneral from '../../../../components/Ui/image'
import iconPricing from '../../../../images/ic-pricing.svg'
import iconHome from '../../../../images/iconHome.svg'
import { ROUTES } from '../../../../routes/routes'
import { BoxLanguage, BoxLogo, GridItem, StyledGrid } from './styles'

export default function HeaderHomePage({
  isOpenMenu,
  setIsOpenMenu
}: {
  isOpenMenu: boolean
  setIsOpenMenu: (value: boolean) => void
}) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const pathName = location.pathname

  // hàm navigate chuyển hướng
  const handleRedirect = (url: string) => {
    navigate(url)
    setIsOpenMenu(false)
  }

  const handleCloseMenu = () => setIsOpenMenu(false)

  const menuItems = [
    { path: ROUTES.HOME, text: 'HOME', icon: iconHome },
    { path: ROUTES.PRICING, text: 'PRICING', icon: iconPricing }
  ]

  return (
    <StyledGrid container>
      <StyledDrawerMenu open={isOpenMenu} onClose={handleCloseMenu}>
        <StyledBox sx={{ width: 300 }}>
          <Header>
            <LogoCreatorHub />
            <FontAwesomeIcon className='icon-angles' onClick={handleCloseMenu} icon={faAnglesLeft} />
          </Header>
          <LanguageSelection />
          <ContentSection>
            <SectionMenu>
              {menuItems.map((item: TypeMenuItems, index: number) => (
                <MenuItem
                  key={index}
                  className={` ${pathName === item.path && 'border-item'}`}
                  onClick={() => handleRedirect(item.path)}
                >
                  <ImageGeneral src={item?.icon} />
                  <ContentMenu>{t(item?.text)}</ContentMenu>
                </MenuItem>
              ))}
            </SectionMenu>
            {/* Mục Follow Us */}
            <FollowSocialMedia />
          </ContentSection>
        </StyledBox>
      </StyledDrawerMenu>
      <BoxLogo>
        <LogoCreatorHub />
      </BoxLogo>
      <GridItem item>
        <ButtonGeneral i18nKey='HOME' variant='outlined' color='primary' />
        <ButtonGeneral
          i18nKey='PRICING'
          onClick={() => handleRedirect(ROUTES.PRICING)}
          sx={{ marginLeft: '16px' }}
          color='inherit'
        />
      </GridItem>
      <Grid item sx={{ display: 'flex', gap: '12px' }}>
        <BoxLanguage>
          <LanguageSelection />
        </BoxLanguage>
        <ButtonGeneral
          i18nKey='Sign up for free'
          onClick={() => handleRedirect(ROUTES.REGISTER)}
          variant='contained'
          color='primary'
          className='btn-sign-up'
        />
      </Grid>
    </StyledGrid>
  )
}
