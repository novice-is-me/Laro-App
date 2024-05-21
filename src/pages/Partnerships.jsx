import React from 'react'
import { partner1, partner2 } from '../assets'

const Partnerships = () => {
  return (
    <div className='bg-bgColor w-full px-9 py-3 xsm:px-3'>
      <div className='bg-white  
         rounded-[20px] flex items-center justify-center  gap-8 pb-8 pt-4'>
        <div className=' text-center'>  
            <h1 className='font-poppins text-black text-3xl font-bold  flex justify-center items-center'>
                Brand Partners</h1>
                <div className=' flex flex-row justify-center items-center  gap-20 lg:flex lg:flex-col lg:gap-4'>
                <img src={partner2} alt="" className='   w-full h-full pl-20 lg:p-0' />
                <img src={partner1} alt="" className='   p-2 w-full h-full lg:p-0' />
                </div>
        </div>    

      </div>
    </div> 
  )
}

export default Partnerships;
