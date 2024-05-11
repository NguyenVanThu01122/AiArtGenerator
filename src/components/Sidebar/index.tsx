import { Tooltip } from 'antd'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import iconAiBackgroundChange from '../../images/ic-ai-background-chage.svg'
import iconPricing from '../../images/ic-pricing.svg'
import iconAiArtGenerator from '../../images/iconAiArtGenerator.svg'
import { default as icAvatar, default as iconAiPhoto } from '../../images/iconAiPhoto.svg'
import iconHome from '../../images/iconHome.svg'
import iconAiArt from '../../images/iconLogin1.png'
import { RootState } from '../../redux/Slices/RootReducer'
import { ROUTES } from '../../routes/routes'
import FollowSocialMedia from '../FollowSocialMedia'
import ImageGeneral from '../Ui/image'
import {
  BoxSocialMedia,
  ContainerMenu,
  LogoCreator,
  NameApp,
  SectionProductMenu,
  StyledImageGeneral,
  TitleMenu,
  WrapperMenu,
  WrapperSidebar
} from './styles'
interface TypeMenuData {
  title: string
  path: string
  icon: string
  iconType?: string
}

export default function Sidebar() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const pathName = window.location.pathname
  const closeMenu = useSelector((state: RootState) => state.app.closeMenu)

  // hàm navigate chuyển hướng
  const handleRedirect = (url: string) => {
    navigate(url)
  }

  const MenuItem = ({ title, path, icon }: TypeMenuData) => (
    <Tooltip arrow placement='right' title={closeMenu && t(title)}>
      <WrapperMenu
        closeMenu={closeMenu}
        className={pathName === path ? 'border' : ''}
        onClick={() => handleRedirect(path)}
      >
        {icon && <ImageGeneral className='icon' src={icon} />}
        <span>{t(title)}</span>
      </WrapperMenu>
    </Tooltip>
  )

  const MenuSectionProduct = ({ title, items }: { title: string; items: TypeMenuData[] }) => (
    <SectionProductMenu>
      <TitleMenu closeMenu={closeMenu}>{t(title)}</TitleMenu>
      {items.map((item: TypeMenuData, index: number) => (
        <MenuItem key={index} {...item} />
      ))}
    </SectionProductMenu>
  )

  return (
    <WrapperSidebar closeMenu={closeMenu}>
      <LogoCreator onClick={() => navigate('/')}>
        <StyledImageGeneral src={iconAiArt} alt='iconAiArt' />
        <NameApp closeMenu={closeMenu}>CreatorHub</NameApp>
      </LogoCreator>

      <ContainerMenu closeMenu={closeMenu}>
        <MenuItem title='HOME' path={ROUTES.HOME} icon={iconHome} />
        <MenuItem title='PRICING' path={ROUTES.PRICING} icon={iconPricing} />
        <MenuItem title='AI_IMAGE_RESULT' path={ROUTES.AI_IMAGE_RESULT} icon={icAvatar} />

        <MenuSectionProduct
          title='PRODUCTS'
          items={[
            {
              title: 'AI_ART_GENERATOR',
              path: ROUTES.AI_ART_GENERATOR,
              icon: iconAiArtGenerator
            },
            {
              title: 'AI_PHOTO_ENHANCER',
              path: ROUTES.AI_PHOTO_ENHANCER,
              icon: iconAiPhoto
            },
            {
              title: 'AI_BACKGROUND_REMOVE',
              path: ROUTES.AI_BACKGROUND_REMOVE,
              icon: iconAiBackgroundChange
            }
          ]}
        />
      </ContainerMenu>

      {/* item socialMedia */}
      <BoxSocialMedia closeMenu={closeMenu}>
        <FollowSocialMedia />
      </BoxSocialMedia>
    </WrapperSidebar>
  )
}
