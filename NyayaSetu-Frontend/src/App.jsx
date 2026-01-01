import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Get theme from Redux store
  const theme = useSelector((state) => state.theme.mode)

  return (
    <>
      <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
        <Header />
        <Body />
        <Footer />
        </div>
    </>
  )
}