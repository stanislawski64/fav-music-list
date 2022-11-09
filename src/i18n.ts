import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from './locales/en/common.json'
import plCommon from './locales/pl/common.json'
import { LOCAL_STORAGE_LANGUAGE_KEY } from './components/constants'

export const defaultNS = 'common'
export const resources = {
  en: {
    common: enCommon,
  },
  pl: {
    common: plCommon,
  },
} as const

const languageCode = localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY)

i18n.use(initReactI18next).init({
  lng: languageCode || 'en',
  ns: ['common'],
  defaultNS,
  resources,
})
