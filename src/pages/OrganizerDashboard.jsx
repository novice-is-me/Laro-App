import React, { useState, useEffect } from "react";
import OrganizerDashHeader from "./OrganizerDashHeader";
import OrganizerDashContent from "./OrganizerDashContent";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Logo } from "../assets";

const OrganizerDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [userInfo, setUserInfo] = useState(null); // State to store user information
  const [showModal, setShowModal] = useState(true); // State to manage modal visibility

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(userInfo);

    if (userInfo && userInfo.is_event_organizer === false) {
      setShowModal(true);
      document.body.style.filter = ""; // Remove blur effect
    }
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleModalClose = () => {
    setShowModal(false);
    document.body.style.filter = ""; // Remove blur effect
  };

  return (
    <div>
      <OrganizerDashHeader
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {showModal && (
        <div className="fixed inset-0 flex   ">
          <div className="bg-white w-full h-full flex flex-col justify-between">
            <div className="flex justify-center items-center p-8 bg-[#FA5000] ">
              {/* header */}
              <div className="border xsm:w-full xsm:text-center">
              <p className=" font-Poppins font-bold text-white text-[40px] xsm:text-[30px]"> Organizing Community Name</p>
              </div>
              </div>

        <div className=" flex justify-center items-center pt-20 border xsm:pt-10">
            <div className=" flex  flex-col p-6 w-[75%] flex justify-center items-center border">
              <div className="">
                <p className="text-center font-Poppins mb-4 text-[30px] xsm:text-[18px]">
                Thank You for your registration. Our team will review your registration and get back to you as soon as possible.
                </p>
                </div>
                <div className="pt-2 ">
                <button
                    className="justify-start items-start  bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark"
                    onClick={handleModalClose}
                >
                    Preview Organizer Dashboard
                </button>
                </div>
            </div>
        </div>

<div className="flex flex-row justify-between items-center border">
        <div className="  m-4 pl-4    ">
            <div className="font-light text-[16px]">
                <p>Follow Our Social Media Page</p>
            </div>
            <div className="flex space-x-4 mt-2 border text-[#F24E1E] ">
                <FacebookIcon style={{ fontSize: '33px' }} />
                <LinkedInIcon  style={{ fontSize: '33px' }}/>
                <InstagramIcon  style={{ fontSize: '33px' }} />
            </div>
            <div className="font-light xsm:hidden lg:hidden xl:hidden 2xl:hidden">
                <p>
                    FB: 
                    <a 
                        href="https://www.facebook.com/larophilippines" 
                        className="underline text-black ml-1"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        https://www.facebook.com/larophilippines
                    </a>
                </p>
                <p>
                    LinkedIn: 
                    <a 
                        href="https://www.linkedin.com/company/laroph/" 
                        className="underline text-black ml-1"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        https://www.linkedin.com/company/laroph/
                    </a>
                </p>
            </div>
        </div>

        <div className="  m-4 mb-10 mr-10 border w-fit flex items-end justify-end">
                <img src={Logo} alt="Logo" className="w-[100px] h-[50px] " />
            </div>

          </div>
          </div>
        </div>
      )}

      <OrganizerDashContent/>
    </div>
  );
};

export default OrganizerDashboard;
