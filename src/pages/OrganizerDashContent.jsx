// OrganizerDashContent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';

const OrganizerDashContent = () => {
    const [date, setDate] = useState(new Date());
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    }

    return (
        <div className='flex flex-col px-4 py-2 w-full lg:w-[1000px] ' style={{ height:  '100vh'}}>
            {/* Create Button */}
            <div className='flex flex-col justify-end   w-full'>
                    {/* Third & Fourth columns */}
                    <div className='flex justify-between  pl-2 gap-4 w-full h-[90%]'>
                        {/* Third column */}
                        <div className='flex flex-col gap-5 w-full'>
                        <div className='bg-black rounded-[10px] flex flex-col justify-between px-4 py-2 gap-4 h-[35%] '>
                            <div>
        <p className='font-Poppins font-semibold text-[30px] text-white'>
            Credits
        </p>
        <p className='font-Poppins text-gray text-[15px] pb-1 pl-2'>
            PHP
        </p>
        <p className='font-Poppins font-semibold text-white text-[30px]'>
            7,000
        </p>
    </div>
    <div className='w-[50%]  mb-4 lg:w-full '>
        <p className='font-Poppins text-white text-[14px]'>
            You need to reach 10,000 before checkout.
        </p>
    </div>
</div>

<div className='flex flex-col bg-orange text-white rounded-[10px] gap-2'>
      <div className='justify-between items-start pt-4 pl-4 pr-4 '>
        <button className="flex justify-between  w-[100%]">
          <p className='font-Inter font-semibold text-[30px]'>Calendar</p>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 512" className="pt-2">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill='white'/>
          </svg>
        </button>
      </div>
      <div className="flex justify-center items-center pb-4">
        <Calendar
          onChange={setDate}
          value={date}
        />
      </div>
    </div>




            </div>
                        {/* Fourth column */}
                        <div className='flex flex-col gap-6 h-full w-full'>

                        <div className='bg-orange text-white rounded-[10px] px-4 py-2 gap-4 h-[35%]'>
                        
                        <p className='font-Inter font-semibold text-[30px]'>
                            Earning History</p>
                            <p className='font-Poppins font-semibold text-[30px] pt-10'>
                            0</p>
                        
                        </div>

                        <div className='bg-black text-white rounded-[10px] flex justify-between px-4 py-2 gap-4 h-[65%]'>
                        <p className='font-Inter font-semibold text-[30px]'>
                                Match History</p>

                        </div>
                        </div>
                        
                    </div>
                   
            {/* Create New Event Button */}
            <div className='flex justify-center gap-4 border border-orange pt-4'>
                {showOptions && (
                    <button className="bg-orange text-white font-Poppins p-4 rounded-[30px]" onClick={toggleOptions}>
                        x Create New Event
                    </button>
                )}
                {!showOptions && (
                    <button className="bg-orange text-white font-Poppins p-4 rounded-[30px]" onClick={toggleOptions}>
                        + Create New Event
                    </button>
                )}
                </div>
                </div>
            </div>


    );
}

export default OrganizerDashContent;
