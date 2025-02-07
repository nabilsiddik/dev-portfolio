import SectionHeader from '@/Components/SectionHeader'
import React from 'react'
import aboutImage from '../../assets/images/developer/about-me.jpg'
import Button from '@/Components/Button'

const AboutSection = () => {
    return (
        <section id='about_section' className='my-20'>
            <SectionHeader title='About Me' description='Here is a short description of who I am, What I am doing and How I started.' />

            <div className="container flex items-center gap-10">
                <div className="w-5/12">
                    <img className='rounded-lg shadow-lg h-[600px] ml-auto' src={aboutImage} alt="about nabil siddik" />
                </div>
                <div className="w-7/12">
                    <p className='mb-3'>I am a Full Stack Web Developer, Working in this industry since 2019. From the begening I was a fan of programming. That's the reason I came to this industry. I started with Javascript and Webdesign. Day by day I improved myself and now I am in full stack.</p>

                    <p className='mb-3'>I am passionate about creating modern, responsive, and visually appealing web applications. With a proven track record and a portfolio of successful projects, I aim to provide high-quality web development services. I worked with Java Spring Boot and Python Django but I love to work in MERN Stack.</p>

                    <p className='mb-5'>
                        I love playing Cricket and watching movies in my leisure time. Sometimes making Educational Content on Youtube is one of my hobby.
                    </p>

                    <Button text={'Talk to me'}/>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
