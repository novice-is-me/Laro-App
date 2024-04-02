import React from 'react'
import activematchjoin from '../assets/Active Match/activematchjoin.jpg'
import PlayersCard from '../card/PlayersCard'
import RefereeCard from '../card/RefereeCard'
import { PlayersData, RefereesData } from '../constant/ActiveMatchData'

const JoinViewActiveMatches = () => {
    return (
        <div className='bg-bgColor w-full box-border flex font-Poppins px-9 gap-6 py-4 lg:flex-col lg:px-20 xsm:px-4'>
            <div className='flex-[40%] sm:pl-0 sm:pr-0 pl-20 lg:pl-0 '>
                {/* left */}
                <div className='w-full'>
                    <div className='max-w-full border-orange border-[1px] rounded-lg bg-[#ffffff] flex items-center px-4 py-5 mb-3 xsm:justify-center'>
                        <img src="src/assets/icon.png" alt="" className='rounded-[50%] object-cover border-[1px] border-orange w-[60px] h-[60px] xl:w-[30px] xl:h-[30px]' />
                        <div className='font ml-8 xl:text-[10px] xl:ml-3'>
                            <h1 className='font font-bold lg:text-[17px]'>Battle of Champions</h1>
                            <p className='text-gray'>Event Name</p>
                        </div>
                    </div>
                    <img src={activematchjoin} alt="" className='w-full h-[300px] object-cover rounded-lg mx-auto' />
                </div>

            </div>

            <div className='flex-[60%] sm:p-0 pr-20 lg:pr-0'>
                {/* right */}
                <div className='flex w-full justify-between mb-2 md:flex-col'>

                    <div className='min-w-[330px] min-h-[80px] bg-[#ffffff] rounded-lg border-orange border-[1px] pl-4 py-3 lg:mx-auto mb-3'>
                        <h1 className='font-bold text-sm'>Hoop Basketball Team</h1>
                        <p className=' text-gray'>Organizer</p>
                    </div>

                    <div className='min-w-[330px] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 lg:mx-auto mb-3'>
                        <h1 className='font-bold text-sm'>Pasig City, Court Metro Manila</h1>
                        <div className='flex justify-between'>
                            <p className=' text-gray flex-1'>Address</p>
                            <a href="#" className='underline'>Map</a>
                        </div>
                    </div>
                </div>

                <p className='mb-2 font-bold pl-4 md:pl-0 xsm:text-center'>Court Details</p>

                <div className='flex justify-between mb-2 md:flex-col lg:justify-evenly'>
                    <div className='min-w-[350px] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 mb-3 text-sm xsm:min-w-[300px]'>
                        <p className='font-bold'>Parking Slot</p>
                        <p className='text-gray'>20 Cars</p>
                        <p className='text-gray'>20 Motorcycle</p>
                    </div>

                    <div className='min-w-[350px] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 mb-3 text-sm xsm:min-w-[300px]'>
                        <p className='font-bold'>Court Details</p>
                        <p className='text-gray'>250 Seats</p>
                        <p className='text-gray'>Timer and Buzzer</p>
                    </div>
                </div>

                <p></p>

                <p className='mb-2 font-bold pl-4 md:pl-0 xsm:text-center'>Players</p>
                <div className='flex gap-1 lg:flex-col'>
                    <div className='w-[66%]  flex flex-row flex-wrap gap-x-2 lg:w-[100%] lg:justify-center'>
                        {PlayersData.map(player => (
                            <div className='mb-2'>
                                <PlayersCard key={player.id} player={player} />
                            </div>
                        ))}
                    </div>
                    <div className='w-[33%]  flex justify-between flex-col lg:w-[100%]'>
                        <div>
                            {RefereesData.map(referee => (
                                <div className='mb-3'>
                                    <RefereeCard key={referee.id} referee={referee} />
                                </div>
                            ))}
                        </div>
                        <div className='mx-auto'>
                            <div className='w-[225px] min-h-[40px] text-[10px] text-[#ffffff] bg-orange rounded-lg flex justify-center items-center mb-2'>
                                Joined a Game
                            </div>

                            <div className='w-[225px] min-h-[40px] text-[10px] text-gray bg-[#ffffff] border-[1px] border-orange rounded-lg flex justify-center items-center mb-2 '>
                                Invite a friend
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default JoinViewActiveMatches
