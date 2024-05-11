import { useDispatch, useSelector } from 'react-redux'

import { saveDialogLogin } from '../redux/Slices/AppSlice'
import { RootState } from '../redux/Slices/RootReducer'
import { getTokenLocalStorage } from './handleTokenUtils'

export const useCheckLogin = () => {
  const login = useSelector((state: RootState) => state.app.login) || getTokenLocalStorage()
  const dispatch = useDispatch()

  const handleCheckLogin = () => {
    if (!login) {
      dispatch(saveDialogLogin(true))
      return true
    } else {
      return false
    }
  }
  return { handleCheckLogin, login }
}
