import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveLogin, saveUser } from '../redux/Slices/AppSlice'
import { ROUTES } from '../routes/routes'
import { removeRefreshToken, removeToken } from './handleTokenUtils'

// hàm sign out
export const useLogout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    removeRefreshToken()
    dispatch(saveLogin(false))
    dispatch(saveUser(null))
    navigate(ROUTES.HOME_PAGE)
  }
  return handleLogout
}
