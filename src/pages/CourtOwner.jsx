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
    <div>
        <div className='bg-bgColor flex justify-between'> 
        {main === 'default' && 
            <div className='mx-auto pl-[5rem] relative flex flex-col justify-center items-start gap-3  
                w-[50%] sm:w-[100%] sm:items-center sm:pl-0 sm:scale-[0.9] 
                sm:text-center'>
                <div className='mb-8'> 
                    <h1 className='text-start sm:text-center font-Poppins font-black text-[40px] my-4 '>
                        Apply as Court Owner</h1>
                    <p className='font-poppins text-[#A5A5A5] text-[17px]'>You can now create your own account, just make sure that
                        the information you provide is accurate.</p>
                </div>
                <div className='flex gap-10 mb-4'>
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
            <div className='mx-auto pl-[5rem] relative flex flex-col justify-center items-start gap-3  
            w-[50%] sm:w-[100%] sm:items-center sm:pl-0 sm:scale-[0.9] 
            sm:text-center pr-12'>
                    <div className='mb-8'>
                        <h1 className='text-start sm:text-center font-Poppins font-black text-[40px] my-4'>
                            Success!</h1>
                        <p className='font-poppins text-[#A5A5A5] text-[17px]'>Wait confirmation from the admin, and you will receive the confirmation
                            on your LARO account or via email. Thank you.
                        </p>
                    </div>
                    <div className='flex gap-8'>
                        <Link to='/' className='bg-[#FA5000] text-white py-4 px-12 text-[12px] rounded-[7px]'>
                            Home</Link>  
                        <Link to='/dashboard' className='bg-[#101010] text-white py-4 px-10 text-12px rounded-[7px]'>
                            Go to my Dashboard</Link>
                    </div>
            </div>
        }
            <div className='w-[50%] flex items-center justify-center sm:hidden 
            832px:scale-[0.8] 770px:scale-[0.7] '>
                    <CourtImgComponent img={img} />
            </div>  
        </div> 
    </div>
  )
}

export default CourtOwner
