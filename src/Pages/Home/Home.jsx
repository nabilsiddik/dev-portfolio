import AboutSection from '@/Sections/AboutSection/AboutSection'
import ContactSection from '@/Sections/ContactSection/ContactSection'
import EducationSection from '@/Sections/EducationSection/EducationSection'
import HeroSection from '@/Sections/HeroSection/HeroSection'
import LanguagesSection from '@/Sections/LanguagesSection/LanguagesSection'
import ProjectSection from '@/Sections/ProjectSection/ProjectSection'
import SkillsSection from '@/Sections/SkillsSection/SkillsSection'
import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
  const { scrollToSection, refs } = useOutletContext();
  return (
    <div className='home_page'>
      <HeroSection ref={refs.heroRef}/>
      <LanguagesSection/>
      <AboutSection ref={refs.aboutRef}/>
      <SkillsSection ref={refs.skillsRef}/>
      <EducationSection ref={refs.educationRef}/>
      <ProjectSection ref={refs.projectsRef}/>
      <ContactSection ref={refs.contactRef}/>
    </div>
  )
}

export default Home
