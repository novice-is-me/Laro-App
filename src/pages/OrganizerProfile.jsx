import React from 'react';
import { girlsBasket, Logo, ownerImg1 } from '../assets';
import { Link } from 'react-router-dom';

const OrganizerProfile = () => {
  return (
    <div className="bg-black min-h-screen flex flex-row lg:flex-col justify-center items-center p-20 gap-4">
      {/* First screen */}
      <div className="bg-white rounded-[30px] p-12 relative w-full h-[780px] lg:h-auto lg:mr-2 mb-10 lg:mb-0 lg:p-2">
        <div className="flex justify-between items-center p-4 mb-4 pt-8 pb-4">
          <Link to="/">
            <div className="cursor-pointer h-auto lg:w-[70%]">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>
          <div className="flex flex-row items-center gap-3 ">
            <div className="text-[#000000] font-Poppins text-[14px] lg:hidden">
              Available Credits
            </div>
            <div className="bg-black rounded-[10px] pl-12 pr-12 pt-4 pb-4 text-white font-Poppins lg:p-4">
              7,000
            </div>
          </div>
        </div>
        <div className="p-4 border border-white w-[80%]">
          <div className="flex items-start mb-4 lg:">
            <div className="h-half w-half rounded-full overflow-hidden mr-8 lg:hidden">
              <img src={ownerImg1} alt="Owner" className="h-full w-full object-cover" />
            </div>
            <div className="text-orange underline font-Poppins text-[20px]">
              <Link to="/OrganizerDashboard">My Dashboard</Link>
            </div>
          </div>
          <p className="pt-6 font-Poppins text-[#FA5000] font-semibold text-2xl text-[35px]">Hi! Maria,</p><br></br>
          <p className="font-Poppins text-[#717171] text-[15px] pb-8">You are now now able to initiate an event, just ensure the accuracy of the information you provide.</p>
          
          <div className='pb-7 pt-10 flex flex-row lg:flex-col gap-4'>
            <Link to="/eventDetails" className="mb-2 lg:mb-0 lg:mr-2">
              <button className='bg-orange pl-7 pt-4 pb-4 pr-10 text-white font-Poppins rounded-[10px] w-full lg:w-auto'>
                Create Event
              </button>
            </Link>
            <Link to="/">
              <button className='bg-black pl-12 pt-4 pb-4 pr-12 text-white font-Poppins rounded-[10px] w-full lg:w-auto'>
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Second screen */}
      <div className="relative w-full h-[780px] lg:mr-2 mb-10 lg:mb-0 ">
        <img
          src={girlsBasket}
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

export default OrganizerProfile;
