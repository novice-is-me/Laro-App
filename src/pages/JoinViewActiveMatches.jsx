import React, { useState } from "react";
import activematchjoin from "../assets/Active Match/activematchjoin.jpg";
import PlayersCard from "../card/PlayersCard";
import RefereeCard from "../card/RefereeCard";
import { eagleIcon } from "../assets";
import { PlayersData, RefereesData } from "../constant/ActiveMatchData";
import { KeyboardArrowLeft, StarBorder, Star } from "@mui/icons-material/";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const JoinViewActiveMatches = ({ setMain }) => {
  const [activeGames, setActiveGames] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleJoinGame = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.laro.com.ph/api/v1/event/find-active-games",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setActiveGames(response.data);
        console.log(JSON.stringify(response.data));
        navigate("/payment");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="font-Poppins">
      <Link
        to="/matches"
        className="font-bold flex px-20"
        onClick={() => setMain("default")}
      >
        <KeyboardArrowLeft />
        <p>Back</p>
      </Link>
      <div className="bg-bgColor w-full box-border flex font-Poppins px-4 gap-6 py-4 lg:flex-col lg:px-20 xsm:px-4">
        <div className="flex-[40%] sm:pl-0 sm:pr-0 pl-20 lg:pl-0">
          {/* left */}
          <div className="w-full">
            <div className="max-w-full border-orange border-[1px] rounded-lg bg-[#ffffff] flex items-center  mb-3 xsm:justify-center">
              <div className="font w-full px-8 py-2  xl:text-[10px] xl:ml-3 ">
                <h1 className="font font-bold lg:text-[17px]">
                  Maria Santiago
                </h1>
                <div className="flex justify-between w-full">
                  <p className="text-gray text-sm">Organizer</p>
                  <a href="#" className="underline">
                    Reviews
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-full border-orange border-[1px] rounded-lg bg-[#ffffff] flex items-center  mb-3 xsm:justify-center">
              <div className="font w-full px-8 py-2  xl:text-[10px] xl:ml-3 ">
                <div className="flex">
                  <h1 className="font font-bold lg:text-[17px] mr-2">
                    Mandaluyong Eagle
                  </h1>
                  <img src={eagleIcon} alt="Eagle Icon" className="w-6 h-6" />
                </div>
                <p className="text-gray text-sm">Community name</p>
              </div>
            </div>

            <div className="max-w-full border-orange border-[1px] rounded-lg bg-[#ffffff] flex items-center  mb-3 xsm:justify-center">
              <div className="font w-full px-8 py-2  xl:text-[10px] xl:ml-3 ">
                <h1 className="font font-bold lg:text-[17px]">
                  Mandaluyong City Court
                </h1>
                <p className="text-gray text-sm">Court Name and Address</p>
              </div>
            </div>

            <div className="max-w-full border-orange border-[1px] rounded-lg bg-[#ffffff] flex items-center  mb-3 xsm:justify-center">
              <div className="font w-full px-8 py-2 flex justify-between  xl:text-[10px] xl:ml-3 ">
                <div>
                  <h1 className="font font-bold lg:text-[17px]">4.0 Ratings</h1>
                  <p className="text-gray text-sm">Reviews</p>
                </div>

                <div>
                  <Star className="text-[#ffc700]" />
                  <Star className="text-[#ffc700]" />
                  <StarBorder />
                  <StarBorder />
                  <StarBorder />
                </div>
              </div>
            </div>

            <img
              src={activematchjoin}
              alt=""
              className="w-full h-[300px] object-cover rounded-lg mx-auto"
            />
          </div>
        </div>
        <div className="flex-[60%] sm:p-0 lg:pr-0">
          {/* right */}
          <div className="flex w-full justify-around items-center  mb-2 md:flex-col">
            <div className="w-[300px]  bg-[#ffffff] rounded-lg border-orange border-[1px] pl-4 py-3 lg:mx-auto mb-3 xsm:w-full">
              <h1 className="font-bold text-[17px]">March 16, 2024</h1>
              <p className=" text-gray text-sm">Organizer</p>
            </div>

            <div className="w-[300px] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 lg:mx-auto mb-3 xsm:w-full">
              <h1 className="font-bold text-[17px]">8:00PM to 00:00PM</h1>
              <p className=" text-gray text-sm">Time</p>
            </div>
          </div>

          <div className="flex w-full justify-around items-center  mb-2 md:flex-col">
            <div className="w-[300px] bg-[#ffffff] rounded-lg border-orange border-[1px] pl-4 py-3 lg:mx-auto mb-3 xsm:w-full">
              <h1 className="font-bold text-[17px]">Hardcore</h1>
              <p className=" text-gray text-sm">Difficulty</p>
            </div>

            <div className="w-[300px] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 lg:mx-auto mb-3 xsm:w-full">
              <h1 className="font-bold text-[17px]">₱ 200.00</h1>
              <p className=" text-gray text-sm">Fee per head</p>
            </div>
          </div>

          {/* <p className='mb-2 font-bold pl-4 md:pl-0 xsm:text-center'>Court Details</p> */}

          {/* <div className='mx-auto w-full flex justify-between mb-2 md:flex-col md:items-center'>
                        <div className='w-[350px] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 mb-3 text-sm xsm:w-full xsm:mx-auto'>
                            <div className='flex gap-1 mb-2 items-center'
                            >
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.2077 9.54199H11.4577V6.66699H17.2077C17.716 6.66699 18.2035 6.46506 18.563 6.10561C18.9224 5.74617 19.1243 5.25866 19.1243 4.75033V2.83366C19.1243 2.32533 18.9224 1.83782 18.563 1.47837C18.2035 1.11893 17.716 0.916992 17.2077 0.916992H3.79102L0.916016 3.79199L3.79102 6.66699H9.54102V9.54199H3.79102C3.28268 9.54199 2.79517 9.74393 2.43573 10.1034C2.07628 10.4628 1.87435 10.9503 1.87435 11.4587V13.3753C1.87435 13.8837 2.07628 14.3712 2.43573 14.7306C2.79517 15.0901 3.28268 15.292 3.79102 15.292H9.54102V20.0837H11.4577V15.292H17.2077L20.0827 12.417L17.2077 9.54199Z" fill="#F24E1E" />
                                </svg>
                                <p className='font-bold'>Parking Slot</p>
                            </div>
                            <div className='flex mb-2 items-center '>
                                <svg width="19" height="19" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.26653 18.6521H2.30378C2.95403 18.6521 3.46366 18.1511 3.46366 17.5009V16.0245C5.41516 16.1475 8.23628 16.2353 10.4949 16.2353C12.7625 16.2353 15.5837 16.1475 17.5352 16.0245V17.5009C17.5352 18.1511 18.0362 18.6521 18.695 18.6521H19.7323C20.3915 18.6521 20.9012 18.1511 20.9012 17.5009V12.4298C20.9012 10.953 20.6023 10.1179 19.7852 9.06338L19.0468 8.10526C18.7217 6.52351 18.1415 4.86226 17.834 4.21201C17.3679 3.21863 16.454 2.62951 15.2852 2.47163C14.6964 2.40113 12.7715 2.34863 10.4949 2.34863C8.22766 2.34863 6.30241 2.41013 5.71366 2.47163C4.54478 2.61226 3.63091 3.21863 3.16516 4.21163C2.85766 4.86226 2.27716 6.52351 1.95203 8.10526L1.21366 9.06338C0.396156 10.1183 0.0976562 10.953 0.0976562 12.4298V17.5009C0.0976562 18.1511 0.607656 18.6521 1.26653 18.6521ZM3.72766 7.37588C3.93841 6.40913 4.36028 5.15213 4.65016 4.64213C4.88753 4.22963 5.14253 4.05338 5.61728 3.99226C6.28478 3.89551 7.77916 3.84263 10.4949 3.84263C13.2197 3.84263 14.7137 3.87788 15.3819 3.99226C15.8477 4.06238 16.1023 4.22926 16.3487 4.64251C16.6475 5.14351 17.0428 6.40876 17.2712 7.37588C17.3507 7.70101 17.2187 7.82401 16.8759 7.79776C15.4172 7.71001 13.6768 7.61326 10.4949 7.61326C7.32241 7.61326 5.58203 7.71001 4.12291 7.79776C3.78016 7.82401 3.65716 7.70101 3.72728 7.37588M4.08728 13.959C3.25253 13.959 2.62853 13.326 2.62853 12.4999C2.62853 11.6648 3.25253 11.0411 4.08728 11.0411C4.92241 11.0411 5.54641 11.6648 5.54641 12.4999C5.54641 13.326 4.92241 13.9586 4.08766 13.9586M16.9112 13.9586C16.076 13.9586 15.4524 13.3256 15.4524 12.4995C15.4524 11.6644 16.076 11.0408 16.9112 11.0408C17.7373 11.0408 18.3699 11.6644 18.3699 12.4995C18.3699 13.3256 17.7373 13.9586 16.9112 13.9586ZM8.16616 13.554C7.55078 13.554 7.11991 13.1145 7.11991 12.4991C7.11991 11.8751 7.55078 11.4446 8.16616 11.4446H12.833C13.448 11.4446 13.8789 11.8751 13.8789 12.4991C13.8789 13.1141 13.448 13.554 12.8327 13.554H8.16616Z" fill="#F24E1E" />
                                </svg>
                                <p className='text-gray ml-5'>20 Cars</p>
                            </div>

                            <div className='flex mb-2 items-center'>
                                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.36506 10L11.2001 8H14.6921L13.6001 5H11.0001V3H15.0001L16.0921 6H20.0001V9H17.1841L18.6401 13.002C19.7448 13.0371 20.798 13.4776 21.5988 14.2395C22.3996 15.0014 22.892 16.0313 22.9821 17.133C23.0722 18.2346 22.7537 19.3309 22.0873 20.2127C21.4209 21.0946 20.4533 21.7003 19.3689 21.9145C18.2845 22.1286 17.1593 21.9362 16.2077 21.3738C15.2561 20.8115 14.5448 19.9186 14.2093 18.8654C13.8739 17.8122 13.9378 16.6724 14.3888 15.6633C14.8399 14.6542 15.6466 13.8464 16.6551 13.394L15.4191 10H14.4721L12.8901 15.87L9.96507 16.939C10.0706 17.7812 9.93583 18.6362 9.57623 19.4051C9.21663 20.174 8.64689 20.8255 7.93279 21.2844C7.2187 21.7433 6.38937 21.9908 5.54058 21.9985C4.69178 22.0061 3.85813 21.7736 3.13587 21.3276C2.41362 20.8817 1.83222 20.2405 1.45881 19.4783C1.0854 18.716 0.93521 17.8636 1.02557 17.0196C1.11594 16.1756 1.44318 15.3744 1.9695 14.7084C2.49583 14.0424 3.19977 13.5389 4.00006 13.256V12H2.00006V10H8.36506ZM5.50006 20C6.16311 20 6.79899 19.7366 7.26783 19.2678C7.73667 18.7989 8.00006 18.163 8.00006 17.5C8.00006 16.837 7.73667 16.2011 7.26783 15.7322C6.79899 15.2634 6.16311 15 5.50006 15C4.83702 15 4.20114 15.2634 3.7323 15.7322C3.26346 16.2011 3.00006 16.837 3.00006 17.5C3.00006 18.163 3.26346 18.7989 3.7323 19.2678C4.20114 19.7366 4.83702 20 5.50006 20ZM18.5001 20C19.1631 20 19.799 19.7366 20.2678 19.2678C20.7367 18.7989 21.0001 18.163 21.0001 17.5C21.0001 16.837 20.7367 16.2011 20.2678 15.7322C19.799 15.2634 19.1631 15 18.5001 15C17.837 15 17.2011 15.2634 16.7323 15.7322C16.2635 16.2011 16.0001 16.837 16.0001 17.5C16.0001 18.163 16.2635 18.7989 16.7323 19.2678C17.2011 19.7366 17.837 20 18.5001 20Z" fill="#F24E1E" />
                                </svg>
                                <p className='text-gray ml-5'>20 Motorcycles</p>
                            </div>
                        </div>

                        <div className='w-[350px] bg-[#ffffff] rounded-lg border-orange border-[1px] px-4 py-3 mb-3 text-sm xsm:w-full xsm:mx-auto'>
                            <div className='flex gap-1 mb-2 items-center'
                            >
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_156_231)">
                                        <path d="M2.96495 15.1231C3.3695 15.1231 3.60073 14.8919 3.60073 14.4874V9.66434C3.60073 9.25978 3.3695 9.02855 2.96495 9.02855H0V15.1236L2.96495 15.1231ZM8.63855 12.0674C8.63855 13.3891 9.57991 14.5202 10.8104 14.8176V9.34234C10.191 9.47927 9.63744 9.82463 9.24213 10.3207C8.84682 10.8168 8.63376 11.4331 8.63855 12.0674ZM12.1399 14.818C13.3786 14.5206 14.2953 13.3895 14.3118 12.0678C14.32 10.7466 13.3872 9.6401 12.1399 9.34275V14.818ZM20.0351 9.02896C19.6305 9.02896 19.3993 9.26019 19.3993 9.66475V14.4878C19.3993 14.8923 19.6305 15.1236 20.0351 15.1236H23V9.02855L20.0351 9.02896ZM23 16.453H20.01C18.7881 16.453 18.0698 15.7343 18.0698 14.512V9.63969C18.0698 8.41741 18.7881 7.69907 20.0104 7.69907H23V6.84807C23 5.14689 22.133 4.28809 20.4068 4.28809H12.1399V8.09541C14.0723 8.40919 15.5012 10.0525 15.5258 12.0761C15.5505 14.1157 14.0805 15.7593 12.1399 16.0731V19.8722H20.4068C22.133 19.8722 23 19.013 23 17.3118V16.453ZM0 16.453V17.3114C0 19.013 0.875232 19.8718 2.59325 19.8718H10.81V16.0727C8.87759 15.7676 7.42407 14.1239 7.42407 12.0761C7.42407 10.0442 8.87759 8.37593 10.81 8.07898V4.28809H2.59325C0.874821 4.28809 0 5.13868 0 6.84807V7.69907H2.98959C4.21187 7.69907 4.93021 8.41741 4.93021 9.63969V14.512C4.93021 15.7343 4.21146 16.453 2.98959 16.453H0Z" fill="#F24E1E" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_156_231">
                                            <rect width="23" height="23" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className='font-bold'>Court Details</p>
                            </div>
                            <div className='flex mb-2 items-center'>
                                <svg width="19" height="19" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5007 14.4997C13.1715 14.4997 12.0336 14.0264 11.0871 13.0799C10.1406 12.1334 9.66732 10.9955 9.66732 9.66634C9.66732 8.33717 10.1406 7.19933 11.0871 6.2528C12.0336 5.30627 13.1715 4.83301 14.5007 4.83301C15.8298 4.83301 16.9677 5.30627 17.9142 6.2528C18.8607 7.19933 19.334 8.33717 19.334 9.66634C19.334 10.9955 18.8607 12.1334 17.9142 13.0799C16.9677 14.0264 15.8298 14.4997 14.5007 14.4997ZM4.83398 24.1663V20.783C4.83398 20.0983 5.0104 19.4691 5.36323 18.8956C5.71607 18.322 6.1841 17.8838 6.76732 17.5809C8.01593 16.9566 9.28468 16.4886 10.5736 16.1768C11.8625 15.8651 13.1715 15.7088 14.5007 15.708C15.8298 15.708 17.1388 15.8643 18.4277 16.1768C19.7166 16.4894 20.9854 16.9574 22.234 17.5809C22.818 17.883 23.2864 18.3212 23.6393 18.8956C23.9921 19.47 24.1681 20.0991 24.1673 20.783V24.1663H4.83398Z" fill="#F24E1E" />
                                </svg>

                                <p className='text-gray ml-5'>250 Seats</p>
                            </div>

                            <div className='flex mb-2 items-center'>
                                <svg width="19" height="19" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5007 15.7087V10.8753M25.3756 7.25033L22.959 4.83366M12.084 2.41699H16.9173M14.5007 25.3753C11.9369 25.3753 9.47814 24.3569 7.66529 22.544C5.85243 20.7312 4.83398 18.2724 4.83398 15.7087C4.83398 13.1449 5.85243 10.6861 7.66529 8.87329C9.47814 7.06044 11.9369 6.04199 14.5007 6.04199C17.0644 6.04199 19.5232 7.06044 21.336 8.87329C23.1489 10.6861 24.1673 13.1449 24.1673 15.7087C24.1673 18.2724 23.1489 20.7312 21.336 22.544C19.5232 24.3569 17.0644 25.3753 14.5007 25.3753Z" stroke="#F24E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className='text-gray ml-5'>Timer and Buzzer</p>
                            </div>
                        </div>
                    </div> */}

          <div className="border-orange bg-[#ffffff] border mb-3 mx-auto px-5 py-2 rounded-lg min-h-[200px] w-[89%]">
            <div>
              <h1 className="text-xl font-bold">Additional Details</h1>
              <p className="mt-2">
                Parking spaces available. Free Refilable watee, just bring your
                own bottle. Have referees.
              </p>
            </div>
          </div>

          <p className="mb-2 font-bold pl-4 md:pl-0 xsm:text-center">Players</p>
          <div className="flex gap-1 lg:flex-col">
            <div className="w-[66%]  flex flex-row flex-wrap gap-x-2 items-center justify-center lg:w-[100%] lg:justify-center">
              {PlayersData.map((player) => (
                <div className="mb-2">
                  <PlayersCard key={player.id} player={player} />
                </div>
              ))}
            </div>
            <div className="w-[33%]  flex justify-between flex-col lg:w-[100%]">
              <div>
                {RefereesData.map((referee) => (
                  <div className="mb-3">
                    <RefereeCard key={referee.id} referee={referee} />
                  </div>
                ))}
              </div>
              <div className="mx-auto">
                <button
                  className="w-[225px] min-h-[40px] text-[10px] text-[#ffffff] bg-orange rounded-lg flex justify-center items-center mb-2"
                  onClick={handleJoinGame}
                >
                  Join Pick-up Game
                </button>

                <div className="w-[225px] min-h-[40px] text-[10px] text-gray bg-[#ffffff] border-[1px] border-orange rounded-lg flex justify-center items-center mb-2 ">
                  Get Shareable Link
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinViewActiveMatches;
