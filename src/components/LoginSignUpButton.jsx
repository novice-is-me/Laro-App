import React from 'react'
import { Link } from 'react-router-dom'

const LoginSignUpButton = ({text, path, value}) => {
  return (
    <div className={`sm:hidden px-8 py-3 border  rounded-[22px] drop-shadow-shadowBtn
    ${value === 1 ? "border-orange bg-[#FFF6F2] text-[#FA5000]" 
    : "border-[#FFF6F2] bg-[#FA5000] text-[#FFFFFF]"}`}>
      <Link to={path}>
        <p href=""
        className='font-poppins text-sm'>{text}</p>
    </Link>
    </div>
  )
}

export default LoginSignUpButton
