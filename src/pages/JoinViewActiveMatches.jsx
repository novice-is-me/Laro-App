import React from 'react'
import activematchjoin from '../assets/Active Match/activematchjoin.jpg'
import PlayersCard from '../card/PlayersCard'
import RefereeCard from '../card/RefereeCard'

const JoinViewActiveMatches = () => {
    return (
        <div className='bg-bgColor w-full box-border flex font-Poppins px-9 gap-6 py-4'>
            <div className='flex-[40%] pl-20'>
                {/* left */}
                <div className='w-full'>
                    <div className='border-orange border-[1px] rounded-lg bg-[#ffffff] flex items-center px-4 py-5 mb-3'>
                        <img src="src/assets/icon.png" alt="" className='rounded-[50%] object-cover border-[1px] border-orange w-[60px] h-[60px]' />
                        <div className='font ml-8'>
                            <h1 className='font font-bold'>Battle of Champions</h1>
                            <p className='text-gray'>Event Name</p>
                        </div>
                    </div>
                    <img src={activematchjoin} alt="" className='w-full h-[300px] object-cover rounded-lg' />
                </div>

            </div>

            <div className='flex-[60%] pr-36'>
                {/* right */}
                <div className='flex w-full justify-between mb-2'>
                    <div className='w-[45%] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3'>
                        <h1 className='font-bold'>Hoop Basketball Team</h1>
                        <p className=' text-gray'>Organizer</p>
                    </div>

                    <div className='w-[45%] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 '>
                        <h1 className='font-bold'>Pasig City, Court Metro Manila</h1>
                        <div className='flex justify-between'>
                            <p className=' text-gray flex-1'>Address</p>
                            <a href="#" className='underline'>Map</a>
                        </div>
                    </div>
                </div>

                <p className='mb-2 font-bold pl-4'>Court Details</p>

                <div className='flex justify-between mb-2'>


                    <div className='w-[48%] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 '>
                        <p className='font-bold'>Parking Slot</p>
                        <p className='font-gray'>20 Cars</p>
                        <p className='font-gray'>20 Motorcycle</p>
                    </div>

                    <div className='w-[48%] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 '>
                        <p className='font-bold'>Court Details</p>
                        <p className='font-gray'>250 Seats</p>
                        <p className='font-gray'>Timer and Buzzer</p>
                    </div>
                </div>

                <p></p>

                <p className='mb-2 font-bold pl-4'>Players</p>
                <div className='flex gap-1'>
                    <div className='grid-cols-2 grid gap-1'>
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
                        <div className='mb-2'>
                            <PlayersCard />
                        </div>
                    </div>
                    <div className='grid-cols-1 grid'>
                        <div>
                            <RefereeCard />
                        </div>
                        <div>
                            <RefereeCard />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default JoinViewActiveMatches
