import ProjectCard from '@/Components/ProjectCard'
import SectionHeader from '@/Components/SectionHeader'
import React, { useState } from 'react'
import ProjectTab from '@/Components/ProjectTab'
import { projects } from '@/Data/projects'

const ProjectSection = () => {
  const [projectType, setProjectType] = useState('intermediate')

  return (
    <div id='project_section' className='my-20'>
      <SectionHeader title='My Recent Works' description='Here are some recent of mine. You are welcome to explore them.' />

      <div className="container">
        <ProjectTab projectType={projectType} setProjectType={setProjectType} />

        <div className="display-projects grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectType === 'intermediate' && projects[0].intermediate.map((project, index) => {
            return <ProjectCard project={project} projectType={setProjectType} setProjectType={setProjectType} />
          })}

          {projectType === 'simple' && projects[0].simple.map((project, index) => {
            return <ProjectCard project={project} projectType={setProjectType} setProjectType={setProjectType} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
