import React, { createContext, useEffect, useState } from 'react'
import Footer from './Footer' 
import HeroSection from './HeroSection'
import Matches from './Matches'
import Court from './Court'
import Join from './Join' 
import Gameplay from './Gameplay'
import Advertisments from './Advertisments'
import About from './About'
import CourtOwner from './CourtOwner'
import CreateAccount from './CreateAccount'
import DashboardCourtOwner from './DashboardCourtOwner'



const HomePage = () => {
  


  return (
    <div>
      <HeroSection/>
      <Matches />
      <Court />
      <Join/>
      <Gameplay/> 
      <Advertisments/>
      <About/>
      <Footer />
    </div>
  )
}

export default HomePage
