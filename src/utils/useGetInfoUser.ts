import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { useTranslation } from 'react-i18next'
import { saveUser } from '../redux/Slices/AppSlice'
import { RootState } from '../redux/Slices/RootReducer'
import { getUsers } from '../services/user'
import { ERROR_MESSAGES } from './constants'

export const useGetInfoUser = () => {
  const login = useSelector((state: RootState) => state.app.login)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  // lấy user
  const getUser = () => {
    getUsers()
      .then((res) => {
        dispatch(saveUser(res.data?.data))
      })
      .catch((error) => toast.error(t(ERROR_MESSAGES.SERVER_ERROR)))
  }

  useEffect(() => {
    if (login) {
      getUser()
    }
  }, [])

  return [getUser]
}
