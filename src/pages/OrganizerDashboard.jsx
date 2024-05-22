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
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

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
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-full h-full rounded-lg shadow-lg  ">
            <div className="flex justify-center items-center p-8 bg-[#FA5000]">
              <p className=" font-Poppins font-bold text-white text-[40px]"> Organizing Community Name</p>
              </div>

        <div className=" flex justify-center items-center pt-40">
            <div className=" flex  flex-col p-6 w-[75%] flex justify-center items-center">
              <div className="">
                <p className="text-center font-Poppins mb-4 text-[40px]">
                Thank You for your registration. Our team will review your registration and get back to you as soon as possible.
                </p>
                </div>
                <div className="pt-2">
                <button
                    className="justify-start items-start  bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark"
                    onClick={handleModalClose}
                >
                    Preview Organizer Dashboard
                </button>
                </div>
            </div>
        </div>

        <div className="fixed bottom-0 left-0 m-4">
            <div className="font-light">
                <p>Follow Our Social Media Page</p>
            </div>
            <div className="flex space-x-4 mt-2">
                <FacebookIcon style={{ color: '#F24E1E', fontSize: '48px' }} />
                <LinkedInIcon style={{ color: '#F24E1E', fontSize: '48px' }} />
                <InstagramIcon style={{ color: '#F24E1E', fontSize: '48px' }} />
            </div>
            <div className="font-light">
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

        <div className="fixed bottom-0 right-0 m-4">
                <img src={Logo} alt="Logo" className="w-40 h-20" />
            </div>

          </div>
        </div>
      )}

      <OrganizerDashContent />
    </div>
  );
};

export default OrganizerDashboard;
