import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { joinGameContext } from '../App'

const Options = ({ id, icon, text, choice, placeholder, path }) => {
  const { setJoinGame, setFindCourt } = useContext(joinGameContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    if (id === 1) {
      setJoinGame(e.target.value);
    } else if (id === 3) {
      setFindCourt(e.target.value);
    }
  };

  return (
    <div className={`flex flex-col items-center mb-6 ${isHovered ? 'flex-col items-center' : 'items-center'} xsm:flex-col`}
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)}>
      <div className='bg-white rounded-[40px] p-4 w-[230px] hover:cursor-pointer xsm:p-2 xsm:w-[230px]'>  
        <div className='flex gap-8 items-center xsm:gap-4'>
          <FontAwesomeIcon icon={icon} className='icon fa-2x'/>    
          <input 
            className='font-Poppins text-[#818181] text-[11px] flex-1 outline-none' 
            placeholder={isHovered ? placeholder : text}
            onChange={handleChange}
          />
        </div>  
      </div>
      {isHovered && (
        <div className='bg-[#FA5000] p-4 rounded-[40px] text-white w-[100px] 
                     flex items-center justify-center hover:cursor-pointer xsm:p-2 xsm:mt-3 font-Poppins'>   
          <Link to={path}>{choice}</Link>
        </div>
      )}
    </div>
  );
}

export default Options;
