import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, title, description, projectUrl}) => {
    return (
        <div className='card shadow-2xl py-10 px-10 lg:h-[600px] md:h-[400px] h-[400px] relative overflow-hidden group' style={{
            backgroundImage: `url(${project})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white absolute bottom-[50px] left-10 right-10 py-5 px-5 rounded-lg flex items-center justify-between gap-10 shadow-2xl z-11 translate-y-[140%] group-hover:translate-y-[0%] transition-all duration-[.3s] ease-out'>
                <div>
                    <h3 className='text-3xl font-bold mb-3'>{title && title}</h3>
                    <p>{description && description}</p>
                </div>
                <Link to={projectUrl} className='text-3xl'>
                    <FaExternalLinkAlt />
                </Link>
            </div>


            <div className='absolute h-[50%] bottom-0 left-0 right-0 w-full bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,1)] opacity-0 z-10 group-hover:opacity-[.7] transition-all duration-[.3s]'></div>
        </div>
    )
}

export default ProjectCard
