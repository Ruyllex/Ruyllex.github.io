import { redirect } from '../utils/redirect'

function Contact() {
  return (
    <section id="contact">
      <h1 className="title">Contact</h1>
      <div className="contenedor">
        <div className="btn-contacto">
          <img onClick={() => redirect('https://www.instagram.com/ruy_mori/?next=%2F')} src="/assests/INstragramIcon.png" alt="Icono 1" style={{ width: '60px', height: '60px', marginBottom: '-7px' }} className="icono" />
        </div>
        <div className="btn-contacto">
          <img onClick={() => redirect('https://github.com/Ruyllex')} src="/assests/github_logo_icon_147285.png" alt="Icono 2" style={{ marginLeft: '5px' }} className="icono" />
        </div>
        <div className="btn-contacto">
          <img onClick={() => redirect('https://www.linkedin.com/in/ruy-mori-112967259/')} src="/assests/linkedinIcon.png" alt="Icono 3" style={{ width: '55px', marginLeft: '15px' }} />
        </div>
        <div className="btn-contacto">
          <img src="/assests/facebookIcon.png" alt="Icono 3" style={{ width: '70px', height: '55px', marginBottom: '-3px' }} />
        </div>
        <div className="btn-contacto">
          <img onClick={() => redirect('https://wa.me/1149458922/')} src="/assests/WhatsAppIcon.png" alt="Icono 3" id="WhatsAppIcon" />
        </div>
        <div className="btn-contacto">
          <img onClick={() => redirect('https://twitter.com/RuyMori')} src="/assests/Twitter-X-White-Logo-PNG.png" alt="Icono 3" style={{ width: '50px', height: '40px', marginLeft: '8px' }} id="twitter" />
        </div>
      </div>
      <div className="social-buttons">
        <a href="#" className="social-button github" onClick={() => redirect('https://github.com/Ruyllex')}></a>
        <a href="#" className="social-button linkedin" onClick={() => redirect('https://www.linkedin.com/in/ruy-mori-112967259/')}></a>
        <a href="#" className="social-button instagram" onClick={() => redirect('https://www.instagram.com/ruy_mori/?next=%2F')}></a>
      </div>
    </section>
  )
}

export default Contact

