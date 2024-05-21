import React from "react";
import {
  emojiCool,
  emojiSad,
  emojiShock,
  emojiHeartEyes,
  Highlights1,
  Highlights2,
  emojiGem,
  userImg,
  people1,
  people2,
  people3,
  people4,
  people5,
  people6,
  people7,
  people8,
  people9,
} from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faLocation,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import RefreshIcon from "@mui/icons-material/Refresh";
import DashBoardCard from "../components/DashBoardCard";
import { useNavigate } from "react-router";
import UserNav from "../components/UserNav";
import HamburgerMenu from "../components/HamburgerMenu";
import { useState } from "react";

const UserOverview = () => {
  const navigate = useNavigate();
  const userFullName = JSON.parse(localStorage.getItem("userFullName"));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
    console.log(isOpen)
  };

  const toggleOff = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex items-center h-screen 1110:flex-col">
      {/* Left Side */}
      <div className="w-auto 1110:w-full 1110:shadow-xl">
        <UserNav isOpen={isOpen} toggleOff={toggleOff}/>
      </div>

      <div className="hidden w-full 1110:flex 1110:sticky 1110:top-0">
        <HamburgerMenu toggleMenu={toggleMenu} />
      </div>

      {/* Right Side */}
      <div className="flex justify-center gap-5 w-full h-screen 1110:flex-col 1110:justify-start 1110:gap-0 px-5 font-Inter">
        {/* Left Side of the Overview Dashboard */}
        <div className="flex flex-col flex-shrink py-5 gap-5 w-full sm:h-fit 1110:flex-row 950px:flex-col">
          {/* Upper Side */}
          <div className="flex justify-around gap-3 w-full h-full 1110:flex-col 1110:h-[65 0px]">
            <div className="flex flex-col flex-shrink-0 justify-between 1110:justify-normal 1110:flex-row gap-3 rounded-xl w-auto h-auto">
              {/* Gem Box */}
              <div className="flex flex-col justify-between flex-shrink w-[160px] h-full 1110:w-full p-5 bg-black rounded-2xl">
                <div className="w-full">
                  <p className="font-semibold text-white text-xl">New</p>
                  <p className="text-lightgray">Rank</p>
                </div>
                <div className="w-full flex justify-end ">
                  <img src={emojiGem} alt="" className={"games w-[75px] h-[75px]"} />
                </div>
              </div>

              {/* Total Play */}
              <div className="flex flex-col gap-5 h-full 1110:h-auto 1110:w-full rounded-xl p-5 text-white font-semibold bg-orange">
                <p className="text-xl">Total Plays</p>
                <p className="text-[64px] 1110:text-3xl">0</p>
              </div>
            </div>

            {/* Previous Matches */}
            <div className="w-full h-auto overflow-hidden 1110:h-full">
              <div className="flex flex-col justify-around w-full h-full p-5 gap-3 bg-black rounded-2xl 1110:gap-5 1110:justify-start">
                <p className="font-semibold text-white text-xl">Previous Matches</p>
                
                <div className="flex justify-evenly w-full text-white text-base font-Inter">
                  <button className="bg-orange rounded-[20px] w-[120px] max-w-[120px] py-2 font-bold">This week</button>
                  <button className="rounded-[20px] w-[120px] max-w-[120px] py-2">This Month</button>
                  <button className="rounded-[20px] w-[120px] max-w-[120px] py-2">Later</button>
                </div>

                {/* Recent Matches */}
                <div className="flex flex-col flex-shrink-0 gap-5 max-h-[300px] h-full overflow-y-hidden hover:overflow-y-auto 1110:max-h-[300px] sm:h-[300px]">
                  <div className="flex flex-col gap-2 px-5 py-2 bg-[#D7D7D7] rounded-xl">
                    <p className="text-base text-orange font-semibold">Game Event</p>
                    <p className="text-[10px] text-[#717171]">Saturday, March 23, 2024</p>
                  </div>

                  <div className="flex flex-col gap-2 px-5 py-2 bg-[#D7D7D7] rounded-xl">
                    <p className="text-base text-orange font-semibold">Game Event</p>
                    <p className="text-[10px] text-[#717171]">Saturday, March 23, 2024</p>
                  </div>

                  <div className="flex flex-col gap-2 px-5 py-2 bg-[#D7D7D7] rounded-xl">
                    <p className="text-base text-orange font-semibold">Game Event</p>
                    <p className="text-[10px] text-[#717171]">Saturday, March 23, 2024</p>
                  </div>

                  <div className="flex flex-col gap-2 px-5 py-2 bg-[#D7D7D7] rounded-xl">
                    <p className="text-base text-orange font-semibold">Game Event</p>
                    <p className="text-[10px] text-[#717171]">Saturday, March 23, 2024</p>
                  </div>

                  <div className="flex flex-col gap-2 px-5 py-2 bg-[#D7D7D7] rounded-xl">
                    <p className="text-base text-orange font-semibold">Game Event</p>
                    <p className="text-[10px] text-[#717171]">Saturday, March 23, 2024</p>
                  </div>

                  <div className="flex flex-col gap-2 px-5 py-2 bg-[#D7D7D7] rounded-xl">
                    <p className="text-base text-orange font-semibold">Game Event</p>
                    <p className="text-[10px] text-[#717171]">Saturday, March 23, 2024</p>
                  </div>

                  <div className="flex flex-col gap-2 px-5 py-2 bg-[#D7D7D7] rounded-xl">
                    <p className="text-base text-orange font-semibold">Game Event</p>
                    <p className="text-[10px] text-[#717171]">Saturday, March 23, 2024</p>
                  </div>

                  <div className="flex flex-col gap-2 px-5 py-2 bg-[#D7D7D7] rounded-xl">
                    <p className="text-base text-orange font-semibold">Game Event</p>
                    <p className="text-[10px] text-[#717171]">Saturday, March 23, 2024</p>
                  </div>

                  <div className="flex flex-col gap-2 px-5 py-2 bg-[#D7D7D7] rounded-xl">
                    <p className="text-base text-orange font-semibold">Game Event</p>
                    <p className="text-[10px] text-[#717171]">Saturday, March 23, 2024</p>
                  </div>
                  
                </div>
              </div>
            </div>
            
          </div>

          {/* Lower Side */}
          <div className="w-full h-full flex flex-col 1110:w-auto 1110:justify-normal gap-5 sm:h-[400px]">
            <div className="h-auto flex items-center text-center">
              <p className="text-lg 1110:text-base font-semibold w-full h-fit px-5">Image Highlights</p>              
            </div>
            
            {/* Image Highlights */}
            <div className="flex items-center gap-5 max-w-[750px] w-full overflow-x-hidden hover:overflow-x-auto h-full flex-nowrap 1110:flex-col 1110:max-h-[600px] 1110:w-[500px] 950px:flex-row 950px:max-w-full 950px:w-full">
              <div className="h-full flex-none">
                <img className="h-full w-[250px] 1110:w-full" src={Highlights1} alt="" />
              </div>
              <div className="h-full flex-none">
                <img className="h-full w-[250px] 1110:w-full" src={Highlights2} alt="" />
              </div>
              <div className="h-full flex-none">
                <img className="h-full w-[250px] 1110:w-full" src={Highlights1} alt="" />
              </div>
              <div className="h-full flex-none">
                <img className="h-full w-[250px] 1110:w-full" src={Highlights2} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side of the Overview Dashboard */}
        <div className="flex flex-col flex-shrink justify-center items-center py-5 gap-5 w-full h-full sm:h-fit">
          {/* Upper Side */}
          <div className="flex justify-center items-center w-full h-fit">
            {/* Player Information */}
            <div className="flex flex-col justify-evenly bg-black text-white w-full h-fit 2xl:gap-0 rounded-xl gap-5 sm:p-2">
              {/* Head Label */}
              <div className="h-fit py-5 px-10 font-semibold 2xl:py-2">
                <p className="text-2xl 2xl:text-xl 2xl:text-center">Player Information</p>
              </div>

              {/* User Info */}
              <div className="flex h-1/3 items-center py-5 px-10 2xl:py-2 2xl:flex-col 2xl:gap-2">
                <div className="flex items-center gap-5 w-full max-h-[75px]">
                  <FontAwesomeIcon className="max-w-[50px] min-h-[20px] " icon={faUser} />
                  <div className="flex flex-col w-full">
                    <p className="text-sm text-lightgray">Name</p>
                    <p className="text-xl 2xl:text-base">Juan Dela Cruz</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 w-full max-h-[75px]">
                  <FontAwesomeIcon className="max-w-[50px] min-h-[20px] " icon={faLocationDot} />
                  <div className="flex flex-col w-full">
                    <p className="text-sm text-lightgray">Location</p>
                    <p className="text-xl 2xl:text-base">Pasig City, Philippines</p>
                  </div>
                </div>
              </div>

              {/* Team Composition */}
              <div className="flex flex-col items-center py-5 px-10 gap-5 w-full h-full 2xl:py-5 2xl:gap-2">
                <div className="w-full">
                  <p className="text-2xl font-semibold">Team</p>
                </div>
                <div className="flex flex-wrap justify-around w-full">
                  <img
                    src={people1}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[60px] w-[60px] object-cover"
                  />
                  <img
                    src={people2}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[60px] w-[60px] object-cover"
                  />
                  <img
                    src={people3}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[60px] w-[60px] object-cover"
                  />
                  <img
                    src={people4}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[60px] w-[60px] object-cover"
                  />
                  <img
                    src={people5}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[60px] w-[60px] object-cover"
                  />
                  <img
                    src={people6}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[60px] w-[60px] object-cover"
                  />
                  <img
                    src={people7}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[60px] w-[60px] object-cover"
                  />
                  <img
                    src={people8}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[60px] w-[60px] object-cover"
                  />
                  <img
                    src={people9}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[60px] w-[60px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lower Part */}
          <div className="flex flex-col justify-center gap-5 items-center w-full h-full text-white sm:h-fit">
            <div className="flex justify-center gap-5 items-center w-full h-full sm:flex-col">
              {/* Total Points */}
              <div className="flex flex-shrink justify-center items-center  w-full h-full ">
                {/* Orange Box - Total Points */}
                <div className="flex flex-col justify-between w-full h-full p-5 rounded-xl bg-orange">
                  <div className="flex flex-col gap-5">
                    <div className="flex  justify-between items-center w-full">
                      <p className="text-xl font-semibold">Total Points</p>
                      <RefreshIcon
                        fontSize="small"
                        className="bg-white text-black rounded-full"
                      />
                    </div>
                    <div className="flex justify-between w-full">
                      <p className="text-[64px] 2xl:text-[32px] font-semibold">0<span className="text-[12px]"> PT</span></p>
                      <img src={emojiCool} alt="Cool Emoji" />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex h-fit">
                    <p className="w-[150px] text-[8px] font-light">The organizer who manipulated the
                      situation placed and updated points.</p>
                  </div>
                </div>
              </div>

              {/* Total Win */}
              <div className="flex flex-shrink justify-center items-center  w-full h-full ">
                {/* Orange Box - Total Win */}
                <div className="flex flex-col justify-between w-full h-full p-5 rounded-xl bg-black">
                  <div className="flex flex-col gap-5">
                    <div className="flex  justify-between items-center w-full">
                      <p className="text-xl font-semibold">Total Win</p>
                      <RefreshIcon
                        fontSize="small"
                        className="bg-white text-black rounded-full"
                      />
                    </div>
                    <div className="flex justify-between w-full">
                      <p className="text-[64px] 2xl:text-[32px] font-semibold">0</p>
                      <img src={emojiHeartEyes} alt="Heart Eyes Emoji" />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex h-fit">
                    <p className="w-[150px] text-[8px] font-light">The organizer who manipulated the
                      situation placed and updated points.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-5 items-center w-full h-full sm:flex-col-reverse">
              {/* Total Losses */}
              <div className="flex flex-shrink justify-center items-center  w-full h-full ">
                {/* Orange Box - Total Losses */}
                <div className="flex flex-col justify-between w-full h-full p-5 rounded-xl bg-black">
                  <div className="flex flex-col gap-5">
                    <div className="flex  justify-between items-center w-full">
                      <p className="text-xl font-semibold">Total Loss</p>
                      <RefreshIcon
                        fontSize="small"
                        className="bg-white text-black rounded-full"
                      />
                    </div>
                    <div className="flex justify-between w-full">
                      <p className="text-[64px] 2xl:text-[32px] font-semibold">0</p>
                      <img src={emojiSad} alt="Sad Emoji" />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex h-fit">
                    <p className="w-[150px] text-[8px] font-light">The organizer who manipulated the
                      situation placed and updated points.</p>
                  </div>
                </div>
              </div>

              {/* Total Awards */}
              <div className="flex flex-shrink justify-center items-center  w-full h-full ">
                {/* Orange Box - Total Award */}
                <div className="flex flex-col justify-between w-full h-full p-5 rounded-xl bg-orange">
                  <div className="flex flex-col gap-5">
                    <div className="flex  justify-between items-center w-full">
                      <p className="text-xl font-semibold">Total Awards</p>
                      <RefreshIcon
                        fontSize="small"
                        className="bg-white text-black rounded-full"
                      />
                    </div>
                    <div className="flex justify-between w-full">
                      <p className="text-[64px] 2xl:text-[32px] font-semibold">0</p>
                      <img src={emojiShock} alt="Shock Emoji" />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex h-fit">
                    <p className="w-[150px] text-[8px] font-light">The organizer who manipulated the
                      situation placed and updated points.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOverview;
