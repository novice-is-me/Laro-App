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

    // const time = () =>{
    //     return (
    //       <TimeField value={time} onChange={(e) => console.log(e.target.value)} />
    //     )
    //   }

  return (
    <div className='flex gap-8 items-center w-full mr-12 832px:flex-col 832px:mr-0 pb-10'>   
      <div className='flex mt-5 gap-6  sm:flex-col'>
        <div className=''>
          <Calendar className='font-Poppins xsm:scale-[0.8]' formatShortWeekday={(locale, date) => weeks[date.getDay()]} />
        </div>
        <div className=' sm:flex sm:flex-col sm:items-center'>
            <div className='flex gap-1 mb-2'>
                <div className='bg-white rounded-md p-3'>Time</div>
                  <div className='bg-white rounded-md p-3 flex'>
                      <p className='px-2'>00:00</p>
                  <div className='border-l-[1px] border-gray px-3 cursor-pointer' onClick={() => setIsTime(!isTime)}>{isTime ? "AM" : "PM"}</div>
                </div>
            </div>
          <div>
            <h1 className='font-semibold mb-2 sm:text-center'>Court Details</h1>
              <p className='text-[12px] font-semibold mb-2'>Parking Slot</p>
              <div className='flex gap-1 mb-2'>
                <div className='w-[50px] text-[12px] bg-white rounded-md p-1 text-center cursor-pointer'
                  onClick={() => setPark(!park)}>
                  <p>{park ? "YES" : "NO"}</p>
                </div>
              <div className='w-[100px] text-[12px] bg-white rounded-md p-1 text-center'>{`(e.x 20 Slots)`}</div></div>
              <p className='text-[12px] font-semibold mb-2'>Buzzer and Timer</p>
              <div className='w-[50px] text-[12px] bg-white rounded-md p-1 text-center mb-2 cursor-pointer'
                onClick={() => setTimer(!timer)}>
                <p>{timer ? "YES" : "NO"}</p>
              </div>
              <p className='text-[12px] font-semibold mb-2'>Number of Seats</p>
              <div className='flex gap-1 mb-3'>
                <div className='w-[50px] text-[12px] bg-white rounded-md p-1 text-center cursor-pointer'
                  onClick={() => setSeats(!seats)}>
                  <p>{seats ? "YES" : "NO"}</p>
                </div>
              <div className='w-[100px] text-[12px] bg-white rounded-md p-1 text-center'>{`(e.x 20 Slots)`}</div></div>
          </div>
          <button className='w-[200px] bg-orange rounded-md text-[11px] p-3 text-[#ffffff] xsm:mt-4'
            onClick={() => {setMain('second'); setIsShow('publish') }}>Next
          </button>
        </div>
      </div>  
    </div> 
  )
}

export default Setup
