import { useEffect, useRef } from 'react'

export default function ParallaxWrapper({ children, strength = 20 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateY = ((x - centerX) / centerX) * (strength / 2)
      const rotateX = -((y - centerY) / centerY) * (strength / 2)
      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }
    const onLeave = () => {
      el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
    }
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])
  return (
    <div ref={ref} className="transition-transform duration-200 will-change-transform">
      {children}
    </div>
  )
}
