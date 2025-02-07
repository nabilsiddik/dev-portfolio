import React from 'react'

const Button = ({text, icon}) => {
    return <button className='btn px-10 py-6 text-lg rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white hover:from-[#2a1454] hover:to-[#8750f7] transition duration-300 ease-in-out'><span>{text}</span> <span className='ml-2'>{icon && icon}</span> </button>
}
      
export default Button
