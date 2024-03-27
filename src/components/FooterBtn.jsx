import React from 'react'

const FooterBtn = ({name, id}) => {
  return (
    <div className={`flex items-center justify-center py-4 px-8 rounded-[27px]
     text-white uppercase xsm:text-[13px]
    ${id === 1 ? 'bg-orange w-[50%] xsm:w-[100%]': 'bg-black'}`}> 
        <a href="" >
            {name}</a>
    </div>
  )
}

export default FooterBtn
