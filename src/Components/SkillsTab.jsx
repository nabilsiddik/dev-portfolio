import React from 'react'

const SkillsTab = ({skillType, setSkillType}) => {
  return (
    <div id='skills_tab' className='w-11/12 md:w-10/12 lg:w-8/12 bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white py-2 px-2 rounded-full mx-auto flex items-center'>
      <button onClick={()=> setSkillType('frontend')} className={`btn rounded-full text-white border-0 shadow-none w-3/12 ${skillType === 'frontend' ? 'bg-black' : 'bg-transparent'}`}>Front End</button>
      <button onClick={()=> setSkillType('backend')} className={`btn rounded-full text-white border-0 shadow-none w-3/12 ${skillType === 'backend' ? 'bg-black' : 'bg-transparent'}`}>Back End</button>
      <button onClick={()=> setSkillType('tools')} className={`btn rounded-full text-white border-0 shadow-none w-3/12 ${skillType === 'tools' ? 'bg-black' : 'bg-transparent'}`}>Tools</button>
      <button onClick={()=> setSkillType('languages')} className={`btn rounded-full text-white border-0 shadow-none w-3/12 ${skillType === 'languages' ? 'bg-black' : 'bg-transparent'}`}>Languages</button>
    </div>
  )
}

export default SkillsTab
