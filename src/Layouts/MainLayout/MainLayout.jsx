import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useRef } from 'react';

const MainLayout = () => {

  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} refs={{ heroRef, aboutRef, skillsRef, educationRef, projectsRef, contactRef }}/>
       <Outlet context={{ scrollToSection, refs: { heroRef, aboutRef, skillsRef, educationRef, projectsRef, contactRef } }}/>
      <Footer/>
    </div>
  )
}

export default MainLayout
