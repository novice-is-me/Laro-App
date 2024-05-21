import React, { useState, useEffect } from 'react';
import { Ad1, Ad2 } from '../assets';

const Advertisments = () => {
  const [currentAd, setCurrentAd] = useState(Ad1); // Initialize current ad state
  const [fadeIn, setFadeIn] = useState(false); // State for fade-in effect

  useEffect(() => {
    // Function to switch between ads and trigger fade-in effect
    const switchAd = () => {
      setFadeIn(true); // Trigger fade-in effect
    };

    // Event listener to detect when the fade-in animation completes
    const handleTransitionEnd = () => {
      setCurrentAd((prevAd) => (prevAd === Ad1 ? Ad2 : Ad1));
      setFadeIn(false); // Reset fade-in effect after switching ad
    };

    // Add event listener to handle transition end
    document.addEventListener('transitionend', handleTransitionEnd);

    // Interval to automatically switch ads every 2 seconds
    const interval = setInterval(switchAd, 2000);

    // Clear interval and remove event listener on component unmount
    return () => {
      clearInterval(interval);
      document.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div className='bg-bgColor w-full px-9 py-3 xsm:px-3'>
      <div className='bg-black px-[4rem] py-[3rem] pb-[5rem] xsm:p-[3rem]
         rounded-[20px] flex items-center gap-8 832px:flex-col justify-between'>
        <div className=' 832px:text-center 832px:pr-0 pr-[10rem]'>  
          <h1 className='font-poppins text-[#FFEEE6] text-[40px] font-bold 
             xsm:text-[20px] uppercase'>
            Advertisements Placements
          </h1> 
        </div>    
        <div> 
          <img
            src={currentAd}
            alt="Advertisement"
            className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>
      </div>
    </div> 
  );
};

export default Advertisments;
