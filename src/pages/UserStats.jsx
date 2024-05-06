import React from "react";
import {
  emojiCool,
  emojiSad,
  emojiShock,
  emojiHeartEyes,
  ImageHighlights1,
  ImageHighlights2,
  userImg,
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
        <div className="flex gap-4 border-0 border-orange ">
          <div className="w-full h-full flex flex-col gap-2">
            <p className="font-Inter font-semibold text-[24px]">Statistics</p>

            <div className="flex gap-2">
              <DashBoardCard
                title={"Total Points"}
                points={"0"}
                emoji={emojiCool}
                value={"games"}
              />
              <DashBoardCard
                title={"Total Wins"}
                points={"0"}
                emoji={emojiHeartEyes}
                value={"accomplishment"}
              />
            </div>
            <div className="w-full h-full flex flex-col gap-2">
              <div className="flex gap-2">
                <DashBoardCard
                  title={"Total Loss"}
                  points={"0"}
                  emoji={emojiSad}
                  value={"loss"}
                />
                <DashBoardCard
                  title={"Total Awards"}
                  points={"0"}
                  emoji={emojiShock}
                  value={"games"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
