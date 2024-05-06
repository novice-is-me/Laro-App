import React from "react";
import { emojiCool, emojiSad, emojiShock, emojiGem, userImg } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import RefreshIcon from "@mui/icons-material/Refresh";
import DashBoardCard from "../components/DashBoardCard";
import { useNavigate } from "react-router";
import UserNav from "../components/UserNav";
const UserMatch = () => {
  const navigate = useNavigate();
  const userFullName = JSON.parse(localStorage.getItem("userFullName"));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const profileImage = userInfo ? userInfo.profile_image : null;
  return (
    <div className="mb-[106px] mt-[10px] flex w-full justify-between gap-5 md:flex-col">
      {/* for profile */}
      <UserNav />
      <div className="flex flex-col border-0 border-red-500 flex-[3] h-full gap-8">
        <div className="border-0 border-red-900 w-full">
          <p className="font-Inter font-semibold text-[24px]">Achievements</p>
          <p className="font-Poppins font-semibold text-[15px] text-gray">
            You’ll see your winnings and awards here.
          </p>
          <div className="flex gap-4 border-0 border-orange">
            {/* New Matches */}
            <div className="bg-orange text-white p-4 rounded-[10px] w-[270.97px] h-[309.31px] mb-4">
              <p className="font-Inter font-semibold text-[20px]">Total Play</p>
              <p className="font-Inter font-semibold text-[10px]">0</p>
            </div>
            <div className="flex gap-2">
              <DashBoardCard
                title={"Total Awards"}
                points={"0"}
                emoji={emojiShock}
                value={"games"}
              />
            </div>
            <div className="flex gap-2">
              <DashBoardCard
                title={"Total Points"}
                points={"0"}
                emoji={emojiCool}
                value={"games"}
              />
            </div>
          </div>
          <div className="flex w-[245.92px] h-[309.31px] gap-2">
            <div className="flex gap-2">
              <DashBoardCard
                title={"Total Loss"}
                points={"0"}
                emoji={emojiSad}
                value={"loss"}
              />
              <div className="bg-black text-white p-4 rounded-[10px] w-[280px] h-[214px]">
                <p className="font-Inter font-semibold text-[20px]">New</p>
                <p className="font-Inter font-semibold text-gray text-[10px]">
                  Rank
                </p>
                <div className="flex gap-2">
                  <img src={emojiGem} alt="" className={"games"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMatch;
