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

const UserStats = () => {
  const navigate = useNavigate();
  const userFullName = JSON.parse(localStorage.getItem("userFullName"));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const profileImage = userInfo ? userInfo.profile_image : null;
  return (
    <div className="mb-[106px] mt-[10px] flex w-full justify-between gap-5 md:flex-col">
      {/* for profile */}
      <UserNav />

      <div className="flex flex-col border-0 border-red-500 flex-[3] h-full gap-8">
        <div className="w-full h-full flex flex-col gap-2">
          {/* Display text and shopping bag image */}
          <img src={StatsSoon} alt="Shopping Bag" className="mx-auto" />
          <p className="text-lg font-bold text-center text-gray-700 mt-2">
            COMING SOON!!! GET REWARDS OUT OF YOUR POINTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
