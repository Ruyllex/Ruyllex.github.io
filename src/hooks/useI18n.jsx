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
      'A student of Computer Engineering at the University of Buenos Aires. I find joy in crafting digital experiences that resonate with users. Beyond coding, I find balance through fitness and sports like baseball and soccer. In my free time I like to solve LeetCode challenges or read books.',
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
    contact_error: 'There was an error. Please try again.'
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
      'Estudiante de Ingeniería en Computación en la Universidad de Buenos Aires. Disfruto creando experiencias digitales que conectan con las personas. Además del código, encuentro balance con el fitness y deportes como béisbol y fútbol. En mi tiempo libre me gusta resolver desafíos de LeetCode o leer libros.',
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
    contact_error: 'Hubo un error. Intenta nuevamente.'
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

