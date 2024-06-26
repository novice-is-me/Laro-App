import React, { useState, useRef, useEffect } from "react";

import { girlsBasket, Logo, event1 } from "../assets";
import { Link } from "react-router-dom";

const EventSuccess = () => {
  const formContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the form container when formData updates
    if (formContainerRef.current) {
      formContainerRef.current.scrollTop =
        formContainerRef.current.scrollHeight;
    }
  });

  return (
    <div className="bg-black h-screen flex justify-center items-center p-20 gap-4 1110:flex-col-reverse 1110:bg-white 1110:p-0 1110:h-full">
      {/* First screen */}
      <div className="bg-white rounded-[30px] pl-8 pr-8 relative w-full h-[780px] lg:h-auto lg:mr-2 mb-10 lg:mb-0 lg:p-2
      lg:flex lg:flex-col lg:rounded-[0px] xl:rounded-[0px] xl:mb-0 xl:h-fit xl:pb-12 ">
        <div className="flex justify-between items-center p-4 mb-4 pt-8 pb-4">
          <Link to="/organizer">
            <div className="cursor-pointer h-auto lg:w-[70%] ">
              <img src={Logo} alt="Logo" className="w-[100px]" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col h-[90%]  w-full justify-start items-end lg:flex lg:items-center lg:justify-center">
          <div className="text-[20px] font-Poppins mb-4 lg:pb-4 pb-20 lg:w-full flex flex-col   mx-auto">
            {/*shield*/}
            <div className="flex justify-center items-center mx-auto ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FDB18B"
                className="bi bi-shield-fill mx-auto h-[100%] w-[100%]"
                viewBox="0 0 16 16"
              >
                <path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />

                {/*check*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-400 0 1200 512"
                >
                  <path
                    fill="#fa5000"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
              </svg>
            </div>
            <div className="font-Poppins text-[#FA5000] text-[36px] font-semibold mt-4 mb-2 flex justify-center items-center">
              <p>SUCCESS!!</p>
            </div>
            <div className="lg:p-2 text-center w-[450px] lg:w-fit">
              <p>Your game has been successfully scheduled. For more information, check your Activities.</p>

            </div>
          </div>

          <div className="lg:flex lg:flex-row ml-4 lg:p-2 lg:w-full flex gap-4 mb-4 mr-4 w-1/2">
            <Link
              to="/"
              className="border-[#FA5000] border-2 flex justify-center items-center text-[15px] bg-[#FA5000] font-Poppins text-white p-4 rounded-[10px] w-1/2 lg:w-full"
            >
              Home
            </Link>
            <Link
              to="/organizer"
              className="flex justify-center items-center text-[15px] bg-[#FFE4D9] font-Poppins p-4 border-2 text-[#FA5000] rounded-[10px] w-1/2 lg:w-full"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Second screen */}
      <div className="relative w-full h-[780px] 1110:sticky 1110:top-0 1110:h-[300px]">
        <img
          src={event1}
          alt="event"
          className="w-full h-full object-cover rounded-[30px] lg:rounded-[0px] xl:rounded-[0px]"
        />

      </div>
    </div>
  );
};

export default EventSuccess;
