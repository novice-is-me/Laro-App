import React from 'react'

const CourtOwnerForm = ({setIsShow}) => {
  return (
    <div className='w-full flex 1139:justify-center '>
      <form action="" className='flex flex-col gap-6 w-[55%]'>
        <input type="email"
          placeholder='Email Address or Mobile Number'
          className='font-poppins p-4 bg-[#FFEEE6]' />
        <input type="text"
          placeholder='Username'
          className='font-poppins p-4 bg-[#FFEEE6]'/>
        <input type="password"
          placeholder='Password'
          className='font-poppins p-4 bg-[#FFEEE6]'/>
        <input type="number"
          placeholder='Contact Number'
          className='font-poppins p-4 bg-[#FFEEE6]'/>
        <div className='flex mt-5 1139:justify-center justify-start'>    
            <button className='bg-orange px-20 py-4 rounded-[7px] text-white'
              onClick={(e) => {
              e.preventDefault();
              setIsShow('calendar'); 
              console.log('calendar')}}>Next</button>  
        </div> 
      </form> 
    </div>
      
  )
}

export default CourtOwnerForm
