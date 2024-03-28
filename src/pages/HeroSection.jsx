import React from 'react'
import { choices } from '../constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Options from '../components/Options'
import { image1, image2 } from '../assets'

const HeroSection = () => {
  return (
    <div className=' bg-bgColor flex gap-8 justify-between p-[3rem]'>
      <div className=' flex flex-col 950px:items-center 950px:text-center'>  
        <div className='flex flex-col gap-y-8 mb-8'>
          <h1 className='uppercase font-Poppins text-[50px] font-bold leading-[60px] xsm:text-[20px] xsm:leading-normal'>
              Revolutionizing the Courts</h1>
          <p className='font-Poppins text-[#A5A5A5] text-xl xsm:text-sm'>Book, Organize, Manage with Ease</p>
        </div>
          {choices.map((choice, i) =>{
              return (
                  <div key={i} 
                  className='flex'>
                      <Options {...choice}/>
                  </div>    
              )
          })} 
      </div>
      <div className='flex flex-col mr-[5rem] xl:flex-row 950px:hidden'> 
        <div className='w-[100%] flex items-center justify-start relative mr-[21rem] xl:justify-center'>
          <div className='bg-[#fa5000] w-[250px] h-[250px] relative rounded-lg '>
            <img src={image1} alt="" className={`absolute bottom-0 w-full left-[30px]`} />
              <div className='bg-black w-fit h-[55px] rounded-[40px] flex items-center pl-[10px] absolute bottom-[-30px] left-[-50px]'  >
                <div className='w-[40px] h-[40px] bg-[#ffffff] rounded-[50%] flex self-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-[25px] fill-[#fa5000]'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg>
                </div>
                    <h1 className='text-[#ffffff] mx-[12px] font-Poppins text-[19px] pr-8'>Book</h1>
              </div>
              <div className='bg-black w-fit h-[55px] rounded-[40px] flex items-center pl-[10px] absolute bottom-[60px] right-[-110px]'  >
                <div className='w-[40px] h-[40px] bg-[#ffffff] rounded-[50%] flex self-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-[25px] fill-[#fa5000]'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg>
                </div>
                    <h1 className='text-[#ffffff] mx-[12px] font-Poppins text-xl pr-8'>Organize</h1>
                </div> 
              </div>
        </div>  
          <div className='w-[100%] flex items-center justify-end relative xl:hidden'> 
            <div className=' bg-black w-[300px] h-[240px] relative rounded-lg'>
              <img src={image2} alt="" className={`absolute bottom-0 w-[75%] left-[30px]`} />
                <div className='bg-[#FA5000] w-[50%] h-[55px] rounded-[40px] flex items-center pl-[10px] absolute top-[60px] left-[-115px]'  >
                    <div className='w-[40px] h-[40px] bg-[#ffffff] rounded-[50%] flex self-center justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-[25px] fill-[#fa5000]'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg>
                    </div>
                      <h1 className='text-[#ffffff] mx-[12px] font-Poppins text-[19px]'>Play</h1>
                </div> 
          </div>    
        </div>
      </div>
    </div>
  )
}

export default HeroSection
