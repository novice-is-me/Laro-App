import React from 'react';
import OrganizerLoginForm from '../components/OrganizerLoginForm'
import { team, Logo } from '../assets';
import { Link } from 'react-router-dom';

const OrganizerLogin = () => {
  return (
    <div className="bg-black min-h-screen flex flex-row lg:flex-col justify-center items-center p-20 gap-4">
      {/* First screen */}
      <div className="bg-white rounded-[30px] p-14 relative w-full h-[780px] pl-16 lg:h-auto lg:mr-2 mb-10 lg:mb-0 lg:p-8">
        <div className="flex justify-between items-center p-4 mb-4 pt-8 pb-4 ">
          <Link to="/">
            <div className="cursor-pointer h-auto lg:w-[70%]">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>

        </div>
        <div className="p-4  w-[80%]">

          <p className="pt-6 font-Poppins text-[#5C5C5C] font-semibold text-2xl text-[40px]">Hello!</p><br></br>
          <p className="pt-4 w-[85%] font-Poppins text-[#717171] text-[15px] pb-8">If you are an official of the LARO PLATFORM, please login to you account here.</p>
          
          <div>  
                    <OrganizerLoginForm/>  
                </div>  


        </div>
      </div>

      {/* Second screen */}
      <div className="relative w-full h-[780px] lg:mr-2 mb-10 lg:mb-0 ">
        <img
          src={team}
          alt="girls"
          className="w-full h-full object-cover rounded-[30px]"
        />
        <div className="absolute bottom-0 left-0 text-white bg-orange-500 rounded p-2 lg:p-4 m-6 flex flex-col gap-4">
          <p className='  text-white font-Poppins font-semibold text-[16px] '>
            Be part of our organizer <br /> team and earn money.
          </p>
          <div className=''>
            <button className='bg-orange p-4 w-full text-white font-Poppins rounded-[10px]'>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerLogin;
