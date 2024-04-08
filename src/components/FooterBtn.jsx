import React from 'react'
import { Link } from 'react-router-dom'

const FooterBtn = ({name, id, path}) => {
  return (
    <div className={`flex items-center justify-center px-8 rounded-[27px]
     text-white uppercase xsm:text-[13px] xl:p-4
    ${id === 1 ? 'bg-orange w-[50%] xsm:w-[100%]': 'bg-black'}`}> 
        <Link href="" className='text-[12px]' to={path}>
            {name}</Link>
    </div>
  )
}

export default FooterBtn
