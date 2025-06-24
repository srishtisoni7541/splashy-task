
import React from 'react'

import Page1 from './components/Page1' 
import Header from './components/Header'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Footer from './components/Footer'
export const metadata = {
  title: "Static Glaurine Studio",
}

const Page = () => {
  return (
    <div className='w-full overflow-hidden  min-h-screen bg-[#F7F5E9]'>
      <Header/>
      <Page1 /> 
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Footer/>
    
    </div>
  )
}

export default Page
