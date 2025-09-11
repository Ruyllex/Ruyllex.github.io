import { useEffect } from 'react'

export default function useIntersectionAnimation(selector, className) {
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

