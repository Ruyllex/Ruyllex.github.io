import { useEffect, useMemo, useRef, useState } from 'react'
import useIntersectionAnimation from './hooks/useIntersectionAnimation'
import { Header, CanvasParticles, Hero, About, Skills, Projects, Contact, Footer } from './components'

function HeaderOld({ onNavigate }) {
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

// kept temporarily during refactor; replaced by component imports

function CanvasParticlesOld() {
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

      {/* Hero fuera de container para ocupar toda la pantalla */}
      <Hero />

      <div className="container">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
