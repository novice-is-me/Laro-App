import React, { useState } from 'react'
import ActiveMatchesCard from '../card/ActiveMatchesCard'
import bookcourt from '../assets/image/bookcourt.jpeg'
import PictureComponent from '../components/PictureComponent'
import CreateAccount from './CreateAccount'
import Calendar from 'react-calendar'
import TimeField from 'react-simple-timefield';




const   BookCourt = ({ setMain }) => {

    const weeks = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const [selectedDate, setSelectedDate] = useState(null)

    const [time, setTime] = useState('AM')
    const [timeSlot, setTimeSlot] = useState('00:00')

    const [parking, setParking] = useState(true)
    const [parkingSlot, setParkingSlot] = useState('')

    const [buzzertimer, setBuzzerTimer] = useState(true)

    const [seats, setSeats] = useState(true)
    const [seatsSlot, setSeatSlot] = useState('')

    const handleDateSelect = (date) => {
        // Extract only the date part
        const selectedDateFormat = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        // Update the selected date state
        setSelectedDate(selectedDateFormat);
    }

    const handleTime = () => {
        if (time === 'AM'){
            setTime('PM')
        } else{
            setTime('AM')
        }
    }


    const handleSubmit = () => {
        setMain('success')
        console.log(selectedDate, timeSlot, time, parkingSlot, buzzertimer, seatsSlot);
    }


    return (
        <div className='w-full mt-10 flex box-border px-20 1139:justify-center 1139:px-0'>
            <div className='w-[60%] font-Poppins  xl:w-[80%] xl:flex xl:flex-col xl:items-center md:w-[100%]'>
                <h1 className='text-4xl font-semibold mb-2'>Book a Court</h1>
                <p className='text-gray text-sm max-w-[400px] xl:text-center'>You can now create your own account, just make sure that the information you provided is accurate.</p>

                <div className='flex mt-5 gap-6  sm:flex-col'>
                    <div className=''>
                        <Calendar 
                            className='font-Poppins xsm:scale-[0.8]' 
                            formatShortWeekday={(locale, date) => weeks[date.getDay()]} 
                            value={selectedDate}
                            onChange={handleDateSelect}
                        />
                            
                    </div>

                    <div className=' sm:flex sm:flex-col sm:items-center'>

                        <div className='flex gap-1 mb-2'>
                            <div className='bg-white rounded-md p-3'>Time</div>
                            <div className='bg-white rounded-md p-3 flex w-32'>
                                {/* <p className='px-2'>00:00</p> */}
                                <TimeField 
                                    className='flex-1' 
                                    value={timeSlot} 
                                    onChange={(e) => setTimeSlot(e.target.value)}/>
                                <div className='border-l-[1px] border-gray px-3 cursor-pointer' onClick={handleTime}>{time}</div>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-semibold mb-2 sm:text-center'>Court Details</h1>
                            <p className='text-[12px] font-semibold mb-2'>Parking Slot</p>

                            <div className='flex gap-1 mb-2'>
                                <div className='w-[50px] text-[12px] bg-white rounded-md p-1 text-center cursor-pointer'
                                    onClick={() => setParking(!parking)}>
                                    <p>{parking ? "YES" : "NO"}</p>
                                </div>
                                <input 
                                    value={parking? parkingSlot : ''}
                                    type="text"
                                    disabled={parking? false: true}
                                    placeholder='(e.x 20 Slots)' 
                                    className={`w-[100px] text-[12px] bg-white rounded-md p-1 text-center outline-none ${!parking? 'cursor-not-allowed' : '' }`}
                                    onChange={(e) => setParkingSlot(e.target.value)}
                                />
                            </div>

                            <p className='text-[12px] font-semibold mb-2'>Buzzer and Timer</p>


                            <div className='w-[50px] text-[12px] bg-white rounded-md p-1 text-center mb-2 cursor-pointer'
                                onClick={() => setBuzzerTimer(!buzzertimer)}>
                                <p>{buzzertimer ? "YES" : "NO"}</p>
                            </div>

                            <p className='text-[12px] font-semibold mb-2'>Number of Seats</p>

                            <div className='flex gap-1 mb-3'>
                                <div className='w-[50px] text-[12px] bg-white rounded-md p-1 text-center cursor-pointer'
                                    onClick={() => setSeats(!seats)}>
                                    <p>{seats ? "YES" : "NO"}</p>
                                </div>
                                
                                <input 
                                    type="text" 
                                    value={seats? seatsSlot : ''}
                                    placeholder='(e.x 20 Slots)' 
                                    disabled={seats? false: true}
                                    className={`w-[100px] text-[12px] bg-white rounded-md p-1 text-center outline-none ${!seats? 'cursor-not-allowed' : '' }`}
                                    onChange={(e) => setSeatSlot(e.target.value)}
                                />
                            </div>

                        </div>


                        <button
                            className='w-[200px] bg-orange rounded-md text-[11px] p-3 text-[#ffffff]'
                            // onClick={() => setMain('success')}
                            onClick={handleSubmit}

                        >Next

                        </button>
                    </div>
                </div>



            </div>

            <div className='w-[50%] flex items-center justify-center xl:w-[30%] xl:scale-[0.9] 1139:hidden'>
                <div className='w-[100%]  flex items-center justify-center relative'>
                    <div className='w-[320px] h-[400px] relative'>
                        <img src={bookcourt} alt="" className='absolute bottom-0 w-[100%] h-[100%] rounded-lg' />

                        <div className='bg-black min-w-[175px] h-[55px] rounded-[40px] flex items-center pl-[10px] absolute top-[50px] left-[-80px]'  >
                            <div className='w-[40px] h-[40px] bg-[#ffffff] rounded-[50%] flex self-center justify-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-[25px] fill-[#fa5000]'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg>
                            </div>
                            <h1 className='text-[#ffffff] mx-[12px] font-Poppins text-xl flex-1 text-center'>Book</h1>
                        </div>

                        <div className='bg-black min-w-[175px] h-[55px] rounded-[40px] flex items-center pl-[10px] absolute bottom-[-30px] left-[-50px]'  >
                            <div className='w-[40px] h-[40px] bg-[#ffffff] rounded-[50%] flex self-center justify-center'>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-[25px] fill-[#fa5000]'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                            </div>
                            <h1 className='text-[#ffffff] mx-[12px] font-Poppins text-xl flex-1 text-center'>Organize</h1>
                        </div>

                        <div className='bg-[#fa5000] min-w-[175px] h-[55px] rounded-[40px] flex items-center pl-[10px] absolute bottom-[120px] right-[-50px] border-[2px] border-[#ffffff]'  >
                            <div className='w-[40px] h-[40px] bg-[#ffffff] rounded-[50%] flex self-center justify-center'>

                                <svg viewBox="0 0 302 241" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[25px]'>
                                    <path d="M204.422 192.681L150.532 158.058L96.6414 192.681L112.899 130.662L63.3739 90.3191L127.35 86.4053L150.532 27.0957L173.714 86.4053L237.69 90.3191L188.165 130.662M270.957 120.425C270.957 112.441 274.129 104.783 279.775 99.137C285.421 93.491 293.079 90.3191 301.064 90.3191V30.1064C301.064 22.1217 297.892 14.464 292.246 8.81795C286.6 3.17191 278.942 0 270.957 0H30.1064C22.1217 0 14.464 3.17191 8.81795 8.81795C3.17191 14.464 0 22.1217 0 30.1064V90.3191C7.9847 90.3191 15.6424 93.491 21.2884 99.137C26.9345 104.783 30.1064 112.441 30.1064 120.425C30.1064 128.41 26.9345 136.068 21.2884 141.714C15.6424 147.36 7.9847 150.532 0 150.532V210.745C0 218.729 3.17191 226.387 8.81795 232.033C14.464 237.679 22.1217 240.851 30.1064 240.851H270.957C278.942 240.851 286.6 237.679 292.246 232.033C297.892 226.387 301.064 218.729 301.064 210.745V150.532C293.079 150.532 285.421 147.36 279.775 141.714C274.129 136.068 270.957 128.41 270.957 120.425Z" fill="#FA5000" />
                                </svg>
                            </div>
                            <h1 className='text-[#ffffff] mx-[20px] font-Poppins text-xl flex-1 text-center'>Play</h1>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BookCourt
