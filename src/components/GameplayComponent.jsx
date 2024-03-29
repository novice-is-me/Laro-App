import React from 'react'

const GameplayComponent = ({path, data, width, height, title, text}) => {
  return (
    <div className='flex bg-white rounded-[20px] p-4 drop-shadow-shadowCard gap-4 
    xsm:gap-4 items-center w-[300px]'>
      <div className=' bg-orange p-7 rounded-full xsm:p-4 xsm:h-[50px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>    
            <path d={path} fill="#FCFCFC" fill-rule="evenodd" data-name={data}/>
        </svg>    
      </div>
      <div>
        <h1 className='font-poppins font-bold text-2xl xsm:text-[1rem]'>
            {title}</h1>
        <p className='font-poppins text-[#B1B1B1] text-[10px]'>{text}</p>
      </div> 
    </div>   
  )
}

export default GameplayComponent
