import React from 'react'
import { players } from '../assets'
import { Link } from 'react-router-dom'

const Join = () => {  
  return (    
    <div className='bg-bgColor  w-full px-9 py-4'>
      <div className='flex justify-between rounded-[20px] px-[5rem] pt-[5rem] bg-join lg:pr-[3rem] 950px:pt-[3rem]
      md:flex-col md:bg-join2 md:gap-y-8 xsm:bg-join3 xsm:p-[3rem]'>                 
        <div className='flex flex-col pt-[5rem] gap-28 xl:gap-10 xl:pt-0 md:items-center'>
              <div className='flex flex-col gap-9 pr-20 xl:pr-0 md:gap-[1rem]
                md:text-center'> 
                  <h1 className='text-3xl font-Poppins font-bold text-white 950px:text-xl'>
                      Come and Join Now!</h1>
                  <p className=' font-Poppins text-xl text-[#E1E1E1] 950px:text-sm'>
                      Join the competition and engage in a variety of basketball games. 
                      You could be the standout player we're seeking.</p>
              </div> 
              <div className='flex gap-4'>  
                  <Link to={'/login'} className=' bg-orange px-8 py-3 text-white rounded-[27px] font-bold
                  950px:px-4 950px:text-sm'>
                      Login</Link>   
                  <Link to={'/matches'} className=' bg-black px-[5rem] py-3 rounded-[27px] text-white border
                  border-[#FA5000] font-bold 950px:px-4 950px:text-sm'>
                      Play Now</Link>
              </div>  
        </div>
        <div className=' xsm:hidden'>
          <img src={players} alt=""   
          className='w-[1900px] 950px:w-full' />
        </div>
      </div>
    </div>
    
  )
} 

export default Join
