import React from 'react'
import GameplayComponent from '../components/GameplayComponent'
import { gameplayData } from '../constant'

const Gameplay = () => {
  return (
    <div className='bg-bgColor w-full px-9 py-3 xsm:px-3'>
        <div className=' bg-orange px-[4rem] py-[3rem] pb-[5rem] xsm:p-[3rem]
         rounded-[20px] '>  
            <div className=' mb-12 '>
            <h1 className=' lg:text-[30px] lg:text-center text-white font-poppins text-[40px] uppercase font-bold flex justify-center items-center'>
                    COMING SOON!!</h1>
                <h1 className='lg:pt-6 lg:text-[25px] lg:text-center text-white font-poppins text-[40px] uppercase font-bold'>
                    Watch Gameplay</h1>
                <h1 className='lg: pt-6 lg:text-center text-white font-poppins text-[20px] pl-2'>
                    Watch live and reply games here anywhere anytime.</h1>
            </div>
            <div className='flex gap-4 flex-wrap justify-center'>
                {gameplayData.map((game, i)=>{
                    return <GameplayComponent key={i} {...game} />
                })}    
            </div>
        </div> 
    </div>
    
  )
}

export default Gameplay
