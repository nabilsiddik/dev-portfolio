import React from 'react'

const SectionHeader = ({ title, description }) => {
    return (
        <div id='section_header' className='md:mb-16 mb-10'>
            <div className="container">
                <div className='text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-3 text-primary'>{title && title}</h2>
                    <p className='w-11/12 md:w-8/12 lg:w-6/12 mx-auto'>{description && description}</p>
                </div>
            </div>
        </div>
    )
}

export default SectionHeader
