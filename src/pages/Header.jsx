import React, { useState } from 'react'
import { Logo } from '../assets'
import { links } from '../constant/index'
import NavLinks from '../components/NavLinks' 
import LoginSignUpButton from '../components/LoginSignUpButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className='py-8 px-[3rem] flex justify-between bg-bgColor items-center'>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className='flex gap-[100px] items-center relative'>
        <div className='flex gap-[100px] lg:hidden'>
          {links[0].navigationBar.map((link, i) =>{
            return <NavLinks text={link.name} path={link.path} key={i} /> 
          })}
        </div>
        <div className='flex gap-4 items-center'>
          {links[2].headerBtn.map((link, i)=>{
            return <LoginSignUpButton text={link.name} path={link.path} value={link.id} key={i}/>
          })} 
          <div className='relative'>
            <FontAwesomeIcon icon={faBars} 
            className=' fa-2xl hidden lg:block hover:cursor-pointer'
            onClick={() => setIsClicked(!isClicked)}/> 
            {/* make this component with navlinks when almost done w/ proj */}
            {isClicked && <div className='absolute bg-white right-0 bottom-[-3] mt-5 py-6 px-10 z-10'>
              {links[0].navigationBar.map((link, i) =>{
                return <div className='py-2'>
                  <a href="" className='font-poppins'>{link.name}</a>
                </div>   
              })} 
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
