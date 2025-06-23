'use client'

import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.07, // smoothness
      multiplier: 1,
      class: 'is-reveal',
    })

    // Update Locomotive on route change if needed
    const handleResize = () => {
      scroll.update()
    }

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
