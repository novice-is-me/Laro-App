import React from 'react'
import './Calendar.css'
import Calendar from 'react-calendar';
import TimeField from 'react-simple-timefield'
import { useState } from 'react'; 

const Setup = ({setMain, setIsShow}) => {
    const weeks = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    
    const [date, setDate] = useState('')
    const [isTime, setIsTime] = useState('AM')
    const [time, setTime] = useState('')
    const [park, setPark] = useState('YES')
    const [timer, setTimer] = useState('YES')
    const [seats, setSeats] = useState('YES')

    const handleDateSelect = (date) => {
      // Extract only the date part
      const selectedDateFormat = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
      });
      // Update the selected date state
      setDate(selectedDateFormat);
  }

    const changeTime = () =>{
      setIsTime(isTime === 'AM' ? 'PM' : 'AM')
    } 

    const changePark = () =>{
      setPark(park === 'YES' ? 'NO' : 'YES')
    }

    const changeTimer = () =>{
      setTimer(timer === 'YES' ? 'NO' : 'YES')
    }

    const changeSeats = () =>{
      setSeats(seats === 'YES' ? 'NO' : 'YES')
    }

    const handleSubmit = () =>{
      console.log(date, time, isTime, park, timer, seats)
      setMain('second'); 
      setIsShow('publish');
    }

  return (
    <div className='flex gap-8 items-center w-full mr-12 832px:flex-col 832px:mr-0 pb-10'>   
      <div className='flex mt-5 gap-6  sm:flex-col'>
        <div className=''>
          <Calendar className='font-Poppins xsm:scale-[0.8]' formatShortWeekday={(locale, date) => weeks[date.getDay()]}
           value={date} onChange={handleDateSelect} />
        </div>
        <div className=' sm:flex sm:flex-col sm:items-center'>
          <div className='flex gap-1 mb-2'>
            <div className='bg-white rounded-md p-3'>Time</div>
              <div className='bg-white rounded-md p-3 flex w-32'>
                <TimeField className='flex-1' onChange={(e) => setTime(e.target.value)}/>
                <div className='border-l-[1px] border-gray px-3 cursor-pointer' 
                  onClick={changeTime}>{isTime}</div>
            </div>
          </div>
          <div>
            <h1 className='font-semibold mb-2 sm:text-center'>Court Details</h1>
              <p className='text-[12px] font-semibold mb-2'>Parking Slot</p>
              <div className='flex gap-1 mb-2'>
                <div className='w-[50px] text-[12px] bg-white rounded-md p-1 text-center cursor-pointer'
                  onClick={changePark}>
                  <p>{park}</p>
                </div>
              <div className='w-[100px] text-[12px] bg-white rounded-md p-1 text-center'>{`(e.x 20 Slots)`}</div></div>
              <p className='text-[12px] font-semibold mb-2'>Buzzer and Timer</p>
              <div className='w-[50px] text-[12px] bg-white rounded-md p-1 text-center mb-2 cursor-pointer'
                onClick={changeTimer}>
                <p>{timer}</p>
              </div>
              <p className='text-[12px] font-semibold mb-2'>Number of Seats</p>
              <div className='flex gap-1 mb-3'>
                <div className='w-[50px] text-[12px] bg-white rounded-md p-1 text-center cursor-pointer'
                  onClick={changeSeats}>
                  <p>{seats}</p>
                </div>
              <div className='w-[100px] text-[12px] bg-white rounded-md p-1 text-center'>{`(e.x 20 Slots)`}</div></div>
          </div>
          <button className='w-[200px] bg-orange rounded-md text-[11px] p-3 text-[#ffffff] xsm:mt-4'
            onClick={handleSubmit}>Next
          </button>
        </div>
      </div>  
    </div> 
  )
}

export default Setup
