import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


FontAwesomeIcon
const ActiveMatchesCard = ({ card, setMain }) => {
    return (
        <div className='bg-[#ffffff] rounded-[14px] w-[300px] p-5 h-[400px]'>
            
            <div className='relative'>
                <img
                    src={card.imagecard}
                    alt=""
                    className='rounded-t-[14px] object-cover h-[250px] w-full' />
                <div className='font-Poppins text-[11px] px-[10px] rounded-lg absolute bg-black text-[#ffffff] bottom-[-8px] right-0'>{card.type}</div>
            </div>

            <div className='mt-[20px]'>
                <div>
                    <FontAwesomeIcon icon={card.icon} />
                    <h1 className='font-Poppins text-[15px] font-black inline ml-1'>{card.title}</h1>
                </div>

                <div className='flex items-center justify-between mt-3'>
                    <img
                        src={card.profilephoto}
                        alt="" className='w-[30px] h-[30px] object-cover rounded-[50%]' />
                    <div>
                        <p className='flex flex-1 font-semibold font-Poppins text-[9px] text-black m-0'>{card.organizer}</p>
                        <p className='font-Poppins text-[9px] m-0'>Organizer</p>
                    </div>

                    <Link to='/matches' onClick={() => setMain('join')} className='font-Poppins text-[11px] bg-[#fa5000] text-[#ffffff] w-[60px] h-[40px] rounded-[20px] flex items-center justify-center cursor-pointer'>Join</Link>
                    <Link to='/matches' onClick={() => setMain('view')} className='font-Poppins text-[11px] border-2 border-[#fa5000] border-solid text-black w-[60px] h-[40px] rounded-[20px] flex items-center justify-center cursor-pointer '>View</Link>

                </div>


            </div>

        </div>
    )
}

export default ActiveMatchesCard
