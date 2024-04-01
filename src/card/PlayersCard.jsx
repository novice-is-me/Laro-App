import React from 'react'
import person from '../assets/Active Match/player3.jpg'
import { NorthEast } from '@mui/icons-material';

const PlayersCard = () => {
    return (
        <div className='w-[190px] font-Poppins bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-1 flex items-center gap-4'>
            <img src={person} alt="" className='w-[35px] h-[35px] rounded-[100%] object-cover ' />
            <div>
                <p className='font-bold text-[10px]'>Juan Dela Cruz</p>
                <div className='flex w-full'>
                    <p className='flex-1 text-gray text-[9px]'>Veteran</p>
                    <NorthEast style={{ fontSize: '10px', color: '#A5A5A5' }} />
                </div>
            </div>
        </div>
    )
}

export default PlayersCard
