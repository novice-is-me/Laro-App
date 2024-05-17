import React from "react";
import {
  emojiCool,
  emojiSad,
  emojiShock,
  emojiHeartEyes,
  ImageHighlights1,
  ImageHighlights2,
  userImg,
  StatsSoon,
} from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import RefreshIcon from "@mui/icons-material/Refresh";
import DashBoardCard from "../components/DashBoardCard";
import { useNavigate } from "react-router";
import UserNav from "../components/UserNav";
import HamburgerMenu from "../components/HamburgerMenu";

const UserStats = () => {
  const navigate = useNavigate();
  const userFullName = JSON.parse(localStorage.getItem("userFullName"));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const profileImage = userInfo ? userInfo.profile_image : null;
  return (
    <div className="flex items-center h-screen 1110:flex-col">
      {/* for profile */}
        <div className="w-auto 1110:w-full 1110:shadow-xl">
          <UserNav />
        </div>

        <div className="hidden w-full 1110:flex 1110:sticky 1110:top-0">
          <HamburgerMenu />
        </div>

      <div className="flex justify-center items-center w-full h-full p-5">
        <div className="flex flex-col gap-5">
          {/* Display text and shopping bag image */}
          <img src={StatsSoon} alt="Shopping Bag" className="mx-auto" />
          <p className="text-[50px] border font-bold text-center text-gray-700">
            COMING SOON!!!GET REWARDS OUT OF YOUR POINTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
