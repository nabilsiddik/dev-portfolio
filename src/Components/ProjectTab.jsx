import React from 'react'

const ProjectTab = ({projectType, setProjectType}) => {
    return (
        <div id='project_tab' className='mb-10'>
            <div id='skills_tab' className='w-11/12 md:w-8/12 lg:w-6/12 bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white py-2 px-2 rounded-full mx-auto flex items-center'>
                <button onClick={() => setProjectType('simple')} className={`btn rounded-full text-white border-0 shadow-none w-4/12 ${projectType === 'simple' ? 'bg-black' : 'bg-transparent'}`}>Simple</button>
                <button onClick={() => setProjectType('intermediate')} className={`btn rounded-full text-white border-0 shadow-none w-4/12 ${projectType === 'intermediate' ? 'bg-black' : 'bg-transparent'}`}>Intermediate</button>
                <button onClick={() => setProjectType('advance')} className={`btn rounded-full text-white border-0 shadow-none w-4/12 ${projectType === 'advance' ? 'bg-black' : 'bg-transparent'}`}>Advance</button>
            </div>
        </div>
    )
}

export default ProjectTab
