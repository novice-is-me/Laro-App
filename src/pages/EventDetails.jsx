import React from "react";
import { ballMan, Logo, event1 } from "../assets";
import { Link } from "react-router-dom";
import EventDetailsForm from "../components/EventDetailsForm";

const EventDetails = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center p-20 gap-4 1110:flex-col-reverse 1110:bg-white 1110:p-0 1110:h-full">
      {/* First screen */}
      <div className="bg-white rounded-[30px] px-8 relative w-full h-[780px] 
      lg:flex lg:flex-col lg:rounded-[0px] xl:rounded-[0px] xl:mb-0 xl:h-fit xl:pb-12">
        <div className="flex justify-between items-center pl-4 pr-4 pt-8 pb-8">
          <Link to="/">
            <div className="cursor-pointer h-auto   ">
              <img src={Logo} alt="Logo" className="w-[100px]" />
            </div>
          </Link>
          <div className="flex flex-row items-center gap-3 ">
            <div className="text-[#000000] font-Poppins text-[14px] ">
              Available Credits
            </div>
            <div className="bg-black rounded-[10px] pl-12 pr-12 pt-4 pb-4 text-white font-Poppins lg:p-4">
              7,000
            </div>
          </div>
        </div>

        <div className="pl-6  w-[65%] lg:pl-3 lg:w-full ">
          <p className=" font-Poppins text-black font-semibold text-2xl text-[40px] ">
            Event Details
          </p>
          <br />
          <p className="font-Poppins text-[#717171] text-[15px]">
            You are now able to initiate an event, just ensure the accuracy of
            the information you provide.
          </p>
        </div>

        <div className=" w-[75%] h-[55%] overflow-y-auto lg:w-full xl:h-full">
          <EventDetailsForm />
        </div>
        <div className=" flex flex-row  gap-2 mt-4 bottom-8 right-14 xl:-full justify-end items-end lg:mt-4 xl:mt-4 xsm:mt-4">
          <div className="flex flex-row gap-2">
            <Link
              to="/organizer"
              className="text-[15px] bg-black font-Poppins border text-white py-4 px-8 rounded-[10px] w-full"
            >
              Cancel
            </Link>
            <Link
              to="/eventSuccess"
              className="text-[15px] bg-[#FA5000] font-Poppins border text-white py-4 px-10 rounded-[10px] w-full"
            >
              Next
            </Link>
          </div>
        </div>
      </div>

      {/* Second screen */}
      <div className="relative w-full h-[780px] 1110:sticky 1110:top-0 1110:h-[300px]">
        <img
          src={event1}
          alt="event"
          className="w-full h-full object-cover rounded-[30px] 1110:rounded-none"
        />
      </div>
    </div>
  );
};

export default EventDetails;
