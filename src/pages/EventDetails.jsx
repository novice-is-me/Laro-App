import React from "react";
import { ballMan, Logo, event1 } from "../assets";
import { Link } from "react-router-dom";
import EventDetailsForm from "../components/EventDetailsForm";

const EventDetails = () => {
  return (
    <div className="bg-black min-h-screen flex flex-row lg:flex-col justify-center items-center p-20 gap-4 lg:gap-0 lg:p-0 lg:m-0 lg:flex lg:flex-col-reverse xl:flex xl:flex-col-reverse xl:gap-0 xl:p-0 xl:m-0">
      {/* First screen */}
      <div className="bg-white rounded-[30px] pl-8 pr-8 relative w-full h-[780px] lg:h-auto lg:mr-2 mb-10 lg:mb-0 lg:p-2
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
      <div className="relative w-full h-[780px] lg:mr-2 mb-10 lg:mb-0 lg:sticky xl:sticky xl:top-0 xl:mb-0 lg:top-0 lg:h-[250px] xl:h-[250px] xsm:h-[250px]">
        <img
          src={event1}
          alt="event"
          className="w-full h-full object-cover rounded-[30px] lg:rounded-[0px] xl:rounded-[0px]"
        />
      </div>
    </div>
  );
};

export default EventDetails;
