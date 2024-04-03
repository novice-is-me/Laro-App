import React from 'react'
import './Calendar.css'
import Calendar from 'react-calendar';
import TimeField from 'react-simple-timefield'
import { useState } from 'react'; 

const Setup = ({setMain, setIsShow}) => {
    const weeks = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const [isTime, setIsTime] = useState(true)
    const [park, setPark] = useState(true)
    const [timer, setTimer] = useState(true)
    const [seats, setSeats] = useState(true)

    const time = () =>{
        return (
          <TimeField value={time} onChange={(e) => console.log(e.target.value)} />
        )
      }

  return (
    <div className='flex gap-8 items-center w-full mr-12'>   
      <div className=''> 
        <Calendar formatShortWeekday={(locale, date) => weeks[date.getDay()]}/>  
      </div> 
      <div className=''>
       <div className='flex space-x-3 items-center '>
          <p className='p-3 bg-white font-Poppins rounded-[5px] text-sm'>
            Time</p>
          <div className='flex text-center'>
            <TimeField value='00:00' style={{padding: '.75rem', width: '40%', outline: 'none', fontSize: '14px'}} />
            <div className='bg-white rounded-[5px]'> 
              <p onClick={() => setIsTime(!isTime)} 
              className='font-poppins text-sm p-3 border-l border-[#e7e7e7] hover:cursor-pointer'>
                {isTime ? 'AM' : 'PM'}</p>
            </div> 
          </div>
       </div>
       <div className='mt-2 space-y-1'>
        <p className='font-poppins text-[15px] font-semibold'>Court Details</p>
        <p className='font-poppins text-[10px] font-semibold'>Parking Slot</p>
        <div className='flex space-x-4 items-center'>
          <p className='font-poppins text-[10px] bg-white py-2 px-4 font-semibold'
           onClick={() => setPark(!park)}>{park  ? 'Yes':'No'}</p>
          <p className='font-poppins text-[10px] bg-white py-2 px-4 font-semibold'>(e.x 20 Slots)</p>
        </div>
        <p className='font-poppins text-[10px] font-semibold'>Buzzer and timer</p>
        <div>
          <p className='font-poppins text-[10px] bg-white py-2 px-4 w-[20%] font-semibold'
            onClick={() => setTimer(!timer)}>{timer ? 'Yes': 'No'}</p>
        </div>
        <p className='font-poppins text-[10px] font-semibold'>Number of Seats</p>
        <div className='flex space-x-4'>
          <p className='font-poppins text-[10px] bg-white py-2 px-4 font-semibold'
            onClick={() => setSeats(!seats)}>{seats ? 'Yes': 'No'}</p>
          <p className='font-poppins text-[10px] bg-white py-2 px-4 font-semibold'>(e.x 20 Slots)</p>
        </div>
       </div>
       <div className='mt-4 w-[80%]'>
          <button className=' bg-orange p-3 w-full rounded-[5px] font-semibold text-white font-Poppins'
           onClick={() => {
            setMain('second'); 
            setIsShow('publish') }}>
            Next</button>  
       </div>
      </div>
    </div> 
  )
}

export default Setup
