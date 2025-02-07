import IconList from '@/Components/IconList'
import SectionHeader from '@/Components/SectionHeader'
import React, { forwardRef } from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const ContactSection = forwardRef((props, ref) => {
    return (
        <div ref={ref} id='contact' className='mt-20 bg-[#f6f3fc] py-20'>
            <div className="container">
                <SectionHeader title='Let’s Get In Touch' description={'Here are simple ways to contact me.'} />

                <div className="flex md:flex-row items-stretch gap-10 flex-col">
                    <div className='border border-primary py-16 px-3 md:px-5 lg:px-20 rounded-lg w-full md:w-6/12'>
                        <div className='flex h-full justify-center flex-col'>
                            <div className='mb-10 border-b border-primary'>
                                <IconList icon={<FaEnvelope />
                                } title='Email' text='nabilsiddik90@gmail.com' />
                            </div>
                            <div className="mb-10 border-b border-primary">
                                <IconList icon={<FaWhatsapp />
                                } title='Phone / Whatsapp' text='+8801957282230' />
                            </div>
                            <div className="border-b-0">
                                <IconList icon={<FaLocationDot />
                                } title='Address' text='Dhaka Bangladesh' />
                            </div>
                        </div>
                    </div>

                    <div className="contact-form w-full md:w-6/12">
                        <form>
                            <div className="input-gorup">
                                <div className='flex items-center gap-5'>
                                    <div className='w-6/12'>
                                        <label className='label text-primary mb-1 text-md block' htmlFor="first name">First Name</label>
                                        <input type="text" className='input input-bordered py-6 border border-primary' placeholder='First Name' />
                                    </div>

                                    <div className='w-6/12'>
                                        <label className='label text-primary mb-1 text-md block' htmlFor="first name">Last Name</label>
                                        <input type="text" className='input input-bordered py-6 border border-primary' placeholder='Last Name' />
                                    </div>
                                </div>
                            </div>



                            <div className='flex items-center gap-5 mt-7'>
                                <div className='w-6/12'>
                                    <label className='label text-primary mb-1 text-md block' htmlFor="email">Email</label>
                                    <input type="email" className='input input-bordered py-6 border border-primary' placeholder='Your Email' />
                                </div>

                                <div className='w-6/12'>
                                    <label className='label text-primary mb-1 text-md block' htmlFor="first name">Phone / Whatsapp</label>
                                    <input type="number" className='input input-bordered py-6 border border-primary' placeholder='Your Phone / Whatsapp' />
                                </div>
                            </div>

                            <div className="input-group mt-7">
                                <label className='label text-primary mb-1 text-md block' htmlFor="first name">Subject</label>
                                <input type="text" className='input input-bordered py-6 border border-primary w-full' placeholder='Your Phone / Whatsapp' />
                            </div>

                            <div className='mt-7'>
                                <label className='label text-primary mb-1 text-md block' htmlFor="first name">Message</label>
                                <textarea rows={5} className='textarea textarea-bordered w-full border border-primary' placeholder='Write Your Message ...'></textarea>
                            </div>

                            <div>
                                <input type="submit" value={'Submit'} className='btn btn-primary w-full mt-5' />
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
})

export default ContactSection
