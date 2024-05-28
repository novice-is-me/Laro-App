import React, { useEffect, useState } from 'react'
import { CourtImg, CourtImg2, CourtOwnerImg } from '../assets'
import CourtOwnerForm from '../components/CourtOwnerForm'
import CourtImgComponent from '../components/CourtImgComponent'
import Setup from '../components/Setup'
import {Link} from 'react-router-dom'

const CourtOwner = () => { 
    const [activeOwner, setActiveOwner] = useState(false)
    const [activeSetup, setActiveSetup] = useState(false)
    const [isShow, setIsShow] = useState('default')
    const [main, setMain] = useState('default') 
    const [img, setImg] = useState(CourtOwnerImg)

    
    useEffect(() =>{
        if (isShow === 'default'){
            setActiveOwner(true)
        }if (isShow === 'calendar'){
            setActiveSetup(true)
            setActiveOwner(false)
            setImg(CourtImg)  
        }if (isShow === 'publish'){
            setImg(CourtImg2)
        }
    })

    
  return (
    <div className=' bg-bgColor h-[85vh] 1110:h-full sm:h-[80vh]'>
        <div className='flex justify-between h-full 1110:flex-col-reverse 1110:text-center'> 
        {main === 'default' && 
            <div className='mx-auto w-fit pl-[5rem] h-full relative flex flex-col justify-center items-start gap-3  
                 sm:w-[100%] sm:items-center sm:pl-0 sm:scale-[0.9] sm:text-center 1110:pl-0'>
                <div className='mb-8'> 
                    <h1 className='text-start 1110:text-center font-Poppins font-black text-[40px] my-4 '>
                        Apply as Court Owner</h1>
                    <p className='font-poppins text-[#A5A5A5] text-[17px]'>You can now create your own account, just make sure that
                        the information you provide is accurate.</p>
                </div>
                <div className='flex gap-10 mb-4 w-full 1110:justify-center xsm:gap-4'>  
                    <p className={`font-poppins ${activeOwner ? 'text-[#101010]': 'text-[#A5A5A5]' }`}> Owner Info</p> 
                    {activeOwner && <p>&#10095;</p>}
                    <p className={`font-poppins ${activeSetup ? 'text-[#101010]': 'text-[#A5A5A5]' }`}>Schedule Setup</p>
                    {activeSetup && <p>&#10095;</p>}
                    <p className={`font-poppins text-[#A5A5A5]`}>Publish </p>
                </div> 
                <div className='flex w-full'>    
                    {isShow === 'default' && <CourtOwnerForm setIsShow={setIsShow} />}
                    {isShow === 'calendar' && <Setup setMain={setMain} setIsShow={setIsShow}/>}  
                </div>      
            </div>  
        }
        {main === 'second' && 
            <div className='flex flex-col gap-5 justify-center mx-[5rem] xsm:p-3 xsm:mx-0 flex-1'>
                    <div className=''>
                        <h1 className='text-start 1110:text-center font-Poppins font-black text-[40px] my-4'>
                            Success!</h1>
                        <p className='font-poppins text-[#A5A5A5] text-[17px] xsm:text-[15px]'>
                            Wait confirmation from the admin, and you will receive the confirmation
                            on your LARO account or via email. Thank you.
                        </p>
                    </div>
                    <div className='flex gap-8 1110:justify-center'>
                        <Link to='/' className='flex itemscenter justify-center py-4 px-8 bg-[#FA5000] text-white text-base rounded-xl'>
                            Home</Link>  
                        <Link to='/dashboard' className='flex itemscenter justify-center py-4 px-8 bg-[#101010] text-white text-base rounded-xl '>
                            Go to my Dashboard</Link>
                    </div>
            </div>
        }
            <div className='w-[50%] flex items-center justify-center h-full 1110:w-full 1110:h-fit 1110:scale-90'>
                    <CourtImgComponent img={img} />
            </div>  
        </div> 
    </div>
  )
}

export default CourtOwner
