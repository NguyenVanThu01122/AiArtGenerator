import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import English from './eng.json'
import Japan from './japan.json'
import Korean from './korea.json'
import Vietnamese from './vie.json'

const resources = {
  eng: {
    translation: English
  },
  vie: {
    translation: Vietnamese
  },
  korea: {
    translation: Korean
  },
  japan: {
    translation: Japan
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'eng',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
