'use client'
import React from 'react'

const Page5 = () => {
  const points = [
    {
      title: 'CUSTOM ILLUSTRATION',
      description:
        'We create unique, tailor-made illustrations for advertising, editorial projects, packaging, and brand identities, bringing your ideas to life with captivating visuals.',
    },
    {
      title: 'MOTION DESIGN',
      description:
        'Our animation services bring illustrations to life, creating dynamic content for promotional videos, social media, and ads that engage and captivate.',
    },
    {
      title: 'UI/UX DESIGN',
      description:
        'We design beautiful, user-friendly interfaces for websites and apps, using custom illustrations to enhance the user experience and add visual appeal.',
    },
  ]

  return (
    <section className="w-full min-h-screen  px-4 sm:px-10 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

        
        <div className="md:w-1/2">
          <h2 className="text-[#792822] font-bold text-4xl sm:text-4xl md:text-7xl leading-tight">
            We are expert in <br /> what we do!
          </h2>
        </div>

      
        <div className="md:w-1/2 space-y-10">
         
          <p className="text-[#333] text-xl sm:text-base md:text-[20px] max-w-[90%]">
            With a blend of creativity and skill, we deliver standout design
            solutions. From custom illustrations to UI/UX and animation, we
            bring expertise and passion to every project, helping your brand
            connect and engage.
          </p>

         
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="mt-1 text-[#9B3B33] text-xl">●</span>
              <div>
                <h3 className="text-[#9B3B33] font-bold text-3xl md:text-3xl">
                  {point.title}
                </h3>
                <p className="text-[#333] text-xl sm:text-base mt-1 md:text-xl">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page5

