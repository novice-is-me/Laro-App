import React from 'react'
import person from '../assets/Active Match/player3.jpg'

const RefereeCard = ({ referee }) => {
    return (
        <div className='w-[190px] min-h-[40px] font-Poppins text-[#ffffff] bg-black rounded-lg border-orange border-[1px] px-4 py-1 flex items-center gap-4 mx-auto'>
            <img src={person} alt="" className='w-[35px] h-[35px] rounded-[100%] object-cover ' />
            <div>
                <p className='font-bold text-[10px]'>{referee.name}</p>
                <div className='flex w-full'>
                    <p className='flex-1 text-gray text-[9px]'>Referee</p>
                </div>
            </div>
        </div>
    )
}

export default RefereeCard
