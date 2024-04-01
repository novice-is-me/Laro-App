import React from 'react'
import person from '../assets/Active Match/player3.jpg'
import { NorthEast } from '@mui/icons-material';

const PlayersCard = ({ player }) => {
    return (
        <div className='w-[190px] max-h-[50px] font-Poppins bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-1 flex items-center gap-4'>
            <img src={person} alt="" className='w-[35px] h-[35px] rounded-[100%] object-cover ' />
            <div className='flex flex-1 flex-col relative'>
                <p className='font-bold text-[10px]'>{player.name}</p>
                <div className='flex w-full'>
                    <p className='flex-1 text-gray text-[9px]'>{player.status}</p>
                    <NorthEast style={{ fontSize: '10px', color: '#A5A5A5', display: 'absolute' }} />
                </div>
            </div>
        </div>
    )
}

export default PlayersCard
