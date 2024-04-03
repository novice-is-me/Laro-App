import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'
import PictureComponent from '../components/PictureComponent' 
import { loginImg } from '../assets'
import Footer from './Footer'

const Login = () => {
  return (
    <div> 
        <div className='bg-bgColor flex justify-between'> 
            <div className='mx-auto relative flex flex-col justify-center items-start gap-3  w-[50%] pl-[15%] sm:w-[100%] sm:items-center sm:pl-0 sm:scale-[0.9] sm:text-center'>
                <div className='mb-8'> 
                    <h1 className='text-start sm:text-center font-Poppins font-black text-[40px] my-4 '>Welcome Back!</h1>
                    <p className='font-poppins text-[#A5A5A5] text-[17px]'>We've forwarded a code to your email. 
                    <br /> Kindly confirm to continue with the registration process.</p>
                </div>
                <div>  
                    <LoginForm/>
                    <p className='mt-12 font-poppins'>You don't have account? 
                        <Link to='/register' className='underline'> Create Account</Link>
                    </p>   
                </div>  
            </div>
            <div className='w-[50%] flex items-center justify-center sm:hidden 832px:scale-[0.8] 770px:scale-[0.7]'>
                    <PictureComponent img={loginImg} value={'login'} />
            </div>
        </div> 
        <Footer/>
    </div>
    
  )
}

export default Login
