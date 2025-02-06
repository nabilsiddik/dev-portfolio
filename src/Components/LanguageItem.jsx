import React from 'react'

const LanguageItem = ({language}) => {
  return (
    <div>
      <img className='w-[80px]' src={language.icon} alt="" />
    </div>
  )
}

export default LanguageItem
