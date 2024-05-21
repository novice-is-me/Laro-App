import React from 'react';
import { Link } from 'react-router-dom';
import { Org3 } from '../assets';


const Join = () => {
  return (
    <div className='bg-bgColor w-full px-9 py-4 xsm:px-3'>
      <div className='relative flex justify-between rounded-[20px] pl-[5rem]  bg-join lg:pr-[3rem] md:flex-col md:bg-join2 md:gap-y-8 xsm:bg-join3 xsm:p-[3rem]'>
        <div className='flex flex-col pt-[10rem] gap-28 xl:gap-10 xl:pt-0 md:items-center h-[600px] lg:h-fit'>
          <div className='flex flex-col gap-9 pr-12  mr-3 xl:pr-0 md:gap-[1rem] md:text-center'>
            <h1 className='text-3xl font-Poppins font-bold text-white 950px:text-xl'>
              Become an Organizer!
            </h1>
            <p className='font-Poppins text-xl text-[#E1E1E1] 950px:text-sm  w-[450px]  lg:w-[300px]'>
              Join and earn as Organizer. Manage games and players easier with the opportunity 
              to be sponsored by brands.
            </p>
          </div>
          <div className='flex gap-4 lg:flex lg:flex-col'>
            <Link to='/register' className='bg-orange px-[5rem] py-3 text-white rounded-[27px] font-bold  950px:text-sm'>
              Register
            </Link>
            <Link to='/login' className='bg-black px-[5rem] py-3 rounded-[27px] text-white border border-[#FA5000] font-bold  950px:text-sm'>
              Login
            </Link>
          </div>
        </div>

        <div className='flex flex-row  relative w-full  h-full '>
  <div className='absolute  flex justify-start items-start right-0 rounded-[20px] '>
    <img src={Org3} alt="Org1" className='w-[790px] h-[600px] 950px:w-full lg:hidden ' style={{ zIndex: 0 }} />
  </div>

</div>

      </div>
    </div>
  );
};

export default Join;
