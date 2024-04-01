import React from 'react'
import activematchjoin from '../assets/Active Match/activematchjoin.jpg'
import PlayersCard from '../card/PlayersCard'
import RefereeCard from '../card/RefereeCard'

const JoinViewActiveMatches = () => {
    return (
        <div className='bg-bgColor w-full box-border flex font-Poppins px-9 gap-6 py-4 lg:flex-col '>
            <div className='flex-[40%] pl-20 lg:pr-20 lg:bg-yellow-200'>
                {/* left */}
                <div className='w-full'>
                    <div className='border-orange border-[1px] rounded-lg bg-[#ffffff] flex items-center px-4 py-5 mb-3'>
                        <img src="src/assets/icon.png" alt="" className='rounded-[50%] object-cover border-[1px] border-orange w-[60px] h-[60px]' />
                        <div className='font ml-8'>
                            <h1 className='font font-bold'>Battle of Champions</h1>
                            <p className='text-gray'>Event Name</p>
                        </div>
                    </div>
                    <img src={activematchjoin} alt="" className='w-full h-[300px] object-cover rounded-lg mx-auto' />
                </div>

            </div>

            <div className='flex-[60%] pr-36  lg:bg-red-200 lg:px-20 '>
                {/* right */}
                <div className='flex w-full justify-betweenmb-2 md:flex-col'>
                    <div className='w-[280px] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 mx-auto mb-3'>
                        <h1 className='font-bold'>Hoop Basketball Team</h1>
                        <p className=' text-gray'>Organizer</p>
                    </div>

                    <div className='w-[280px] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 mx-auto mb-3'>
                        <h1 className='font-bold'>Pasig City, Court Metro Manila</h1>
                        <div className='flex justify-between'>
                            <p className=' text-gray flex-1'>Address</p>
                            <a href="#" className='underline'>Map</a>
                        </div>
                    </div>
                </div>

                <p className='mb-2 font-bold pl-4'>Court Details</p>

                <div className='flex justify-between mb-2 md:flex-col'>
                    <div className='w-[300px] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 mx-auto mb-3 '>
                        <p className='font-bold'>Parking Slot</p>
                        <p className='font-gray'>20 Cars</p>
                        <p className='font-gray'>20 Motorcycle</p>
                    </div>

                    <div className='w-[300px] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 mx-auto mb-3'>
                        <p className='font-bold'>Court Details</p>
                        <p className='font-gray'>250 Seats</p>
                        <p className='font-gray'>Timer and Buzzer</p>
                    </div>
                </div>

                <p></p>

                <p className='mb-2 font-bold pl-4'>Players</p>
                <div className='flex gap-1 lg:flex-col'>
                    <div className='w-[70%] border-[2px] border-red-300 flex flex-row flex-wrap gap-x-2 justify-center lg:w-[100%]'>
                        <div className='mb-2 min-w-fit'>
                            <PlayersCard />
                        </div>
                        <div className='mb-2'>
                            <PlayersCard />
                        </div>
                        <div className='mb-2'>
                            <PlayersCard />
                        </div>
                        <div className='mb-2'>
                            <PlayersCard />
                        </div>
                        <div className='mb-2'>
                            <PlayersCard />
                        </div>
                        <div className='mb-2'>
                            <PlayersCard />
                        </div>
                        <div className='mb-2'>
                            <PlayersCard />
                        </div>
                        <div className='mb-2'>
                            <PlayersCard />
                        </div>
                        <div className='mb-2'>
                            <PlayersCard />
                        </div>
                        <div className='mb-2'>
                            <PlayersCard />
                        </div>
                    </div>
                    <div className='w-[30%] border-[2px] border-green-200 lg:w-[100%]'>
                        <div className='mb-2'>
                            <RefereeCard />
                        </div>
                        <div className='mb-2'>
                            <RefereeCard />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default JoinViewActiveMatches
