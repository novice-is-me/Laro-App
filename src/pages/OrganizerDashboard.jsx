import React, { useState, useEffect } from "react";
import OrganizerDashHeader from "./OrganizerDashHeader";
import OrganizerDashContent from "./OrganizerDashContent";

const OrganizerDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [userInfo, setUserInfo] = useState(null); // State to store user information
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(userInfo);

    if (userInfo && userInfo.is_event_organizer === false) {
      setShowModal(true);
      document.body.style.filter = "blur(1px)"; // Apply blur effect
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
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg font-bold mb-4">
              Request to Admin for Organizer Approval has been sent.
            </p>
            <button
              className="bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark"
              onClick={handleModalClose}
            >
              Preview Organizer Dashboard
            </button>
          </div>
        </div>
      )}

      <OrganizerDashContent />
    </div>
  );
};

export default OrganizerDashboard;
