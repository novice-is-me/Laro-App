import React from 'react'
import img4 from '../assets/Active Match/activematch4.jpg'
import img from '../assets/Active Match/activematch4.jpg'
import { Link } from 'react-router-dom'
const CourtsCard = ({ card, setMain }) => {
    return (
        <div>
            <div className='bg-[#ffffff] rounded-[14px] w-[273px] p-5 h-[300px]'>
                <div className='relative'>
                    <img
                        src={card.imagecard}
                        alt=""
                        className='rounded-t-[14px] object-cover h-[200px] w-full' />
                    <div className={`font-Poppins text-[11px] px-[10px] py-[2px] rounded-full absolute ${card.isAvailable ? 'bg-green-900' : 'bg-red-900'} text-[#ffffff] top-[-8px] left-0`}>
                        {card.isAvailable ? "Available" : "Fully Booked"}
                    </div>

                </div>


                <div className='mt-[20px]'>
                    <div className='flex items-center justify-between mt-3'>
                        <h1 className='font-Poppins text-[12px] font-black inline ml-1 uppercase break-words'>{card.location}</h1>
                        <div className='flex items-center gap-2'>
                            
                            <Link
                                className='font-Poppins text-[10px] bg-[#fa5000] text-[#ffffff] w-[60px] h-[40px] rounded-[20px] flex items-center justify-center cursor-pointer'
                                onClick={() => setMain('bookcourt')}
                                to='/court'
                            >
                                Reserve
                            </Link>
                            <Link
                                className='font-Poppins text-[10px] border-2 border-[#fa5000] border-solid text-black w-[60px] h-[40px] rounded-[20px] flex items-center justify-center cursor-pointer'
                                onClick={() => setMain('viewcourt')}
                                to='/court'
                            >
                                View

                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CourtsCard
