import ProjectCard from '@/Components/ProjectCard'
import SectionHeader from '@/Components/SectionHeader'
import React from 'react'

import project from '../../assets/images/projects/project.jpeg'
import project1 from '../../assets/images/projects/parcel-mama.jpeg'


const ProjectSection = () => {
  return (
    <div id='project_section' className='my-20'>
        <SectionHeader title='My Recent Works' description='Here are some recent of mine. You are welcome to explore them.'/>

        <div className="container">
            <div className="display-projects grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                <ProjectCard project = {project} title={'Personal portfolio website using MERN Stack'} description={'Parcel mama is a parcel booking delivery online service '} projectUrl='https://www.google.com'/>

                <ProjectCard project = {project1} title={'Personal portfolio website using MERN Stack'} description={'Parcel mama is a parcel booking delivery online service '}/>

                <ProjectCard project = {project} title={'Personal portfolio website using MERN Stack'} description={'Parcel mama is a parcel booking delivery online service '}/>

                <ProjectCard project = {project} title={'Personal portfolio website using MERN Stack'} description={'Parcel mama is a parcel booking delivery online service '}/>
            </div>
        </div>
    </div>
  )
}

export default ProjectSection
