import React, { useState } from 'react'
import {emojiCool, emojiSad, emojiShock, emojiSmirk, ownerImg } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faLocation, faLocationDot, faUser, faXmark} from '@fortawesome/free-solid-svg-icons'
import RefreshIcon from '@mui/icons-material/Refresh'
import DashBoardCard from '../components/DashBoardCard'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const DashboardCourtOwner = () => {
    
    const navigate = useNavigate()

    const [owner, setOwner] = useState("Benedict C.")
    const [changeOwner, setChangeOwner] = useState(owner)
    const [error, setError] = useState(false)

    const [address, setAddress] = useState("Pasig City, Philippines")
    const [changeAdd, setChangeAdd] = useState(address)
    const [modal, setModal] = useState(false)

    const [isShow, setIsShow] = useState(false)
    
    const largeScreen = useMediaQuery('(max-width: 1023px)')
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setOwner(changeOwner)
        setAddress(changeAdd)
        setModal(!modal) 
        setError(false) 
    }

    const closeModal = () =>{
        if (changeOwner && changeAdd){
            setModal(!modal)
            setChangeOwner(owner)
            setAddress(address)
        } else if (!changeOwner || !changeAdd){
            setError(true)
        } 
    }

  return ( 
     <div className='flex w-full p-4 gap-4 relative  border lg:flex-col'>
        {/* // modal for changing username */}
        {modal && 
        <div className='bg-bgColor p-10 pt-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='text-end'>
                <FontAwesomeIcon icon={faXmark} className='ml-auto h-[1.5rem] hover:cursor-pointer' 
                onClick={closeModal} aria-disabled={!changeOwner || !changeAdd}/>  
            </div>
            {error && <p className='font-Poppins font-semibold text-red-600 450:text-[12px]'>Please complete all fields</p>}
            <p className='text-2xl font-Poppins mb-[2rem] font-semibold 450:text-[15px]'>Edit Information</p>
            <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-Poppins font-semibold 450:text-[12px]'>Name:</label>
                    <input type="text" 
                    required 
                    value={changeOwner} 
                    onChange={(e) => setChangeOwner(e.target.value)}
                    className='text-xl font-poppins p-4 bg-[#FFEEE6] outline-none 450:text-[12px]' />
                    {!changeOwner && <p className='font-Poppins text-red-600 450:text-[12px]'>Input a username</p>}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-Poppins font-semibold 450:text-[12px]'>Address</label>
                    <input type="text" 
                    required
                    value={changeAdd} 
                    onChange={(e) => setChangeAdd(e.target.value)}
                    className='text-xl font-poppins p-4 bg-[#FFEEE6] outline-none 450:text-[12px]' /> 
                    {!changeAdd && <p className='font-Poppins text-red-600 '>Input an address</p>}
                </div>
                <button className='bg-orange font-Poppins text-xl py-3 450:text-[12px]'>Change</button>
            </form>
        </div>}

      
        {/* for profile */}
        <div className={`flex flex-[1.1] gap-4 xl:flex-[.5] 450:py-2 lg:rounded-[10px]  ${largeScreen ? 'w-full bg-bgColor p-4 h-full' : 'block' }`}>
            <div className=' mt-4 hover:cursor-pointer lg:hidden' 
             onClick={() => navigate('/')}>
                <svg width="22" height="35" viewBox="0 0 22 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.85827 20.0176C1.19113 19.3497 0.816406 18.4442 0.816406 17.5001C0.816406 16.5561 1.19113 15.6506 1.85827 14.9826L15.2913 1.54488C15.9596 0.876882 16.8659 0.501731 17.8108 0.501953C18.2787 0.502063 18.7419 0.594327 19.1742 0.773476C19.6064 0.952626 19.9991 1.21515 20.3298 1.54607C20.6606 1.87698 20.9229 2.2698 21.1019 2.70211C21.2808 3.13441 21.3729 3.59772 21.3728 4.06559C21.3727 4.53347 21.2804 4.99674 21.1012 5.42896C20.9221 5.86117 20.6596 6.25387 20.3286 6.58463L9.41552 17.5001L20.331 28.4156C20.6714 28.7441 20.943 29.1371 21.1299 29.5716C21.3168 30.0062 21.4153 30.4736 21.4197 30.9466C21.424 31.4196 21.3341 31.8888 21.1551 32.3267C20.9762 32.7646 20.7119 33.1625 20.3776 33.4971C20.0432 33.8318 19.6456 34.0965 19.2079 34.2758C18.7701 34.4552 18.3011 34.5455 17.828 34.5416C17.355 34.5377 16.8875 34.4397 16.4528 34.2532C16.018 34.0667 15.6248 33.7955 15.296 33.4554L1.85352 20.0176H1.85827Z" fill="#545454"/>
                </svg>
            </div>
            <div className='flex flex-col gap-8 justify-between w-full lg:flex-row 450:gap-0'>
                <div className='flex flex-col gap-8 lg:w-full lg:gap-0'>
                    <div className='flex gap-2 w-full 450:items-center'>
                        <div className={`flex h-[130px]  lg:block w-full rounded-[10px] overflow-hidden
                          lg:w-[30%] lg:rounded-[100%] 450:h-[70px] `}>
                            <img src={ownerImg} alt="" 
                            className={`h-full w-full object-cover`} />
                        </div> 
                        <div className='flex flex-col justify-between w-full m-2 '>
                            <div className=' w-full'>
                                <div className='flex gap-8 items-center justify-between 450:gap-8'>
                                    {/* // get name and address on who login */}
                                    <p className='font-poppins text-[20px] font-semibold 450:text-[15px]'>
                                        {owner}</p>
                                    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" 
                                     fill='#545454'
                                     className='hover:cursor-pointer'
                                     onClick={(e) => setModal(!modal)}/></svg>                                    
                                    </div>
                                    <p className='font-poppins text-[#787878] text-sm 450:text-[12px] 450:hidden'>
                                        {address}</p> 
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='font-poppins text-sm font-semibold 450:hidden'>Share</p>
                                    <div className='flex gap-2 450:gap-0 450:hidden'>
                                        <svg width="25" height="25" className=' 450:h-[16px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" fill='#6F6F6F'/></svg>
                                        <svg width="25" height="25" className=' 450:h-[16px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill='#6F6F6F'/></svg>
                                        <svg width="25" height="25" className=' 450:h-[16px]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill='#6F6F6F'/></svg>
                                        <svg width="35" height="25" className=' 450:h-[16px]' viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.0362 13.9998C5.0362 12.0048 6.83161 10.3832 9.04037 10.3832H14.207V8.1665H9.04037C5.47536 8.1665 2.58203 10.7798 2.58203 13.9998C2.58203 17.2198 5.47536 19.8332 9.04037 19.8332H14.207V17.6165H9.04037C6.83161 17.6165 5.0362 15.9948 5.0362 13.9998ZM10.332 15.1665H20.6654V12.8332H10.332V15.1665ZM21.957 8.1665H16.7904V10.3832H21.957C24.1658 10.3832 25.9612 12.0048 25.9612 13.9998C25.9612 15.9948 24.1658 17.6165 21.957 17.6165H16.7904V19.8332H21.957C25.522 19.8332 28.4154 17.2198 28.4154 13.9998C28.4154 10.7798 25.522 8.1665 21.957 8.1665Z" fill='#6F6F6F'/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <div className='flex items-center justify-between hover:cursor-pointer lg:hidden' >
                                <svg width="35" height="40" viewBox="0 0 40 40" fill="none" className='lg:hidden' xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.6157 33.7766L33.7761 32.6162L30.6678 29.5079V24.8662H29.0101V30.171L32.6157 33.7766ZM8.28816 34.8127C7.3764 34.8127 6.59615 34.4883 5.94741 33.8396C5.29868 33.1908 4.97376 32.41 4.97266 31.4972V8.28865C4.97266 7.37688 5.29758 6.59664 5.94741 5.9479C6.59725 5.29917 7.3775 4.97425 8.28816 4.97314H31.4967C32.4084 4.97314 33.1892 5.29806 33.8391 5.9479C34.4889 6.59774 34.8133 7.37799 34.8122 8.28865V19.3956C34.2872 19.1469 33.7485 18.9331 33.1959 18.754C32.6433 18.575 32.0769 18.4435 31.4967 18.3595V8.28865H8.28816V31.4972H18.3176C18.4004 32.105 18.532 32.6852 18.7121 33.2378C18.8922 33.7904 19.1061 34.3154 19.3537 34.8127H8.28816ZM8.28816 29.8394V31.4972V8.28865V18.3595V18.2352V29.8394ZM11.6037 28.1817H18.359C18.4419 27.6015 18.5734 27.0351 18.7535 26.4825C18.9337 25.9299 19.1337 25.3911 19.3537 24.8662H11.6037V28.1817ZM11.6037 21.5507H21.716C22.6001 20.7218 23.5881 20.0311 24.68 19.4785C25.7719 18.9259 26.939 18.5529 28.1812 18.3595V18.2352H11.6037V21.5507ZM11.6037 14.9197H28.1812V11.6042H11.6037V14.9197ZM29.8389 38.1282C27.5457 38.1282 25.5912 37.3198 23.9755 35.7029C22.3597 34.086 21.5513 32.1315 21.5502 29.8394C21.5502 27.5462 22.3586 25.5917 23.9755 23.976C25.5923 22.3602 27.5468 21.5518 29.8389 21.5507C32.1322 21.5507 34.0872 22.3591 35.7041 23.976C37.3209 25.5928 38.1288 27.5473 38.1277 29.8394C38.1277 32.1326 37.3193 34.0877 35.7024 35.7045C34.0855 37.3214 32.1311 38.1293 29.8389 38.1282Z" fill="black"/>
                                </svg>
                                <p className=' font-Inter text-2xl '>Overview</p>
                                <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                            </div>
                            <div className='flex items-center justify-between hover:cursor-pointer lg:hidden'
                             onClick={() => navigate('/')}>
                                <svg width="35" height="40" viewBox="0 0 42 42" fill="none" className='lg:hidden' xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M28.2197 21.0001C28.2197 20.6521 28.0814 20.3182 27.8353 20.0721C27.5892 19.8259 27.2553 19.6876 26.9072 19.6876H7.70448L11.1362 16.7476C11.2672 16.6355 11.3748 16.4986 11.4529 16.3449C11.5311 16.1912 11.5781 16.0235 11.5914 15.8516C11.6048 15.6797 11.5841 15.5068 11.5306 15.3429C11.4771 15.1789 11.3919 15.0271 11.2797 14.8961C11.1676 14.7652 11.0307 14.6575 10.877 14.5794C10.7232 14.5013 10.5556 14.4543 10.3837 14.4409C10.2118 14.4276 10.0389 14.4483 9.87496 14.5018C9.71102 14.5552 9.55922 14.6405 9.42823 14.7526L3.30323 20.0026C3.15914 20.1259 3.04346 20.2788 2.96414 20.451C2.88482 20.6232 2.84375 20.8106 2.84375 21.0001C2.84375 21.1897 2.88482 21.3771 2.96414 21.5493C3.04346 21.7215 3.15914 21.8744 3.30323 21.9976L9.42823 27.2476C9.69278 27.4741 10.0365 27.5863 10.3837 27.5594C10.7309 27.5324 11.0532 27.3687 11.2797 27.1041C11.5062 26.8396 11.6183 26.4959 11.5914 26.1487C11.5645 25.8015 11.4008 25.4791 11.1362 25.2526L7.70623 22.3126H26.9072C27.2553 22.3126 27.5892 22.1744 27.8353 21.9282C28.0814 21.6821 28.2197 21.3482 28.2197 21.0001Z" fill="#FF0000"/>
                                    <path d="M16.4063 14C16.4063 15.2285 16.4062 15.8427 16.702 16.2855C16.8294 16.4759 16.9929 16.6394 17.1833 16.7668C17.626 17.0625 18.2402 17.0625 19.4688 17.0625H26.9062C27.9505 17.0625 28.9521 17.4773 29.6905 18.2158C30.4289 18.9542 30.8438 19.9557 30.8438 21C30.8438 22.0443 30.4289 23.0458 29.6905 23.7842C28.9521 24.5227 27.9505 24.9375 26.9062 24.9375H19.4688C18.2402 24.9375 17.626 24.9375 17.1833 25.2315C16.9927 25.3594 16.8292 25.5235 16.702 25.7145C16.4062 26.1573 16.4063 26.7715 16.4063 28C16.4063 32.949 16.4062 35.4253 17.9445 36.9618C19.481 38.5 21.9555 38.5 26.9045 38.5H28.6545C33.607 38.5 36.0798 38.5 37.618 36.9618C39.1562 35.4253 39.1562 32.949 39.1562 28V14C39.1562 9.051 39.1562 6.57475 37.618 5.03825C36.0798 3.5 33.6052 3.5 28.6562 3.5H26.9062C21.9555 3.5 19.481 3.5 17.9445 5.03825C16.4062 6.57475 16.4063 9.051 16.4063 14Z" fill="#FF0000"/>
                                </svg>
                                <p className='font-Inter text-2xl'>Logout</p>
                                <svg width="40" height="40" className='450:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill='white'/></svg>
                            </div>
                        </div>
                    </div>
                    <div className='mr-4 bg-orange p-6 lg:hidden'>
                        <p className='text-white font-Poppins font-[600] text-[16px]'>
                            Refer a friend and earn money <br /> as an organizer.</p>
                        <div className='mt-10'>
                            <button className='bg-black p-4 w-full text-white font-Poppins'>
                                Apply Now</button>
                        </div>
                    </div>
                    {largeScreen && <div className='relative flex items-center' onClick={() => setIsShow(!isShow)}>
                        <MenuIcon/>
                        {isShow && <div className='border rounded-[10px] flex flex-col gap-4 text-center 
                         absolute bottom-[-110px] left-[-80px] bg-bgColor p-4'>
                            <div className=''>
                                <button className=' w-full font-Poppins'>
                                    Apply as Organizer</button>
                            </div>
                            <div>
                                <Link to={'/'} className='font-Poppins'>Logout</Link>
                            </div>
                            </div>}
                        </div>}
                </div>
        </div>

        {/* for contents */}
        <div className='flex flex-col flex-[3] h-full gap-8 lg:gap-4'>
            <div className='flex gap-4 lg:flex-col'>
                <div className=' bg-orange text-white p-4 rounded-[10px] w-[20%] lg:order-2 lg:w-full'>
                    <p className='font-Inter font-semibold text-[20px] 450:text-[15px]'>
                        Active Sched</p>
                    <p className='font-Inter font-semibold text-[30px]'>0</p>
                </div>
                {/* Upcmongs ched */}
                <div className='flex flex-col w-full gap-4 lg:order-1'>
                    <div className='flex w-full'>
                        <div className='flex gap-8 w-full lg:flex-col lg:gap-4'>
                            <div className='flex flex-col gap-4 justify-between bg-black p-4 text-white w-[50%] 
                             rounded-[10px] lg:order-2 lg:w-full'>
                                <div className='flex justify-between'>
                                    <p className=' font-Inter font-semibold text-[20px] 450:text-[15px]'>
                                        Upcoming Sched</p>
                                    <div className='flex gap-2'>
                                        <RefreshIcon fontSize='450:px'
                                            className='bg-white text-black rounded-full'/>
                                        <p>refresh</p>
                                    </div>
                                </div>
                                <div className='flex justify-between 450:justify-around'>
                                    <div>
                                        <p className=' font-Inter text-[#7B7B7B] text-[12px]'>Date</p>
                                        <p className=' font-Inter font-semibold text-[32px] 450:text-[20px]'>2-5-2024</p>
                                    </div>
                                    <div>
                                        <p className='font-Inter text-[#7B7B7B] text-[12px]'>Time</p>
                                        <p className='font-Inter font-semibold text-[32px] 450:text-[20px]'>9-11 AM</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-black p-4 text-white w-[50%] rounded-[10px] lg:order-1 lg:w-full'>
                                <p className=' font-Inter font-semibold text-[20px] 450:text-[15px]'>Court Owner Information</p>
                                <div className=' flex justify-between border-b-2 border-white m-4 pb-4 450:mb-0'>
                                    <div> 
                                        <p className='font-Inter text-[#7B7B7B] text-[12px]'>Name</p>
                                        <div className='flex items-center gap-2'>
                                            <FontAwesomeIcon icon={faUser}/>
                                            <p className='font-Inter text-[15px] 450:text-[12px]'>{owner}</p>
                                        </div>
                                    </div>
                                    <div className='px-4'>
                                        <p className='font-Inter text-[#7B7B7B] text-[12px]'>Location</p>
                                        <div className='flex items-center gap-2'>
                                            <FontAwesomeIcon icon={faLocationDot}/>
                                            <p className='font-Inter text-[15px] 450:text-[12px]'>{address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full gap-8 lg:gap-4 450:flex-col'>
                        <div className=' flex bg-black p-4 rounded-[10px] text-white 
                         w-full justify-between'>
                            <p className='font-Inter font-semibold text-[20px] 450:text-[15px]'>Notification Tab</p>
                            <svg width="60" height="60" className='450:w-[40px]' viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.5 63.525C40.1042 63.525 41.4683 62.9642 42.5925 61.8425C43.7167 60.7209 44.2776 59.3567 44.275 57.75H32.725C32.725 59.3542 33.2871 60.7183 34.4113 61.8425C35.5355 62.9667 36.8984 63.5276 38.5 63.525ZM19.25 53.9H57.75V46.2H53.9V36.19C53.9 32.2758 52.8887 28.6992 50.8662 25.46C48.8437 22.2209 46.0049 20.1509 42.35 19.25V17.325C42.35 16.2342 41.9804 15.3204 41.2412 14.5838C40.502 13.8472 39.5883 13.4776 38.5 13.475C37.4092 13.475 36.4954 13.8446 35.7588 14.5838C35.0222 15.323 34.6526 16.2367 34.65 17.325V19.25C30.9925 20.1483 28.1538 22.2183 26.1338 25.46C24.1138 28.7017 23.1026 32.2784 23.1 36.19V46.2H19.25V53.9ZM38.5 77C33.1742 77 28.1692 75.9887 23.485 73.9662C18.8008 71.9437 14.7262 69.2012 11.2612 65.7387C7.79625 62.2737 5.05377 58.1992 3.0338 53.515C1.01383 48.8308 0.00256667 43.8258 0 38.5C0 33.1742 1.01127 28.1692 3.0338 23.485C5.05633 18.8008 7.79882 14.7262 11.2612 11.2612C14.7262 7.79625 18.8008 5.05377 23.485 3.0338C28.1692 1.01383 33.1742 0.00256667 38.5 0C43.8258 0 48.8308 1.01127 53.515 3.0338C58.1992 5.05633 62.2737 7.79882 65.7387 11.2612C69.2037 14.7262 71.9475 18.8008 73.97 23.485C75.9926 28.1692 77.0026 33.1742 77 38.5C77 43.8258 75.9887 48.8308 73.9662 53.515C71.9437 58.1992 69.2012 62.2737 65.7387 65.7387C62.2737 69.2037 58.1992 71.9475 53.515 73.97C48.8308 75.9926 43.8258 77.0026 38.5 77Z" fill="#F8F8F8"/>
                            </svg>
                        </div>
                        <div className=' w-full bg-orange text-white p-4 rounded-[10px]'>
                            <p className=' font-Inter font-semibold text-[20px] 450:text-[15px]'>Place Your Banner Ad Here</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className=' flex gap-8 w-full lg:flex-col 450:gap-4'>
                {/* for first col */}
                <div className=' w-[58%] lg:w-full'>
                    {/* upcoming events */}
                    <div className=' flex bg-black text-white rounded-[10px]
                     p-4 gap-4 '>
                        <div className='450:hidden'>
                            <img src={emojiShock} alt="" className=' h-auto w-[180px] lg:hidden' />
                        </div>
                        <div className='w-full flex flex-col gap-5'>
                            <div className=' flex justify-between'>
                                <p className='font-Inter font-semibold text-[20px] 450:text-[15px]'>
                                    Upcoming Events</p>
                                    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" 
                                     viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" fill='white'/></svg>                                    
                            </div>
                            <div className='flex items-center justify-center gap-4 450:flex-col 450:gap-2'>
                                <div className='flex gap-2 450:gap-4'>
                                    <div>
                                        <p className='font-Inter text-[#7B7B7B] text-[14px]'>
                                            Team</p>
                                        <div className=' border border-orange w-[85px] h-[40px] rounded-[5px]'></div>
                                    </div>
                                    <div>
                                        <p className='font-Inter text-[#7B7B7B] text-[14px]'>Score</p>
                                        <div className='border border-orange w-[60px] h-[40px] rounded-[5px]'></div>
                                    </div>
                                </div>
                                <p className=' font-Inter font-semibold text-[20px] mt-3 450:mt-0 450:text-[15px]'>VS</p>
                                <div className=' flex gap-2  450:gap-4'>
                                    <div>
                                        <p className='font-Inter text-[#7B7B7B] text-[14px]'>Team</p>
                                        <div className='border border-orange w-[85px] h-[40px] rounded-[5px]'></div>
                                    </div>
                                    <div>
                                        <p className='font-Inter text-[#7B7B7B] text-[14px]'>Score</p>
                                        <div className='border border-orange w-[60px] h-[40px] rounded-[5px]'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* images */}
                    <div className='flex gap-4 w-full 450:flex-col 450:gap-0'>
                        <div className='w-[50%] text-center mt-3 450:w-full'>
                            <p className='font-Poppins font-semibold text-[16px] mb-2 450:text-[15px]'>Image</p>
                            <div className='bg-orange h-[150px] w-full rounded-[10px]'></div>
                            <div className='flex gap-3 mt-3'>
                                <div className='bg-orange w-[50%] h-[132px] rounded-[10px]'></div>
                                <div className='bg-orange w-[50%] h-[132px] rounded-[10px]'></div>
                            </div>
                        </div>
                        {/* for earnings */}
                        <div className='flex flex-col w-[50%] mt-3 450:w-full'>
                            <p className=' font-Poppins font-semibold text-[16px] mb-2 text-center 450:text-[15px]'>Earnings</p>
                            <div className='h-full flex flex-col p-4 justify-between text-white bg-black 
                            rounded-[10px] text-start'>
                                <div>
                                    <p className=' font-Poppins font-semibold text-[16px] 450:text-[15px]'>Estimated</p>
                                    <p className=' font-Inter font-semibold text-3xl'>0</p>
                                </div>
                                <p className=' font-Inter font-light text-[10px]'>You need to reach 10,000 before checkout.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* for second col */}
                <div className='w-[40%] flex flex-col gap-2 lg:w-full'>
                   <div className='flex gap-2 450:flex-col 450:w-full'> 
                        <DashBoardCard title={'Total Games'} points={'0'} emoji={emojiCool} 
                        value={'games'}/>
                        <DashBoardCard title={'Accomplishments'} points={'0'} emoji={emojiSmirk} 
                        value={'accomplishment'}/>
                   </div>
                   <div className='flex gap-2 450:flex-col'>
                        <div className='w-[50%] 450:w-full'>
                            <DashBoardCard title={'Total Earnings'} points={'0'} emoji={emojiSad}/>
                        </div>
                        <div className='bg-orange flex justify-between p-4 w-[50%]
                            rounded-[10px] h-[50%] cursor-pointer lg:h-full 450:w-full'>
                                <Link to="/dashboard/calendar"> 
                                    <p className=' font-Inter font-semibold text-[16px] text-white'>
                                        Calendar</p>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 3.99995C15 3.46952 14.7893 2.96081 14.4142 2.58574C14.0391 2.21067 13.5304 1.99995 13 1.99995H12.5V1.51402C12.5 1.24495 12.2931 1.01402 12.0241 1.00058C11.9565 0.997322 11.8889 1.00782 11.8255 1.03145C11.762 1.05508 11.7041 1.09133 11.6551 1.13802C11.6061 1.18471 11.5671 1.24087 11.5404 1.30308C11.5138 1.36529 11.5 1.43227 11.5 1.49995V1.99995H4.5V1.51402C4.5 1.24495 4.29313 1.01402 4.02406 1.00058C3.95646 0.997322 3.8889 1.00782 3.82547 1.03145C3.76204 1.05508 3.70407 1.09133 3.65508 1.13802C3.60608 1.18471 3.56707 1.24087 3.54041 1.30308C3.51375 1.36529 3.50001 1.43227 3.5 1.49995V1.99995H3C2.46957 1.99995 1.96086 2.21067 1.58579 2.58574C1.21071 2.96081 1 3.46952 1 3.99995V4.37495C1 4.40811 1.01317 4.4399 1.03661 4.46334C1.06005 4.48678 1.09185 4.49995 1.125 4.49995H14.875C14.9082 4.49995 14.9399 4.48678 14.9634 4.46334C14.9868 4.4399 15 4.40811 15 4.37495V3.99995ZM1 13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7892 2.46957 15 3 15H13C13.5304 15 14.0391 14.7892 14.4142 14.4142C14.7893 14.0391 15 13.5304 15 13V5.5937C15 5.56884 14.9901 5.54499 14.9725 5.52741C14.955 5.50983 14.9311 5.49995 14.9062 5.49995H1.09375C1.06889 5.49995 1.04504 5.50983 1.02746 5.52741C1.00988 5.54499 1 5.56884 1 5.5937V13ZM11.75 6.49995C11.8983 6.49995 12.0433 6.54394 12.1667 6.62635C12.29 6.70876 12.3861 6.8259 12.4429 6.96294C12.4997 7.09999 12.5145 7.25079 12.4856 7.39627C12.4566 7.54176 12.3852 7.6754 12.2803 7.78028C12.1754 7.88517 12.0418 7.9566 11.8963 7.98554C11.7508 8.01448 11.6 7.99963 11.463 7.94286C11.3259 7.8861 11.2088 7.78997 11.1264 7.66663C11.044 7.54329 11 7.39829 11 7.24995C11 7.05104 11.079 6.86028 11.2197 6.71962C11.3603 6.57897 11.5511 6.49995 11.75 6.49995ZM11.75 8.99995C11.8983 8.99995 12.0433 9.04394 12.1667 9.12635C12.29 9.20876 12.3861 9.3259 12.4429 9.46294C12.4997 9.59999 12.5145 9.75079 12.4856 9.89627C12.4566 10.0418 12.3852 10.1754 12.2803 10.2803C12.1754 10.3852 12.0418 10.4566 11.8963 10.4855C11.7508 10.5145 11.6 10.4996 11.463 10.4429C11.3259 10.3861 11.2088 10.29 11.1264 10.1666C11.044 10.0433 11 9.89829 11 9.74995C11 9.55104 11.079 9.36028 11.2197 9.21962C11.3603 9.07897 11.5511 8.99995 11.75 8.99995ZM9.25 6.49995C9.39834 6.49995 9.54334 6.54394 9.66668 6.62635C9.79001 6.70876 9.88614 6.8259 9.94291 6.96294C9.99967 7.09999 10.0145 7.25079 9.98559 7.39627C9.95665 7.54176 9.88522 7.6754 9.78033 7.78028C9.67544 7.88517 9.5418 7.9566 9.39632 7.98554C9.25083 8.01448 9.10003 7.99963 8.96299 7.94286C8.82594 7.8861 8.70881 7.78997 8.6264 7.66663C8.54399 7.54329 8.5 7.39829 8.5 7.24995C8.5 7.05104 8.57902 6.86028 8.71967 6.71962C8.86032 6.57897 9.05109 6.49995 9.25 6.49995ZM9.25 8.99995C9.39834 8.99995 9.54334 9.04394 9.66668 9.12635C9.79001 9.20876 9.88614 9.3259 9.94291 9.46294C9.99967 9.59999 10.0145 9.75079 9.98559 9.89627C9.95665 10.0418 9.88522 10.1754 9.78033 10.2803C9.67544 10.3852 9.5418 10.4566 9.39632 10.4855C9.25083 10.5145 9.10003 10.4996 8.96299 10.4429C8.82594 10.3861 8.70881 10.29 8.6264 10.1666C8.54399 10.0433 8.5 9.89829 8.5 9.74995C8.5 9.55104 8.57902 9.36028 8.71967 9.21962C8.86032 9.07897 9.05109 8.99995 9.25 8.99995ZM9.25 11.5C9.39834 11.5 9.54334 11.5439 9.66668 11.6264C9.79001 11.7088 9.88614 11.8259 9.94291 11.9629C9.99967 12.1 10.0145 12.2508 9.98559 12.3963C9.95665 12.5418 9.88522 12.6754 9.78033 12.7803C9.67544 12.8852 9.5418 12.9566 9.39632 12.9855C9.25083 13.0145 9.10003 12.9996 8.96299 12.9429C8.82594 12.8861 8.70881 12.79 8.6264 12.6666C8.54399 12.5433 8.5 12.3983 8.5 12.25C8.5 12.051 8.57902 11.8603 8.71967 11.7196C8.86032 11.579 9.05109 11.5 9.25 11.5ZM6.75 8.99995C6.89834 8.99995 7.04334 9.04394 7.16668 9.12635C7.29001 9.20876 7.38614 9.3259 7.44291 9.46294C7.49968 9.59999 7.51453 9.75079 7.48559 9.89627C7.45665 10.0418 7.38522 10.1754 7.28033 10.2803C7.17544 10.3852 7.0418 10.4566 6.89632 10.4855C6.75083 10.5145 6.60003 10.4996 6.46299 10.4429C6.32594 10.3861 6.20881 10.29 6.1264 10.1666C6.04399 10.0433 6 9.89829 6 9.74995C6 9.55104 6.07902 9.36028 6.21967 9.21962C6.36032 9.07897 6.55109 8.99995 6.75 8.99995ZM6.75 11.5C6.89834 11.5 7.04334 11.5439 7.16668 11.6264C7.29001 11.7088 7.38614 11.8259 7.44291 11.9629C7.49968 12.1 7.51453 12.2508 7.48559 12.3963C7.45665 12.5418 7.38522 12.6754 7.28033 12.7803C7.17544 12.8852 7.0418 12.9566 6.89632 12.9855C6.75083 13.0145 6.60003 12.9996 6.46299 12.9429C6.32594 12.8861 6.20881 12.79 6.1264 12.6666C6.04399 12.5433 6 12.3983 6 12.25C6 12.051 6.07902 11.8603 6.21967 11.7196C6.36032 11.579 6.55109 11.5 6.75 11.5ZM4.25 8.99995C4.39834 8.99995 4.54334 9.04394 4.66668 9.12635C4.79001 9.20876 4.88614 9.3259 4.94291 9.46294C4.99968 9.59999 5.01453 9.75079 4.98559 9.89627C4.95665 10.0418 4.88522 10.1754 4.78033 10.2803C4.67544 10.3852 4.5418 10.4566 4.39632 10.4855C4.25083 10.5145 4.10003 10.4996 3.96299 10.4429C3.82594 10.3861 3.70881 10.29 3.6264 10.1666C3.54399 10.0433 3.5 9.89829 3.5 9.74995C3.5 9.55104 3.57902 9.36028 3.71967 9.21962C3.86032 9.07897 4.05109 8.99995 4.25 8.99995ZM4.25 11.5C4.39834 11.5 4.54334 11.5439 4.66668 11.6264C4.79001 11.7088 4.88614 11.8259 4.94291 11.9629C4.99968 12.1 5.01453 12.2508 4.98559 12.3963C4.95665 12.5418 4.88522 12.6754 4.78033 12.7803C4.67544 12.8852 4.5418 12.9566 4.39632 12.9855C4.25083 13.0145 4.10003 12.9996 3.96299 12.9429C3.82594 12.8861 3.70881 12.79 3.6264 12.6666C3.54399 12.5433 3.5 12.3983 3.5 12.25C3.5 12.051 3.57902 11.8603 3.71967 11.7196C3.86032 11.579 4.05109 11.5 4.25 11.5Z" fill="#F8F8F8"/>
                                    </svg>
                                </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default DashboardCourtOwner
