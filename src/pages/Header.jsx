import React, { useState, useEffect } from "react";
import { LogoHeader } from "../assets";
import { links } from "../constant/index";
import NavLinks from "../components/NavLinks";
import { userIcon, logoutImg } from "../assets";
import LoginSignUpButton from "../components/LoginSignUpButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const profileImage = userInfo ? userInfo.profile_image : null;
  const userFullName = JSON.parse(localStorage.getItem("userFullName"));

  const navigate = useNavigate();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("token") !== null;
    setIsLoggedIn(userLoggedIn);

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsClicked(!isClicked);
  };

  const handleLogout = () => {
    navigate("/login");
    console.log("Logging out...");
    // Clear user data from localStorage and log out
    localStorage.removeItem("token");
    localStorage.removeItem("userFullName");
    localStorage.removeItem("userInfo");
    setIsLoggedIn(false);
    // Redirect to the login page
    console.log("Navigating to login page...");
  };

  return (
    <div
      className={`py-8 px-[5rem] sticky top-0 flex justify-between bg-bgColor
      items-center w-full z-[99] xsm:px-5  
      ${
        isScrolled
          ? "backdrop-filter backdrop-blur-lg bg-opacity-30"
          : "bg-bgColor"
      }`}
    >
      <div className=" w-full justify-between flex gap-[100px] items-center relative lg:flex lg:flex-col lg:gap-0">
      <div>
        <img src={LogoHeader} alt="logo" />
      </div>
      <div className="flex gap-20 lg:gap-10 items-center relative items-end justify-end">
        <div className="flex gap-20 lg:gap-10     ">
          {links[0].navigationBar.map((link, i) => {
            return <NavLinks text={link.name} path={link.path} key={i} />;
          })}
        </div>
        <div className="relative flex gap-4 items-center">
          {isLoggedIn ? (
            <div className="relative lg:hidden">
              <button
                onClick={handleDropdownToggle}
                className="focus:outline-none"
              >
                <img
                  src={`https://api.laro.com.ph/public/assets/user-upload/${profileImage}`}
                  alt="User"
                  className="rounded-full w-10 h-10 cursor-pointer"
                />
              </button>
              {isClicked && (
                <div className="absolute right-0 mt-4 py-2 z-10 bg-white border border-gray-200 rounded shadow-md max-w-[250px]">
                  <Link
                    to="/user"
                    className="border-b border-gray-200 block px-4 py-2 font-poppins text-sm text-gray-800 hover:text-orange"
                    onClick={() => setIsClicked(false)}
                  >
                    <img
                      src={userIcon}
                      alt="Profile Icon"
                      className="w-4 h-4 mr-2"
                    />
                    Profile
                  </Link>

                  <Link
                    to="/organizer"
                    className="block px-4 py-2 font-poppins text-sm text-gray-800 hover:text-orange border-b border-gray-200"
                    onClick={() => setIsClicked(false)}
                  >
                    Organizer
                  </Link>
                  <Link
                    to="/court-owner"
                    className="block px-4 py-2 font-poppins text-sm text-gray-800 hover:text-orange border-b border-gray-200"
                    onClick={() => setIsClicked(false)}
                  >
                    Court Owner
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 font-poppins text-sm text-red-800 hover:text-orange"
                  >
                    <img
                      src={logoutImg}
                      alt="Logout Icon"
                      className="w-4 h-4"
                    />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            links[2].headerBtn.map((link, i) => (
              <LoginSignUpButton
                text={link.name}
                path={link.path}
                value={link.id}
                key={i}
              />
            ))
          )}
          {isLoggedIn && (
            <div className="relative lg:hidden">
              <FontAwesomeIcon
                icon={faBars}
                className="fa-2xl hidden lg:block hover:cursor-pointer"
                onClick={() => setIsClicked(!isClicked)}
              />
            </div>
          )}
          {/* Play Now Button */}
          {isLoggedIn && (
            <div className="relative ">
  <Link
    to="/matches"
    className="bg-orange text-white px-4 py-2 rounded hover:bg-orange-600"
  >
    <span className="lg:hidden">Play Now</span>
    <span className="hidden lg:inline">Play</span>
  </Link>
</div>

          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
