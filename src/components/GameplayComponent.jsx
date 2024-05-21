import React from 'react'

const GameplayComponent = ({path, data, width, height, title, text}) => {
  return (
    <div className='flex flex-col bg-[#D9D9D9] rounded-full p-4 drop-shadow-shadowCard gap-4 
    xsm:gap-4 items-center w-[220px] h-[220px]'>
      <div className=' bg-orange p-7 rounded-full xsm:p-4 xsm:h-[50px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>    
            <path d={path} fill="#FCFCFC" fill-rule="evenodd" data-name={data}/>
        </svg>    
      </div>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='font-poppins font-bold text-2xl xsm:text-[1rem]'>
            {title}</h1>
        <p className='font-poppins text-[#696969] text-[10px] text-center'>{text}</p>
      </div> 
    </div>   
  )
}

export default GameplayComponent
