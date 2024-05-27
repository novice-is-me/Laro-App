import React from 'react';
import { Link } from 'react-router-dom';
import { Org3 } from '../assets';


const Join = () => {
  return (
    <div className='w-full px-9 py-4 xsm:px-3 h-full bg-[#fff6f2] '>
      <div className='bg-black rounded-[20px]  flex flex-row lg:flex lg:flex-col'>
      <div className='py-[5rem] px-[6rem]  xl:py-10 xl:px-10 '>
  <div className='flex flex-col gap-10  lg:gap-10 lg:flex '>
    <div className='font-Poppins text-white font-bold text-[40px] lg:text-center xl:text-start '>
      <p className='w-[400px] lg:w-fit xl:w-[300px] xsm:w-fit'>Become an Organizer!</p>
    </div>

    <div className='font-Poppins text-white text-justify text-sm xsm:text-center  '>
      <p className='w-[550px] lg:w-fit xl:w-[400px] xsm:w-fit'>Join and earn as Organizer. Manage games and players easier with the opportunity to be sponsored brands.</p>
    </div>

    <div className='flex lg:flex md:flex-col  w-[550px] lg:w-full xl:w-fit xsm:w-full lg:items-center lg:justify-center gap-4'>
    
      <Link to='/register' className='bg-orange px-[5rem] py-3 text-white rounded-[27px] text-[18px] font-bold 950px:text-sm 950px:w-[200px]'>
        Register
      </Link>
      <Link to='/login' className='bg-black px-[5rem] py-3 rounded-[27px] text-white border text-[18px] border-[#FA5000] font-bold 950px:text-sm 950px:w-[200px]'>
        Login
      </Link>
 
    </div>
  </div>
</div>


  <div className=' flex justify-end items-end  rounded-[20px] w-full h-full lg:p-8 lg:flex lg:justify-center lg:items-center'>
    <img src={Org3} alt="Org3" className=' w-fit'  />
  </div>


          

      </div>
    </div>
  );
};

export default Join;
