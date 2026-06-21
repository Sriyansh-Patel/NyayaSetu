// FullBodyPage.jsx
import LensFlare from './LensFlare'
import React from 'react'
import { useSelector } from 'react-redux'
import CategoryIcons from './Category'
import LawyerCarousel from './LawyerCrousel'
import { FiMapPin, FiUser, FiBriefcase, FiSearch } from "react-icons/fi";
import Search from './Search';
import City from './City';
import Testimonials from './Testimonial';
import { useEffect } from 'react';
import FooterWaves from './FooterWaves'
import WebGLGlobe from './WebGlGlobe'
import ChatBot from './ChatBot'

export default function Body() {

  const theme = useSelector((state) => state.theme.mode)
  const dark = theme === "dark"

  const bg = dark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
  const card = dark ? "bg-gray-800/60" : "bg-white/70"
  const inputBg = dark ? "bg-gray-700/40" : "bg-white/90"

  return (
    <div className={`min-h-screen ${bg} transition-all duration-500`}>
        {/* <div className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden z-[0]">
    <div className={`absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.35] transition-all duration-700 ${
      dark
        ? "bg-purple-500/40 mix-blend-screen"
        : "bg-orange-300/40 mix-blend-multiply"
    }`} />
    
    <div className={`absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full blur-3xl opacity-30 transition-all duration-700 ${
      dark
        ? "bg-pink-500/40 mix-blend-screen"
        : "bg-yellow-300/40 mix-blend-multiply"
    }`} />
  </div> */}


      {/* 🧭 SEARCH SECTION */}
      <section className="py-20 text-center px-6 md:px-20">
       

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find The Right Lawyer For Your Case ⚖️</h1>
        <p className="max-w-2xl mx-auto opacity-80 text-lg mb-10">
          Search by location, specialization, or lawyer name — 100% verified professionals.
        </p>

        
        <Search/>
      </section>


      {/* 🗂️ CATEGORY ROW */}
      <CategoryIcons dark={dark} />



      <City/>
      {/* ⭐ TOP RATED LAWYERS */}
      <LawyerCarousel dark={dark} />



      <Testimonials/>
      
      <ChatBot/>
      {/* ⚙️ THEME INDICATOR */}
      <footer className="text-center py-6 opacity-60">
        Current Theme: <strong>{theme.toUpperCase()}</strong>
      </footer>


    </div>
  )
}
