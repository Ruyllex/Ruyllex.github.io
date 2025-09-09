import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

function Header({ onNavigate }) {
  const [isShrink, setIsShrink] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsShrink(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAnchorClick = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
    if (onNavigate) onNavigate(id)
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
          <li><a href="#about" onClick={(e) => handleAnchorClick(e, '#about')}>About Me</a></li>
          <li><a href="#skill" onClick={(e) => handleAnchorClick(e, '#skill')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleAnchorClick(e, '#projects')}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

function useIntersectionAnimation(selector, className) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add(className)
        else entry.target.classList.remove(className)
      })
    })
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector, className])
}

function CanvasParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    const mouse = { x: undefined, y: undefined, radius: 150 }

    const onMouseMove = (event) => {
      mouse.x = event.x
      mouse.y = event.y
    }
    const onMouseOut = () => {
      mouse.x = undefined
      mouse.y = undefined
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.baseX = this.x
        this.baseY = this.y
        this.density = Math.random() * 30 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = '#33ff00'
        this.alpha = Math.random() * 0.5 + 0.1
      }
      update() {
        if (mouse.x !== undefined) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const maxDistance = mouse.radius
          const force = (maxDistance - distance) / maxDistance
          const directionX = forceDirectionX * force * this.density
          const directionY = forceDirectionY * force * this.density
          if (distance < mouse.radius) {
            this.x -= directionX
            this.y -= directionY
          } else {
            if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 20
            if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 20
          }
        } else {
          this.x += this.speedX
          this.y += this.speedY
          if (this.x > canvas.width) this.x = 0
          if (this.x < 0) this.x = canvas.width
          if (this.y > canvas.height) this.y = 0
          if (this.y < 0) this.y = canvas.height
        }
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(51, 255, 0, ${this.alpha})`
        ctx.fill()
      }
    }

    function init() {
      particles = []
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000)
      for (let i = 0; i < numberOfParticles; i++) particles.push(new Particle())
    }
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      animationId = requestAnimationFrame(animate)
    }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseout', onMouseOut)
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    animate()
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseout', onMouseOut)
    }
  }, [])

  return <canvas id="particles" ref={canvasRef} />
}

function App() {
  useIntersectionAnimation('.hidden', 'show')
  useIntersectionAnimation('.buttonProject', 'appear')
  useIntersectionAnimation('.skill', 'appear')
  useIntersectionAnimation('.skilss', 'appear')

  const redirect = (url) => window.location.assign(url)

  return (
    <>
      <CanvasParticles />
      <Header />
      <div className="container">
        <section className="Portada">
          <img id="photo" src="/assests/rm-low-resolution-logo-color-on-transparent-background.png" alt="photo" />
        </section>
        <section id="about">
          <h1 className="title">About me</h1>
          <img src="/assests/Logo-fiuba_big.png" alt="fiuba-logo" id="fiuba-logo" />
          <h2 id="title2" className="hidden">Hi, my name is:</h2>
          <h3 id="NAME" className="hidden"><a style={{ color: '#33ff00' }}>R</a>UY <a style={{ color: '#33ff00' }}>M</a>ORI</h3>
          <p id="aboutMe" className="hidden">
            A student of Computer Engineering at the <a style={{ color: '#00fbff' }}>U</a>niversity of <a style={{ color: 'rgb(255, 242, 0)' }}>B</a>uenos <a style={{ color: '#00fbff' }}>A</a>ires.
            I find joy in crafting digital experiences that resonate with users.
            Beyond coding, I find balance through fitness and sports like baseball and soccer.In my free time i like to solve LeetCode challenges or read books.<br />
          </p>
        </section>
        <section id="skill">
          <h1 className="title">Skills</h1>
          <div className="cards">
            <div className="card red">
              <p>
                <button className="skilss">Backend</button>
              </p>
              <div className="PhoneTitle">Backend</div>
              <img className="skill java" src="/assests/icons8-lenguaje-de-programación-96.png" alt="Java" />
              <img className="skill spring" src="/assests/icons8-logotipo-de-primavera-96.png" alt="Spring" />
              <img className="skill python" src="/assests/icons8-python-96.png" alt="Python" />
              <img className="skill flask" src="/assests/ClipartKey_1450089.png" alt="flask" />
              <img className="skill nodejs" src="/assests/icons8-nodejs-96.png" alt="Node.js" />
              <img className="skill express" src="/assests/icons8-express-js-96.png" alt="Express" />
            </div>
            <div className="card blue">
              <p>
                <button className="skilss">Frontend</button>
              </p>
              <div className="PhoneTitle">Frontend</div>
              <img className="skill nextjs" src="/assests/icons8-next.js-96.png" alt="NextJs" />
              <img className="skill react" src="/assests/icons8-react-a-javascript-library-for-building-user-interfaces-96.png" alt="React" id="React" />
            </div>
          </div>
        </section>
        <section id="projects" className="project1">
          <h1 className="title">Projects</h1>
          <div className="gallery">
            <div className="buttonProject" onClick={() => redirect('https://github.com/Ruyllex/algo3_tp2')}>
              <img src="/assests/algoDefense.png" alt="Imagen 1" />
              <div className="overlay">
                <h3>AlgoDefense</h3>
                <p>
                  A tower defense game, made in <a style={{ color: 'red' }}>java</a>(<a style={{ color: 'orange' }}>Maven</a>) with <a style={{ color: 'red' }}>java</a><a style={{ color: 'yellow' }}>fx</a>
                  for a college subject, a group of five people in which we apply <a style={{ color: 'rgb(0, 140, 255)' }}>Scrum, eXtreme Programming</a> with <a style={{ color: 'white' }}>git</a> and  I used <a style={{ color: 'blueviolet' }}>intellij</a>, it has the corresponding documentation(classes, packages and sequence diagrams), coded with TDD using <a style={{ color: 'red' }}>J</a>unit.
                </p>
              </div>
            </div>
            <div className="buttonProject" onClick={() => redirect('https://github.com/Ruyllex/TP1_sinergia/tree/cambios_main')}>
              <img src="/assests/hangman.png" alt="Imagen 2" />
              <div className="overlay">
                <h3>Hangman</h3>
                <p>This is a game too, is one of my first projects made for the college so don't expect much. It was made in <a style={{ color: 'blue' }}>Pyt</a><a style={{ color: 'yellow' }}>hon</a></p>
              </div>
            </div>
            <div className="buttonProject" onClick={() => redirect('https://github.com/Ruyllex/ecommerce')}>
              <img src="/assests/res_mu_gaikoku_page1.jpg" alt="Imagen 3" />
              <div className="overlay">
                <h3>Ecommerce</h3>
                <p>This project is a comprehensive e-commerce platform developed using Spring Boot. It provides a backend solution for managing products, users, orders, and payments. The application integrates with PostgreSQL as its database and implements RESTful APIs for seamless interaction with the frontend</p>
              </div>
            </div>
          </div>
        </section>
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
          <div className="social-buttons" hidden>
            <a href="#" className="social-button github" onClick={() => redirect('https://github.com/Ruyllex')}>
              {/* SVG omitted in React for brevity; consider using inline SVG or img */}
            </a>
            <a href="#" className="social-button linkedin" onClick={() => redirect('https://www.linkedin.com/in/ruy-mori-112967259/')}></a>
            <a href="#" className="social-button instagram" onClick={() => redirect('https://www.instagram.com/ruy_mori/?next=%2F')}></a>
          </div>
        </section>
      </div>
      <footer>
        <p>&copy; Ruy Mori</p>
      </footer>
    </>
  )
}

export default App
