import React from 'react'
import GameplayComponent from '../components/GameplayComponent'
import { gameplayData } from '../constant'

const Gameplay = () => {
  return (
    <div className='bg-bgColor  w-full px-9 py-3'>
        <div className=' bg-orange px-[4rem] py-[3rem] pb-[5rem] xsm:p-[3rem]
         rounded-[20px] '>  
            <div className=' mb-12'>
                <h1 className='text-white font-poppins text-[40px] uppercase font-bold'>
                    Watch Gameplay</h1>
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
