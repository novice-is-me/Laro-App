import React from 'react'

const FooterBtn = ({name, id}) => {
  return (
    <div className=''> 
        <a href="" className={`py-4 px-8 rounded-[27px] text-white uppercase
        ${id === 1 ? 'bg-orange': 'bg-black'}`}>
            {name}</a>
    </div>
  )
}

export default FooterBtn
