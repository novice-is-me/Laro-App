import React from 'react'
import {Logo} from '../assets/index'
import success from '../assets/image/success.jpeg'
import { ContentCopy } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { CardData } from '../constant/ActiveMatchData';


const Sucess = ({setMain,  clickedCard}) => {

    return (
        <div className='flex h-[79vh] font-Poppins 1110:h-full 1110:flex-col-reverse 1110:gap-5'>
            {/* Left side - confirmation */}
            <div className='flex flex-col  justify-center px-20 1110:justify-start 1110:px-0'>
                <img src={Logo} alt="" className='mb-5 w-[100px]' />
                <p className='mb-5 text-4xl font-semibold'>Success</p>
                <p className='mb-10 text-gray lg:text-center'>Wait for confirmation from the court owner, and you will receive the confirmation on your LARO account or via email. Thank You</p>

                <div className='flex text-white text-sm'>
                    <Link to='/' className='bg-orange px-5 py-3 rounded-md'>Home</Link>
                    <button 
                        className='bg-black px-5 py-3 rounded-md ml-2'
                        onClick={() => setMain('default')}
                    
                    > Browse more Events
                    </button>
                </div>
            </div>

            <div className='flex flex-col justify-around px-2'>
                <img
                    src={success}
                    alt=""
                    className='w-full h-[350px] object-cover rounded-lg' />

                <div className='flex flex-col gap-2'>
                    <p className='text-[12px] text-gray'>Court Area</p>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold text-4xl mb-2'>{CardData[clickedCard].location}</h1>
                        <div className='flex items-center px-8 py-2 h-fit bg-orange text-[12px] rounded-2xl text-white'>Reserved</div>
                    </div>
                    <div className=' flex flex-wrap w-full gap-2'>
                        <div className='flex gap-1 w-full flex-wrap'>
                            <div className='border border-gray flex-1 p-4 rounded-md'>
                                <p className='text-gray text-sm mb-3'>Size</p>
                                <h2 className='font-semibold text-2xl'>80</h2>
                            </div>
                            <div className='border border-gray flex-1 p-4 rounded-md'>
                                <p className='text-gray text-sm mb-3 truncate'>Audience Cap.</p>
                                <h2 className='font-semibold text-2xl'>200</h2>
                            </div>
                            <div className='border border-gray flex-1 p-4 rounded-md'>
                                <p className='text-gray text-sm mb-3 truncate'>No. of Seats</p>
                                <h2 className='font-semibold text-2xl'>240</h2>
                            </div>
                            <div className='border border-gray flex-1 p-4 rounded-md'>
                                <p className='text-gray text-sm mb-3'>Location</p>
                                <h2 className='font-semibold text-2xl'>{CardData[clickedCard].location}</h2>
                            </div>
                        </div>

                        <div className='flex w-full gap-1 flex-wrap'>
                            <div className='border border-gray flex-1 p-4 rounded-md'>
                                <p className='text-gray text-sm mb-3'>Owner</p>
                                <h2 className='font-semibold text-2xl truncate'>Pedro DelaCruz</h2>
                            </div>
                            <div className='border border-gray p-4 rounded-md flex-1 xsm:w-full'>
                                <div className='flex justify-between'>
                                    <p className='text-gray text-sm mb-3'>Shareable Link</p>
                                    <ContentCopy className='text-gray' />
                                </div>
                                <h2 className='font-semibold text-2xl truncate'>www.laro.com/chahahaha</h2>
                            </div>
                        </div>
                        
                        


                    </div>

                </div>


            </div>

        </div>
    )
}

export default Sucess
