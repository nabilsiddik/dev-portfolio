import Button from '@/Components/Button'
import React, { forwardRef } from 'react'
import { FaDownload } from "react-icons/fa6";
import developerProfile from '../../assets/images/developer/nabil.png'

const HeroSection = forwardRef((props, ref) => {
    return (
        <section ref={ref} id='hero_section' className='mt-10 md:mt-16 mb-20 bg-white'>
            <div className="container flex flex-col md:flex-row items-center">
                <div className='flex flex-col gap-7 md:w-7/12 w-full order-2 md:order-1'>
                    <h2 className='md:text-5xl text-3xl font-bold text-[#2a1454] text-center md:text-left'>I am Nabil Siddik</h2>
                    <h1 className='lg:text-7xl font-bold text-primary text-center md:text-left text-4xl md:text-5xl'>Full-Stack <br /> Web Developer</h1>
                    <p className='text-center md:text-left'>I'm a dedicated, experienced full-stack web developer passionate about creating modern, responsive, and visually appealing websites. I aim to provide high-quality web development services that exceed client expectations.</p>
                    <div className='flex justify-center md:block'>
                        <a href="/public/Resume.pdf" download='Resume.pdf'>
                            <button className='btn px-10 py-6 text-lg rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white hover:from-[#2a1454] hover:to-[#8750f7] transition duration-300 ease-in-out'><span>Download Resume</span> <span className='ml-2'><FaDownload/></span> </button>
                        </a>
                    </div>
                </div>

                <div className='md:w-5/12 w-full order-1 md:order-2'>
                    <img className='mx-auto' src={developerProfile} alt="" />
                </div>
            </div>
        </section>
    )
})

export default HeroSection
