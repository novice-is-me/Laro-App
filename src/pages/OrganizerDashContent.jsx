import React, { useState } from "react";
import Calendar from "react-calendar";
import OrganizerDashboardModal from '../components/OrganizerDashboardModal';
import { userIcon, logoutImg, historyIcon, arrowActivity } from "../assets";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const OrganizerDashContent = ({ activeTab }) => {
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

    const [ openmodal, setOpenModal ] = useState(false);

    const isOpen = () => {
        setOpenModal(true)
        console.log("Clicked!")
        console.log(openmodal)
    }

    const CloseModal = () => {
        setOpenModal(false)
        console.log("Closed");
        console.log(openmodal)
    }

  return (
    <div className="content">
      {activeTab === "Overview" && (
        <div
          className="flex flex-col px-4 py-2 w-full lg:w-[1000px] "
          style={{ height: "100vh" }}
        >
          {" "}
          {/* Upper Boxes */}
          <div className="flex justify-center items-end gap-5 w-full h-fit px-10 py-2.5">
            {/* First Box */}
            <div className="flex flex-col justify-between px-10 py-5 w-1/2 h-[265px] rounded-[10px] text-white font-Inter bg-black">
              <div className="flex flex-col w-full h-full">
                <p className="text-[30px] font-semibold">Credits</p>
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
            <div className="flex flex-col justify-between px-10 py-5 w-1/2 h-[265px] rounded-[10px] text-white font-Inter bg-orange">
              <div className="flex flex-col w-full h-1/3 ">
                <p className="text-[30px] font-semibold">Earnings History</p>
              </div>
              <div className="flex items-start w-full h-2/3 ">
                <p className="text-[40px] font-semibold">0</p>
              </div>
            </div>
          </div>
          {/* Lower Boxes */}
          <div className="flex justify-center items-center gap-5 w-full h-fit px-10 py-2.5">
            {/* Third Box */}
            <div className="flex flex-col justify-between px-10 py-5 w-1/2 h-[537px] rounded-[10px] gap-5 text-white font-Inter bg-orange">
              <div className="flex justify-between items-center w-full h-fit ">
                <p className="text-[30px] font-semibold">Calendar</p>
                <p
                  className="px-3 text-[40px] font-bold cursor-pointer"
                  onClick={handleCalendarClick}
                >
                  &#62;
                </p>
              </div>

              <div className="flex justify-center text-black w-full h-full">
                <Calendar
                  className="w-full h-fit font-Poppins"
                  formatShortWeekday={(locale, date) => weeks[date.getDay()]}
                />
              </div>
            </div>

                        {/* Fourth Box */}
                        <div className='flex flex-col justify-between px-10 py-5 w-1/2 h-[537px] rounded-[10px] text-white font-Inter bg-black'>
                            <div className='flex flex-col w-full h-full'>
                                <p className='text-[30px] font-semibold'>Match History</p>
                            </div>
                        </div>
                    </div>

                    {/* Create Event Button */}
                    <div className='flex justify-center items-center w-full h-fit font-Inter p-5'>
                        <div onClick={() => isOpen()} className='flex justify-evenly items-center w-[295px] h-[70px] text-white text-[20px] font-semibold bg-orange rounded-[50px] cursor-pointer'>
                            <p className='flex items-center h-full text-[40px]'>+</p>
                            <p className='flex items-center h-full'>Create New Event</p>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 'Activities' && (
                <div className='flex flex-col items-center w-full h-screen px-5 gap-5'>
                    {/* Header */}
                    <div className='flex justify-between items-center p-5 w-full h-fit font-Inter'>
                        <p className='text-[40px] font-semibold'>My Activity</p>
                        <div className='flex items-center gap-5'>
                            <p>Image</p>
                            <p className='text-[25px] font-semibold'>History</p>
                        </div>
                    </div>

          {/* Buttons */}
          <div className="flex justify-between w-full p-5 text-[25px] font-Inter shadow-lg">
            <button className="w-[185px] h-[65px] rounded-[200px] text-white font-bold bg-orange">
              This week
            </button>
            <button className="w-[185px] h-[65px]">This Month</button>
            <button className="w-[185px] h-[65px]">Later</button>
          </div>

          {/* History Cards */}
          <div className="w-full h-full flex flex-col py-5 gap-5 overflow-y-auto">
            {/* Individual Card */}
            <div className="flex flex-col px-10 py-5 gap-5 w-full h-fit rounded-[20px] font-Inter border border-[#B0B0B0] shadow-lg">
              <div className="flex justify-between">
                <p className="text-[30px] text-orange font-semibold">
                  Game Event No. 1
                </p>
                <img src={arrowActivity} alt="Arrow Activity Icon" />{" "}
              </div>
              <p className="text-[25px] text-[#525252]">
                Saturday, March 16, 2024. Mandaluyong Court
              </p>
            </div>

            <div className="flex flex-col px-10 py-5 gap-5 w-full h-fit rounded-[20px] font-Inter border border-[#B0B0B0] shadow-lg">
              <div className="flex justify-between">
                <p className="text-[30px] text-orange font-semibold">
                  Game Event No. 2
                </p>
                <img src={arrowActivity} alt="Arrow Activity Icon" />{" "}
              </div>
              <p className="text-[25px] text-[#525252]">
                Saturday, March 16, 2024. Mandaluyong Court
              </p>
            </div>

            <div className="flex flex-col px-10 py-5 gap-5 w-full h-fit rounded-[20px] font-Inter border border-[#B0B0B0] shadow-lg">
              <div className="flex justify-between">
                <p className="text-[30px] text-orange font-semibold">
                  Game Event No. 3
                </p>
                <img src={arrowActivity} alt="Arrow Activity Icon" />{" "}
              </div>
              <p className="text-[25px] text-[#525252]">
                Saturday, March 16, 2024. Mandaluyong Court
              </p>
            </div>

            <div className="flex flex-col px-10 py-5 gap-5 w-full h-fit rounded-[20px] font-Inter border border-[#B0B0B0] shadow-lg">
              <div className="flex justify-between">
                <p className="text-[30px] text-orange font-semibold">
                  Game Event No. 4
                </p>
                <img src={arrowActivity} alt="Arrow Activity Icon" />{" "}
              </div>
              <p className="text-[25px] text-[#525252]">
                Saturday, March 16, 2024. Mandaluyong Court
              </p>
            </div>

            <div className="flex flex-col px-10 py-5 gap-5 w-full h-fit rounded-[20px] font-Inter border border-[#B0B0B0] shadow-lg">
              <div className="flex justify-between">
                <p className="text-[30px] text-orange font-semibold">
                  Game Event No. 5
                </p>
                <img src={arrowActivity} alt="Arrow Activity Icon" />{" "}
              </div>
              <p className="text-[25px] text-[#525252]">
                Saturday, March 16, 2024. Mandaluyong Court
              </p>
            </div>

            <div className="flex flex-col px-10 py-5 gap-5 w-full h-fit rounded-[20px] font-Inter border border-[#B0B0B0] shadow-lg">
              <div className="flex justify-between">
                <p className="text-[30px] text-orange font-semibold">
                  Game Event No. 6
                </p>
                <img src={arrowActivity} alt="Arrow Activity Icon" />{" "}
              </div>
              <p className="text-[25px] text-[#525252]">
                Saturday, March 16, 2024. Mandaluyong Court
              </p>
            </div>
          </div>

          {/* Create New Event Button */}
          <div className="flex justify-center items-center w-full h-fit font-Inter p-5">
            {/* Change the onClick event to navigate to "/eventdetails" */}
            <button
              onClick={() => navigate("/eventDetails")}
              // onClick={() => isOpen()} className="flex justify-evenly items-center w-[295px] h-[70px] text-white text-[20px] font-semibold bg-orange rounded-[50px] cursor-pointer"
            >
              <p className="flex items-center h-full text-[40px]">+</p>
              <p className="flex items-center h-full">Create New Event</p>
            </button>
          </div>
        </div>
      )}

            {openmodal && 
                <OrganizerDashboardModal 
                    isOpen={openmodal}
                    onClose={CloseModal}
                />
            }
    </div>
  );
};

export default OrganizerDashContent;
