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
import CalendarCourtOwner from './pages/CalendarCourtOwner'
import ViewCourt from "./components/ViewCourt";
import OrganizerDashboard from './pages/OrganizerDashboard'
import OrganizerProfile from './pages/OrganizerProfile'
import EventDetails from './pages/EventDetails'
import PlayerDetails from './pages/PlayerDetails'
import Payment from './pages/Payment'


export const joinGameContext = createContext();


function App() {
  const location = useLocation();
  const hideHeaderRoutes = [
    "/user",
    "/user/statistics",
    "/user/matches",
    "/user/achievements",
    '/dashboard',
    '/dashboard/calendar',
    "/organizer",
    "/OrganizerDashboard",
    "/eventDetails",
    "/playerDetails",
    "/payment",
    ];

  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  const [joinGame, setJoinGame] = useState('');
  const [findCourt, setFindCourt] = useState('');
  
  useEffect(() => {
    console.log("findcourt: " , findCourt);
  }, [findCourt])

  return (
    <>
      {shouldShowHeader && <Header />}

      <joinGameContext.Provider value={{setJoinGame, joinGame}}> 
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/court" element={<Court />} />
        <Route path="/court/view" element={<ViewCourt/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/court-owner" element={<CourtOwner />} />
        <Route path="/dashboard" element={<DashboardCourtOwner />} />
        <Route path='/dashboard/calendar' element={<CalendarCourtOwner/>}/>
        <Route path='/organizer' element={<OrganizerProfile/>}/>
        <Route path='/organizerDashboard' element={<OrganizerDashboard/>}/>
        <Route path='/eventDetails' element={<EventDetails/>}/>
        <Route path='/playerDetails' element={<PlayerDetails/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path="/user" element={<UserOverview />} />
        <Route path="/user/statistics" element={<UserStats />} />
        <Route path="/user/matches" element={<UserMatch />} />
        <Route path="/user/achievements" element={<UserAchievements />} />
        
        </Routes>
        </joinGameContext.Provider>


    </>
  );
}

export default App;
