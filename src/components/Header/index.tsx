import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import iconAvatar from '../../images/MyAccount/avatar_25.jpg'
import iconCloseSidebar from '../../images/icon-close-sidebar.svg'
import iconOpenSidebar from '../../images/icon-open-sidebar.svg'

import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../routes/routes'
import { isAuthenticated } from '../../utils/handleTokenUtils'
import { useLogout } from '../../utils/useLogout'
import { LogoCreatorHub } from '../LogoCreatorHub'
import ButtonGeneral from '../Ui/button'
import ImageGeneral from '../Ui/image'
import LanguageSelection from './components/LanguageSelection'
import MobileMenu from './components/MobileMenu'
import ModeToggle from './components/ModeToggle'
import UserInfo from './components/UserInfo'
import {
  BoxAccount,
  BoxContent,
  BoxProfile,
  ContainerProfile,
  ContentUser,
  DisPlayPathName,
  ItemMenu,
  ItemModeToggle,
  MobileLogoCreator,
  OptionItem,
  PathNameItem,
  PathNameProducts,
  SelectItem,
  WrapperHeader
} from './styles'
import { saveCloseMenu } from '../../redux/Slices/AppSlice'

function Header() {
  const pathName = window.location.pathname
  const [savePathName, setSavePathName] = useState('')
  const { user, closeMenu } = useSelector((state: any) => state.app)
  const [isShowBoxProfile, setIsShowBoxProfile] = useState(false)
  const profileRef = useRef<HTMLImageElement | null>(null)
  const loggedIn = isAuthenticated()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const handleLogout = useLogout()

  const filterListPathName = [ROUTES.HOME, ROUTES.PRICING, ROUTES.MY_ACCOUNT, ROUTES.AI_IMAGE_RESULT]

  // hàm xử lý lọc pathName
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFilterPathName = () => {
    switch (pathName) {
      case ROUTES.HOME:
        setSavePathName('HOME')
        break
      case ROUTES.PRICING:
        setSavePathName('PRICING')
        break
      case ROUTES.AI_IMAGE_RESULT:
        setSavePathName('AI_IMAGE_RESULT')
        break
      case ROUTES.MY_ACCOUNT:
        setSavePathName('MY_ACCOUNT')
        break
      case ROUTES.AI_ART_GENERATOR:
        setSavePathName('AI_ART_GENERATOR')
        break
      case ROUTES.AI_PHOTO_ENHANCER:
        setSavePathName('AI_PHOTO_ENHANCER')
        break
      case ROUTES.AI_BACKGROUND_REMOVE:
        setSavePathName('AI_BACKGROUND_REMOVE')
        break
      default:
        setSavePathName('')
    }
  }

  // hàm navigate chuyển hướng
  const handleRedirect = (url: string) => {
    navigate(url)
    setIsShowBoxProfile(false)
  }

  const toggleMenuVisibility = () => dispatch(saveCloseMenu(!closeMenu))

  // hàm chuyển đổi trạng thái của boxProfile
  const toggleBoxProfile = () => setIsShowBoxProfile(!isShowBoxProfile)

  useEffect(() => {
    handleFilterPathName()
  }, [handleFilterPathName, pathName])

  // Sử dụng useEffect để theo dõi sự kiện click trên document
  useEffect(() => {
    // Hàm xử lý khi click ra ngoài hộp profile
    const handleDocumentClick = (e: any) => {
      const target = e.target // Lấy phần tử mà người dùng đã click vào
      if (
        isShowBoxProfile &&
        profileRef.current &&
        !profileRef.current.contains(target) // Kiểm tra xem phần tử mà user đã click vào có nằm trong hộp profile hay không
      ) {
        setIsShowBoxProfile(false) // Nếu click ra ngoài hộp menu, ẩn hộp profile
      }
    }
    document.addEventListener('click', handleDocumentClick) // Dòng này lắng nghe sự kiện click lên toàn bộ tài liệu (document). Khi một sự kiện click xảy ra bất kỳ nơi nào trên trang, handleDocumentClick sẽ được gọi.
    return () => document.removeEventListener('click', handleDocumentClick) // Cleanup listener khi component unmount
  }, [isShowBoxProfile])

  return (
    <WrapperHeader>
      <DisPlayPathName>
        {closeMenu ? (
          <ImageGeneral className='ic-close' onClick={toggleMenuVisibility} src={iconOpenSidebar} />
        ) : (
          <ImageGeneral className='ic-close' onClick={toggleMenuVisibility} src={iconCloseSidebar} />
        )}
        <PathNameItem>
          {filterListPathName.includes(pathName) ? (
            t(savePathName)
          ) : (
            <PathNameProducts>
              {t('Products /')}
              <span>{t(savePathName)}</span>
            </PathNameProducts>
          )}
        </PathNameItem>
      </DisPlayPathName>
      <MobileMenu />

      <MobileLogoCreator>
        <LogoCreatorHub />
      </MobileLogoCreator>

      <BoxContent>
        <OptionItem>
          <LanguageSelection />
          <ItemModeToggle>
            <ModeToggle />
          </ItemModeToggle>
        </OptionItem>

        {loggedIn ? (
          <BoxAccount>
            <UserInfo />
            <ContainerProfile ref={profileRef}>
              <ImageGeneral className='avatar' onClick={toggleBoxProfile} src={user?.avatar || iconAvatar} />
              {isShowBoxProfile && (
                <BoxProfile
                  sx={{
                    bgcolor: 'background.default'
                  }}
                >
                  <ContentUser>
                    <ImageGeneral className='avatar' src={user?.avatar || iconAvatar} />

                    <UserInfo isShowBoxProfile={isShowBoxProfile} />
                  </ContentUser>
                  <SelectItem>
                    <ItemMenu onClick={() => handleRedirect(ROUTES.MY_ACCOUNT)}>{t('MY_ACCOUNT')}</ItemMenu>
                    <ItemMenu onClick={handleLogout}>{t('lOG_OUT')}</ItemMenu>
                  </SelectItem>
                </BoxProfile>
              )}
            </ContainerProfile>
          </BoxAccount>
        ) : (
          <ButtonGeneral i18nKey='LOG_IN' className='btn-login' onClick={() => navigate(ROUTES.SIGN_IN)} />
        )}
      </BoxContent>
    </WrapperHeader>
  )
}
export default Header
