import React from 'react'
import Footer from './Footer' 
import HeroSection from './HeroSection'
import Matches from './Matches'
import Court from './Court'
import Join from './Join' 
import Gameplay from './Gameplay'
import Advertisments from './Advertisments'

const HomePage = () => {
  return (
    <div>
      <HeroSection/> 
      <Matches/>
      <Court/> 
      <Join/>
      <Gameplay/>
      <Advertisments/>
      <Footer />
    </div>
  )
}

export default HomePage
