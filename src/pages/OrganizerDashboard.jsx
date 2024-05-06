import React, { useState } from "react";
import OrganizerDashHeader from "./OrganizerDashHeader";
import OrganizerDashContent from "./OrganizerDashContent";

const OrganizerDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <OrganizerDashHeader
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  );
};

export default OrganizerDashboard;
