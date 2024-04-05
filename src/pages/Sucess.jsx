import React from 'react'
import Logo from '../assets/Logo.png'
import success from '../assets/image/success.jpeg'
import { ContentCopy } from '@mui/icons-material';
const Sucess = () => {
    return (
        <div className='flex px-20 font-Poppins'>
            <div className=' flex-[50%] flex flex-col justify-center'>
                <img src={Logo} alt="" className='mb-5 w-[100px]' />
                <p className='mb-5 text-4xl font-semibold'>Success</p>
                <p className='mb-10 text-gray'>Wait for confirmation from the court owner, and you will receive the confirmation on your LARO account or via email. Thank You</p>

                <div className='text-[#ffffff] text-sm'>
                    <button className='bg-orange px-5 py-3 rounded-md'>Home</button>
                    <button className='bg-black px-5 py-3 rounded-md ml-2'>Browse more Events</button>
                </div>
            </div>

            <div className='flex-[50%] px-2'>
                <img
                    src={success}
                    alt=""
                    className='w-[100%] h-[250px] object-cover rounded-lg mb-2' />

                <div>
                    <p className='text-[13px] text-gray'>Court Area</p>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold text-4xl mb-2'>Mandaluyong City</h1>
                        <div className='bg-orange text-[9px] px-3 py-1 rounded-2xl text-[#ffffff]'>Reserved</div>
                    </div>

                    <div className='flex gap-1 flex-wrap'>
                        <div className='border-[1px] border-gray w-[100px] p-4 rounded-md'>
                            <p className='text-gray text-sm mb-3'>Size</p>
                            <h2 className='font-semibold text-2xl'>80</h2>
                        </div>
                        <div className='border-[1px] border-gray max-w-[100px] p-4 rounded-md'>
                            <p className='text-gray text-sm mb-3 truncate'>Audience Cap.</p>
                            <h2 className='font-semibold text-2xl'>200</h2>
                        </div>
                        <div className='border-[1px] border-gray w-[100px] p-4 rounded-md'>
                            <p className='text-gray text-sm mb-3 truncate'>No. of Seats</p>
                            <h2 className='font-semibold text-2xl'>240</h2>
                        </div>
                        <div className='border-[1px] border-gray flex-1 p-4 rounded-md'>
                            <p className='text-gray text-sm mb-3'>Location</p>
                            <h2 className='font-semibold text-2xl'>Mandaluyong</h2>
                        </div>
                        <div className='border-[1px] border-gray w-[190px] p-4 rounded-md'>
                            <p className='text-gray text-sm mb-3'>Owner</p>
                            <h2 className='font-semibold text-2xl truncate'>Pedro DelaCruz</h2>
                        </div>
                        <div className='border-[1px] border-gray w-[344px] p-4 rounded-md'>
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
    )
}

export default Sucess
