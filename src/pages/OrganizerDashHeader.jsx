import React from 'react';
import OrganizerDashContent from './OrganizerDashContent'; // Import OrganizerDashContent component
import { useState } from "react";
import { useNavigate } from 'react-router';
import { ownerImg1} from '../assets';

const OrganizerDashHeader = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Overview');

    const clickOverview = () => {
        setActiveTab('Overview')
    }

    const clickActivities = () => {
        setActiveTab('Activities')
    }

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="container flex flex-row gap-4 h-full overflow-hidden" style={{ height: '100vh' }}>
            {/* Left Side of the Organizer Dashboard */}
            <div className="flex flex-col items-center w-1/4 font-Poppins border">
                {/* Back Button and Org Profile */}
                <div className='flex p-5 gap-5 w-full'>
                    <div className=''>
                        <svg 
                            width="22" 
                            height="35" 
                            viewBox="0 0 22 35" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.85827 20.0176C1.19113 19.3497 0.816406 18.4442 0.816406 17.5001C0.816406 16.5561 1.19113 15.6506 1.85827 14.9826L15.2913 1.54488C15.9596 0.876882 16.8659 0.501731 17.8108 0.501953C18.2787 0.502063 18.7419 0.594327 19.1742 0.773476C19.6064 0.952626 19.9991 1.21515 20.3298 1.54607C20.6606 1.87698 20.9229 2.2698 21.1019 2.70211C21.2808 3.13441 21.3729 3.59772 21.3728 4.06559C21.3727 4.53347 21.2804 4.99674 21.1012 5.42896C20.9221 5.86117 20.6596 6.25387 20.3286 6.58463L9.41552 17.5001L20.331 28.4156C20.6714 28.7441 20.943 29.1371 21.1299 29.5716C21.3168 30.0062 21.4153 30.4736 21.4197 30.9466C21.424 31.4196 21.3341 31.8888 21.1551 32.3267C20.9762 32.7646 20.7119 33.1625 20.3776 33.4971C20.0432 33.8318 19.6456 34.0965 19.2079 34.2758C18.7701 34.4552 18.3011 34.5455 17.828 34.5416C17.355 34.5377 16.8875 34.4397 16.4528 34.2532C16.018 34.0667 15.6248 33.7955 15.296 33.4554L1.85352 20.0176H1.85827Z" fill="#545454"/>
                        </svg>
                    </div>
                    <div className='w-full '>
                        <img src={ownerImg1} alt="" className='rounded-[10px] h-full w-full object-cover' />
                    </div>
                </div>

                {/* Information about the Organizer */}
                <div className='flex flex-col py-5 px-16 gap-3 w-full'>
                    <div className='flex flex-col justify-between items-center w-full'>
                        <div className='flex justify-between items-center w-full'>
                            <p className='text-[25px] font-semibold'>Maria Santiago</p>
                            <svg 
                                width="17" 
                                height="17" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512">
                                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" fill='#545454'/>
                            </svg>
                        </div>
                        <div className='flex w-full'>
                            <p className='text-[#525252] text-lg'>Mandaluyong Eagle</p>
                        </div>
                        <div className='flex w-full'>
                            <p className='text-base'>Share</p>
                        </div>
                    </div>

                    <div className='flex justify-start gap-5 w-full'>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" fill='#6F6F6F'/></svg>
                        <svg width="20" height="20"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill='#6F6F6F'/></svg>
                        <svg width="20" height="20"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill='#6F6F6F'/></svg>
                        <svg width="20" height="20" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.0362 13.9998C5.0362 12.0048 6.83161 10.3832 9.04037 10.3832H14.207V8.1665H9.04037C5.47536 8.1665 2.58203 10.7798 2.58203 13.9998C2.58203 17.2198 5.47536 19.8332 9.04037 19.8332H14.207V17.6165H9.04037C6.83161 17.6165 5.0362 15.9948 5.0362 13.9998ZM10.332 15.1665H20.6654V12.8332H10.332V15.1665ZM21.957 8.1665H16.7904V10.3832H21.957C24.1658 10.3832 25.9612 12.0048 25.9612 13.9998C25.9612 15.9948 24.1658 17.6165 21.957 17.6165H16.7904V19.8332H21.957C25.522 19.8332 28.4154 17.2198 28.4154 13.9998C28.4154 10.7798 25.522 8.1665 21.957 8.1665Z" fill='#6F6F6F'/></svg>
                    </div>
                </div>
                
                {/* Overview and Activities Button */}
                <div className='flex flex-col items-start pl-16 pr-5 gap-5 w-full'>
                    <div onClick={() => clickOverview('Overview')} className={`flex items-center justify-between w-full text-[24px] font-bold ${activeTab === 'Overview' ? 'active' : 'font-normal text-[#787878]'}`}>
                        <svg 
                            width="35" 
                            height="35" 
                            viewBox="0 0 40 40" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.6157 33.7766L33.7761 32.6162L30.6678 29.5079V24.8662H29.0101V30.171L32.6157 33.7766ZM8.28816 34.8127C7.3764 34.8127 6.59615 34.4883 5.94741 33.8396C5.29868 33.1908 4.97376 32.41 4.97266 31.4972V8.28865C4.97266 7.37688 5.29758 6.59664 5.94741 5.9479C6.59725 5.29917 7.3775 4.97425 8.28816 4.97314H31.4967C32.4084 4.97314 33.1892 5.29806 33.8391 5.9479C34.4889 6.59774 34.8133 7.37799 34.8122 8.28865V19.3956C34.2872 19.1469 33.7485 18.9331 33.1959 18.754C32.6433 18.575 32.0769 18.4435 31.4967 18.3595V8.28865H8.28816V31.4972H18.3176C18.4004 32.105 18.532 32.6852 18.7121 33.2378C18.8922 33.7904 19.1061 34.3154 19.3537 34.8127H8.28816ZM8.28816 29.8394V31.4972V8.28865V18.3595V18.2352V29.8394ZM11.6037 28.1817H18.359C18.4419 27.6015 18.5734 27.0351 18.7535 26.4825C18.9337 25.9299 19.1337 25.3911 19.3537 24.8662H11.6037V28.1817ZM11.6037 21.5507H21.716C22.6001 20.7218 23.5881 20.0311 24.68 19.4785C25.7719 18.9259 26.939 18.5529 28.1812 18.3595V18.2352H11.6037V21.5507ZM11.6037 14.9197H28.1812V11.6042H11.6037V14.9197ZM29.8389 38.1282C27.5457 38.1282 25.5912 37.3198 23.9755 35.7029C22.3597 34.086 21.5513 32.1315 21.5502 29.8394C21.5502 27.5462 22.3586 25.5917 23.9755 23.976C25.5923 22.3602 27.5468 21.5518 29.8389 21.5507C32.1322 21.5507 34.0872 22.3591 35.7041 23.976C37.3209 25.5928 38.1288 27.5473 38.1277 29.8394C38.1277 32.1326 37.3193 34.0877 35.7024 35.7045C34.0855 37.3214 32.1311 38.1293 29.8389 38.1282Z" fill={activeTab === 'Overview' ? 'black' : '#787878'}/>
                        </svg>
                        <button className='text-[24px]'>Overview</button>
                        <svg 
                            width="30" 
                            height="30" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 320 512">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill={activeTab === 'Overview' ? 'black' : '#787878'}/>
                        </svg>
                    </div>

                    <div onClick={() =>clickActivities('Activities')} className={`flex items-center justify-between w-full text-[24px] font-bold ${activeTab === 'Activities' ? 'active' : 'font-normal text-[#787878]'}`}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="35" 
                            height="35" 
                            fill="currentColor"  
                            viewBox="0 0 16 16"> 
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/> <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                        </svg>
                        <button className='text-[24px]'>Activities</button>
                        <svg 
                            width="30" 
                            height="30" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 320 512">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill={activeTab === 'Activities' ? 'black' : '#787878'}/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <OrganizerDashContent activeTab={activeTab} /> {/* Render OrganizerDashContent */}
                <div className='flex justify-center items-center w-full h-fit font-Inter p-5'>
                    <div className='flex justify-evenly items-center w-[295px] h-[70px] text-white text-[20px] font-semibold bg-orange rounded-[50px]'>
                        <p className='flex items-center h-full text-[40px]'>+</p>
                        <p className='flex items-center h-full'>Create New Event</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrganizerDashHeader;
