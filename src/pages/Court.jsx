import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { CardData } from '../constant/ActiveMatchData'
import ActiveMatchesCard from '../card/ActiveMatchesCard'
import CourtsCard from '../card/CourtsCard'
import BookCourt from './BookCourt'
import Sucess from './Sucess'

CardData

const Court = () => {

  const [main, setMain] = useState('default')






  return (
    <div className='bg-[#fff6f2] w-full px-9 py-7'>

      {main === 'default' &&
        <div className='bg-black p-[20px] rounded-[14px] px-20'>
          <div className=' flex justify-between mt-10'>
            <div className=''>
              <h1 className='font-Poppins font-bold text-3xl uppercase mb-4 text-[#ffffff]'>Basketball Nearby</h1>
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
            {CardData.map(card => (
              <CourtsCard key={card.id} card={card} setMain={setMain} />
            ))}
          </div>
        </div>
      }

      {main === 'bookcourt' &&
        <BookCourt setMain={setMain} />

      }

      {main === 'success' &&
        <Sucess />
      }






    </div>
  )
}

export default Court
