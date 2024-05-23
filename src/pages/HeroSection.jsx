import React, { useEffect, useState } from 'react'
import { choices } from '../constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Options from '../components/Options'
import { hero4 } from '../assets'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LocalActivityRoundedIcon from '@mui/icons-material/LocalActivityRounded';


const HeroSection = () => {

  



  return (
    <div className='gap-4 lg:flex lg:items-center lg:flex-col lg:justify-center bg-bgColor flex flex-row  justify-between  py-[3rem] px-[5rem] xl:px-[1rem] lg:px-0  950px:h-[fit] xl:h-[fit] xsm:h-fit w-full'>
      <div className='w-1/2 lg:w-full lg:flex lg:justify-center lg:items-center lg:flex-col'>

        <div className='mb-10  '>
      <h1 className='uppercase font-Poppins text-[50px] font-bold leading-[60px] xsm:text-[30px] xsm:leading-normal text-center'>
              your partner in sports</h1>
              </div>

              <div className='mb-10 '>
          <p className='font-Poppins text-[#A5A5A5] text-xl xsm:text-sm'>Book, Organize, Manage with Ease</p>
          </div>

          <div className='flex flex-row lg:flex lg:flex-row gap-20 lg:gap-0 pr-5  ' >
          {choices.map((choice, i) =>{
              return (
                  <div key={i} 
                  className='flex'>
                      <Options {...choice} key={i} />
                  </div>    
              )
          })} 
          </div>
      </div>

      <div className='relative   w-1/2 flex justify-center items-center lg:w-full'>
    <img src={hero4} alt="" className='w-[400px] h-[600px] rounded-[20px] lg:w-[250px] lg:h-[380px]'/>
    

    <div className='absolute top-[60px]  950px:top-[20px] 950px:left-[20px] xsm:top-[20px] xsm:left-[-10px]  left-[-20px] xl:top-[60px] xl:left-[-40px] transform -translate-x-1/4 w-full flex justify-center w-fit'>
        <div className='bg-black w-fit h-[55px] rounded-[40px] flex items-center pl-[10px]'>
            <div className='w-[40px] h-[40px] bg-[#ffffff] rounded-[50%] flex self-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-[25px] fill-[#fa5000]'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg>
            </div>
            <h1 className='text-[#ffffff] mx-[12px] font-Poppins text-[19px] pr-8'>Book</h1>
        </div>
    </div>

    <div className='absolute top-[300px] right-[90px] transform -translate-y-1/2 translate-x-1/4 xl:top-[250px] xl:right-[30px] xl:top-auto xl:translate-y-0
  xsm:top-[155px] xsm:right-[40px] 950px:top-[150px] 950px:right-[225px] sm:right-[50px]  '>
  <div className='bg-orange border border-white border-4 w-fit h-[55px] rounded-[40px] flex items-center pl-[10px] '>
    <div className='w-[40px] h-[40px] bg-[#ffffff] rounded-[50%] flex self-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-[25px] fill-[#fa5000]'>
        <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
      </svg>
    </div>
    <h1 className='text-[#ffffff] mx-[12px] font-Poppins text-[19px] pr-8'>Play</h1>
  </div>
</div>

    <div className='absolute bottom-[60px] 950px:bottom-[20px] 950px:left-[20px] xsm:bottom-[20px] xsm:left-[5px] left-[-20px] xl:bottom-[60px] xl:left-[-40px] transform -translate-x-1/4 w-full flex justify-center w-fit'>
        <div className='bg-black w-fit h-[55px] rounded-[40px] flex items-center pl-[10px]'>
            <div className='w-[40px] h-[40px] bg-[#ffffff] rounded-[50%] flex self-center justify-center items-center'>
            <StarRoundedIcon style={{ color: '#fa5000' }} fontSize="large" />
            </div>
            <h1 className='text-[#ffffff] mx-[12px] font-Poppins text-[19px] pr-8'>Organize</h1>
        </div>
    </div>

</div>



    </div>
  )
}

export default HeroSection
