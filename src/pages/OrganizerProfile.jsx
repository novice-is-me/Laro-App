import React from 'react'
import {emojiCool, emojiSad, emojiShock, ownerImg1 } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faLocation, faLocationDot, faUser} from '@fortawesome/free-solid-svg-icons'
import RefreshIcon from '@mui/icons-material/Refresh'
import DashBoardCard from '../components/DashBoardCard'
import { useNavigate } from 'react-router'


const OrganizerProfile = () => {
    
    const navigate = useNavigate()

  return ( 
     <div className='flex  w-full p-4 gap-4'>
        {/* for profile */}
        <div className=' flex  flex-[1.1] gap-4 xl:flex-[.5]'>
            <div className=' mt-4 hover:cursor-pointer'
             onClick={() => navigate('/organizer')}>
                <svg width="22" height="35" viewBox="0 0 22 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.85827 20.0176C1.19113 19.3497 0.816406 18.4442 0.816406 17.5001C0.816406 16.5561 1.19113 15.6506 1.85827 14.9826L15.2913 1.54488C15.9596 0.876882 16.8659 0.501731 17.8108 0.501953C18.2787 0.502063 18.7419 0.594327 19.1742 0.773476C19.6064 0.952626 19.9991 1.21515 20.3298 1.54607C20.6606 1.87698 20.9229 2.2698 21.1019 2.70211C21.2808 3.13441 21.3729 3.59772 21.3728 4.06559C21.3727 4.53347 21.2804 4.99674 21.1012 5.42896C20.9221 5.86117 20.6596 6.25387 20.3286 6.58463L9.41552 17.5001L20.331 28.4156C20.6714 28.7441 20.943 29.1371 21.1299 29.5716C21.3168 30.0062 21.4153 30.4736 21.4197 30.9466C21.424 31.4196 21.3341 31.8888 21.1551 32.3267C20.9762 32.7646 20.7119 33.1625 20.3776 33.4971C20.0432 33.8318 19.6456 34.0965 19.2079 34.2758C18.7701 34.4552 18.3011 34.5455 17.828 34.5416C17.355 34.5377 16.8875 34.4397 16.4528 34.2532C16.018 34.0667 15.6248 33.7955 15.296 33.4554L1.85352 20.0176H1.85827Z" fill="#545454"/>
                </svg>
            </div>
            <div className='flex flex-col gap-8 justify-between  w-full'>
                <div className='flex flex-col gap-8'>
                    <div className='flex gap-2  w-full'>
                        <div className='h-[150px] w-full rounded-[10px] overflow-hidden
                         xl:hidden'>
                            <img src={ownerImg1} alt="" 
                            className=' h-full w-full object-cover' />
                        </div>
                        <div className='flex flex-col justify-between w-full m-2'>
                            <div className=' w-full'>
                                <div className='flex gap-8 items-center justify-between'>
                                    <p className='font-poppins text-[20px] font-semibold'>
                                        Maria Santiago</p>
                                    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" fill='#545454'/></svg>                                    </div>
                                    <p className='font-poppins text-[#787878] text-sm'>
                                        Pasig City, Philippines</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='font-poppins text-sm font-semibold'>Share</p>
                                    <div className='flex gap-2'>
                                        <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" fill='#6F6F6F'/></svg>
                                        <svg width="25" height="25"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill='#6F6F6F'/></svg>
                                        <svg width="25" height="25"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill='#6F6F6F'/></svg>
                                        <svg width="35" height="25" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.0362 13.9998C5.0362 12.0048 6.83161 10.3832 9.04037 10.3832H14.207V8.1665H9.04037C5.47536 8.1665 2.58203 10.7798 2.58203 13.9998C2.58203 17.2198 5.47536 19.8332 9.04037 19.8332H14.207V17.6165H9.04037C6.83161 17.6165 5.0362 15.9948 5.0362 13.9998ZM10.332 15.1665H20.6654V12.8332H10.332V15.1665ZM21.957 8.1665H16.7904V10.3832H21.957C24.1658 10.3832 25.9612 12.0048 25.9612 13.9998C25.9612 15.9948 24.1658 17.6165 21.957 17.6165H16.7904V19.8332H21.957C25.522 19.8332 28.4154 17.2198 28.4154 13.9998C28.4154 10.7798 25.522 8.1665 21.957 8.1665Z" fill='#6F6F6F'/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <div className='flex items-center justify-between hover:cursor-pointer' >
                                <svg width="35" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.6157 33.7766L33.7761 32.6162L30.6678 29.5079V24.8662H29.0101V30.171L32.6157 33.7766ZM8.28816 34.8127C7.3764 34.8127 6.59615 34.4883 5.94741 33.8396C5.29868 33.1908 4.97376 32.41 4.97266 31.4972V8.28865C4.97266 7.37688 5.29758 6.59664 5.94741 5.9479C6.59725 5.29917 7.3775 4.97425 8.28816 4.97314H31.4967C32.4084 4.97314 33.1892 5.29806 33.8391 5.9479C34.4889 6.59774 34.8133 7.37799 34.8122 8.28865V19.3956C34.2872 19.1469 33.7485 18.9331 33.1959 18.754C32.6433 18.575 32.0769 18.4435 31.4967 18.3595V8.28865H8.28816V31.4972H18.3176C18.4004 32.105 18.532 32.6852 18.7121 33.2378C18.8922 33.7904 19.1061 34.3154 19.3537 34.8127H8.28816ZM8.28816 29.8394V31.4972V8.28865V18.3595V18.2352V29.8394ZM11.6037 28.1817H18.359C18.4419 27.6015 18.5734 27.0351 18.7535 26.4825C18.9337 25.9299 19.1337 25.3911 19.3537 24.8662H11.6037V28.1817ZM11.6037 21.5507H21.716C22.6001 20.7218 23.5881 20.0311 24.68 19.4785C25.7719 18.9259 26.939 18.5529 28.1812 18.3595V18.2352H11.6037V21.5507ZM11.6037 14.9197H28.1812V11.6042H11.6037V14.9197ZM29.8389 38.1282C27.5457 38.1282 25.5912 37.3198 23.9755 35.7029C22.3597 34.086 21.5513 32.1315 21.5502 29.8394C21.5502 27.5462 22.3586 25.5917 23.9755 23.976C25.5923 22.3602 27.5468 21.5518 29.8389 21.5507C32.1322 21.5507 34.0872 22.3591 35.7041 23.976C37.3209 25.5928 38.1288 27.5473 38.1277 29.8394C38.1277 32.1326 37.3193 34.0877 35.7024 35.7045C34.0855 37.3214 32.1311 38.1293 29.8389 38.1282Z" fill="black"/>
                                </svg>
                                <p className=' font-Inter text-2xl'>Overview</p>
                                <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                            </div>
                            <div className='flex items-center justify-between hover:cursor-pointer'
                             onClick={() => navigate('/')}>
                                <svg width="35" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M28.2197 21.0001C28.2197 20.6521 28.0814 20.3182 27.8353 20.0721C27.5892 19.8259 27.2553 19.6876 26.9072 19.6876H7.70448L11.1362 16.7476C11.2672 16.6355 11.3748 16.4986 11.4529 16.3449C11.5311 16.1912 11.5781 16.0235 11.5914 15.8516C11.6048 15.6797 11.5841 15.5068 11.5306 15.3429C11.4771 15.1789 11.3919 15.0271 11.2797 14.8961C11.1676 14.7652 11.0307 14.6575 10.877 14.5794C10.7232 14.5013 10.5556 14.4543 10.3837 14.4409C10.2118 14.4276 10.0389 14.4483 9.87496 14.5018C9.71102 14.5552 9.55922 14.6405 9.42823 14.7526L3.30323 20.0026C3.15914 20.1259 3.04346 20.2788 2.96414 20.451C2.88482 20.6232 2.84375 20.8106 2.84375 21.0001C2.84375 21.1897 2.88482 21.3771 2.96414 21.5493C3.04346 21.7215 3.15914 21.8744 3.30323 21.9976L9.42823 27.2476C9.69278 27.4741 10.0365 27.5863 10.3837 27.5594C10.7309 27.5324 11.0532 27.3687 11.2797 27.1041C11.5062 26.8396 11.6183 26.4959 11.5914 26.1487C11.5645 25.8015 11.4008 25.4791 11.1362 25.2526L7.70623 22.3126H26.9072C27.2553 22.3126 27.5892 22.1744 27.8353 21.9282C28.0814 21.6821 28.2197 21.3482 28.2197 21.0001Z" fill="#FF0000"/>
                                    <path d="M16.4063 14C16.4063 15.2285 16.4062 15.8427 16.702 16.2855C16.8294 16.4759 16.9929 16.6394 17.1833 16.7668C17.626 17.0625 18.2402 17.0625 19.4688 17.0625H26.9062C27.9505 17.0625 28.9521 17.4773 29.6905 18.2158C30.4289 18.9542 30.8438 19.9557 30.8438 21C30.8438 22.0443 30.4289 23.0458 29.6905 23.7842C28.9521 24.5227 27.9505 24.9375 26.9062 24.9375H19.4688C18.2402 24.9375 17.626 24.9375 17.1833 25.2315C16.9927 25.3594 16.8292 25.5235 16.702 25.7145C16.4062 26.1573 16.4063 26.7715 16.4063 28C16.4063 32.949 16.4062 35.4253 17.9445 36.9618C19.481 38.5 21.9555 38.5 26.9045 38.5H28.6545C33.607 38.5 36.0798 38.5 37.618 36.9618C39.1562 35.4253 39.1562 32.949 39.1562 28V14C39.1562 9.051 39.1562 6.57475 37.618 5.03825C36.0798 3.5 33.6052 3.5 28.6562 3.5H26.9062C21.9555 3.5 19.481 3.5 17.9445 5.03825C16.4062 6.57475 16.4063 9.051 16.4063 14Z" fill="#FF0000"/>
                                </svg>
                                <p className='font-Inter text-2xl'>Logout</p>
                                <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill='white'/></svg>
                            </div>
                        </div>
                    </div>
                    <div className='mr-4 bg-orange p-5 rounded-[10px]'>
                        <p className='text-white font-Poppins font-[600] text-[16px]'>
                            Refer a friend and earn money <br /> as an organizer.</p>
                        <div className='mt-10 '>
                            <button className='bg-black p-4 w-full text-white font-Poppins rounded-[10px]'>
                                Apply Now</button>
                        </div>
                    </div>
                </div>
        </div>

        {/* for contents */}
        <div className='flex flex-col flex-[3] h-full gap-8'> 
            <div className='flex gap-4'>
                <div className='flex flex-col gap-4 '>
                    <div className=' bg-black text-white p-4 rounded-[10px] w-full h-[50%]'>
                        <p className='font-Inter font-semibold text-[20px]'>
                            Credits</p>
                        <p className='font-Inter font-semibold text-[30px]'>7,000</p>
                    </div>
                    <div className=' w-full bg-orange text-white p-4 rounded-[10px] h-[50%]'>
                            <p className=' font-Inter font-semibold text-[20px]'>Active Game</p>
                            <p className=' font-Inter font-semibold text-[20px]'>0</p>
                    </div>
                </div>
                
                {/* Previous Matches */}
                <div className='flex flex-col w-full gap-4'>
                    <div className='flex w-full h-full'>
                        <div className='flex gap-4 w-full'>
                        <div className=' flex bg-black text-white rounded-[10px] p-4 gap-4 flex-grow'>
                        <div className='w-full flex flex-col gap-3'>
                            <div className=' flex justify-between'>
                                <p className=' font-Inter font-semibold text-[20px]'>
                                    Previous Matches</p>
                                    <div className='flex gap-2'>
                                        <RefreshIcon fontSize='small'
                                            className='bg-white text-black rounded-full'/>
                                        <p className='text-gray'>refresh</p>
                                    </div>
                            </div>
                            <div className=' flex items-center gap-4'>
                                <div className='flex gap-2'>
                                    <div>
                                        <p className='font-Inter text-[#7B7B7B] text-[14px]'>Team</p>
                                        <div className=' w-[85px] h-[40px] rounded-[5px] border-2 border-orange'></div>
                                    </div>
                                    <div>
                                        <p className='font-Inter text-[#7B7B7B] text-[14px]'>Score</p>
                                        <div className=' w-[60px] h-[40px] rounded-[5px] border-2 border-orange'></div>
                                    </div>
                                </div>
                                <p className=' font-Inter font-semibold text-[20px] mt-3'>VS</p>
                                <div className=' flex gap-2'>
                                    <div>
                                        <p className='font-Inter text-[#7B7B7B] text-[14px]'>Team</p>
                                        <div className=' w-[85px] h-[40px] rounded-[5px] border-2 border-orange'></div>
                                    </div>
                                    <div>
                                        <p className='font-Inter text-[#7B7B7B] text-[14px]'>Score</p>
                                        <div className=' w-[60px] h-[40px] rounded-[5px] border-2 border-orange'></div>
                                    </div>
                                </div>
                                
                            </div>
                            <p className='text-gray text-[12px]'>Date 1-1 2024</p>
                            <div className=' flex items-center gap-4'>
                                <div className='flex gap-2'>
                                    <div>
                                        <p className='font-Inter text-[#7B7B7B] text-[14px]'>
                                            Team</p>
                                        <div className=' w-[85px] h-[40px] rounded-[5px] border-2 border-orange'></div>
                                    </div>
                                    <div>
                                        <p className='font-Inter text-[#7B7B7B] text-[14px]'>Score</p>
                                        <div className=' w-[60px] h-[40px] rounded-[5px] border-2 border-orange'></div>
                                    </div>
                                </div>
                                <p className=' font-Inter font-semibold text-[20px] mt-3'>VS</p>
                                <div className=' flex gap-2'>
                                    <div>
                                        <p className='font-Inter text-[#7B7B7B] text-[14px]'>Team</p>
                                        <div className=' w-[85px] h-[40px] rounded-[5px] border-2 border-orange'></div>
                                    </div>
                                    <div>
                                        <p className='font-Inter text-[#7B7B7B] text-[14px]'>Score</p>
                                        <div className=' w-[60px] h-[40px] rounded-[5px] border-2 border-orange'></div>
                                    </div>
                                </div>
                            </div>
                            <p className='text-gray text-[12px]'>Date 1-1 2024</p>
                        </div>
                    </div>
                    <div className=' bg-black text-white p-4 rounded-[10px] w-[100%]'>
                        <p className='font-Inter font-semibold text-[20px]'>
                            Ads Here</p>
                    </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className=' flex gap-4  w-full'>
                {/* for first col */}
                <div className=' w-[200%]'>
{/* upcoming events */}
<div className='flex bg-black text-white rounded-[10px] p-5 gap-4 h-[180px]'>
<div className='w-[120px]'>
        <img src={emojiShock} alt="" className='h-[75x] justify-center' />
    </div>
    <div className='w-full flex flex-col gap'>
        <div className='flex justify-between p-3'>
            <p className='font-Inter font-semibold text-[20px]'>
            Upcoming Events
            </p>
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" fill='white' />
            </svg>
        </div>
        <div className='flex items-center gap-2'>
            <div className='flex gap-2'>
                <div>
                    <p className='font-Inter text-[#7B7B7B] text-[14px]'>
                        Team
                    </p>
                    <div className='border border-orange w-[85px] h-[40px] rounded-[5px]'></div>
                </div>
                <div>
                    <p className='font-Inter text-[#7B7B7B] text-[14px]'>Score</p>
                    <div className='border border-orange w-[60px] h-[40px] rounded-[5px]'></div>
                </div>
            </div>
            <p className='font-Inter font-semibold text-[20px] mt-3'>VS</p>
            <div className='flex gap-2'>
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



                    {/* Deposit Credits */}
                    <div className='flex gap-4 w-full'>
                        <div className='w-[50%] text-center mt-3'>
                            <p className='font-Poppins font-semibold text-[16px] mb-2 text-center'>Deposit Credits</p>
                                <div className='w-full bg-orange text-white p-4 rounded-[10px] h-[300px] text-start flex flex-col'>
                                    <p className='font-Poppins font-semibold text-[16px]'>Available Bank</p>
                                        <div className='flex-grow'></div> 
                                        <p className='font-Poppins  text-[12px] mb-2'>GCash, Maya, Bank</p>
                                            <div className='flex justify-center'>
                                                <button className='bg-black p-4 text-white w-full font-Poppins rounded-[10px]'>Deposit Now</button>
                                            </div>
                                        </div>
                                    </div>
                        {/* Earnings */}
                        <div className='flex flex-col  w-[50%] mt-3 '>
                            <p className=' font-Poppins font-semibold text-[16px] mb-2 text-center '>Earnings</p>
                            <div className='h-full flex flex-col p-4 justify-between text-white bg-black  
                            rounded-[10px] text-start'>
                                <div>
                                    <p className=' font-Poppins font-semibold text-[16px]'>Estimated</p>
                                    <p className=' font-Inter font-semibold text-3xl'>0</p>
                                </div>
                                <p className=' font-Inter font-light text-[10px]'>You need to reach 10,000 before checkout.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* for second col */}
                <div className='w-full flex flex-col gap-2'>
                    <div className='flex flex-col h-full'>
                        <div className='w-[100%] '>
                            <DashBoardCard title={'Total Games'} points={'0'} emoji={emojiCool} value={'games'} className='h-[75x] justify-center' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-[100%] h-full'>
                            <DashBoardCard title={'Total Earnings'} points={'0'} emoji={emojiSad}/>
                        </div>
                    </div>
                </div>
        
                <div className='bg-orange text-white p-4 rounded-[10px] w-[100%]'>
                    <p className='font-Inter font-semibold text-[20px]'>Ads Here</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrganizerProfile
