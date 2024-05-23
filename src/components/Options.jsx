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
    <div className={`flex flex-col items-center mb-6 space-y-4 hover:cursor-pointer`}
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)}>
      <FontAwesomeIcon icon={icon} className='fa-2x text-[#FA5000]'/>

      <input 
        className='font-Poppins text-[#818181] text-[11px] outline-none w-[120px] xsm:w-[100px] text-center'
        placeholder={isHovered ? placeholder : text}
        onChange={handleChange}
        style={{ border: 'none', background: 'none' }}
      />
      {isHovered && (
        <div className='bg-[#FA5000] p-2 rounded-[40px] text-white w-[100px] 
                     flex items-center justify-center xsm:mt-2 font-Poppins'>
          <Link to={path}>{choice}</Link>
        </div>
      )}
    </div>
  );
}

export default Options;
