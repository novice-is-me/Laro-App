import React from "react"
import backbtn from "../assets/Organizer/CBB.png"
import { useState } from "react";
import { Navigate, useNavigate } from "react-router"
import Calendar from "react-calendar";
import BackButton from "../assets/image/BackButton.png";
import CreateScheduleComponent from "../components/CreateScheduleComponent";
import EventCalendar from "../components/EventCalendar";
import moment from "moment";
import OrganizerEventCalendar from "../components/OrganizerEventCalendar";

function CalendarOrganizer (){
    const navigate = useNavigate(); // Get the navigation function
    const weeks = ["S", "M", "T", "W", "T", "F", "S"];
    const times = Array.from({ length: 17 }, (_, index) => {
        const hour = index % 12 || 12; // Convert 0 to 12
        const ampm = index < 12 ? "AM" : "PM";
        return `${hour} ${ampm}`;
    });

    const [date, setDate] = useState(new Date());

    // Function to determine if a date is today
    const isToday = (dateToCheck) => {
        const today = new Date();
        return (
            dateToCheck.getDate() === today.getDate() &&
            dateToCheck.getMonth() === today.getMonth() &&
            dateToCheck.getFullYear() === today.getFullYear()
        );
    };

    // Function to provide custom class name for the tile
    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            // Check if the date is today
            if (isToday(date)) {
                return 'bg-orange text-white font-bold'; // Add your custom class for highlighting today's date
            }
        }
        return null;
    };

    return(
        <div className="w-auto h-auto font-Poppins">
            {/* Header of the Calendar */}
            <div className="flex items-end w-full h-fit p-10 pb-5">
                <div className="flex items-center w-full">
                    <img className="cursor-pointer" onClick={() => navigate("/organizer")} src={backbtn} alt="Back" />
                    <p className="text-[20px]">Calendar Set-Up</p>
                </div>
            </div>

            {/* Main Body Calendar */}
            <div className="flex w-full y-5 h-5/6">
                {/* Left side of the body */}
                <div className="flex flex-col items-center gap-10 w-fit ">
                    <div className="flex justify-center">
                        <Calendar
                            className="w-[379px] h-full font-Poppins "
                            value={date}
                            tileClassName={tileClassName}
                            formatShortWeekday={(locale, date) => weeks[date.getDay()]}
                            onChange={setDate}
                        />
                    </div>

                    <div className="flex flex-col justify-between w-full h-full">
                        <div className="flex px-[50px] gap-[50px] w-full">
                            <button className="w-[100px] h-[40px] rounded-[5px] border border-black text-orange text-[10px]">Schedule</button>
                            <button className="w-[100px] h-[40px] rounded-[5px] border border-black text-orange text-[10px]">Invites</button>
                            <button className="w-[100px] h-[40px] rounded-[5px] border border-black text-orange text-[10px]">Change Time</button>
                        </div>

                        <div className="flex px-[50px] w-full">
                            <button className="w-[100px] h-[40px] rounded-[5px] border border-black text-orange text-[10px]">Dashboard</button>
                        </div>
                    </div>
                </div>

                {/* Right side of the body */}
                <div className="flex flex-col items-center gap-5 px-10 w-full">
                    <div className="flex justify-evenly w-full h-fit py-3 rounded-xl bg-[#BFBFBF] shadow-lg">
                        <button className="w-[12%] h-[40px] bg-white rounded-[8px] font-semibold text-[16px]">Sun</button>
                        <button className="w-[12%] h-[40px] bg-white rounded-[8px] font-semibold text-[16px]">Mon</button>
                        <button className="w-[12%] h-[40px] bg-white rounded-[8px] font-semibold text-[16px]">Tue</button>
                        <button className="w-[12%] h-[40px] bg-white rounded-[8px] font-semibold text-[16px]">Wed</button>
                        <button className="w-[12%] h-[40px] bg-white rounded-[8px] font-semibold text-[16px]">Thu</button>
                        <button className="w-[12%] h-[40px] bg-white rounded-[8px] font-semibold text-[16px]">Fri</button>
                        <button className="w-[12%] h-[40px] bg-white rounded-[8px] font-semibold text-[16px]">Sat</button>
                    </div>

                    {/* Event Calendar */}
                    <div className="flex justify-center items-center w-full h-full border border-[##BFBFBF] rounded-xl overflow-y-auto">
                        <OrganizerEventCalendar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarOrganizer