import AboutSection from '@/Sections/AboutSection/AboutSection'
import ContactSection from '@/Sections/ContactSection/ContactSection'
import EducationSection from '@/Sections/EducationSection/EducationSection'
import HeroSection from '@/Sections/HeroSection/HeroSection'
import LanguagesSection from '@/Sections/LanguagesSection/LanguagesSection'
import ProjectSection from '@/Sections/ProjectSection/ProjectSection'
import SkillsSection from '@/Sections/SkillsSection/SkillsSection'
import React from 'react'

const Home = () => {
  return (
    <div className='home_page'>
      <HeroSection/>
      <LanguagesSection/>
      <AboutSection/>
      <SkillsSection/>
      <EducationSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  )
}

export default Home
