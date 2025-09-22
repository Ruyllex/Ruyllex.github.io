import BlurText from './BlurText'
import { useI18n } from '../hooks/useI18n'

function About() {
  const { t } = useI18n()
  return (
    <section id="about">
      <h1 className="title">{t('about_title')}</h1>
      <div className="intro">
        <h2 id="title2"><BlurText text={t('about_hi')} /></h2>
        <h3 id="NAME"><BlurText text={t('about_name')} animateBy="letters" className="name-letters" /></h3>
        <BlurText
          id="aboutMe"
          className="about-paragraph"
          animateBy="words"
          direction="bottom"
          delay={18}
          text={t('about_text')}
        />
      </div>
    </section>
  )
}

export default About

