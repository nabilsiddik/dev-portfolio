import AboutSection from '@/Sections/AboutSection/AboutSection'
import HeroSection from '@/Sections/HeroSection/HeroSection'
import LanguagesSection from '@/Sections/LanguagesSection/LanguagesSection'
import React from 'react'

const Home = () => {
  return (
    <div className='home_page'>
      <HeroSection/>
      <LanguagesSection/>
      <AboutSection/>
    </div>
  )
}

export default Home
