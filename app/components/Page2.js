
'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Page2 = () => {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const marquee = marqueeRef.current

    gsap.to(marquee, {
      x: '-50%',
      duration: 60,
      ease: 'linear',
      repeat: -1,
    })
  }, [])

  const items = Array.from({ length: 10 }, () => 'Passionate Design Studio')

  return (
    <div className="min-h-screen w-full px-4 sm:px-10 lg:px-20 py-10 overflow-hidden">
      
      {/* Paragraph */}
      <div className="pararight flex items-center justify-end mb-12">
        <p className="w-full sm:w-[90%] md:w-[70%] lg:w-[40%] text-base sm:text-lg md:text-xl font-medium text-[#333]">
          We are a passionate design studio dedicated to turning ideas into
          visually stunning digital experiences. With a keen eye for detail, we
          specialize in creating websites that not only look great but also
          provide an exceptional user experience. Our approach is a fusion of
          creativity and technical know-how. We love collaborating with clients,
          believing that the best results come from a partnership of ideas.
          From sleek interfaces to user-friendly designs, we bring a commitment
          to innovation to every project.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full mt-28 overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap w-max gap-10"
        >
          {[...items, ...items].map((text, i) => (
            <h1
              key={i}
              className="marquee-item text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase text-[#792822]"
            >
              {text}
            </h1>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page2
