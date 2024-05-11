import i18n from '../i18n/i18n'

export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 12
export const DEFAULT_SORT_DATE = 'DEFAULT'
export const DEFAULT_CURRENT = 0
export const DEFAULT_TOTAL = 0

export const DEFAULT_ALPHA = 0.9
export const DEFAULT_STEPS = 30
export const DEFAULT_SCALE = 10
export const FILE_FORMAT = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']

export const ACCEPTED_IMAGE_FORMATS = '.jpg,.png,.jpeg'

export const MAX_SIZE_INBYTES = 10 * 1024 * 1024 // giới hạn dung lượng là 10MB, 1MB = 1 * 1024 * 1024 byte

export const ERROR_MESSAGES = {
  SERVER_ERROR: 'Server error occurred',
  NETWORK_ERROR: 'Unable to connect to the server',
  CREDIT_DEDUCTION_FAILED: 'Credit deduction failed',
  NOTIFICATION_PlEASE_CHOOSE_ANOTHER_PRODUCT: 'The product is already in the cart. Please choose another product',
  NOTIFICATION_ERROR: 'You have no products to delete!',
  PLEASE_ENTER_NOTE: 'Please enter a note',
  PLEASE_ENTER_COMPLETE_INFORMATION: 'Please enter complete information!'
}

export const SUCCESS_MESSAGE = {
  SUCCESS_LOGIN: 'Login successful',
  SUCCESS_REGISTER: 'You have successfully registered. Please log in to continue.'
}

export const LOGOUT_MESSAGE = {
  LOGOUT_AUTHENTICATION_MESSAGE: 'Are you sure you want to log out?'
}

export const NOTIFICATION = 'This feature is under development'

export const INSUFFICIENT_CREDITS_MESSAGE = 'Your credits is not enable. Please purchase credits!'

export function getSelectSortDateOptions() {
  return [
    {
      value: 'DEFAULT',
      label: i18n.t('DEFAULT')
    },
    {
      value: 'INCREASE',
      label: i18n.t('INCREASE')
    },
    {
      value: 'DECREASE',
      label: i18n.t('DECREASE')
    }
  ]
}

export const OPTION_LIMIT = [
  { value: '5', label: '5' },
  { value: '10', label: '10' },
  { value: '12', label: '12' },
  { value: '15', label: '15' },
  { value: '20', label: '20' }
]
