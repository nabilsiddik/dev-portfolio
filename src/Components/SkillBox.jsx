import React from 'react'

const SkillBox = ({skill}) => {
  return (
    <div id='skill_box' className='py-10 px-3 bg-[#f6f3fc] rounded-xl hover:bg-gradient-to-r hover:from-[#8750f7] hover:to-[#2a1454] hover:text-white transition duration-[500ms] ease-in-out cursor-pointer'>
      <img className='w-[100px] mx-auto' src={skill.icon} alt="skill icon" />
      <h3 className='font-bold text-center mt-4'>{skill.skillName}</h3>
    </div>
  )
}

export default SkillBox
