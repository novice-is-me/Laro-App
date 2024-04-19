import React from 'react';
import { ballMan, Logo } from '../assets';
import { Link } from 'react-router-dom';
import EventDetailsForm from '../components/EventDetailsForm';

const EventDetails = () => {
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
        
        <div className="pl-6 pt-2 w-[65%] lg:pl-3">
          <p className=" font-Poppins text-black font-semibold text-2xl text-[40px]">Event Details</p><br />
          <p className="font-Poppins text-[#717171] text-[15px]">You are now able to initiate an event, just ensure the accuracy of the information you provide.</p>
        </div>

        <div className=" w-[75%] lg:pb-[160px]">
          <EventDetailsForm />
        </div>
        <div className="absolute flex flex-row  gap-2 mt-4 bottom-8 right-14">
        <div className="flex flex-row lg:flex-col gap-2">
          <Link to="/organizer" className='text-[15px] bg-black font-Poppins border text-white py-4 px-8 rounded-[10px] w-full'>
            Cancel
          </Link>
          <Link to="/playerDetails" className='text-[15px] bg-[#FA5000] font-Poppins border text-white py-4 px-10 rounded-[10px] w-full'>
            Next
          </Link>
          </div>
        </div>
        
      </div>

      {/* Second screen */}
      <div className="relative w-full h-[780px] lg:mr-2 mb-10 lg:mb-0 ">
        <img
          src={ballMan}
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

export default EventDetails;
