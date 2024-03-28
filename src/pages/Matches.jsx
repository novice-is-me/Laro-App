import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ActiveMatchesCard from '../card/ActiveMatchesCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { ActiveMatch } from '../constant/ActiveMatchData'

const Matches = () => {
  return (
    <div className='bg-[#fff6f2] w-full px-9 py-7'>
      <div className='bg-[#ffeee6] p-[20px] rounded-[14px] px-20'>
        <div className=' flex justify-between mt-10'>
          <div className=''>
            <h1 className='font-Poppins font-bold text-3xl uppercase mb-4'>Active Matches</h1>
            <p className='font-Poppins text-sm mb-4 text-[#bbbbbb]'>Discover the most recent active leagues and sporting events available <br /> for participation, and feel free to share them with your basketball-playing friends.</p>
          </div>
          <div className='relative'>
            <input
              type="text"
              name=""
              id=""
              placeholder='Join a game near you?'
              className='py-3 text-sm font-Poppins rounded-[30px] pl-5 pr-20 outline-none' />

            <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-5 top-3' />
          </div>
        </div> 
        <div className='flex gap-2 flex-wrap scale-[1] mt-5 justify-center'>
          {ActiveMatch.map(card => (
            <ActiveMatchesCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Matches
