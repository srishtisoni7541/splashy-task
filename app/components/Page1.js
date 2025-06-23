

'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const dummyData = [
  { img: "https://framerusercontent.com/images/Vzq2iiIJhxMog8p0WWXK3WeBNE.jpg" },
  { img: "https://framerusercontent.com/images/KDrO2VtlUErQJKE6voNO0XSypVA.jpg" },
  { img: "https://framerusercontent.com/images/XXpAIdu6vvSX5oCZIHV9T6KQc2A.jpg" },
  { img: "https://framerusercontent.com/images/yjLTcpstl1NGrRHqCcE812lxw.jpg" },
]

const Page1 = () => {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!overlayRef.current) return

    gsap.to(overlayRef.current, {
      y: -200,
      ease: 'none',
      scrollTrigger: {
        trigger: overlayRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <div className="w-full min-h-[150vh] relative overflow-hidden flex flex-col justify-between ">
      
      {/* Hero Text */}
      <div className="flex flex-col items-center justify-center text-[#792822] gap-4 text-center mt-20 px-6 sm:px-10 z-10">
        <h1 className="font-bold text-4xl sm:text-6xl lg:text-9xl leading-tight">
          GLAURINE <br /> STUDIO
        </h1>
        <p className="font-medium text-base sm:text-lg mt-2 sm:mt-4">
          CREATIVE STUDIO TURNING CONCEPTS <br /> INTO DIGITAL EXPERIENCE
        </p>
      </div>

     <div className="
  w-full
  h-[140vh] sm:h-[160vh] md:h-[180vh]
  bg-[#792822]
  mt-[60%] sm:mt-[80%] md:mt-[30%]
  absolute
  py-16 sm:py-20 px-4 sm:px-6
  overflow-hidden
  z-0
  rounded-t-[50%] sm:rounded-t-[60%] md:rounded-t-[100%]
">
        {/* Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-white/10 pointer-events-none z-10"
        />

        {/* Cards */}
        <div className="flex justify-center gap-6 md:gap-10 h-full relative z-0 flex-wrap sm:flex-nowrap">
          {[0, 1, 2, 3, 4].map((col, colIndex) => (
            <div
              key={col}
              className={`flex flex-col gap-6 ${
                colIndex % 2 === 0
                  ? 'animate-scroll-down'
                  : 'animate-scroll-up'
              }`}
            >
              {[...dummyData, ...dummyData].map((item, index) => (
                <div
                  key={`${col}-${index}`}
                  className="w-64 sm:w-72 md:w-80 h-[280px] sm:h-[340px] md:h-[400px] lg:h-[70vh] bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={`img-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page1

