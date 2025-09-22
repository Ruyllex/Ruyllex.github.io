import { createContext, useContext, useMemo, useState, useEffect } from 'react'

const I18nContext = createContext({ lang: 'en', setLang: () => {}, t: (k) => k })

const messages = {
  en: {
    nav_about: 'About Me',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    about_title: 'About me',
    about_hi: 'Hi, my name is:',
    about_name: 'RUY MORI',
    about_text:
      'I am a software developer and a Computer Engineering student at the University of Buenos Aires. Driven by curiosity and a strong attention to detail, I enjoy building modern and efficient software that provide great experiences for users.',


    skills_title: 'Skills',
    skills_backend: 'Backend',
    skills_frontend: 'Frontend',
    projects_title: 'Projects',
    contact_title: 'Contact',
    contact_name: 'Name',
    contact_email: 'Email',
    contact_message: 'Message',
    contact_send: 'Send',
    contact_opening: 'Opening your mail client...',
    contact_error: 'There was an error. Please try again.',
    footer_brand: 'RUY MORI',
    footer_desc: 'Building modern and efficient software.',
    footer_contact: 'Get in touch',
  },
  es: {
    nav_about: 'Sobre mí',
    nav_skills: 'Habilidades',
    nav_projects: 'Proyectos',
    nav_contact: 'Contacto',
    about_title: 'Sobre mí',
    about_hi: 'Hola, mi nombre es:',
    about_name: 'RUY MORI',
    about_text:
      'Soy desarrollador de software y estudiante de Ingeniería en Computación en la Universidad de Buenos Aires. Impulsado por la curiosidad y con gran atención al detalle, disfruto crear aplicaciones modernas y eficientes que ofrezcan excelentes experiencias a los usuarios.',

    skills_title: 'Habilidades',
    skills_backend: 'Backend',
    skills_frontend: 'Frontend',
    projects_title: 'Proyectos',
    contact_title: 'Contacto',
    contact_name: 'Nombre',
    contact_email: 'Correo',
    contact_message: 'Mensaje',
    contact_send: 'Enviar',
    contact_opening: 'Abriendo tu cliente de correo...',
    contact_error: 'Hubo un error. Intenta nuevamente.',
    footer_brand: 'RUY MORI',
    footer_desc: 'Construyendo aplicaciones web modernas y eficientes.',
    footer_contact: 'Contáctame',
  }
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const stored = localStorage.getItem('lang')
    if (stored) {
      setLang(stored)
      return
    }
    const navLang = navigator.language?.toLowerCase() || 'en'
    setLang(navLang.startsWith('es') ? 'es' : 'en')
  }, [])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const value = useMemo(() => {
    const t = (key) => messages[lang]?.[key] ?? messages.en[key] ?? key
    return { lang, setLang, t }
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}

