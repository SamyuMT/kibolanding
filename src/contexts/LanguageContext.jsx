import React, { createContext, useContext, useEffect, useState } from 'react'
import translations from '../constants/translations'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('kibo_lang') || 'es'
    } catch (e) {
      return 'es'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('kibo_lang', lang)
    } catch (e) {}
  }, [lang])

  const toggleLanguage = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

export default LanguageContext
