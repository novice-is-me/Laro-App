import React from 'react';
import { girlsBasket, Logo, ownerImg1 } from '../assets';
import { Link } from 'react-router-dom';

const OrganizerDashboard = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center p-20">
            {/* First screen */}
            <div className="bg-white rounded-[30px] p-12 relative w-1/2 h-[780px] mr-2">
        <div className="flex justify-between items-center p-4 mb-4 pt-8 pb-4">
          <Link to="/">
            <div className="cursor-pointer w-30 h-auto">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>
          <div className="flex flex-row items-center gap-2"> 
            <div className="text-gray-800 font-Poppins text-[14px]">
              Available Credits
            </div>
            <div className="bg-black rounded-[10px] pl-12 pr-12 pt-4 pb-4 text-white font-Poppins">
              7,000
            </div>
          </div>
        </div>
        <div className="p-4">
  <div className="flex items-start mb-4"> 
    <div className="h-half w-half rounded-full overflow-hidden mr-4">
      <img src={ownerImg1} alt="Owner" className="h-full w-full object-cover" />
    </div>
    <div> 
      <Link to="/organizerProfile" className="text-orange underline font-Poppins text-[20px] pl-4">My Dashboard</Link>
    </div>
  </div>
          <p className="pt-6 font-Poppins text-[#FA5000] font-semibold text-2xl text-[35px]">Hi! Maria,</p><br></br>
          <p className="font-Poppins text-[#717171] text-[15px] pb-8">You are now now able to initiate an event, just ensure <br></br>the accuracy of the information you provide.</p>
          <div className='pb-7 pt-10'>
            <Link to="/">
              <button className='bg-orange pl-7 pt-4 pb-4 pr-10 text-white font-Poppins rounded-[10px] mr-2'>
                Create Event
              </button>
            </Link>
            <Link to="/">
              <button className='bg-black pl-12 pt-4 pb-4 pr-12 text-white font-Poppins rounded-[10px] m-2'>
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Second screen */}
      <div className="relative flex-1 mr-4 w-1/2 h-[780px] ml-2">
        <img
          src={girlsBasket}
          alt="girls"
          className="h-full w-full object-cover rounded-[30px]"
        />
        <div className="absolute bottom-0 left-0 text-white bg-orange-500 rounded p-2">
          <p className='text-white font-Poppins font-semibold text-[16px] px-10 py-3'>
            Be part of our organizer <br /> team and earn money.
          </p>
          <div className='pb-7 pl-8 p'>
            <button className='bg-orange p-4 w-full text-white font-Poppins rounded-[10px]'>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
