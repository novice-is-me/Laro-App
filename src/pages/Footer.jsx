import React from 'react'
import {Logo} from '../assets/index'
import { links } from '../constant'
import FooterLinks from '../components/FooterLinks'
import FooterBtn from '../components/FooterBtn'

const Footer = () => {
  return (
    <div className='flex flex-col bg-bgColor p-[3rem]'>
      <div className='flex flex-wrap justify-between gap-4 xl:gap-y-8'> 
        <div className='flex xl:items-center'>
            <img src={Logo} alt=""
            className='h-[60px]' />
        </div>
        <div className='flex gap-[5rem] flex-wrap xsm:gap-4 '>
          {links[1].footerLink.map((links, i)=>{
            return <FooterLinks {...links} key={i}/>
          })}
        </div>
        <div className='grid grid-cols-2 pt-5 gap-4 xl:m-auto'> 
          {links[4].footerBtn.map((link, i)=>{
          return <FooterBtn {...link} key={i}/>
          })} 
        </div>
      </div>
      <div className='flex justify-center gap-[5rem] mt-8 xsm:flex-col xsm:gap-4'>
      {links[3].policies.map((policy, i)=>{
            return <p className='font-poppins' key={i}>{policy}</p>
          })}  
      </div>
    </div> 
    
  )
}

export default Footer
