import React, { useContext, useEffect, useState } from 'react'
import ActiveMatchesCard from '../card/ActiveMatchesCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSliders, } from '@fortawesome/free-solid-svg-icons'
import { ActiveMatch, CardData } from '../constant/ActiveMatchData'
import JoinViewActiveMatches from './JoinViewActiveMatches'
import { joinGameContext } from '../App'
import { RestartAlt } from '@mui/icons-material';





const Matches = () => {

  const {joinGame} = useContext(joinGameContext);
  const [main, setMain] = useState('default');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredData, setFilteredData] = useState(ActiveMatch);
  let filters = ["Shooting", "Slam Dunk", "Veteran", "Championship"]
  let filters2 = ["5mins. / 4h", "10mins. / 4h"]
  const [sliders, setSliders] = useState(false);
  
  
  useEffect(() => {
    console.log("joinGame input : " , joinGame);
  }, [joinGame]) 




  const handleChange = (e) => {
    const inputFilter = e.target.value.toLowerCase();
    const filtered = ActiveMatch.filter(card => 
                  card.title.toLowerCase().includes(inputFilter) 
                  );
    setFilteredData(filtered);
  }


  const handleFilterTypeofGame = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) { //if pressed again
      let filters = selectedFilters.filter((el) => el !== selectedCategory); //removing same category
      setSelectedFilters(filters);
    }else{ // nilalagy sa array
      setSelectedFilters([...selectedFilters, selectedCategory])

    }
  }

  const handleFilterMinsandQuarter = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) { //if pressed again
      let filters = selectedFilters.filter((el) => el !== selectedCategory); //removing same category
      setSelectedFilters(filters);
    }
    else{ // nilalagy sa array
      setSelectedFilters([...selectedFilters, selectedCategory])

    }
  }

  

  useEffect(() => {
    filterItems();
    
  }, [selectedFilters]);

  // const filterItems = () => {
  //   if (selectedFilters.length > 0) { // kapag may laman
  //     let tempItems = selectedFilters.map((selectedCategory) => {
  //       let temp = ActiveMatch.filter((item) => item.category === selectedCategory || item.minsquarter === selectedCategory);
  //       return temp;
  //     });
  //     setFilteredData(tempItems.flat());
  //   }else{
  //     setFilteredData([...ActiveMatch])

  //   }
  // }

  // const filterItems = () => {
  //   if (selectedFilters.length > 0) {
  //     let filteredItems = [];
  //     selectedFilters.forEach((selectedCategory) => {
  //       const categoryFilteredItems = ActiveMatch.filter((item) => item.category === selectedCategory);
  //       const minsquarterFilteredItems = ActiveMatch.filter((item) => item.minsquarter === selectedCategory);
  //       filteredItems = filteredItems.concat(categoryFilteredItems, minsquarterFilteredItems);
  //     });
  //     // Remove duplicates by converting the array to a Set and back to an array
  //     const uniqueFilteredItems = Array.from(new Set(filteredItems));
  //     setFilteredData(uniqueFilteredItems);
  //   } else {
  //     setFilteredData([...ActiveMatch]);
  //   }
  // }

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let filteredItems = [];
      selectedFilters.forEach((selectedCategory) => {
        const categoryFilteredItems = ActiveMatch.filter((item) => item.category === selectedCategory);
        const minsquarterFilteredItems = ActiveMatch.filter((item) => item.minsquarter === selectedCategory);
        filteredItems = [...filteredItems, ...categoryFilteredItems, ...minsquarterFilteredItems];
      });
      // Remove duplicates based on ID
      const uniqueFilteredItems = filteredItems.filter((item, index) => {
        return filteredItems.findIndex(obj => obj.id === item.id) === index;
      });
      setFilteredData(uniqueFilteredItems);
    } else {
      setFilteredData([...ActiveMatch]);
    }
  }
  
  

  
  




  return (
    <div className='bg-[#fff6f2] w-full px-9 py-7'>

      {main === 'default' &&
        <div className='bg-[#ffeee6] p-[20px] rounded-[14px] px-20 xsm:px-0 '>
          <div className=' mt-10 flex 950px:flex-col-reverse 950px:justify-center 950px:items-center'>
            
            <div className='flex-1 justify-between flex-col sm:flex-col xsm:text-center'>

              {joinGame &&
                <div>
                  <p className='text font-Poppins mb-2 text-[#bbbbbb] 950px:text-center'>Result</p>
                  <h1 className='text-3xl font-bold font-Poppins uppercase mb-3 950px:text-center'>{joinGame}</h1>
                  <p className='text-[#bbbbbb] font-Poppins mb-3 950px:text-center'>Suggested Most Search</p>
                  <div className='mb-10 flex items-center flex-wrap md:gap-2 md:text-center'>

                  
                    {ActiveMatch.map((card) => (
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
                      className='ml-5 text-[#545454] cursor-pointer'
                      onClick={() => setSliders(!sliders)}
                      
                    />
                    <RestartAlt className='ml-5 text-[#545454]'/>
                  </div>

                  {sliders &&

                    <div className=' flex  md:flex md:flex-col '>
                      <div className=' w-1/2  1110:w-[90%] md:w-full'>
                        <p className='font-Poppins'>Type of Game</p>

                        <div className='  grid grid-cols-2 justify-center items-center gap-3 mt-3 404px:grid-cols-1'>
                          {filters.map((category, idx) => (
                            <button
                              onClick={() => handleFilterTypeofGame(category)}
                              key={idx}
                              className={`w-[150px] bg-none border-orange border rounded-full py-3 font-Poppins text-[12px] text-[#666666] px-7 md:mx-auto ${selectedFilters?.includes(category) ? 'bg-orange text-[#ffffff]' : ''} `}
                            
                            >
                              {category}
                            </button>
                          ))}
                        </div>

                      </div>
                      <div className='w-1/2 1139:flex 1139:justify-center 1139:flex-col 1139:items-center md:w-full'>
                        <p className='font-Poppins'>Mins. and Quarter</p>

                        <div className=' flex flex-col gap-3 mt-3 '>
                          {filters2.map((category, idx) => (
                            <button
                              onClick={() => handleFilterMinsandQuarter(category)}
                              key={idx}
                              className={`w-[150px] bg-none border-orange border rounded-full py-3 font-Poppins text-[12px] text-[#666666] px-7 md:mx-auto ${selectedFilters?.includes(category) ? 'bg-orange text-[#ffffff]' : ''}`}
                            
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
              
              <h1 className='font-Poppins font-bold text-3xl uppercase mb-2 mt-4 md:mx-auto'>Active Matches</h1>
              <p className='font-Poppins text-sm mb-4 text-[#bbbbbb] sm:text-center mt-2'>Discover the most recent active leagues and sporting events available <br /> for participation, and feel free to share them with your basketball-playing friends.</p>
             
              
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
