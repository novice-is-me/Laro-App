import React from 'react'
import { Link } from 'react-router-dom'

const FooterBtn = ({name, id, path}) => {
  return (
    <div className={`flex items-center justify-center p-5 rounded-[27px]
     text-white uppercase xsm:text-[13px] xl:p-4
    ${id === 1 ? 'bg-black w-[100%] xsm:w-[100%]': 'bg-black'}`}> 
        <Link href="" className='font-Poppins text-[14px] xsm:text-center' to={path}>
        {name}</Link>
    </div>
  )
}

export default FooterBtn
