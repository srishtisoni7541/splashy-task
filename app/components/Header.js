import React from 'react'

const Header = () => {
  return (
    <div className="w-full fixed top-0 z-50 text-[#792822] bg-[#F7F5E9] flex items-center justify-between px-6 py-4 shadow-sm">
      {/* Left Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <h2 className="font-bold text-lg cursor-pointer hover:underline">HOME</h2>
        <h2 className="font-bold text-lg cursor-pointer hover:underline">WORK</h2>
      </div>

      {/* Center Logo */}
      <div className="text-2xl md:text-4xl font-bold text-center w-full md:w-auto">
        GLAURINE
      </div>

      {/* Right Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <h2 className="font-bold text-lg cursor-pointer hover:underline">ABOUT</h2>
        <h2 className="font-bold text-lg cursor-pointer hover:underline">CONTACT</h2>
      </div>

      {/* Mobile Menu Placeholder (optional future menu button) */}
      <div className="flex md:hidden items-center gap-2">
        <button className="text-xl font-bold">☰</button>
      </div>
    </div>
  )
}

export default Header
