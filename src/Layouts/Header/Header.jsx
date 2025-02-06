import Button from '@/Components/Button'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header id='header' className='h-20'>
      <div className="container h-20 flex items-center justify-between">
        <div className="logo">
          <h2 className='text-3xl font-bold'>Nabil Siddik</h2>
        </div>
        <nav className="menu">
          <ul className='text-lg flex items-center gap-5 text-primary'>
            <NavLink className='border-b-0 hover:border-b-2' to=''>Home</NavLink>
            <NavLink className='border-b-0 hover:border-b-2' to=''>Services</NavLink>
            <NavLink className='border-b-0 hover:border-b-2' to=''>Work</NavLink>
            <NavLink className='border-b-0 hover:border-b-2' to=''>Resume</NavLink>
            <NavLink className='border-b-0 hover:border-b-2' to=''>Skills</NavLink>
          </ul>
        </nav>
        <div className="actions flex items-center gap-7">
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
          <div>
            <Button text='Hire Me' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
