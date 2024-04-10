import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { CardData } from '../constant/ActiveMatchData'
import ActiveMatchesCard from '../card/ActiveMatchesCard'
import CourtsCard from '../card/CourtsCard'
import BookCourt from './BookCourt'
import Sucess from './Sucess'
import ViewCourt from '../components/ViewCourt'


const Court = () => {

  const [main, setMain] = useState('default')
  const [filteredData, setFilteredData] = useState(CardData)

  function handleChange(e) {
    const filtered = CardData.filter(card => card.location.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredData(filtered);
  }


  return (
    <div className='bg-[#fff6f2] w-full px-9 py-7 xsm:px-3'>

      {main === 'default' &&
        <div className='bg-black p-[20px] rounded-[14px] px-20'>
          <div className='mt-10'>
            <div className='flex justify-between border  sm:flex-col sm:items-center'>
              <h1 className='font-Poppins font-bold text-3xl uppercase mb-4 text-[#ffffff]'>Basketball Nearby</h1>
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

      {main === 'viewcourt' &&
        <ViewCourt/>
        
      }






    </div>
  )
}

export default Court
