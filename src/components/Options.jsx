import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Options = ({icon, text, choice, placeholder, path}) => {
  const [isHovered, setIsHovered] = useState(false)  

  return ( 
    <div className='flex items-center mb-6 xsm:flex-col'
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}>  
      <div className='bg-white font-Poppins rounded-[40px] p-4 w-[250px] hover:cursor-pointer xsm:p-2 xsm:w-[230px]'>  
        <div className='flex gap-8 items-center'>
            <FontAwesomeIcon icon={icon}  
            className='icon fa-2x'/>    
            <input className='font-poppins text-[#818181] text-[11px] flex-1 outline-none' 
            placeholder={(isHovered === true ? placeholder : text)}/>
        </div>  
      </div>    
      {/* add navlink for path in future */}
      {isHovered  &&  
        <div className=' bg-[#FA5000] font-Poppins p-4 rounded-[40px] text-white w-[100px] 
        flex items-center justify-center hover:cursor-pointer xsm:p-2 xsm:mt-3'>   
          <Link to={path}>{choice}</Link>
        </div> 
      }  
    </div>
  )
}

export default Options
