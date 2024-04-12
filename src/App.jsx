import React from 'react'
import './App.css'
import Header from './pages/Header'
import CreateAccount from './pages/CreateAccount'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Matches from './pages/Matches'
import Court from './pages/Court'
import About from './pages/About'
import Login from './pages/Login'
import CourtOwner from './pages/CourtOwner'
import DashboardCourtOwner from './pages/DashboardCourtOwner'
import OrganizerDashboard from './pages/OrganizerDashboard'
import OrganizerProfile from './pages/OrganizerProfile'

function App() {
  const location = useLocation();
  const hideHeaderRoutes = [
    "/dashboard",
    "/organizer",
    "/organizerProfile"
  ];


  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return ( 
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/matches' element={<Matches />}></Route>
        <Route path='/court' element={<Court />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route> 
        <Route path='/register' element={<CreateAccount/>}></Route>
        <Route path='/court-owner' element={<CourtOwner/>}/>
        <Route path='/dashboard' element={<DashboardCourtOwner/>}/>
        <Route path='/organizer' element={<OrganizerDashboard/>}/>
        <Route path='/organizerProfile' element={<OrganizerProfile/>}/>
      </Routes>

    </>
  )
}

export default App
