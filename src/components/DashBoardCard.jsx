import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh'

const DashBoardCard = ({title, points, emoji, value }) => {
  return (
    <div className={`flex flex-col  justify-between border  text-white w-full rounded-[10px] p-4 
     ${value === 'games' ? 'bg-orange' : 'bg-black'} h-full`}>
        <div>
            <div className=' flex justify-between'>
                <p className=' font-Inter font-semibold text-[16px]'>{title}</p>
                <RefreshIcon className=' bg-white rounded-full text-black'/>
            </div>
            <div className=' flex gap-2'>
                <p className=' font-Inter font-semibold text-[30px]'>{points}</p>
                <p className=' mt-auto'>PT</p>
            </div>
        </div>
        <div className=''>
            <img src={emoji} alt="" 
             className='ml-auto'/>
            <p className=' font-Inter font-light text-[8px]'>The organizer who manipulated the situation placed and updated points.</p>
        </div>
    </div>
  )
}

export default DashBoardCard
