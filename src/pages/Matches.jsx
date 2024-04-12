import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ActiveMatchesCard from '../card/ActiveMatchesCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { ActiveMatch } from '../constant/ActiveMatchData'
import JoinViewActiveMatches from './JoinViewActiveMatches'


const Matches = () => {

  const [main, setMain] = useState('default')
  const [filteredData, setFilteredData] = useState(ActiveMatch)

  const handleChange = (e) => {
    const filtered = ActiveMatch.filter(card => card.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredData(filtered);
  }

  return (
    <div className='bg-[#fff6f2] w-full px-9 py-7'>

      {main === 'default' &&
        <div className='bg-[#ffeee6] p-[20px] rounded-[14px] px-20 xsm:px-0'>
          <div className=' mt-10'>
            <div className='flex justify-between items-center sm:flex-col xsm:text-center'>
              <h1 className='font-Poppins font-bold text-3xl uppercase mb-4'>Active Matches</h1>
              <div className='relative'>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder='Join a game near you?'
                  className='py-3 text-sm font-Poppins rounded-[30px] pl-5 pr-20 outline-none' 
                  onChange={handleChange}
                
                />
                

                <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-5 top-3' />
              </div>
            </div>

            <p className='font-Poppins text-sm mb-4 text-[#bbbbbb] sm:text-center mt-5'>Discover the most recent active leagues and sporting events available <br /> for participation, and feel free to share them with your basketball-playing friends.</p>









          </div>
          <div className='flex gap-2 flex-wrap scale-[1] mt-5 justify-center'>
            {filteredData.map(card => (
              <ActiveMatchesCard key={card.id} card={card} setMain={setMain} />
            ))}
          </div>
        </div>
      }

      {main === 'join' &&
        <JoinViewActiveMatches setMain={setMain} />
      }

      {main === 'view' &&
        <JoinViewActiveMatches setMain={setMain} />
      }

    </div>
  )
}

export default Matches
