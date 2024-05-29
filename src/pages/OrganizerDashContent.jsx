import React, { useState } from "react";
import Calendar from "react-calendar";
import { userIcon, logoutImg, historyIcon, arrowActivity } from "../assets";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const OrganizerDashContent = ({ activeTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Get the navigation function
  
  const handleCalendarClick = () => {
    navigate("/organizerCalendar");
  };
  const weeks = ["S", "M", "T", "W", "T", "F", "S"];

  const times = Array.from({ length: 17 }, (_, index) => {
    const hour = index % 12 || 12; // Convert 0 to 12
    const ampm = index < 12 ? "AM" : "PM";
    return `${hour} ${ampm}`;
  });

  const toggleMenu = () => {
    setIsOpen(true);
    console.log(isOpen)
  };

  const toggleOff = () => {
    setIsOpen(false)
  }


  return (
    <div className="content h-fit">
      {/* content */}
      {activeTab === "Overview" && (
        <div className="flex flex-col px-4 py-2 w-full h-full lg:w-full xsm:gap-5">
          {/* Upper Boxes */}
          <div className="flex justify-center items-end gap-5 w-full h-fit px-10 py-2.5 xsm:flex xsm:flex-col-reverse xsm:px-0 xsm:py-0 lg:px-2 ">
            {/* First Box */}
            <div className="flex flex-col justify-between px-10 py-5 w-1/2 h-[200px] xl:h-[300px] lg:h-[300px] rounded-[10px] text-white font-Inter bg-black xsm:w-full xsm:h-fit">
              <div className="flex flex-col w-full h-full">
                <p className="text-[30px] xsm:text-2xl font-semibold">Credits</p>
                <p className="text-gray">PHP</p>
              </div>
              <div className="flex items-center w-full h-full">
                <p className="text-[40px] font-semibold">7,000</p>
              </div>
              <div className="flex items-end w-full h-full">
                <p className="text-[15px] font-light">
                  You need to reach 10,000 before checkout.
                </p>
              </div>
            </div>

            {/* Second Box */}
            <div className="flex flex-col justify-between px-10 py-5 w-1/2 h-[200px] xl:h-[300px] lg:h-[300px] rounded-[10px] text-white font-Inter bg-orange xsm:w-full xsm:h-fit">
              <div className="flex flex-col w-full h-1/3 ">
                <p className="text-[30px] xsm:text-2xl font-semibold">Earnings History</p>
              </div>
              <div className="flex items-start w-full h-2/3 ">
                <p className="text-[40px] font-semibold">0</p>
              </div>
            </div>
          </div>

          {/* Lower Boxes */}
          <div className="flex justify-center items-start gap-5 w-full px-10 lg:px-2 xsm:flex-col xsm:p-0">
            {/* Third Box */}
            <div className="flex flex-col justify-between px-10 py-5 w-1/2 h-[500px] 2xl:h-[500px] xl:h-[500px] lg:px-0 lg:h-[500px] rounded-[10px] text-white font-Inter bg-orange xsm:w-full ">
              <div className=" flex justify-between flex-col ">
              <div className="flex justify-between items-center w-full h-fit xsm:px-10 lg:px-10">
                <p className="text-[30px] xsm:text-2xl font-semibold">Calendar</p>
                <div
                  className="px-3 text-[40px] font-bold cursor-pointer"
                  onClick={handleCalendarClick}
                >
                  <KeyboardArrowRightRoundedIcon style={{ fontSize: '48px' }}/>
                  </div>
              </div>

              <div className="flex justify-center text-black w-full h-full xsm:p-2 lg:p-2">
                <Calendar
                  className="w-full h-fit font-Poppins"
                  formatShortWeekday={(locale, date) => weeks[date.getDay()]}
                />
              </div>
              </div>
            </div>

                    {/* Fourth Box */}
                    <div className='flex flex-col justify-between px-10 py-5 w-1/2 h-[500px] border-2 border-red-500 2xl:h-[500px] lg:h-[50px] rounded-[10px] text-white font-Inter bg-black xsm:w-full xsm:h-fit'>
                        <div className='flex flex-col w-full h-full '>
                            <p className='text-[30px] xsm:text-2xl font-semibold'>Match History</p>
                            <p className="text-[40px] font-semibold"></p>
                        </div>
                    </div>
                </div>
            </div>
            )}
            {activeTab === 'Activities' && (
                <div className='flex flex-col items-center w-full h-fit px-5 gap-5'>
                    {/* Header */}
                    <div className='flex justify-between items-center p-5 w-full h-fit font-Inter'>
                        <p className='text-[40px] font-semibold'>My Activity</p>
                        <div className='flex items-center gap-5'>
                            <p>Image</p>
                            <p className='text-[25px] xsm:text-xl font-semibold'>History</p>
                        </div>
                    </div>

          {/* Buttons */}
          <div className="flex justify-between w-full p-5 text-[25px] xsm:text-xl font-Inter shadow-lg">
            <button className="w-[185px] h-[65px] rounded-[200px] text-white font-bold bg-orange xsm:text-base">
              This week
            </button>
            <button className="w-[185px] h-[65px] xsm:text-base">This Month</button>
            <button className="w-[185px] h-[65px] xsm:text-base">Later</button>
          </div>

          {/* History Cards */}
          <div className="w-full h-[550px] flex flex-col py-5 gap-5 overflow-y-hidden hover:overflow-y-auto">
            {/* Individual Card */}
            <div className="flex flex-col px-10 py-5 gap-5 w-full h-fit rounded-[20px] font-Inter cursor-pointer hover:bg-[#B0B0B0] shadow-lg">
              <div className="flex justify-between">
                <p className="text-[30px] xsm:text-2xl text-orange font-semibold">
                  Game Event No. 1
                </p>
                <img src={arrowActivity} alt="Arrow Activity Icon" />{" "}
              </div>
              <p className="text-[25px] xsm:text-xl text-[#525252]">
                Saturday, March 16, 2024. Mandaluyong Court
              </p>
            </div>

            <div className="flex flex-col px-10 py-5 gap-5 w-full h-fit rounded-[20px] font-Inter cursor-pointer hover:bg-[#B0B0B0] shadow-lg">
              <div className="flex justify-between">
                <p className="text-[30px] xsm:text-2xl text-orange font-semibold">
                  Game Event No. 2
                </p>
                <img src={arrowActivity} alt="Arrow Activity Icon" />{" "}
              </div>
              <p className="text-[25px] xsm:text-xl text-[#525252]">
                Saturday, March 16, 2024. Mandaluyong Court
              </p>
            </div>

            <div className="flex flex-col px-10 py-5 gap-5 w-full h-fit rounded-[20px] font-Inter cursor-pointer hover:bg-[#B0B0B0] shadow-lg">
              <div className="flex justify-between">
                <p className="text-[30px] xsm:text-2xl text-orange font-semibold">
                  Game Event No. 3
                </p>
                <img src={arrowActivity} alt="Arrow Activity Icon" />{" "}
              </div>
              <p className="text-[25px] xsm:text-xl text-[#525252]">
                Saturday, March 16, 2024. Mandaluyong Court
              </p>
            </div>

            <div className="flex flex-col px-10 py-5 gap-5 w-full h-fit rounded-[20px] font-Inter cursor-pointer hover:bg-[#B0B0B0] shadow-lg">
              <div className="flex justify-between">
                <p className="text-[30px] xsm:text-2xl text-orange font-semibold">
                  Game Event No. 4
                </p>
                <img src={arrowActivity} alt="Arrow Activity Icon" />{" "}
              </div>
              <p className="text-[25px] xsm:text-xl text-[#525252]">
                Saturday, March 16, 2024. Mandaluyong Court
              </p>
            </div>

            <div className="flex flex-col px-10 py-5 gap-5 w-full h-fit rounded-[20px] font-Inter cursor-pointer hover:bg-[#B0B0B0] shadow-lg">
              <div className="flex justify-between">
                <p className="text-[30px] xsm:text-2xl text-orange font-semibold">
                  Game Event No. 5
                </p>
                <img src={arrowActivity} alt="Arrow Activity Icon" />{" "}
              </div>
              <p className="text-[25px] xsm:text-xl text-[#525252]">
                Saturday, March 16, 2024. Mandaluyong Court
              </p>
            </div>

            <div className="flex flex-col px-10 py-5 gap-5 w-full h-fit rounded-[20px] font-Inter cursor-pointer hover:bg-[#B0B0B0] shadow-lg">
              <div className="flex justify-between">
                <p className="text-[30px] xsm:text-2xl text-orange font-semibold">
                  Game Event No. 6
                </p>
                <img src={arrowActivity} alt="Arrow Activity Icon" />{" "}
              </div>
              <p className="text-[25px] xsm:text-xl text-[#525252]">
                Saturday, March 16, 2024. Mandaluyong Court
              </p>
            </div>
          </div>


        </div>
      )}

      {activeTab === "Upload" && (
        <div></div>
      )}

    
    </div>
  );
};

export default OrganizerDashContent;
