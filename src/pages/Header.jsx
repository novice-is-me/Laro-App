import React from 'react'
import { Logo } from '../assets'
import { links } from '../constant/index'
import NavLinks from '../components/NavLinks' 
import LoginSignUpButton from '../components/LoginSignUpButton'

const Header = () => {
  return (
    <div className='py-8 px-[3rem] flex justify-between bg-bgColor items-center'>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className='flex gap-[100px] items-center'>
        <div className='flex gap-[100px]'>
          {links[0].navigationBar.map((link, i) =>{
            return <NavLinks text={link.name} path={link.path} key={i} /> 
          })}
        </div>
        <div className='flex gap-4'>
          {links[2].headerBtn.map((link, i)=>{
            return <LoginSignUpButton text={link.name} path={link.path} value={link.id} key={i}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Header
