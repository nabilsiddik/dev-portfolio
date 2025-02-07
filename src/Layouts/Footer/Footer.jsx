import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id='footer' className='py-10 bg-gradient-to-r from-[#8750f7] to-[#2a1454]'>
      <div className="container flex flex-col items-center">
        <div>
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

        <div className='mt-5'>
          <p className='text-white'>© 2025 All Rights Reserved by Nabil Siddik</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
