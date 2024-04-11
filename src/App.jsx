import React from "react";
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
import UserCalendar from './pages/UserCalendar'

function App() {
  const location = useLocation();
  const hideHeaderRoutes = [
    "/user",
    "/user/statistics",
    "/user/matches",
    "/user/achievements",
    "/user/calendar",
  ];

  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/court" element={<Court />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/court-owner" element={<CourtOwner />} />
        <Route path="/dashboard" element={<DashboardCourtOwner />} />
        <Route path="/user" element={<UserOverview />} />
        <Route path="/user/statistics" element={<UserStats />} />
        <Route path="/user/matches" element={<UserMatch />} />
        <Route path="/user/achievements" element={<UserAchievements />} />
        <Route path='/user/calendar' element={<UserCalendar/>}/>
      </Routes>
    </>
  );
}

export default App;
