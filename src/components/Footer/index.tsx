import { useTranslation } from 'react-i18next'
import { GroupText, WrapperFooter } from './styles'

function Footer() {
  const { t } = useTranslation()
  return (
    <WrapperFooter>
      <div>{t('© 2023 by VisionLab., Inc. All Rights Reserved.')}</div>
      <GroupText>
        <div>{t('Privacy Policy')}</div>
        <div>{t('Terms of Service')}</div>
        <div>{t('Cookies Policy')}</div>
      </GroupText>
    </WrapperFooter>
  )
}
export default Footer
