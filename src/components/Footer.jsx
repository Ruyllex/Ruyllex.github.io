import { redirect } from '../utils/redirect'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <span className="footer__name">Ruy Mori</span>
        <div className="footer__icons">
          <img
            src="/assests/github_logo_icon_147285.png"
            alt="GitHub"
            className="footer__icon icon-animated"
            onClick={() => redirect('https://github.com/Ruyllex')}
          />
          <img
            src="/assests/linkedinIcon.png"
            alt="LinkedIn"
            className="footer__icon icon-animated"
            onClick={() => redirect('https://www.linkedin.com/in/ruy-mori-112967259/')}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer

