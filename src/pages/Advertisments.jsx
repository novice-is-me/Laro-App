import React from 'react'
import { Ads } from '../assets'

const Advertisments = () => {
  return (
    <div className='bg-bgColor w-full px-9 py-3'>
      <div className='bg-black px-[4rem] py-[3rem] pb-[5rem] xsm:p-[3rem]
         rounded-[20px] flex items-center gap-8 832px:flex-col justify-between'>
        <div className=' 832px:text-center md:pr-0 pr-[10rem]'>  
            <h1 className='font-poppins text-[#FFEEE6] text-[40px] font-bold 
             xsm:text-[20px]'>
                Advertisments Placements</h1> 
        </div>    
        <div>
            <img src={Ads} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Advertisments
