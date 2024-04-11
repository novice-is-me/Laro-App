import React, { useState } from "react";
import Calendar from "react-calendar";
import BackButton from "../assets/image/BackButton.png"
import CreateScheduleComponent from "../components/CreateScheduleComponent";

function UserCalendar(){
    const weeks = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const times = Array.from({ length: 17 }, (_, index) => {
        const hour = index % 12 || 12; // Convert 0 to 12
        const ampm = index < 12 ? 'AM' : 'PM';
        return `${hour} ${ampm}`;
      });

    return(
        <div className="w-full h-screen  flex flex-col">
            {/* Header of the Calendar */}
            <div className="w-full flex items-center p-5 gap-[26px] font-Poppins font-semibold text-xl ">
                <img src={BackButton} alt="Back" />
                <p>Calendar Set-Up</p>
            </div>

            {/* Calendar Body */}
            <div className="w-full h-full flex justify-center py-5">
                {/* Left side of the Calendar Body */}
                <div className="w-[25%] h-full flex flex-col items-center justify-between">
                    <div className="w-full flex flex-col items-center gap-10">
                        <Calendar className='w-[75%] h-full font-Poppins' formatShortWeekday={(locale, date) => weeks[date.getDay()]}/>
                    </div>

                    {/* Buttons */}
                    <div className="w-[75%] h-full pt-5 flex flex-col justify-between font-Poppins text-orange text-[10px]">
                        {/* Buttons */}
                        <div className="w-full flex justify-between font-Poppins text-orange text-[10px]">
                            <button className="border px-[26px] py-[11px] rounded-[5px] border-black">Schedule</button>
                            <button className="border px-[26px] py-[11px] rounded-[5px] border-black">Invite</button>
                            <button className="border px-[26px] py-[11px] rounded-[5px] border-black">Change TIme</button>
                        </div>

                        <button className="border w-fit px-[26px] py-[11px] rounded-[5px] border-black">Dashboard</button>
                    </div>
                </div>
                
                {/* Right Side of the Calendar Body */}
                <div className="w-[70%] h-full gap-5 flex flex-col items-center">
                    {/* Daily Calendar Banner */}
                    <div className="w-full h-fit py-[10px] px-5 gap-[25px] flex justify-evenly items-center rounded-[10px] font-Poppins text-base font-semibold bg-[#BFBFBF]">
                        <button className="px-10 py-3 rounded-lg bg-white">Sun</button>
                        <button className="px-10 py-3 rounded-lg bg-orange text-white">Mon</button>
                        <button className="px-10 py-3 rounded-lg bg-white">Tue</button>
                        <button className="px-10 py-3 rounded-lg bg-white">Wed</button>
                        <button className="px-10 py-3 rounded-lg bg-white">Thu</button>
                        <button className="px-10 py-3 rounded-lg bg-white">Fri</button>
                        <button className="px-10 py-3 rounded-lg bg-white">Sat</button>
                    </div>

                    {/* Time Table */}
                    <div className="w-full h-full flex py-6 px-4  border border-gray rounded-lg">
                        <ul className="w-full px-5 flex flex-col gap-3">
                            {times.map((time, index) => (
                            <li className="w-full flex justify-between gap-5 text-gray font-Poppins text-base" key={index}>
                                {time} 
                                <div onClick=""className="w-[90%] bg-[#FFEEE7] rounded-lg cursor-pointer">
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default UserCalendar;