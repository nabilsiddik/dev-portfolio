import LanguageItem from '@/Components/LanguageItem'
import { languages } from '@/Data/languages'
import React from 'react'

const LanguagesSection = () => {
    return (
        <section id='languages' className='bg-primary py-10 bg-gradient-to-r from-[#8750f7] to-[#2a1454] hidden lg:block'>
            <div className="container">
                <div className='grid grid-cols-13 gap-5'>
                    {languages.map((language) => {
                        return <LanguageItem key={language.id} language={language} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default LanguagesSection
