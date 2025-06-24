'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const stats = [
  { value: '7+', label: 'YEARS OF EXPERIENCE', bg: '#7C2D25', textColor: 'white' },
  { value: '9', label: 'AWARDS', bg: '#944843', textColor: 'white' },
  { value: '8', label: 'TEAM SIZE', bg: '#DECBC5', textColor: '#7C2D25' },
  { value: '10K', label: 'SOCIAL MEDIA', bg: '#fff', textColor: '#7C2D25' },
  { value: '97', label: 'COMPLETED PROJECTS', bg: '#651B16', textColor: 'white' },
]

const Footer = () => {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = marqueeRef.current
      const totalWidth = el.scrollWidth / 2

      gsap.to(el, {
        x: `-=${totalWidth}`,
        duration: 20,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        },
      })
    }, marqueeRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="w-full bg-[#f9f7ed] overflow-hidden">
      {/* Infinite scroll section */}
      <div className="w-full py-10 relative overflow-hidden">
        <div ref={marqueeRef} className="flex w-max gap-6">
          {[...stats, ...stats].map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center min-w-[160px] sm:min-w-[200px] h-[180px] sm:h-[200px] md:h-[220px] px-6 py-4 rounded-xl"
              style={{
                backgroundColor: stat.bg,
                color: stat.textColor,
              }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold">{stat.value}</h2>
              <p className="text-xs sm:text-sm font-medium text-center mt-2 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Big semi-circle call to action */}
      <div className="relative w-full bg-[#7C2D25] text-white pt-24 sm:pt-32 pb-16 sm:pb-20 mt-20 sm:mt-40 rounded-t-full text-center">
        <p className="text-sm sm:text-base tracking-wider uppercase font-medium">
          AVAILABLE FOR COLABORATION
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mt-4">
          LET'S<br />WORK<br />TOGETHER
        </h1>

        <div className="mt-32 sm:mt-60 border-t border-white/40 w-[90%] mx-auto pt-6 flex flex-col sm:flex-row justify-between text-xs sm:text-sm font-medium tracking-wide">
          <span className="text-white">EMAIL</span>
          <span className="text-white">INSTAGRAM</span>
          <span className="text-white">LINKEDIN</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
