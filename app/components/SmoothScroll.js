'use client'
import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null)

  useEffect(() => {
    // ✅ Prevent SSR execution
    if (typeof window === 'undefined') return

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.07,
      multiplier: 1,
    })

    const handleResize = () => scroll.update()
    window.addEventListener('resize', handleResize)

    return () => {
      scroll.destroy()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div id="smooth-wrapper" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  )
}

export default SmoothScroll
