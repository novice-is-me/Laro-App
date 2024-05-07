import React from "react";
import no1 from "../assets/Organizer/CPG.png"
import no2 from "../assets/Organizer/COBL.png"
import no3 from "../assets/Organizer/C3x3E.png"
import no4 from "../assets/Organizer/C3PSE.png"


function OrganizerDashboardModal({ isOpen, onClose }) {
    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-end justify-center z-50 font-Poppins text-white">
            <div onClick={onClose} className="absolute w-full h-full bg-black opacity-50"></div>
            <div className="flex flex-col gap-5 z-10 p-5">
                {/* Buttons in modal */}
                <div className="flex justify-center items-center gap-[14px] bg-orange rounded-[50px] max-w-[295px] h-[70px] px-5 text-[20px] font-semibold cursor-pointer">
                    <img src={no1} alt="Game Logo" />
                    <p className="w-full text-left">Create Pickup Game</p>
                </div>

                <div className="flex justify-center items-center gap-[14px] bg-[#3F3F3F] rounded-[50px] w-[295px] h-[70px] px-5 text-[20px] font-semibold cursor-not-allowed">
                    <img src={no2} alt="Game Logo" />
                    <p className="w-full text-left">Create Organized Basketball League</p>
                </div>

                <div className="flex justify-center items-center gap-[14px] bg-[#3F3F3F] rounded-[50px] w-[295px] h-[70px] px-5 text-[20px] font-semibold cursor-not-allowed">
                    <img src={no3} alt="Game Logo" />
                    <p className="w-full text-left">Create 3x3 Event</p>
                </div>

                <div className="flex justify-center items-center gap-[14px] bg-[#3F3F3F] rounded-[50px] w-[295px] h-[70px] px-5 text-[20px] font-semibold cursor-not-allowed">
                    <img src={no4} alt="Game Logo" />
                    <p className="w-full text-left">Create 3 Point Shoout Event</p>
                </div>

                <div className="flex justify-center items-center gap-[14px] rounded-[50px] w-[295px] h-[70px] text-[20px] font-semibold">
                    <div onClick={onClose} className="flex justify-center items-center bg-orange rounded-full w-[90px] h-[70px] cursor-pointer">
                        <p>X</p>
                    </div>
                    <div className="flex justify-center items-center rounded-[50px] w-full h-[70px] bg-white text-black border border-orange">
                        <p>Create New Event</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizerDashboardModal