import React, {useState} from "react";
import {
  emojiCool,
  emojiSad,
  emojiShock,
  emojiHeartEyes,
  userImg,
  shoppingBag,
} from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import RefreshIcon from "@mui/icons-material/Refresh";
import DashBoardCard from "../components/DashBoardCard";
import { useNavigate } from "react-router";
import UserNav from "../components/UserNav";
import HamburgerMenu from "../components/HamburgerMenu";

const UserShop = () => {
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

      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center gap-2">
          {/* Display text and shopping bag image */}
          <img src={shoppingBag} alt="Shopping Bag" className="mx-auto" />
          <p className="text-3xl font-bold font-Inter text-center text-gray-700">
            COMING SOON! 
            <br/>GET REWARDS OUT OF YOUR POINTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserShop;
