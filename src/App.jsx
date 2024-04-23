import React, { createContext, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import CreateAccount from "./pages/CreateAccount";
import HomePage from "./pages/HomePage";
import Matches from "./pages/Matches";
import Court from "./pages/Court";
import About from "./pages/About";
import Login from "./pages/Login";
import CourtOwner from "./pages/CourtOwner";
import DashboardCourtOwner from "./pages/DashboardCourtOwner";
import UserOverview from "./pages/UserOverview";
import UserStats from "./pages/UserStats";
import UserMatch from "./pages/UserMatch";
import UserAchievements from "./pages/UserAchievements";
import CalendarCourtOwner from "./pages/CalendarCourtOwner";
import ViewCourt from "./components/ViewCourt";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import OrganizerProfile from "./pages/OrganizerProfile";
import ForgotPassword from "./pages/ForgotPassword";
import EmailVerification from "./pages/EmailVerification";
import OTPVerification from "./pages/OTPVerification";
export const joinGameContext = createContext();

function App() {
  const location = useLocation();
  const hideHeaderRoutes = [
    "/user",
    "/user/statistics",
    "/user/matches",
    "/user/achievements",
    "/dashboard",
    "/dashboard/calendar",
    "/organizer",
    "/organizerProfile",
  ];

  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  const [joinGame, setJoinGame] = useState("");
  const [findCourt, setFindCourt] = useState("");

  useEffect(() => {
    console.log("findcourt: ", findCourt);
  }, [findCourt]);

  return (
    <>
      {shouldShowHeader && <Header />}

      <joinGameContext.Provider value={{ setJoinGame, joinGame }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/court" element={<Court />} />
          <Route path="/court/view" element={<ViewCourt />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/court-owner" element={<CourtOwner />} />
          <Route path="/dashboard" element={<DashboardCourtOwner />} />
          <Route path="/dashboard/calendar" element={<CalendarCourtOwner />} />
          <Route path="/organizer" element={<OrganizerDashboard />} />
          <Route path="/organizerProfile" element={<OrganizerProfile />} />
          <Route path="/user" element={<UserOverview />} />
          <Route path="/user/statistics" element={<UserStats />} />
          <Route path="/user/matches" element={<UserMatch />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/user/achievements" element={<UserAchievements />} />
        </Routes>
      </joinGameContext.Provider>
    </>
  );
}

export default App;
