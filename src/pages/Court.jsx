import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons'
import { CardData } from '../constant/ActiveMatchData'
import ActiveMatchesCard from '../card/ActiveMatchesCard'
import CourtsCard from '../card/CourtsCard'
import BookCourt from './BookCourt'
import Sucess from './Sucess'
import ViewCourt from '../components/ViewCourt'
import { joinGameContext } from '../App'
import { RestartAlt } from '@mui/icons-material';

const Court = () => {

  const {findCourt} = useContext(joinGameContext);

  

  const [main, setMain] = useState('default')
  const [filteredData, setFilteredData] = useState(CardData)
  const [clickedCard, setClickedCard] = useState(null)
  const [sliders, setSliders] = useState(false);
  let filters = ["Shooting", "Slam Dunk", "Veteran", "Championship"]
  let filters2 = ["5mins. / 4h", "10mins. / 4h"]


  useEffect(() => {
    console.log("findcourt: " , findCourt);
  }, [findCourt])


  function handleChange(e) {
    const filtered = CardData.filter(card => card.location.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredData(filtered);
  }

  const handleFilterTypeofGame = (selectedCategory) => {

  }

  const handleFilterMinsandQuarter = (selectedCategory) => {

  }


  return (
    <div className='bg-[#fff6f2] w-full px-9 py-7 xsm:px-3'>

      {/* {main === 'default' &&
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
              <CourtsCard key={card.id} card={card} setMain={setMain} setClickedCard={setClickedCard} />
            ))}
          </div>
        </div>
      } */}

      {main === 'default' &&
        <div className='bg-black p-[20px] rounded-[14px] px-20 xsm:px-0 '>
          <div className=' mt-10 flex 950px:flex-col-reverse 950px:justify-center 950px:items-center'>
            <div className='flex-1 justify-between flex-col sm:flex-col xsm:text-center'>
              {findCourt &&
                <div>
                  <p className='text font-Poppins mb-2 text-[#ffffff] 950px:text-center'>Result</p>
                  <h1 className='text-3xl font-bold font-Poppins uppercase mb-3 950px:text-center text-[#ffffff]'>{findCourt}</h1>
                  <p className='text-[#ffffff] font-Poppins mb-3 950px:text-center'>Suggested Most Search</p>
                  <div className='mb-10 flex items-center flex-wrap md:gap-2 md:text-center'>

                  
                    {CardData.map((card) => (
                      <button 
                        key={card.id} 
                        card={card}
                        className='w-fit bg-[#D1CECE] rounded-full py-3 font-Poppins text-[12px] text-[#666666] ml-2 px-7'
                      >
                        {card.location}
                      </button>

                    ))} 

                    <FontAwesomeIcon 
                      icon={faSliders} 
                      className='ml-5 text-[#ffffff] cursor-pointer'
                      onClick={() => setSliders(!sliders)}
                      
                    />
                    <RestartAlt className='ml-5 text-[#ffffff]'/>
                  </div>

                  {/* WALA PA SA FIGMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaa */}

                  {sliders &&

                    <div className=' flex  md:flex md:flex-col '>
                      <div className=' w-1/2  1110:w-[90%] md:w-full'>
                        <p className='font-Poppins text-[#ffffff]'>Type of Game</p>

                        <div className='  grid grid-cols-2 justify-center items-center gap-3 mt-3 404px:grid-cols-1'>
                          {filters.map((category, idx) => (
                            <button
                              onClick={() => handleFilterTypeofGame(category)}
                              key={idx}
                              className={`w-[150px] bg-none border-orange border rounded-full py-3 font-Poppins text-[12px] text-[#666666] px-7 md:mx-auto `}
                            
                            >
                              {category}
                            </button>
                          ))}
                        </div>

                      </div>
                      <div className='w-1/2 1139:flex 1139:justify-center 1139:flex-col 1139:items-center md:w-full'>
                        <p className='font-Poppins text-[#ffffff]'>Mins. and Quarter</p> 

                        <div className=' flex flex-col gap-3 mt-3 '>
                          {filters2.map((category, idx) => (
                            <button
                              onClick={() => handleFilterMinsandQuarter(category)}
                              key={idx}
                              className={`w-[150px] bg-none border-orange border rounded-full py-3 font-Poppins text-[12px] text-[#666666] px-7 md:mx-auto `}
                            
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  }



                </div>

              
              
              
              }
              
              <h1 className='font-Poppins font-bold text-3xl uppercase mb-2 mt-4 md:mx-auto text-[#ffffff]'>Basketball court nearby</h1>
              <p className='font-Poppins text-sm mb-4 text-[#ffffff] sm:text-center mt-2'>Discover the most recent active leagues and sporting events available <br /> for participation, and feel free to share them with your basketball-playing friends.</p>
             
              
            </div>

            
            <div className='relative w-fit 404px:w-[250px]'>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder='Join a game near you?'
                  className='py-3 text-sm font-Poppins rounded-[30px] pl-5 pr-20 outline-none mb-4 404px:w-full ' 
                  onChange={handleChange}
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-5 top-3' />
            </div>
          </div>


          <div className='flex gap-2 flex-wrap scale-[1] mt-5 justify-center'>
            {filteredData.map(card => (
              <CourtsCard key={card.id} card={card} setMain={setMain} setClickedCard={setClickedCard} />
            ))}
          </div>
        </div>
      }

      {main === 'bookcourt' &&
        <BookCourt setMain={setMain}  />

      }

      {main === 'success' &&
        <Sucess setMain={setMain}  clickedCard={clickedCard}  />
      }

      {main === 'viewcourt' &&
        <ViewCourt setMain={setMain} clickedCard={clickedCard}/>
        
      }






    </div>
  )
}

export default Court
