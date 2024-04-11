import React from "react";

function CreateScheduleComponent(){
    return(
        <div className="w-[490px] h-fit flex flex-col items-center bg-dirtywhite rounded-[10px] p-5 gap-5 font-Poppins text-[#B3B3B3]  shadow-xl ">
            {/* Create Schedule Banner */}
            <div className="w-full flex">
                <p className="font-medium text-lg text-black">Create Schedule</p>
            </div>

            {/* Add Title Input */}
            <div className="w-full flex">
                <input className="w-full p-1 border border-b border-x-0 border-t-0 border-black" type="text" placeholder="Add Title Here" />
            </div>

            {/* Date and Time */}
            <div className="w-full flex justify-between text-[12px]">
                <div className="w-full flex">
                    <p>Monday, April 5, 2024</p>
                </div>
                <div className="w-full flex">
                    <p>12PM to 00:00</p>
                </div>
            </div>

            {/* Invite Friends Section */}
            <div className="w-full flex flex-col gap-2">
                <p className="text-[12px]">Invite Friends</p>
                <input className="text-sm bg-[#FFEEE7] px-3 py-2 rounded-lg" type="text" placeholder="Insert email address or laro ID" />
            </div>

            {/* Court Detiails */}
            <div className="w-full flex">
                <p className="text-[12px]">Court Details</p>
            </div>

            {/* Court Details Inputs */}
            <div className="w-full flex gap-2 ">
                <div className="w-full flex flex-col gap-2">
                    <p className="text-[7px] font-medium">Number of Slots</p>
                    <input className="text-sm w-full bg-[#FFEEE7] px-3 py-2 rounded-lg" type="text" placeholder="Parking Slot" />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <p className="text-[7px] font-medium">Do you have Confort Room</p>
                    <input className="text-sm w-full bg-[#FFEEE7] px-3 py-2 rounded-lg" type="text" placeholder="Comfort Room" />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <p className="text-[7px] font-medium">Do you have Court Buzzer</p>
                    <input className="text-sm w-full bg-[#FFEEE7] px-3 py-2 rounded-lg" type="text" placeholder="Yes / No" />
                </div>
            </div>

            {/* Court Address */}
            <div className="w-full flex gap-2 ">
                <div className="w-full flex flex-col gap-2">
                    <p className="text-[7px] font-medium">Court Address</p>
                    <input className="text-sm w-full bg-[#FFEEE7] px-3 py-2 rounded-lg" type="text" placeholder="Insert Court Address Here" />
                </div>
            </div>

            {/* Button Save and Update */}
            <div className="w-full flex justify-end">
                <button className="px-5 py-2 bg-orange text-white rounded-lg text-[12px]">Save and Update</button>
            </div>
        </div>
    )
}

export default CreateScheduleComponent