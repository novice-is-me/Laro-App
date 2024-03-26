import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'
import Header from './Header'

const Login = () => {
  return (
    <div> 
        <Header/>
        <div className='bg-bgColor flex p-[3rem]'> 
        <div className=''>
            <div className='mb-8'>
                <h1 className='text-center md:text-start font-poppins text-[2.5rem] my-4 '>Welcome Back!</h1>
                <p className='font-poppins text-[#A5A5A5] text-[17px]'>We've forwarded a code to your email. 
                <br /> Kindly confirm to continue with the registration process.</p>
            </div>
            <div> 
                <LoginForm/>
                <p className='mt-12 font-poppins'>You don't have account?
                    {/* make this a link react router   */}  
                    <Link to='/create' className='underline'>Create Account</Link>
                </p>   
            </div>  
        </div>
        <div className=' hidden md:contents'> 
            image
        </div>
    </div> 
    </div>
    
  )
}

export default Login
