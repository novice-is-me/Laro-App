import React from 'react'

const FooterLinks = ({title, links}) => {
  return (
    <div className='font-poppins'>
      <h6 className='font-semibold mb-4'>{title}</h6>
      <ul className=''>
        {links.map((link, i) =>{
            return <li key={i}
            className='text-[#BBBBBB] mb-4'><a href="">{link}</a></li>
        })} 
      </ul>
    </div>
  )
}

export default FooterLinks
