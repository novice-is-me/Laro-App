import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'

const NavLinks = ({text, path}) => {
  const active = 'border-b-[5px] border-b-orange rounded-[3px]'

  return (
    <div className='flex'> 
      <NavLink to={path} 
      style={{width: '30px'}}
      className={({isActive}) => isActive ? active : ''}>
        <p href="" className='font-poppins border-0 text-sm'>{text}</p>
      </NavLink>  
    </div>
  )
}

export default NavLinks
