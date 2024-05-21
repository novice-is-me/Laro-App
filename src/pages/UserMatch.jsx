import React, {useState} from "react";
import {
  emojiCool,
  emojiSad,
  emojiShock,
  emojiHeartEyes,
  emojiGem,
  userImg,
  Highlights1,
  Highlights2,
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

const UserMatch = () => {
  const navigate = useNavigate();
  const userFullName = JSON.parse(localStorage.getItem("userFullName"));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const profileImage = userInfo ? userInfo.profile_image : null;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
    console.log(isOpen)
  };

  const toggleOff = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex items-center h-screen 1110:flex-col py-5">
      {/* for profile */}
      <div className="w-auto 1110:w-full 1110:shadow-xl">
        <UserNav isOpen={isOpen} toggleOff={toggleOff}/>
      </div>

      <div className="hidden w-full 1110:flex 1110:sticky 1110:top-0">
        <HamburgerMenu toggleMenu={toggleMenu} />
      </div>

      {/* Main Body of Matches */}
      <div className="flex justify-center items-center gap-5 px-5 w-full h-full 1110:flex-col 1110:justify-normal 1110:py-5">
        {/* Previous Matches */}
        <div className="w-full h-full">
          <div className="flex flex-col gap-[2rem] w-full h-full p-5 bg-black rounded-2xl 1110:gap-5 1110:justify-start">
            <p className="font-semibold text-white text-xl">Previous Matches</p>
            
            <div className="flex justify-evenly w-full text-white text-base font-Inter">
              <button className="bg-orange rounded-[20px] w-[120px] max-w-[120px] py-2 font-bold">This week</button>
              <button className="rounded-[20px] w-[120px] max-w-[120px] py-2">This Month</button>
              <button className="rounded-[20px] w-[120px] max-w-[120px] py-2">Later</button>
            </div>

            {/* Recent Matches */}
            <div className="flex flex-col flex-shrink-0 gap-5 max-h-[750px] h-full overflow-y-hidden hover:overflow-y-auto 1110:max-h-[600px] 950px:max-h-[300px] sm:h-[400px]">
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
        {/* Right Side */}
        <div className="flex flex-col items-center justify-between w-[533px] h-full 1110:w-full 1110:gap-5">
          {/* Player Information */}
          <div className="flex justify-center items-center w-[533px] h-fit 1110:w-full">
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
                    <p className="text-xl 2xl:text-base">{userInfo.first_name} {userInfo.last_name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 w-full max-h-[75px]">
                  <FontAwesomeIcon className="max-w-[50px] min-h-[20px] " icon={faLocationDot} />
                  <div className="flex flex-col w-full">
                    <p className="text-sm text-lightgray">Location</p>
                    <p className="text-xl 2xl:text-base">{userInfo.address}</p>
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
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[40px] w-[40px] object-cover"
                  />
                  <img
                    src={people2}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[40px] w-[40px] object-cover"
                  />
                  <img
                    src={people3}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[40px] w-[40px] object-cover"
                  />
                  <img
                    src={people4}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[40px] w-[40px] object-cover"
                  />
                  <img
                    src={people5}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[40px] w-[40px] object-cover"
                  />
                  <img
                    src={people6}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[40px] w-[40px] object-cover"
                  />
                  <img
                    src={people7}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[40px] w-[40px] object-cover"
                  />
                  <img
                    src={people8}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[40px] w-[40px] object-cover"
                  />
                  <img
                    src={people9}
                    alt=""
                    className="rounded-full 2xl:h-[40px] 2xl:w-[40px] h-[40px] w-[40px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-col w-[533px] h-auto gap-5 1110:w-full 1110:pb-5">
            <p className="text-base font-semibold font-Inter">Image Highlights</p>

            <div className="flex flex-wrap justify-between gap-3 w-full h-full max-h-[550px] overflow-hidden hover:overflow-y-auto 1110:justify-center 1110:gap-5">
              <div className="w-[250px] h-[233px] rounded-xl overflow-hidden 1110:w-[200px]">
                <img className="w-full h-full object-cover object-center" src={Highlights1} alt="" />
              </div>
              <div className="w-[250px] h-[233px] rounded-xl overflow-hidden 1110:w-[200px]">
                <img className="w-full h-full object-cover object-center" src={Highlights2} alt="" />
              </div>
              <div className="w-[250px] h-[233px] rounded-xl overflow-hidden 1110:w-[200px]">
                <img className="w-full h-full object-cover object-center" src={Highlights2} alt="" />
              </div>
              <div className="w-[250px] h-[233px] rounded-xl overflow-hidden 1110:w-[200px]">
                <img className="w-full h-full object-cover object-center" src={Highlights1} alt="" />
              </div>
              <div className="w-[250px] h-[233px] rounded-xl overflow-hidden 1110:w-[200px]">
                <img className="w-full h-full object-cover object-center" src={Highlights1} alt="" />
              </div>
              <div className="w-[250px] h-[233px] rounded-xl overflow-hidden 1110:w-[200px]">
                <img className="w-full h-full object-cover object-center" src={Highlights2} alt="" />
              </div>
              <div className="w-[250px] h-[233px] rounded-xl overflow-hidden 1110:w-[200px]">
                <img className="w-full h-full object-cover object-center" src={Highlights2} alt="" />
              </div>
              <div className="w-[250px] h-[233px] rounded-xl overflow-hidden 1110:w-[200px]">
                <img className="w-full h-full object-cover object-center" src={Highlights1} alt="" />
              </div>
              <div className="w-[250px] h-[233px] rounded-xl overflow-hidden 1110:w-[200px]">
                <img className="w-full h-full object-cover object-center" src={Highlights1} alt="" />
              </div>
              <div className="w-[250px] h-[233px] rounded-xl overflow-hidden 1110:w-[200px]">
                <img className="w-full h-full object-cover object-center" src={Highlights2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMatch;
