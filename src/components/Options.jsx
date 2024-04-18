import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { joinGameContext } from '../App'

const Options = ({id, icon, text, choice, placeholder, path}) => {

  const {setJoinGame} = useContext(joinGameContext)
  
  const [isHovered, setIsHovered] = useState(false)  

  const handleChange= (e) => {
    if (id === 1){
      setJoinGame(e.target.value)
      return;
    } else if (id === 3){
      setFindCourt(e.target.value)
      return;
    }
  }

  return ( 
    <div className='flex items-center mb-6 xsm:flex-col'
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}>  
      <div className='bg-white rounded-[40px] p-4 w-[250px] hover:cursor-pointer xsm:p-2 xsm:w-[230px]'>  
        <div className='flex gap-8 items-center'>
            <FontAwesomeIcon icon={icon}  
            className='icon fa-2x'/>    
            <input 
              className='font-Poppins text-[#818181] text-[11px] flex-1 outline-none' 
              placeholder={(isHovered === true ? placeholder : text)}
              onChange={handleChange}
              
            />
            
        </div>  
      </div>    
      {/* add link for path in future */}
      {isHovered  &&  
        <div className=' bg-[#FA5000] p-4 rounded-[40px] text-white w-[100px] 
        flex items-center justify-center hover:cursor-pointer xsm:p-2 xsm:mt-3'>   
          <Link to={path}>{choice}</Link>
        </div> 
      }  
    </div>
  )
}

export default Options
