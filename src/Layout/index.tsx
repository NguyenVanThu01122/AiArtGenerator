import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useSearchParams } from 'react-router-dom'
import DialogLoin from '../components/DialogLogin'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useChangeLanguage } from '../utils/useChangeLanguage'
import { useGetInfoUser } from '../utils/useGetInfoUser'
import { useThemeModeStyles } from '../utils/useThemeModeStyles'
import { BoxContent, MainContent, ParentContent, WrapperLayout } from './styles'
import { RootState } from '../redux/Slices/RootReducer'
import { saveLogin } from '../redux/Slices/AppSlice'

export function Layout() {
  const dispatch = useDispatch()
  const [searchParam, setSearchParam] = useSearchParams()
  const closeMenu = useSelector((state: RootState) => state.app.closeMenu)
  const dialogLogin = useSelector((state: RootState) => state.app.dialogLogin)
  const [getUser] = useGetInfoUser()
  useChangeLanguage() // custom hook này sẽ tự động save language khi user f5
  useThemeModeStyles() // hook thay đổi theme màu text

  useEffect(() => {
    // lưu lại token và refresh token khi đăng nhập hoặc đăng ký bằng google và facebook thành công
    const token = searchParam.get('token')
    const refreshToken = searchParam.get('refresh_token')
    if (token && refreshToken) {
      localStorage.setItem('token', searchParam.get('token') || '')
      localStorage.setItem('refreshToken', searchParam.get('refresh_token') || '')
      getUser() // lấy thông tin user
      dispatch(saveLogin(true))
      setSearchParam({})
    }
  }, [searchParam])

  
  return (
    <WrapperLayout>
      <BoxContent
        sx={{
          bgcolor: 'background.default'
        }}
      >
        <Sidebar />
        <MainContent className={`${closeMenu && 'close-box'}`}>
          <Header />
          <ParentContent>
            <Outlet />
          </ParentContent>
        </MainContent>
      </BoxContent>
      {dialogLogin && <DialogLoin dialogLogin={dialogLogin} />}
    </WrapperLayout>
  )
}
