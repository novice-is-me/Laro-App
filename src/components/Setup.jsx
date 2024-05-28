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
    <div className='flex justify-start items-center gap-8 w-full 1110:justify-center '>   
      <div className='flex gap-10 1110:flex-col 1110:items-center'>
        <div className=''>
          <Calendar className='font-Poppins sm:scale-100' formatShortWeekday={(locale, date) => weeks[date.getDay()]}
           value={date} onChange={handleDateSelect} />
        </div>

        {/*  Details */}
        <div className='flex flex-col justify-between gap-2 1110:gap-5 1110:pb-5 sm:flex sm:flex-col sm:items-center'>
          <div className='flex gap-3 1110:justify-center 1110:text-xl'>
            <div className='bg-white rounded-md p-3'>
              <p className=''>Time</p>
            </div>
            <div className='bg-white rounded-md p-3 flex w-32'>
              <TimeField className='flex-1' onChange={(e) => setTime(e.target.value)}/>
              <div className='-l-[1px] -gray px-3 cursor-pointer' 
                onClick={changeTime}>{isTime}
              </div>
            </div>
          </div>

          {/* Court Details */}
          <div className='flex flex-col w-full gap-2 1110:gap-5'>
            <h1 className='font-semibold mb-2 1110:text-2xl sm:text-center'>Court Details</h1>
            {/* Parking Input */}
            <div className='items-center gap-10 1110:flex sm:flex-col sm:items-start sm:gap-3 '>
              <p className='text-[12px] font-semibold mb-3 1110:text-xl 1110:mb-0 1110:w-[150px] sm:text-left sm:text-base'>Parking Slot</p>
              <div className='flex gap-1 mb-2 items-center'>
                <div className='p-3 text-[12px] bg-white rounded-xl text-center cursor-pointer'
                  onClick={changePark}>
                  <p>{park}</p>
                </div>
                <div className='w-full'>
                  <input 
                    type="text"
                    placeholder=' ex. 20 parking'
                    className='bg-white px-5 py-2 rounded-xl '/>
                </div>
              </div>
            </div>
            {/* Buzzer and Timer Input */}
            <div className='items-center gap-10 1110:flex sm:flex-col sm:items-start sm:gap-3'>
              <p className='text-[12px] font-semibold mb-3 1110:text-xl 1110:mb-0 1110:w-[150px] sm:text-left sm:text-base'>Buzzer and Timer</p>
              <div className='flex gap-1 mb-2 items-center'>
                <div className='p-3 text-[12px] bg-white rounded-xl text-center cursor-pointer'
                  onClick={changeTimer}>
                  <p>{park}</p>
                </div>
              </div>
            </div>
            {/* Number of Seats Input */}
            <div className='items-center gap-10 1110:flex sm:flex-col sm:items-start sm:gap-3  '>
              <p className='text-[12px] font-semibold mb-3 1110:text-xl 1110:mb-0 1110:w-[150px] sm:text-left sm:text-base'>No. of Seats</p>
              <div className='flex gap-1 mb-2 items-center'>
                <div className='p-3 text-[12px] bg-white rounded-xl text-center cursor-pointer'
                  onClick={changeSeats}>
                  <p>{park}</p>
                </div>
                <div className='w-'>
                  <input 
                    type="text"
                    placeholder=' ex. 20 parking'
                    className='bg-white px-5 py-2 rounded-xl '/>
                </div>
              </div>
            </div>
          </div>

          <button className='w-[200px] bg-orange rounded-xl text-base p-2 1110:p-5 text-[#ffffff] 1110:w-full'
            onClick={handleSubmit}>Next
          </button>
        </div>
      </div>  
    </div> 
  )
}

export default Setup
