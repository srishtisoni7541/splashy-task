'use client'

import { useEffect, useRef, useState } from 'react'

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    let scrollInstance
    let handleResize

    const startScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default

      scrollInstance = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.07,
        multiplier: 1,
        class: 'is-reveal',
      })

      handleResize = () => scrollInstance && scrollInstance.update()
      window.addEventListener('resize', handleResize)
    }

    startScroll()

    return () => {
      if (scrollInstance) scrollInstance.destroy()
      if (handleResize) window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!isClient) return null

  return (
    <div id="smooth-wrapper" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  )
}

export default SmoothScroll
