import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import PictureComponent from '../components/PictureComponent'
import { Link } from 'react-router-dom'
import { CourtOwnerImg } from '../assets'
import CourtOwnerForm from '../components/CourtOwnerForm'
import Calendar from '../components/CalendarComponent'
import CalendarComponent from '../components/CalendarComponent'

const CourtOwner = () => {
    const [isActive, setIsActive] = useState(false)
    const [isShow, setIsShow] = useState('default')
    const [isClickedCalendar, setIsClickedCalendar] = useState(false) 

  return (
    <div> 
        <div className='bg-bgColor flex justify-between'> 
            <div className='mx-auto relative flex flex-col justify-center items-start gap-3  w-[50%] pl-[15%] sm:w-[100%] sm:items-center sm:pl-0 sm:scale-[0.9] sm:text-center'>
                <div className='mb-8'> 
                    <h1 className='text-start sm:text-center font-Poppins font-black text-[40px] my-4 '>
                        Apply as Court Owner</h1>
                    <p className='font-poppins text-[#A5A5A5] text-[17px]'>You can now create your own account, just make sure that
                        the information you provide is accurate.</p>
                </div>
                <div className='flex gap-10 mb-4'>
                    <p className='font-poppins text-[#A5A5A5]'>Owner Info </p>
                    <p className='font-poppins text-[#A5A5A5]'>Schedule Setup </p>
                    <p className='font-poppins text-[#A5A5A5]'>Publish </p>
                </div> 
                <div className='flex w-[60%]'>    
                    {isShow === 'default' && <CourtOwnerForm setIsShow={setIsShow} />}
                    {isShow === 'calendar' && <CalendarComponent/>}  
                </div>     
            </div>
            <div className='w-[50%] flex items-center justify-center sm:hidden 832px:scale-[0.8] 770px:scale-[0.7]'>
                    <PictureComponent img={CourtOwnerImg} value={'owner'} />
            </div>  
        </div> 
    </div>
  )
}

export default CourtOwner
