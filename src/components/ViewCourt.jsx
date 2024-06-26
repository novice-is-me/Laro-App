import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import success from '../assets/image/success.jpeg'
import Sucess from '../pages/Sucess'
import { KeyboardArrowLeft } from '@mui/icons-material/'
import { CardData } from '../constant/ActiveMatchData'


const ViewCourt = ({setMain , clickedCard}) => {
    return (
        <div className='flex flex-col h-fit p-10 gap-5 bg-[#FFEEE6] rounded-[40px] font-Poppins xsm:p-5'>
            {/* Header of view court */}
            <div className='flex w-full h-full justify-between sm:flex-col sm:gap-5'>
                <div className='flex flex-col gap-2 w-auto h-full sm:text-center'>
                    <p className='text-xl md:text-base text-[#717171]'>Result</p>
                    <h1 className='text-3xl font-medium'>{CardData[clickedCard].location}</h1>
                </div>

                <div className='bg-white rounded-[100px] px-5 sm:py-5'>
                    <div className='flex items-center h-full sm:justify-between'>
                        <input type="text" className='outline-none px-5' placeholder="Find a court here" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='' />
                    </div>
                </div>
            </div>

            <div className='flex items-center w-fit cursor-pointer' onClick={() => setMain('default')}>
                <KeyboardArrowLeft style={{ fontSize: '80px' }} />
                <p className='text-5xl font-bold md:text-2xl'>{CardData[clickedCard].location.toUpperCase()}</p>
            </div>

            <div className='flex h-[50vh] 1110:flex-col 1110:h-fit'>
                {/* Images */}
                <div className="flex items-center gap-5 w-auto h-full p-5 1110:w-full xsm:h-fit xsm:px-5 xsm:py-0">
                    <div className="relative w-[400px] h-full rounded-2xl overflow-hidden 1110:w-full xsm:w-[258px] xsm:h-[250px]">
                        <img src={success} alt="Success" className="w-full h-full object-cover"/>
                    </div>

                    <div className="flex flex-col justify-between gap-5 items-center w-fit h-full 1110:w-1/3 1110:h-full ">
                        <div className="relative w-[150px] h-[150px] rounded-2xl overflow-hidden xsm:w-[90px] xsm:h-[75px]">
                            <img src={success} alt="Success" className="w-full h-full object-cover object-bottom"/>
                        </div>
                        <div className="relative w-[150px] h-[150px] rounded-2xl overflow-hidden xsm:w-[90px] xsm:h-[75px]">
                            <img src={success} alt="Success" className="w-full h-full object-cover object-bottom"/>
                        </div>
                        <div className="relative w-[150px] h-[150px] rounded-2xl overflow-hidden xsm:w-[90px] xsm:h-[75px]">
                            <img src={success} alt="Success" className="w-full h-full object-cover object-bottom"/>
                        </div>
                    </div>
                </div>

                {/* Information */}
                <div className='flex justify-center items-center w-full h-full p-5 gap-5 xsm:flex-col'>
                    <div className='flex flex-col justify-center items-center gap-5 w-full h-full'>
                        {/* Parking Slot Information */}
                        <div className='flex flex-col p-5 gap-2 w-full h-fit bg-white rounded-xl shadow-xl'>
                            <div className='flex items-center gap-2 w-full'>
                                <svg width="21" height="21" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.2077 10.541H12.4577V7.66602H18.2077C18.716 7.66602 19.2035 7.46408 19.563 7.10464C19.9224 6.74519 20.1243 6.25768 20.1243 5.74935V3.83268C20.1243 3.32435 19.9224 2.83684 19.563 2.47739C19.2035 2.11795 18.716 1.91602 18.2077 1.91602H4.79102L1.91602 4.79102L4.79102 7.66602H10.541V10.541H4.79102C4.28268 10.541 3.79517 10.743 3.43573 11.1024C3.07628 11.4618 2.87435 11.9494 2.87435 12.4577V14.3743C2.87435 14.8827 3.07628 15.3702 3.43573 15.7296C3.79517 16.0891 4.28268 16.291 4.79102 16.291H10.541V21.0827H12.4577V16.291H18.2077L21.0827 13.416L18.2077 10.541Z" fill="#F24E1E" />
                                </svg>
                                <p className='text-2xl md:text-base font-bold'>Parking Slot</p>
                            </div>
                            <div className='flex items-center gap-2 w-full'>
                                <svg width="19" height="19" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.26653 18.6512H2.30378C2.95403 18.6512 3.46366 18.1502 3.46366 17.4999V16.0235C5.41516 16.1465 8.23628 16.2343 10.4949 16.2343C12.7625 16.2343 15.5837 16.1465 17.5352 16.0235V17.4999C17.5352 18.1502 18.0362 18.6512 18.695 18.6512H19.7323C20.3915 18.6512 20.9012 18.1502 20.9012 17.4999V12.4288C20.9012 10.952 20.6023 10.1169 19.7852 9.06241L19.0468 8.10428C18.7217 6.52253 18.1415 4.86128 17.834 4.21103C17.3679 3.21766 16.454 2.62853 15.2852 2.47066C14.6964 2.40016 12.7715 2.34766 10.4949 2.34766C8.22766 2.34766 6.30241 2.40916 5.71366 2.47066C4.54478 2.61128 3.63091 3.21766 3.16516 4.21066C2.85766 4.86128 2.27716 6.52253 1.95203 8.10428L1.21366 9.06241C0.396156 10.1173 0.0976562 10.952 0.0976562 12.4288V17.4999C0.0976562 18.1502 0.607656 18.6512 1.26653 18.6512ZM3.72766 7.37491C3.93841 6.40816 4.36028 5.15116 4.65016 4.64116C4.88753 4.22866 5.14253 4.05241 5.61728 3.99128C6.28478 3.89453 7.77916 3.84166 10.4949 3.84166C13.2197 3.84166 14.7137 3.87691 15.3819 3.99128C15.8477 4.06141 16.1023 4.22828 16.3487 4.64153C16.6475 5.14253 17.0428 6.40778 17.2712 7.37491C17.3507 7.70003 17.2187 7.82303 16.8759 7.79678C15.4172 7.70903 13.6768 7.61228 10.4949 7.61228C7.32241 7.61228 5.58203 7.70903 4.12291 7.79678C3.78016 7.82303 3.65716 7.70003 3.72728 7.37491M4.08728 13.958C3.25253 13.958 2.62853 13.325 2.62853 12.4989C2.62853 11.6638 3.25253 11.0402 4.08728 11.0402C4.92241 11.0402 5.54641 11.6638 5.54641 12.4989C5.54641 13.325 4.92241 13.9577 4.08766 13.9577M16.9112 13.9577C16.076 13.9577 15.4524 13.3247 15.4524 12.4985C15.4524 11.6634 16.076 11.0398 16.9112 11.0398C17.7373 11.0398 18.3699 11.6634 18.3699 12.4985C18.3699 13.3247 17.7373 13.9577 16.9112 13.9577ZM8.16616 13.553C7.55078 13.553 7.11991 13.1135 7.11991 12.4982C7.11991 11.8742 7.55078 11.4437 8.16616 11.4437H12.833C13.448 11.4437 13.8789 11.8742 13.8789 12.4982C13.8789 13.1132 13.448 13.553 12.8327 13.553H8.16616Z" fill="#F24E1E" />
                                </svg>
                                <p className='text-2xl md:text-base text-[#6F6F6F]'>No. Cars</p>
                            </div>
                            <div className='flex items-center gap-2 w-full'>
                                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.36506 10L11.2001 8H14.6921L13.6001 5H11.0001V3H15.0001L16.0921 6H20.0001V9H17.1841L18.6401 13.002C19.7448 13.0371 20.798 13.4776 21.5988 14.2395C22.3996 15.0014 22.892 16.0313 22.9821 17.133C23.0722 18.2346 22.7537 19.3309 22.0873 20.2127C21.4209 21.0946 20.4533 21.7003 19.3689 21.9145C18.2845 22.1286 17.1593 21.9362 16.2077 21.3738C15.2561 20.8115 14.5448 19.9186 14.2093 18.8654C13.8739 17.8122 13.9378 16.6724 14.3888 15.6633C14.8399 14.6542 15.6466 13.8464 16.6551 13.394L15.4191 10H14.4721L12.8901 15.87L9.96507 16.939C10.0706 17.7812 9.93583 18.6362 9.57623 19.4051C9.21663 20.174 8.64689 20.8255 7.93279 21.2844C7.2187 21.7433 6.38937 21.9908 5.54058 21.9985C4.69178 22.0061 3.85813 21.7736 3.13587 21.3276C2.41362 20.8817 1.83222 20.2405 1.45881 19.4783C1.0854 18.716 0.93521 17.8636 1.02557 17.0196C1.11594 16.1756 1.44318 15.3744 1.9695 14.7084C2.49583 14.0424 3.19977 13.5389 4.00006 13.256V12H2.00006V10H8.36506ZM5.50006 20C6.16311 20 6.79899 19.7366 7.26783 19.2678C7.73667 18.7989 8.00006 18.163 8.00006 17.5C8.00006 16.837 7.73667 16.2011 7.26783 15.7322C6.79899 15.2634 6.16311 15 5.50006 15C4.83702 15 4.20114 15.2634 3.7323 15.7322C3.26346 16.2011 3.00006 16.837 3.00006 17.5C3.00006 18.163 3.26346 18.7989 3.7323 19.2678C4.20114 19.7366 4.83702 20 5.50006 20ZM18.5001 20C19.1631 20 19.799 19.7366 20.2678 19.2678C20.7367 18.7989 21.0001 18.163 21.0001 17.5C21.0001 16.837 20.7367 16.2011 20.2678 15.7322C19.799 15.2634 19.1631 15 18.5001 15C17.837 15 17.2011 15.2634 16.7323 15.7322C16.2635 16.2011 16.0001 16.837 16.0001 17.5C16.0001 18.163 16.2635 18.7989 16.7323 19.2678C17.2011 19.7366 17.837 20 18.5001 20Z" fill="#F24E1E" />
                                </svg>
                                <p className='text-2xl md:text-base text-[#6F6F6F]'>No. Motorcycle</p>
                            </div>
                        </div>

                        {/* Court Details Information */}
                        <div className='flex flex-col p-5 gap-2 w-full h-full bg-white rounded-xl shadow-xl'>
                            <div className='flex items-center gap-2 w-full'>
                                <svg width="21" height="21" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.96495 15.1241C3.3695 15.1241 3.60073 14.8929 3.60073 14.4883V9.66531C3.60073 9.26076 3.3695 9.02953 2.96495 9.02953H0V15.1245L2.96495 15.1241ZM8.63855 12.0684C8.63855 13.3901 9.57991 14.5212 10.8104 14.8185V9.34331C10.191 9.48024 9.63744 9.82561 9.24213 10.3217C8.84682 10.8178 8.63376 11.4341 8.63855 12.0684ZM12.1399 14.819C13.3786 14.5216 14.2953 13.3905 14.3118 12.0688C14.32 10.7475 13.3872 9.64108 12.1399 9.34372V14.819ZM20.0351 9.02994C19.6305 9.02994 19.3993 9.26117 19.3993 9.66572V14.4887C19.3993 14.8933 19.6305 15.1245 20.0351 15.1245H23V9.02953L20.0351 9.02994ZM23 16.454H20.01C18.7881 16.454 18.0698 15.7353 18.0698 14.513V9.64067C18.0698 8.41838 18.7881 7.70004 20.0104 7.70004H23V6.84904C23 5.14787 22.133 4.28906 20.4068 4.28906H12.1399V8.09638C14.0723 8.41017 15.5012 10.0534 15.5258 12.077C15.5505 14.1166 14.0805 15.7603 12.1399 16.0741V19.8732H20.4068C22.133 19.8732 23 19.014 23 17.3128V16.454ZM0 16.454V17.3124C0 19.014 0.875232 19.8728 2.59325 19.8728H10.81V16.0737C8.87759 15.7685 7.42407 14.1248 7.42407 12.077C7.42407 10.0452 8.87759 8.3769 10.81 8.07996V4.28906H2.59325C0.874821 4.28906 0 5.13965 0 6.84904V7.70004H2.98959C4.21187 7.70004 4.93021 8.41838 4.93021 9.64067V14.513C4.93021 15.7353 4.21146 16.454 2.98959 16.454H0Z" fill="#F24E1E" />
                                </svg>
                                <p className='text-2xl md:text-base font-bold'>Court Details</p>
                            </div>
                            <div className='flex items-center gap-2 w-full'>
                                <svg width="19" height="19" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5007 14.5007C13.1715 14.5007 12.0336 14.0274 11.0871 13.0809C10.1406 12.1343 9.66732 10.9965 9.66732 9.66732C9.66732 8.33815 10.1406 7.2003 11.0871 6.25378C12.0336 5.30725 13.1715 4.83398 14.5007 4.83398C15.8298 4.83398 16.9677 5.30725 17.9142 6.25378C18.8607 7.2003 19.334 8.33815 19.334 9.66732C19.334 10.9965 18.8607 12.1343 17.9142 13.0809C16.9677 14.0274 15.8298 14.5007 14.5007 14.5007ZM4.83398 24.1673V20.784C4.83398 20.0993 5.0104 19.4701 5.36323 18.8966C5.71607 18.323 6.1841 17.8848 6.76732 17.5819C8.01593 16.9576 9.28468 16.4896 10.5736 16.1778C11.8625 15.8661 13.1715 15.7098 14.5007 15.709C15.8298 15.709 17.1388 15.8653 18.4277 16.1778C19.7166 16.4904 20.9854 16.9584 22.234 17.5819C22.818 17.884 23.2864 18.3222 23.6393 18.8966C23.9921 19.4709 24.1681 20.1001 24.1673 20.784V24.1673H4.83398Z" fill="#F24E1E" />
                                </svg>
                                <p className='text-2xl md:text-base text-[#6F6F6F]'>No. Seats</p>
                            </div>
                            <div className='flex items-center gap-2 w-full'>
                                <svg width="19" height="19" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5007 15.7077V10.8743M25.3756 7.24935L22.959 4.83268M12.084 2.41602H16.9173M14.5007 25.3743C11.9369 25.3743 9.47814 24.3559 7.66529 22.543C5.85243 20.7302 4.83398 18.2714 4.83398 15.7077C4.83398 13.1439 5.85243 10.6852 7.66529 8.87232C9.47814 7.05947 11.9369 6.04102 14.5007 6.04102C17.0644 6.04102 19.5232 7.05947 21.336 8.87232C23.1489 10.6852 24.1673 13.1439 24.1673 15.7077C24.1673 18.2714 23.1489 20.7302 21.336 22.543C19.5232 24.3559 17.0644 25.3743 14.5007 25.3743Z" stroke="#F24E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className='text-2xl md:text-base text-[#6F6F6F]'>Timer and Buzzer</p>
                            </div>
                            <div className='flex items-center gap-2 w-full'>
                                <svg width="19" height="19" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_156_1081)">
                                        <path d="M24.3877 8.37203L10.1368 2.09886C9.85169 1.97385 9.52859 1.96714 9.2385 2.0802C9.09514 2.13699 8.96443 2.22158 8.85391 2.3291C8.74338 2.43663 8.65522 2.56495 8.5945 2.70669L5.0945 10.8734C4.97262 11.1577 4.96868 11.4788 5.08354 11.7661C5.1984 12.0534 5.42266 12.2833 5.707 12.4052L13.8235 15.883L12.3768 19.4997H7.33333V15.9997H5V25.333H7.33333V21.833H12.3768C13.337 21.833 14.1875 21.2567 14.5422 20.3654L15.9678 16.8024L19.9567 18.5115C20.2397 18.6332 20.5595 18.6379 20.846 18.5247C21.1326 18.4115 21.3627 18.1895 21.4862 17.9072L24.9862 9.90736C25.11 9.62435 25.1165 9.30378 25.0043 9.01596C24.8921 8.72814 24.6704 8.49656 24.3877 8.37203ZM25.9183 18.767L23.7507 17.9014L26.0817 12.068L28.2493 12.9325L25.9183 18.767Z" fill="#F24E1E" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_156_1081">
                                            <rect width="28" height="28" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className='text-2xl md:text-base text-[#6F6F6F]'>CCTV</p>
                            </div>
                        </div>
                    </div>

                    {/* Court Owner Details */}
                    <div className='flex justify-center items-center w-full h-full'>
                        <div className='flex flex-col p-5 gap-5 w-full h-full bg-white rounded-xl shadow-xl'>
                            <div className=''>
                                <p className='text-2xl md:text-base font-bold'>Court Owner</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-[12px] text-[#8E8D8D]'>Name</p>
                                <p className='text-xl md:text-base '>Court Owner Name</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-[12px] text-[#8E8D8D]'>Location</p>
                                <p className='text-xl md:text-base '>{CardData[clickedCard].location}</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-[12px] text-[#8E8D8D]'>Contact No.</p>
                                <p className='text-xl md:text-base '>09xx-xxx-xxxx</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-[12px] text-[#8E8D8D]'>Email</p>
                                <p className='text-xl md:text-base '>courtowner1@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCourt
