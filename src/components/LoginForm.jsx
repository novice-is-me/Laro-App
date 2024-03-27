import React from 'react'

const LoginForm = () => {
  return (
    <form action="" className='flex flex-col gap-6'>
        <input type="email"
        placeholder='Email Address or Mobile Number'
        className='font-poppins p-4 bg-[#FFEEE6]' />
        <input type="text"
        placeholder='Password'
        className='font-poppins p-4 bg-[#FFEEE6]'/>
        <div className='flex mt-8 sm:justify-center justify-start'>    
            <button className='bg-orange px-10 py-4 rounded-[7px] text-white'>Login</button>
        </div> 
    </form>
  )
}

export default LoginForm
