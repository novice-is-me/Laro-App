import React, { useState } from 'react'
import { useEffect } from 'react'
import { Logo } from '../assets'
import { links } from '../constant/index'
import NavLinks from '../components/NavLinks' 
import LoginSignUpButton from '../components/LoginSignUpButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };  

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  
  return (  
      <div className={`py-8 px-[5rem] sticky top-0 flex justify-between bg-bgColor
      items-center w-full z-[99] xsm:px-5  
      ${isScrolled ? 'backdrop-filter backdrop-blur-lg bg-opacity-30' : 'bg-bgColor'}`}>      
        <div> 
          <img src={Logo} alt="logo"/>
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
              {isClicked && <div className='absolute  bg-bgColor right-0 bottom-[-3] mt-5 py-6 px-10 z-10 
               border border-orange rounded-[10px]'>
                {links[0].navigationBar.map((link, i) =>{
                  return <div className='py-2 xsm:text-center'>
                    <Link to={link.path} className='font-poppins hover:text-orange'
                    onClick={() => setIsClicked(false)}
                    >{link.name}</Link>
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
