import { format } from 'date-fns'
import { enUS, de } from 'date-fns/locale'

export const isLink = (string: string) => /http|gmail/.test(string)
export const isEmail = (string: string) => /gmail/.test(string)

export const isWindowReady = typeof window !== 'undefined'

export const browserLang = isWindowReady && window.navigator.language
export const defineLanguage = browserLang === 'de' ? de : enUS

export const getDate = (date: Date) =>
  format(date, 'MMM Y', { locale: defineLanguage })
