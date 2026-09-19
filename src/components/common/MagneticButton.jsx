import { useRef, useCallback } from 'react'

export default function MagneticButton({ children, className = '', as = 'button', strength = 0.3, ...props }) {
  const ref = useRef(null)
  const Tag = as

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }, [strength])

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
    el.style.transition = `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)`
    setTimeout(() => {
      if (el) el.style.transition = ''
    }, 400)
  }, [])

  return (
    <Tag
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Tag>
  )
}
