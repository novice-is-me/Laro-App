import React, { useEffect, useRef, useState } from 'react'
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { useNavigate } from 'react-router'
const LoginForm = () => {

  const [user, setUser] = useState('')
  const [showPass, setShowPass] = useState(false);
  const userRef = useRef();

  const navigate = useNavigate();
  useEffect(() =>{
    userRef.current.focus();
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate('/user')
  }

  return (
    <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        <input type="text"
        autoComplete='off'
        ref={userRef}
        value={user}
        required
        placeholder='Email Address or Mobile Number'
        className='font-poppins p-4 bg-[#FFEEE6]'
        onChange={(e) => setUser(e.target.value)} />

        <div className='w-full flex relative'>
          <input type={showPass ? 'text' : 'password'}
          required
          placeholder='Password'
          className='font-poppins p-4 bg-[#FFEEE6] relative w-full'/>
          <span>{ showPass?
              <Visibility className='absolute right-4 top-5' style={{fontSize:'15px', color: 'gray'}} onClick={() => setShowPass(!showPass)}/> 
                :
              <VisibilityOff className='absolute right-4 top-5' style={{fontSize:'15px',  color: 'gray'}} onClick={() => setShowPass(!showPass)}/>
          }</span>
        </div>
        <div className='flex mt-8 sm:justify-center justify-start'>    
            <button className='bg-orange px-10 py-4 rounded-[7px] text-white'>Login</button>
        </div> 
    </form>
  )
}

export default LoginForm
