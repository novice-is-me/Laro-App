import React from 'react'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Matches from './Matches'
import Court from './Court'
import Join from './Join'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <Matches/> 
      <Court/>
      <Join/>  
      <Footer />
    </div>
  )
}

export default HomePage
