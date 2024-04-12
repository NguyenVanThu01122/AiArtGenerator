import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SelectLanguage } from './styles'

export default function LanguageSelection() {
  const { i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(() => localStorage.getItem('LANG_STORAGE_KEY') || 'eng')

  const handleChangeLanguage = (e: any) => {
    const languageValue = e.target.value
    setSelectedLanguage(languageValue)
    i18n.changeLanguage(languageValue) // thay đổi ngôn ngữ
    localStorage.setItem('LANG_STORAGE_KEY', languageValue) // lưu ngôn ngữ vào localStorage
  }

  return (
    <div>
      <SelectLanguage id='language' value={selectedLanguage} onChange={handleChangeLanguage} color='primary'>
        <MenuItem value='eng'>English</MenuItem>
        <MenuItem value='vie'>Vietnamese</MenuItem>
        <MenuItem value='korea'>Korean</MenuItem>
        <MenuItem value='japan'>japanese</MenuItem>
      </SelectLanguage>
    </div>
  )
}
