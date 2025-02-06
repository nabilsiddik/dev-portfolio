import Button from '@/Components/Button'
import React from 'react'
import { FaDownload } from "react-icons/fa6";
import developerProfile from '../../assets/images/developer/nabil.png'

const HeroSection = () => {
    return (
        <section id='hero_section' className='my-30'>
            <div className="container flex items-center">
                <div className='flex flex-col gap-7 w-7/12'>
                    <h2 className='text-5xl font-bold text-[#2a1454]'>I am Nabil Siddik</h2>
                    <h1 className='text-7xl font-bold text-primary'>Full-Stack <br /> Web Developer</h1>
                    <p>I'm a dedicated, experienced full-stack web developer passionate about creating modern, responsive, and visually appealing websites tailored to your needs. With a proven track record and a portfolio of successful projects (available on my profile), I aim to provide high-quality web development services that exceed client expectations.</p>
                    <div>
                        <Button icon={<FaDownload />} text={'Download Resume'} />
                    </div>
                </div>

                <div className='w-5/12'>
                    <img className='text-right' src={developerProfile} alt="" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
