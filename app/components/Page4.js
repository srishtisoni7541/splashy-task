// 'use client'
// import React, { useRef, useEffect } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const Page4 = () => {
//   const sectionRef = useRef(null)
//   const heading1Ref = useRef(null)
//   const heading2Ref = useRef(null)
//   const heading3Ref = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const h1 = heading1Ref.current
//       const h2 = heading2Ref.current
//       const h3 = heading3Ref.current

//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: 'top center',
//         end: 'bottom center',
//         scrub: true,
//         onUpdate: (self) => {
//           const progress = self.progress

//           // Directly set position instead of animating
//           gsap.set(h1, { x: progress * 200 })
//           gsap.set(h2, { x: 300 - progress * 300 })
//           gsap.set(h3, { x: -300 + progress * 300 })
//         },
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <div
//       ref={sectionRef}
//       className="h-screen w-full px-4 sm:px-8 md:px-16 flex flex-col justify-center items-center gap-4 sm:gap-6 overflow-hidden text-center"
//     >
//       <h1
//         ref={heading1Ref}
//         className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#792822] relative"
//       >
//         WE CREATE
//       </h1>
//       <h1
//         ref={heading2Ref}
//         className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#AB4A43] relative"
//       >
//         OUTSTANDING
//       </h1>
//       <h1
//         ref={heading3Ref}
//         className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#792822] relative"
//       >
//         CAMPAIGNS
//       </h1>
//     </div>
//   )
// }

// export default Page4




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
      const isMobile = window.innerWidth < 640 
      const h1 = heading1Ref.current
      const h2 = heading2Ref.current
      const h3 = heading3Ref.current

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          const shift = isMobile ? 50 : 200

          gsap.set(h1, { x: progress * shift })
          gsap.set(h2, { x: shift - progress * shift })
          gsap.set(h3, { x: -shift + progress * shift })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className=" w-full px-4 sm:px-8 md:px-16 flex flex-col justify-center items-center gap-4 sm:gap-6 overflow-hidden text-center"
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
