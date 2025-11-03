import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const vignetteRef = useRef(null)
  const sceneRef = useRef(null)
  const barTopRef = useRef(null)
  const barBottomRef = useRef(null)

  useEffect(() => {
    const sectionEl = sectionRef.current
    const imageEl = imageRef.current
    const vignetteEl = vignetteRef.current
    const sceneEl = sceneRef.current
    const barTopEl = barTopRef.current
    const barBottomEl = barBottomRef.current
    if (!sectionEl || !imageEl) return

    const ctx = gsap.context(() => {
      gsap.set(sectionEl, { transformOrigin: '50% 50%', overflow: 'hidden' })
      if (sceneEl) gsap.set(sceneEl, { transformStyle: 'preserve-3d', perspective: 1200 })
      // Foco estimado en la "R"
      gsap.set(imageEl, { willChange: 'transform, opacity', transformOrigin: '38% 52%' })
      if (vignetteEl) gsap.set(vignetteEl, { willChange: 'opacity' })
      if (barTopEl && barBottomEl) gsap.set([barTopEl, barBottomEl], { willChange: 'height, opacity' })

      const buildTimeline = ({ end, scale, x, y, rotateX = 7, vignette = 0.9, bars = '8vh', origin = '38% 52%', blurStart = '0px', blurEnd = '0px' }) => {
        gsap.set(imageEl, { willChange: 'transform, opacity', transformOrigin: origin })
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: 'top top',
            end,
            scrub: true,
            pin: true,
          },
        })
        tl.fromTo(
          imageEl,
          { scale: 1, x: 0, y: 0, rotateX: 0, filter: `blur(${blurStart})`, opacity: 1 },
          { scale, x, y, rotateX, filter: `blur(${blurEnd})`, opacity: 1, ease: 'none' }
        )
        .to(vignetteEl, { opacity: vignette, ease: 'none' }, '<')
        .to([barTopEl, barBottomEl], { height: bars, opacity: 0.35, ease: 'none' }, '<')
        return tl
      }

      ScrollTrigger.matchMedia({
        '(min-width: 1024px)': () => {
          buildTimeline({
            end: '+=420%',
            scale: 50,
            x: -130,
            y: 80,
            rotateX: 7,
            vignette: 0.9,
            bars: '8vh',
            origin: '38% 52%',
            blurStart: '0px',
            blurEnd: '0px',
          })
        },
        '(max-width: 1023px)': () => {
          buildTimeline({
            end: '+=320%',
            scale: 32,
            x: 30,
            y: 70,
            rotateX: 6,
            vignette: 0.85,
            bars: '6vh',
            origin: '40% 54%',
            blurStart: '0px',
            blurEnd: '0px',
          })
        },
      })
    }, sectionEl)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="Portada grid place-items-center min-h-screen relative overflow-hidden">
      <div ref={sceneRef} className="w-full h-full grid place-items-center">
        <img
          ref={imageRef}
          id="photo"
          src="/assests/rm-low-resolution-logo-color-on-transparent-background.png"
          alt="photo"
          className="max-w-full max-h-full"
        />
      </div>
      <div
        ref={vignetteRef}
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%)',
          opacity: 0,
        }}
      />
      <div ref={barTopRef} className="pointer-events-none absolute left-0 right-0 top-0" style={{ height: 0, background: 'black', opacity: 0 }} />
      <div ref={barBottomRef} className="pointer-events-none absolute left-0 right-0 bottom-0" style={{ height: 0, background: 'black', opacity: 0 }} />
    </section>
  )
}

export default Hero
