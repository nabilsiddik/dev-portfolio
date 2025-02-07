import Button from '@/Components/Button'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {

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
    <header id='header' className={`h-20 ${scrollPosition > 0 && 'fixed bg-white w-full top-0 shadow-lg z-[99999]'}`}>

      <nav className={`mobile-menu order-3 lg:order-2 ${mobileMenu ? 'translate-x-[0]' : 'translate-x-[100%]'} absolute top-[80px] right-0 bg-gradient-to-r from-[#8750f7] to-[#2a1454] w-[400px] py-5 rounded-m min-h-screen transition-all duration-[.3s] ease-in-out`}>
        <ul className='text-lg flex flex-col gap-2 text-white'>
          <NavLink className='border-b-0 bg-primary py-3 px-5' to='#hero_section'>Home</NavLink>
          <NavLink className='border-b-0 hover:bg-primary py-3 px-5' to='#about_section'>About</NavLink>
          <NavLink className='border-b-0 hover:bg-primary py-3 px-5' to=''>Skills</NavLink>
          <NavLink className='border-b-0 hover:bg-primary py-3 px-5' to=''>Education</NavLink>
          <NavLink className='border-b-0 hover:bg-primary py-3 px-5' to=''>Projects</NavLink>
          <NavLink className='border-b-0 hover:bg-primary py-3 px-5' to=''>Contact</NavLink>
        </ul>
      </nav>

      <div className="container h-20 flex items-center justify-between">
        <div className="logo order-1 lg:order-1">
          <h2 className='text-3xl font-bold'>Nabil Siddik</h2>
        </div>
        <nav className="menu order-3 lg:order-2 hidden lg:block">
          <ul className='text-lg flex items-center gap-5 text-primary'>
            <NavLink className='border-b-0 hover:border-b-2' to='#hero_section'>Home</NavLink>
            <NavLink className='border-b-0 hover:border-b-2' to='#about_section'>About</NavLink>
            <NavLink className='border-b-0 hover:border-b-2' to=''>Skills</NavLink>
            <NavLink className='border-b-0 hover:border-b-2' to=''>Education</NavLink>
            <NavLink className='border-b-0 hover:border-b-2' to=''>Projects</NavLink>
            <NavLink className='border-b-0 hover:border-b-2' to=''>Contact</NavLink>
          </ul>
        </nav>

        <div className="actions flex items-center gap-7 order-2 lg:order-3">
          <div className="social-icons">
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
