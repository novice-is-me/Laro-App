import React from 'react'
import person from '../assets/Active Match/player3.jpg'

const RefereeCard = () => {
    return (
        <div className='w-[190px] font-Poppins text-[#ffffff] bg-black rounded-lg border-orange border-[1px] px-4 py-1 flex items-center gap-4 mx-auto'>
            <img src={person} alt="" className='w-[35px] h-[35px] rounded-[100%] object-cover ' />
            <div>
                <p className='font-bold text-[10px]'>Juan Dela Cruz</p>
                <div className='flex w-full'>
                    <p className='flex-1 text-gray text-[9px]'>Veteran</p>
                    <p className='text-gray text-[9px]'>ICON</p>
                </div>
            </div>
        </div>
    )
}

export default RefereeCard
