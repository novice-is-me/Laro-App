import React, {useState} from "react";
import { emojiCool, emojiSad, emojiShock, emojiGem, userImg } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
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

    <div className="flex flex-col justify-center items-center gap-5 px-[5rem] w-full h-full font-Inter 1110:justify-start 1110:py-10 1110:px-5">
        {/* Header */}
        <div className="flex flex-col w-full 1110:items-center 1110:gap-3">
          <p className="text-2xl font-medium 1110:text-4xl">Achievements</p>
          <p className="font-Poppins text-base text-[#787878] 1110:text-center">You’ll see your winnings and awards here.</p>
        </div>

        {/* Orange Boxes */}
        <div className="flex gap-5 w-full text-white 1110:flex-wrap">
          <div className="flex flex-col gap-5 p-5 rounded-xl bg-orange font-semibold max-h-[309px] 1110:w-full">
            <p className="text-2xl">Total Plays</p>
            <p className="text-[32px]">0</p>
          </div>

          {/* Orange Box - Total Award */}
          <div className="flex flex-col justify-between w-[270px] h-full p-5 rounded-xl bg-orange max-h-[309px] 1110:w-full">
            <div className="flex flex-col gap-5">
              <div className="flex  justify-between items-center w-full">
                <p className="text-xl font-semibold">Total Awards</p>
                <RefreshIcon
                  fontSize="small"
                  className="bg-white text-black rounded-full"
                />
              </div>
              <div className="flex justify-between w-full">
                <p className="text-[32px] 2xl:text-[32px] font-semibold">0</p>
              </div>
              <div className="flex justify-end pl-10">
                <img src={emojiShock} alt="Shock Emoji" />
              </div>
            </div>

            {/* Footer */}
            <div className="flex h-fit">
              <p className="w-[150px] text-[8px] font-light">The organizer who manipulated the
                situation placed and updated points.</p>
            </div>
          </div>

          {/* Orange Box - Total Points */}
          <div className="flex flex-col justify-between w-[270px] h-full p-5 rounded-xl bg-orange max-h-[309px] 1110:w-full">
            <div className="flex flex-col gap-5">
              <div className="flex  justify-between items-center w-full">
                <p className="text-xl font-semibold">Total Points</p>
                <RefreshIcon
                  fontSize="small"
                  className="bg-white text-black rounded-full"
                />
              </div>
              <div className="flex justify-between w-full">
                <p className="text-[32px] 2xl:text-[32px] font-semibold">0</p>
              </div>
              <div className="flex justify-end pl-10">
                <img src={emojiCool} alt="Shock Emoji" />
              </div>
            </div>

            {/* Footer */}
            <div className="flex h-fit">
              <p className="w-[150px] text-[8px] font-light">The organizer who manipulated the
                situation placed and updated points.</p>
            </div>
          </div>
        </div>

        {/* Black Box */}
        <div className="flex gap-5 w-full text-white 1110:flex-wrap 1110:pb-5">
          <div className="flex flex-col justify-between w-[270px] h-full p-5 rounded-xl bg-black max-h-[309px] 1110:w-full" >
            <div className="flex flex-col gap-5">
              <div className="flex  justify-between items-center w-full">
                <p className="text-xl font-semibold">Total Awards</p>
                <RefreshIcon
                  fontSize="small"
                  className="bg-white text-black rounded-full"
                />
              </div>
              <div className="flex justify-between w-full">
                <p className="text-[32px] 2xl:text-[32px] font-semibold">0</p>
              </div>
              <div className="flex justify-end pl-10">
                <img src={emojiShock} alt="Shock Emoji" />
              </div>
            </div>

            {/* Footer */}
            <div className="flex h-fit">
              <p className="w-[150px] text-[8px] font-light">The organizer who manipulated the
                situation placed and updated points.</p>
            </div>
          </div>

          {/* Gem Box */}
          <div className="flex flex-col justify-between flex-shrink w-[210px] max-h-[210px] p-5 bg-black rounded-2xl 1110:w-full">
            <div className="w-full">
              <p className="font-semibold text-white text-xl">New</p>
              <p className="text-lightgray">Rank</p>
            </div>
            <div className="w-full flex justify-end ">
              <img src={emojiGem} alt="" className={"games w-[75px] h-[75px]"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMatch;
