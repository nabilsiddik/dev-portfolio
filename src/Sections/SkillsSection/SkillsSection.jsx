import SectionHeader from '@/Components/SectionHeader'
import SkillBox from '@/Components/SkillBox'
import SkillsTab from '@/Components/SkillsTab'
import { skills } from '@/Data/skills'
import React, { forwardRef, useState } from 'react'

const SkillsSection = forwardRef((props, ref) => {

    const [skillType, setSkillType] = useState('frontend')

    return (
        <section ref = {ref} id='skills_section' className='my-20 bg-white'>
            <SectionHeader title='My Skills' description='Here are the skills I have. They are categorized in Front-End Back-End and Tools.' />

            <div className="container">
                <SkillsTab skillType={skillType} setSkillType={setSkillType} />

                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-10'>
                    {skillType === 'frontend' && skills[0].frontend.map((skill, index) => {
                        return <SkillBox key={index} skill={skill} />
                    })}

                    {skillType === 'backend' && skills[0].backend.map((skill, index) => {
                        return <SkillBox key={index} skill={skill} />
                    })}

                    {skillType === 'tools' && skills[0].tools.map((skill, index) => {
                        return <SkillBox key={index} skill={skill} />
                    })}

                    {skillType === 'languages' && skills[0].languages.map((skill, index) => {
                        return <SkillBox key={index} skill={skill} />
                    })}
                </div>
            </div>
        </section>
    )
})

export default SkillsSection
