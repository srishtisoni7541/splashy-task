
'use client'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Page4 = () => {
  const sectionRef = useRef(null)
  const heading1Ref = useRef(null)
  const heading2Ref = useRef(null)
  const heading3Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%', 
          toggleActions: 'play none none none', 
        },
      })

      tl.from(heading1Ref.current, {
        x: -100,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })
        .from(
          heading2Ref.current,
          {
            x: 100,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          heading3Ref.current,
          {
            x: -100,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="min-h-screen w-full px-4 sm:px-8 md:px-16 flex flex-col justify-center items-center gap-4 sm:gap-6 overflow-hidden text-center"
    >
      <h1
        ref={heading1Ref}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#792822] relative"
      >
        WE CREATE
      </h1>
      <h1
        ref={heading2Ref}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#AB4A43] relative"
      >
        OUTSTANDING
      </h1>
      <h1
        ref={heading3Ref}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#792822] relative"
      >
        CAMPAIGNS
      </h1>
    </div>
  )
}

export default Page4
