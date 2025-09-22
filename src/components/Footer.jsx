// Footer.jsx
import FooterContact from './FooterContact'
import { useI18n } from '../hooks/useI18n'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        {/* LEFT - brand + description */}
        <div className="site-footer__col site-footer__brand">
          <h3 className="site-footer__logo">{t('footer_brand')}</h3>
          <p className="site-footer__desc">
            {t('footer_desc')}
          </p>
        </div>

        {/* RIGHT - contacto con iconos */}
        <div className="site-footer__col site-footer__contact">
          <h4 className="site-footer__heading">{t('footer_contact')}</h4>
          <FooterContact />
        </div>
      </div>
    </footer>
  )
}
