import Button from '@/Components/Button'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = ({ scrollToSection, refs }) => {

  const [scrollPosition, setScrollPosition] = useState(0)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])



  return (
    <header id='header' className={`h-20 bg-white ${scrollPosition > 0 && 'fixed bg-white w-full top-0 shadow-lg z-[99999]'} overflow-hidden`}>

      <nav className={`mobile-menu order-3 lg:order-2 ${mobileMenu ? 'translate-x-[0]' : 'translate-x-[120%]'} fixed top-[80px] right-0 bg-gradient-to-r from-[#8750f7] to-[#2a1454] w-[80%] py-5 rounded-m min-h-screen transition-all duration-[.3s] ease-in-out`}>
        <ul className='text-lg flex flex-col gap-2 text-white'>
          <NavLink onClick={() => scrollToSection(refs.heroRef)} className='border-b-0 bg-primary py-3 px-5' to='#hero_section'>Home</NavLink>
          <NavLink onClick={() => scrollToSection(refs.aboutRef)} className='border-b-0 hover:bg-primary py-3 px-5' to='#about_section'>About</NavLink>
          <NavLink onClick={() => scrollToSection(refs.skillsRef)} className='border-b-0 hover:bg-primary py-3 px-5' to=''>Skills</NavLink>
          <NavLink onClick={() => scrollToSection(refs.educationRef)} className='border-b-0 hover:bg-primary py-3 px-5' to=''>Education</NavLink>
          <NavLink onClick={() => scrollToSection(refs.projectsRef)} className='border-b-0 hover:bg-primary py-3 px-5' to=''>Projects</NavLink>
          <NavLink onClick={() => scrollToSection(refs.contactRef)} className='border-b-0 hover:bg-primary py-3 px-5' to=''>Contact</NavLink>
        </ul>

        <div className="social-icons mt-8 pl-5">
          <h3 className='mb-3 font-bold text-white text-2xl'>Follow Me</h3>
          <ul className='flex items-center gap-4 text-white'>
            <NavLink to='https://github.com/nabilsiddik' className='border w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-all duration-[.3s]'>
              <FaGithub />
            </NavLink>
            <NavLink to={'https://www.linkedin.com/in/nabilsiddik/'} className='border w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-all duration-[.3s]'>
              <FaLinkedinIn />
            </NavLink>
            <NavLink to={'https://x.com/SiddikNabil'} className='border w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-all duration-[.3s]'>
              <FaXTwitter />
            </NavLink>
            <NavLink to={'https://www.facebook.com/codewithnabil'} className='border w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-all duration-[.3s]'>
              <FaFacebookF />
            </NavLink>
          </ul>
        </div>
      </nav>

      <div className="container h-20 flex items-center justify-between">
        <div className="logo order-1 lg:order-1">
          <h2 className='text-2xl font-bold'>Nabil Siddik</h2>
        </div>
        <nav className="menu order-3 lg:order-2 hidden lg:block">
          <ul className='text-lg flex items-center gap-5 text-primary'>
            <NavLink onClick={() => scrollToSection(refs.heroRef)} className='border-b-0 hover:border-b-2'>Home</NavLink>
            <NavLink onClick={() => scrollToSection(refs.aboutRef)} className='border-b-0 hover:border-b-2'>About</NavLink>
            <NavLink onClick={() => scrollToSection(refs.skillsRef)} className='border-b-0 hover:border-b-2'>Skills</NavLink>
            <NavLink onClick={() => scrollToSection(refs.educationRef)} className='border-b-0 hover:border-b-2'>Education</NavLink>
            <NavLink onClick={() => scrollToSection(refs.projectsRef)} className='border-b-0 hover:border-b-2'>Projects</NavLink>
            <NavLink onClick={() => scrollToSection(refs.contactRef)} className='border-b-0 hover:border-b-2'>Contact</NavLink>
          </ul>
        </nav>

        <div className="actions flex items-center gap-7 order-2 lg:order-3">
          <div className="social-icons hidden md:block">
            <ul className='flex items-center gap-4 text-primary'>
              <NavLink to='https://github.com/nabilsiddik' className='border w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all duration-[.3s]'>
                <FaGithub />
              </NavLink>
              <NavLink to={'https://www.linkedin.com/in/nabilsiddik/'} className='border w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all duration-[.3s]'>
                <FaLinkedinIn />
              </NavLink>
              <NavLink to={'https://x.com/SiddikNabil'} className='border w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all duration-[.3s]'>
                <FaXTwitter />
              </NavLink>
              <NavLink to={'https://www.facebook.com/codewithnabil'} className='border w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all duration-[.3s]'>
                <FaFacebookF />
              </NavLink>
            </ul>
          </div>
          <div className='hidden lg:block'>
            <Button text='Hire Me' />
          </div>
          <div className="mobile_menu_icon text-2xl lg:hidden">
            <div onClick={() => setMobileMenu(!mobileMenu)} className='cursor-pointer'>
              <FaBarsStaggered />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
