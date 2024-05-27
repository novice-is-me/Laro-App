import React from "react";
import { Logo, eagleIcon, success, people1, people2, people3, people4, people5, people6, people7,people8, people9 } from "../assets";
import { Link } from "react-router-dom";
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import NorthEastSharpIcon from '@mui/icons-material/NorthEastSharp';
import StarRating from '../components/StarRating'


const OrganizerMatches = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center pt-10 px-4 overflow-x-auto xl:pt-0 xl:px-0 xsm:pt-0 xsm:px-0 lg:px-0 lg:pt-0">
    <div className="bg-white rounded-[50px] pl-20 pt-4 flex flex-col relative w-full h-auto lg:mr-2 mb-10 lg:mb-0 lg:pl-4 lg:overflow-x-auto xsm:rounded-[0px] xl:rounded-[0px] lg:rounded-[0px]">
      <div className="flex lg:flex lg:justify-start p-4 mb-4 pb-4 ">
          
          <Link to="/">
            <div className=" cursor-pointer    ">
              <img src={Logo} alt="Logo" className="w-[100px]"/>
            </div>
          </Link>
          

        </div>
        {/* for "<" */}
        <div className='h-full w-full flex flex-row   '>
                    <div className='pl-7  w-[5%] h-full pt-14 lg:pt-4 lg:pl-0 '>
                        <svg 
                            width="22" 
                            height="35" 
                            viewBox="0 0 22 35" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.85827 20.0176C1.19113 19.3497 0.816406 18.4442 0.816406 17.5001C0.816406 16.5561 1.19113 15.6506 1.85827 14.9826L15.2913 1.54488C15.9596 0.876882 16.8659 0.501731 17.8108 0.501953C18.2787 0.502063 18.7419 0.594327 19.1742 0.773476C19.6064 0.952626 19.9991 1.21515 20.3298 1.54607C20.6606 1.87698 20.9229 2.2698 21.1019 2.70211C21.2808 3.13441 21.3729 3.59772 21.3728 4.06559C21.3727 4.53347 21.2804 4.99674 21.1012 5.42896C20.9221 5.86117 20.6596 6.25387 20.3286 6.58463L9.41552 17.5001L20.331 28.4156C20.6714 28.7441 20.943 29.1371 21.1299 29.5716C21.3168 30.0062 21.4153 30.4736 21.4197 30.9466C21.424 31.4196 21.3341 31.8888 21.1551 32.3267C20.9762 32.7646 20.7119 33.1625 20.3776 33.4971C20.0432 33.8318 19.6456 34.0965 19.2079 34.2758C18.7701 34.4552 18.3011 34.5455 17.828 34.5416C17.355 34.5377 16.8875 34.4397 16.4528 34.2532C16.018 34.0667 15.6248 33.7955 15.296 33.4554L1.85352 20.0176H1.85827Z" fill="#545454"/>
                        </svg>
                    </div>
                    
                    <div className=" pl-10 h-full w-full flex flex-row lg:flex lg:flex-col xsm:flex xsm:flex-col xl:flex xl:flex-col gap-14 xsm:pl-4 xl:pl-4  xsm:pr-8 lg:pr-8 ">
                      
                      {/* for 1st column  with image*/}
                      <div className=" h-full w-[65%] flex flex-col  gap-4  lg:w-auto xl:w-auto  ">
                        {/* for 1st column  */}
                      <div className=" h-full w-[full] flex flex-col  gap-4  lg:w-auto xl:w-auto ">
                      <div className="border-2 border-[#FA5000] rounded-[10px] h-[90px] flex  justify-center flex-col pl-8 pt-2 lg:pl-2">
                      <p className="font-Poppins font-semibold text-[22px]">Maria Santiago</p>
                      <p className="font-Poppins text-[#575757] text-[15px]">Organizer</p>
                      <Link className="italic underline text-[#575757] text-[15px] flex justify-end pr-4">Reviews</Link>

                      </div>

                      <div className="border-2 border-[#FA5000] rounded-[10px] h-[90px] flex  justify-center flex-col pl-8 pt-2 lg:pl-2">
                      <div className=" flex flex-row gap-4">
                      <p className="font-Poppins font-semibold text-[22px]">Mandaluyong Eagle</p>
                      <img src={eagleIcon} alt="eagle"/>
                      </div>
                      <p className="font-Poppins text-[#575757] text-[15px]">Community Name</p>
                      </div>

                      <div className="border-2 border-[#FA5000] rounded-[10px] h-[110px] flex  justify-center flex-col pl-8 pt-2 gap-4 lg:pl-2">
                      <p className="font-Poppins font-semibold text-[22px]">Mandaluyong City Court</p>
                      <p className="font-Poppins text-[#575757] text-[15px]">Court Name and Address</p>
                      </div>


                      <div className="border-2 border-[#FA5000] rounded-[10px] flex flex-row h-[90px]  pl-8 pt-2 lg:pl-2">
                      <div className="flex  justify-center flex-col">
                      <p className="font-Poppins font-semibold text-[22px] ">4.0 Rating</p>
                      <p className="font-Poppins text-[#575757] text-[15px]">Reviews</p>
                      </div>
                      <div className="flex  justify-center items-center  ml-6 mb-4 w-fit ">
                      <StarRating rating={4} className="text-4xl sm:text-3xl" />

</div>

                      
                      </div>

                      </div>
                                            {/* for 1st  column image*/}
                                            <div className="rounded mb-8 lg:mb-0  xl:flex xl:items-center xl:justify-center   ">
                      <img src={success} alt="success" className="flex items-center rounded-[10px] h-[420px] w-full xl:h-auto"/>
                      </div>
                      </div>

                      {/* for 2nd column*/}
                      <div className=" w-full gap-4 lg:w-auto xl:w-auto ">
                      {/* for matches details and additional details */}
                      <div className="flex flex-col gap-4  w-[75%] lg:w-full lg:mr-10 xl:w-full ">
                        {/* for 1st row*/}
                      <div className="flex flex-row gap-4 lg:flex lg:flex-col w-full  ">
                        <div className="border-2 border-[#FA5000] rounded-[10px] h-[90px] w-1/2 lg:w-full flex  justify-center flex-col pl-8 pt-2">
                      <p className="font-Poppins font-semibold text-[22px]">March 16, 2024</p>
                      <p className="font-Poppins text-[#575757] text-[15px]">Date</p>
                      </div>

                      <div className="border-2 border-[#FA5000] rounded-[10px] h-[90px] w-1/2 flex lg:w-full justify-center flex-col pl-8 pt-2">
                      <p className="font-Poppins font-semibold text-[22px]">8:00 to 00:00</p>
                      <p className="font-Poppins text-[#575757] text-[15px]">Time</p>
                      </div>
                      </div>
                      
                      
                        {/* for 2nd row*/}
                        <div className=" flex flex-col gap-4 ">
                        <div className="flex flex-row gap-4 lg:flex lg:flex-col   ">
                        <div className="border-2 border-[#FA5000] rounded-[10px] h-[90px] w-1/2 lg:w-full flex  justify-center flex-col pl-8 pt-2">
                      <p className="font-Poppins font-semibold text-[22px]">Hardcore</p>
                      <p className="font-Poppins text-[#575757] text-[15px]">Diffculty</p>
                      </div>

                      <div className="border-2 border-[#FA5000] rounded-[10px] h-[90px] w-1/2 flex lg:w-full justify-center flex-col pl-8 pt-2">
                      
                      <p className="font-Poppins font-semibold text-[22px] flex items-center ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="35" height="20">
<path d="M176 32C244.4 32 303.7 71.01 332.8 128H352C369.7 128 384 142.3 384 160C384 177.7 369.7 192 352 192H351.3C351.8 197.3 352 202.6 352 208C352 213.4 351.8 218.7 351.3 224H352C369.7 224 384 238.3 384 256C384 273.7 369.7 288 352 288H332.8C303.7 344.1 244.4 384 176 384H96V448C96 465.7 81.67 480 64 480C46.33 480 32 465.7 32 448V288C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224V192C14.33 192 0 177.7 0 160C0 142.3 14.33 128 32 128V64C32 46.33 46.33 32 64 32H176zM254.4 128C234.2 108.2 206.5 96 176 96H96V128H254.4zM96 192V224H286.9C287.6 218.8 288 213.4 288 208C288 202.6 287.6 197.2 286.9 192H96zM254.4 288H96V320H176C206.5 320 234.2 307.8 254.4 288z"/>
</svg>
   200.00
</p>
<p className="font-Poppins text-[#575757] text-[15px]">Fee per head</p>

                      </div>
                      
                        </div>

                        </div>

                        {/* for 3rd row*/}
                        <div className="border-2 border-[#FA5000] rounded-[10px] h-[110px]  lg:h-fit lg:pl-8 lg:pt-4 lg:pb-4 flex justify-center flex-col pl-12 ">
                      <p className="font-Poppins font-semibold text-[22px]">Additional Details</p>
                      <p className="font-Poppins text-[#575757] text-[15px]  w-[85%] pl-2 ">Parking Space Available. Free Refilable water, just bring your own bottle. Have referees.</p>
                      </div>
                        </div>

                      {/* for player contents*/}
                        <div className=" flex flex-col gap-4  w-[75%] mt-2 lg:w-fit lg:mr-10  xl:w-full xsm:w-full ">
                          {/* for player contents*/}
                      <div className="  h-auto ">
                      <p className="font-Poppins font-semibold text-[33px] underline xl:pt-4 xl:pb-4">Players</p>

                      {/* for player cards*/}
                      <div className=" flex flex-col gap-1  lg:w-full xsm:w-full xl:w-full xsm:pr-4 ">
                        {/* for 1st row*/}
                        <div className="flex flex-row gap-10 lg:gap-4 xsm:gap-2">
                          <div className="border-2 border-[#FA5000] rounded-[10px] h-[auto] w-1/2 lg:w-full xsm:w-full xl:w-full flex justify-start flex-row pl-4 pt-2 lg:pl-1">
                            <div  className="mr-4 flex justify-center items-center pb-2 xsm:hidden">
                            <img src={people1} alt="people1" height="40px" width="40px"/>
                            </div>

                            <div className="flex flex-col ">
                              <p className="font-Poppins font-semibold text-[14px] m-0 p-0">Juan Dela Cruz</p> 
                              <p className="font-Poppins text-[#575757] text-[10px] m-0">Veteran</p>
                              <div className="flex flex-row  items-center  ">
                                <PaymentsOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
                                <p className="font-Poppins text-[#00CE15] text-[8px] justify-center items-center pl-1 pr-6">Paid</p>
                                <button onClick={() => {
                                    console.log("Clicked to remove item."); }}
                                  style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                                  <DeleteOutlineOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
                                  <p className="font-Poppins text-[#FA5000] text-[9px] justify-center items-center pr-4 ">Remove</p>
                                </button>
                              </div>
                            </div>
                            <div className="flex justify-start items-end pb-1 xsm:hidden">
                              <NorthEastSharpIcon style={{ color: '#515151', fontSize: '24px', paddingBottom:''}} />
                            </div>
                          </div>

                        <div className="border-2 border-[#FA5000] rounded-[10px] h-[auto] w-1/2 lg:w-full xsm:w-full xl:w-full flex justify-start flex-row pl-4 pt-2 lg:pl-1">
                          <div  className="mr-4 flex justify-center items-center pb-2 xsm:hidden">
                            <img src={people1} alt="people1" height="40px" width="40px"/>
                          </div>

                          <div className="flex flex-col ">
                            <p className="font-Poppins font-semibold text-[14px] ">Juan Dela Cruz</p> 
                            <p className="font-Poppins text-[#575757] text-[10px]">Veteran</p>
                            <div className="flex flex-row  items-center ">
                              <PaymentsOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
                              <p className="font-Poppins text-[#00CE15] text-[8px] justify-center items-center pl-1 pr-6">Paid</p>
                              <button onClick={() => {
                                console.log("Clicked to remove item."); }}
                                style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                                <DeleteOutlineOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
                                <p className="font-Poppins text-[#FA5000] text-[9px] justify-center items-center pr-4">Remove</p>
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-start items-end pb-1 xsm:hidden">
                            <NorthEastSharpIcon style={{ color: '#515151', fontSize: '24px', paddingBottom:''}} />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-row gap-10 pt-2 lg:gap-4 xsm:gap-2 ">
                      <div className="border-2 border-[#FA5000] rounded-[10px] h-[auto] w-1/2 lg:w-full xsm:w-full xl:w-full flex justify-start flex-row pl-4 pt-2 lg:pl-1">
                        <div  className="mr-4 flex justify-center items-center pb-2 xsm:hidden">
                        <img src={people1} alt="people1" height="40px" width="40px"/>
                        </div>

                        <div className="flex flex-col ">
                        <p className="font-Poppins font-semibold text-[14px] m-0 p-0">Juan Dela Cruz</p> 
                        <p className="font-Poppins text-[#575757] text-[10px] m-0">Veteran</p>
                        <div className="flex flex-row  items-center ">
                        <PaymentsOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
                        <p className="font-Poppins text-[#00CE15] text-[8px] justify-center items-center pl-1 pr-6">Paid</p>
                        <button onClick={() => {
    console.log("Clicked to remove item."); }}
  style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
  <DeleteOutlineOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
  <p className="font-Poppins text-[#FA5000] text-[9px] justify-center items-center pr-4">Remove</p>
</button>

                        </div>
                        
                        </div>
                        <div className="flex justify-start items-end pb-1 xsm:hidden">
                        <NorthEastSharpIcon style={{ color: '#515151', fontSize: '24px', paddingBottom:''}} />
                        </div>
                        
                      </div>

                      <div className="border-2 border-[#FA5000] rounded-[10px] h-[auto] w-1/2 lg:w-full xsm:w-full xl:w-full flex justify-start flex-row pl-4 pt-2 lg:pl-1">
                        <div  className="mr-4 flex justify-center items-center pb-2 xsm:hidden">
                        <img src={people1} alt="people1" height="40px" width="40px"/>
                        </div>

                        <div className="flex flex-col ">
                        <p className="font-Poppins font-semibold text-[14px] m-0 p-0">Juan Dela Cruz</p> 
                        <p className="font-Poppins text-[#575757] text-[10px] m-0">Veteran</p>
                        <div className="flex flex-row  items-center ">
                        <PaymentsOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
                        <p className="font-Poppins text-[#00CE15] text-[8px] justify-center items-center pl-1 pr-6">Paid</p>
                        <button onClick={() => {
    console.log("Clicked to remove item."); }}
  style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
  <DeleteOutlineOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
  <p className="font-Poppins text-[#FA5000] text-[9px] justify-center items-center pr-4">Remove</p>
</button>

                        </div>
                        </div>
                        <div className="flex justify-start items-end pb-1 xsm:hidden">
                        <NorthEastSharpIcon style={{ color: '#515151', fontSize: '24px', paddingBottom:''}} />
                        </div>
                      </div>
                      
                      </div>

                      <div className="flex flex-row gap-10 pt-2 lg:gap-4 xsm:gap-2">
                      <div className="border-2 border-[#FA5000] rounded-[10px] h-[auto] w-1/2 lg:w-full xsm:w-full xl:w-full flex justify-start flex-row pl-4 pt-2 lg:pl-1">
                        <div  className="mr-4 flex justify-center items-center pb-2 xsm:hidden">
                        <img src={people1} alt="people1" height="40px" width="40px"/>
                        </div>

                        <div className="flex flex-col ">
                        <p className="font-Poppins font-semibold text-[14px] m-0 p-0">Juan Dela Cruz</p> 
                        <p className="font-Poppins text-[#575757] text-[10px] m-0">Veteran</p>
                        <div className="flex flex-row  items-center ">
                        <PaymentsOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
                        <p className="font-Poppins text-[#00CE15] text-[8px] justify-center items-center pl-1 pr-6">Paid</p>
                        <button onClick={() => {
    console.log("Clicked to remove item."); }}
  style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
  <DeleteOutlineOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
  <p className="font-Poppins text-[#FA5000] text-[9px] justify-center items-center pr-4">Remove</p>
</button>

                        </div>
                        </div>
                        <div className="flex justify-start items-end pb-1 xsm:hidden">
                        <NorthEastSharpIcon style={{ color: '#515151', fontSize: '24px', paddingBottom:''}} />
                        </div>
                      </div>

                      <div className="border-2 border-[#FA5000] rounded-[10px] h-[auto] w-1/2 lg:w-full xsm:w-full xl:w-full flex justify-start flex-row pl-4 pt-2 lg:pl-1">
                        <div  className="mr-4 flex justify-center items-center pb-2 xsm:hidden">
                        <img src={people1} alt="people1" height="40px" width="40px"/>
                        </div>

                        <div className="flex flex-col ">
                        <p className="font-Poppins font-semibold text-[14px] m-0 p-0">Juan Dela Cruz</p> 
                        <p className="font-Poppins text-[#575757] text-[10px] m-0">Veteran</p>
                        <div className="flex flex-row  items-center ">
                        <PaymentsOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
                        <p className="font-Poppins text-[#00CE15] text-[8px] justify-center items-center pl-1 pr-6">Paid</p>
                        <button onClick={() => {
    console.log("Clicked to remove item."); }}
  style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
  <DeleteOutlineOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
  <p className="font-Poppins text-[#FA5000] text-[9px] justify-center items-center pr-4">Remove</p>
</button>

                        </div>
                        </div>
                        <div className="flex justify-start items-end pb-1 xsm:hidden">
                        <NorthEastSharpIcon style={{ color: '#515151', fontSize: '24px', paddingBottom:''}} />
                        </div>
                      </div>
                      </div>

                      <div className="flex flex-row gap-10 pt-2 lg:gap-4 xsm:gap-2">
                      <div className="border-2 border-[#FA5000] rounded-[10px] h-[auto] w-1/2 lg:w-full xsm:w-full xl:w-full flex justify-start flex-row pl-4 pt-2 lg:pl-1">
                        <div  className="mr-4 flex justify-center items-center pb-2 xsm:hidden">
                        <img src={people1} alt="people1" height="40px" width="40px"/>
                        </div>

                        <div className="flex flex-col ">
                        <p className="font-Poppins font-semibold text-[14px] m-0 p-0">Juan Dela Cruz</p> 
                        <p className="font-Poppins text-[#575757] text-[10px] m-0">Veteran</p>
                        <div className="flex flex-row  items-center ">
                        <PaymentsOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
                        <p className="font-Poppins text-[#00CE15] text-[8px] justify-center items-center pl-1 pr-6">Paid</p>
                        <button onClick={() => {
    console.log("Clicked to remove item."); }}
  style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
  <DeleteOutlineOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
  <p className="font-Poppins text-[#FA5000] text-[9px] justify-center items-center pr-4">Remove</p>
</button>

                        </div>
                        </div>
                        <div className="flex justify-start items-end pb-1 xsm:hidden">
                        <NorthEastSharpIcon style={{ color: '#515151', fontSize: '24px', paddingBottom:''}} />
                        </div>
                      </div>

                      <div className="border-2 border-[#FA5000] rounded-[10px] h-[auto] w-1/2 lg:w-full xsm:w-full xl:w-full flex justify-start flex-row pl-4 pt-2 lg:pl-1">
                        <div  className="mr-4 flex justify-center items-center pb-2 xsm:hidden">
                        <img src={people1} alt="people1" height="40px" width="40px"/>
                        </div>

                        <div className="flex flex-col ">
                        <p className="font-Poppins font-semibold text-[14px] m-0 p-0">Juan Dela Cruz</p> 
                        <p className="font-Poppins text-[#575757] text-[10px] m-0">Veteran</p>
                        <div className="flex flex-row  items-center ">
                        <PaymentsOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
                        <p className="font-Poppins text-[#00CE15] text-[8px] justify-center items-center pl-1 pr-6">Paid</p>
                        <button onClick={() => {
    console.log("Clicked to remove item."); }}
  style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
  <DeleteOutlineOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
  <p className="font-Poppins text-[#FA5000] text-[9px] justify-center items-center pr-4">Remove</p>
</button>

                        </div>
                        </div>
                        <div className="flex justify-start items-end pb-1 xsm:hidden">
                        <NorthEastSharpIcon style={{ color: '#515151', fontSize: '24px', paddingBottom:''}} />
                        </div>
                      </div>
                      </div>

                      <div className="flex flex-row gap-10 pt-2 lg:gap-4 xsm:gap-2">
                      <div className="border-2 border-[#FA5000] rounded-[10px] h-[auto] w-1/2 lg:w-full xsm:w-full xl:w-full flex justify-start flex-row pl-4 pt-2 lg:pl-1">
                        <div  className="mr-4 flex justify-center items-center pb-2 xsm:hidden">
                        <img src={people1} alt="people1" height="40px" width="40px"/>
                        </div>

                        <div className="flex flex-col ">
                        <p className="font-Poppins font-semibold text-[14px] m-0 p-0">Juan Dela Cruz</p> 
                        <p className="font-Poppins text-[#575757] text-[10px] m-0">Veteran</p>
                        <div className="flex flex-row  items-center ">
                        <PaymentsOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
                        <p className="font-Poppins text-[#00CE15] text-[8px] justify-center items-center pl-1 pr-6">Paid</p>
                        <button onClick={() => {
    console.log("Clicked to remove item."); }}
  style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
  <DeleteOutlineOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
  <p className="font-Poppins text-[#FA5000] text-[9px] justify-center items-center pr-4">Remove</p>
</button>

                        </div>
                        </div>
                        <div className="flex justify-start items-end pb-1 xsm:hidden">
                        <NorthEastSharpIcon style={{ color: '#515151', fontSize: '24px', paddingBottom:''}} />
                        </div>
                      </div>

                      <div className="border-2 border-[#FA5000] rounded-[10px] h-[auto] w-1/2 lg:w-full xsm:w-full xl:w-full flex justify-start flex-row pl-4 pt-2 lg:pl-1">
                        <div  className="mr-4 flex justify-center items-center pb-2 xsm:hidden">
                        <img src={people1} alt="people1" height="40px" width="40px"/>
                        </div>

                        <div className="flex flex-col ">
                        <p className="font-Poppins font-semibold text-[14px] m-0 p-0">Juan Dela Cruz</p> 
                        <p className="font-Poppins text-[#575757] text-[10px] m-0">Veteran</p>
                        <div className="flex flex-row  items-center ">
                        <PaymentsOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
                        <p className="font-Poppins text-[#00CE15] text-[8px] justify-center items-center pl-1 pr-6">Paid</p>
                        <button onClick={() => {
    console.log("Clicked to remove item."); }}
  style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
  <DeleteOutlineOutlinedIcon style={{ color: '#FA5000', fontSize: '20px' }} />
  <p className="font-Poppins text-[#FA5000] text-[9px] justify-center items-center pr-4">Remove</p>
</button>

                        </div>
                        </div>
                        <div className="flex justify-start items-end pb-1 xsm:hidden">
                        <NorthEastSharpIcon style={{ color: '#515151', fontSize: '24px', paddingBottom:''}} />
                        </div>
                      </div>
                      
                      </div>
                      
                      </div>

                      
                      </div>
                      </div>
                      <div className=" flex justify-end items-end lg:items-center lg:justify-center mr-8 gap-10 mt-10 h-[6%]  lg:w-[100%] xl:pb-8 ">
                      <div className="flex gap-8  h-full  lg:w-[100%] lg:gap-2 lg:p-2">
    <Link
      to="/organizer"
      className="bg-black flex items-center justify-center rounded-[10px] w-1/2  whitespace-nowrap px-16  py-2 text-[15px] font-Poppins text-white"
    >
      <p>Cancel</p>
    </Link>
    <Link
      to="/eventSuccess"
      className="bg-[#FA5000] flex items-center justify-center rounded-[10px] w-1/2 whitespace-nowrap px-16 py-2 text-[15px] font-Poppins text-white"
    >
      <p>Get Link</p>
    </Link>
  </div>
                </div>
                      </div>
                      
                      
                    </div>
                    

                </div>

                

                

      </div>


    </div>
  );
};

export default OrganizerMatches;
