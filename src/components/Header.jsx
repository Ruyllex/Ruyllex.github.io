import { useEffect, useState } from 'react'
import { useI18n } from '../hooks/useI18n'

function Header() {
  const [isShrink, setIsShrink] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, lang, setLang } = useI18n()

  useEffect(() => {
    const handleScroll = () => setIsShrink(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAnchorClick = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={isShrink ? 'shrink' : ''}>
      <div className="icon">
        <img id="Icon" alt="icon" src="/assests/rm-low-resolution-logo-color-on-transparent-background-white.png" />
      </div>
      <button className="openMenu" onClick={() => setMenuOpen(true)}>
        <i className="bi bi-list" />
      </button>
      <nav className="navbar">
        <ul className={`menu ${menuOpen ? 'visible' : ''}`}>
          <li>
            <button className="closeMenu" onClick={() => setMenuOpen(false)}>
              <i className="bi bi-x-lg" />
            </button>
          </li>
          <li><a href="#about" onClick={(e) => handleAnchorClick(e, '#about')}>{t('nav_about')}</a></li>
          <li><a href="#skill" onClick={(e) => handleAnchorClick(e, '#skill')}>{t('nav_skills')}</a></li>
          <li><a href="#projects" onClick={(e) => handleAnchorClick(e, '#projects')}>{t('nav_projects')}</a></li>
          <li><a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')}>{t('nav_contact')}</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

