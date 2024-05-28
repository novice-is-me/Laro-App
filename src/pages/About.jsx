import React from 'react'
import { aboutImg, about, } from '../assets'
import { useMediaQuery } from '@mui/material'
import ViewCourt from '../components/ViewCourt'

const About = () => {

  const xl = useMediaQuery('(max-width:1279px)')

  return (
    <div className='bg-bgColor w-full px-9 py-3 relative font-Poppins xsm:px-3'>
    <div className=' h-full flex w-full about-bg xsm:p-[1rem] xl:p-[1rem] rounded-[20px] 
      pb-0  items-center gap-[4rem] mb-12  xl:about-bg2 xl:gap-1 xl:pb-8 sm:text-center lg:flex lg:flex-col '> 
      
      <div className=' z-[1] h-full xl:h-full  '> 
              <div className='bg-black w-fit h-[55px] rounded-[40px] flex items-center pl-[10px] 
              absolute bottom-[40px] left-[400px] xsm:hidden'>
                <div className='w-[40px] h-[40px] bg-[#ffffff] rounded-[50%] flex self-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-[25px] fill-[#fa5000]'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                </div>
                <h1 className='text-[#ffffff] mx-[12px] font-Poppins text-xl'>Organize </h1>
              </div>
            </div>
            
      <div className='flex flex-row lg:flex lg:flex-col gap-8 xl:items-center 2xl:items-center '>
      <div className='py-[5rem] px-[6rem] w-full h-full lg:py-0 lg:px-0 xl:py-0 xl:px-0  2xl:py-0 2xl:px-0 '>
      <img src={about} alt="" className='w-full h-full'/> 
      </div>

<div className='flex flex-col w-full'>
      <div className='w-full  flex flex-col py-[8rem] lg:py-0 lg:flex xl:py-0 xl:px-0 lg:items-center justify-center'>
        <div className=''>
            <h1 className='font-poppins uppercase text-[40px] font-bold mb-8 '>
              About Laro</h1></div>

              <div className='w-[65%]'>
            <p className='font-poppins  text-[30px] font-bold mb-8 text-justify'>
              Work-life balance isn't just a goal, its a way of life </p></div>

              <div className='w-[80%]'>
              <p className=' font-poppins text-black text-[18px]  w-full text-justify'>
              At Laro, we believe ambition doesn't have to come at the cost of well-being.
               Founded by like-minded sports enthusiasts and business leaders, we're redefining
               success through mindful balance. Our curated experiences and innovate products
               bridge the gap between professionals pursuits nad personal passions, empowering
               you to conquer whataever life brings you</p></div>
          </div>

          
          <div className='mt-20 flex flex-col  gap-6 sm:items-center mb-10 '>
          <div className=' '>    
            <p>Follow our Social Media Page</p>
            </div>
            <div className='flex gap-8'>
              <a href="https://www.facebook.com/larophilippines">
                <svg xmlns="http://www.w3.org/2000/svg" width="38.474" height="38.474"><path d="M38.474 19.355C38.474 8.665 29.862 0 19.24 0 8.612.002 0 8.665 0 19.357c0 9.659 7.035 17.665 16.23 19.117V24.95h-4.881v-5.593h4.885V15.09c0-4.85 2.873-7.528 7.266-7.528 2.106 0 4.306.377 4.306.377v4.76H25.38c-2.387 0-3.133 1.494-3.133 3.025v3.631h5.333l-.85 5.593h-4.485v13.524c9.194-1.452 16.23-9.459 16.23-19.117Z" fill={xl ? '#ffffff' : '#FA5000'} fill-rule="evenodd" data-name="Path 6" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/laroph/" >
                <svg xmlns="http://www.w3.org/2000/svg" width="38.47" height="38.47" viewBox="1139 2459.2 38.47 38.47"><g data-name="linkedin"><g data-name="Group 14"><path d="M1139 2461.956c0-1.522 1.265-2.756 2.825-2.756h32.82c1.56 0 2.825 1.234 2.825 2.756v32.959c0 1.522-1.265 2.755-2.826 2.755h-32.819c-1.56 0-2.825-1.233-2.825-2.755v-32.96Zm11.885 29.448v-17.371h-5.773v17.371h5.773Zm-2.886-19.744c2.013 0 3.266-1.332 3.266-3-.036-1.706-1.25-3.001-3.227-3.001-1.976 0-3.268 1.298-3.268 3 0 1.669 1.253 3 3.191 3h.038Zm11.801 19.744v-9.701c0-.52.038-1.039.192-1.41.416-1.035 1.366-2.11 2.963-2.11 2.089 0 2.923 1.591 2.923 3.928v9.293h5.773v-9.963c0-5.338-2.847-7.82-6.646-7.82-3.063 0-4.436 1.684-5.205 2.87v.06h-.038l.038-.06v-2.458h-5.77c.072 1.63 0 17.371 0 17.371h5.77Z" fill={xl ? '#ffffff' : '#FA5000'} fill-rule="evenodd" data-name="Path 7" /></g></g></svg>
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" width="38.034" height="38.023" viewBox="1215 2459.647 38.034 38.023"><g data-name="instagram-filled"><path d="M1237.96 2479.072c0-2.058-1.682-3.732-3.748-3.732-2.067 0-3.748 1.674-3.748 3.732 0 2.058 1.681 3.731 3.748 3.731 2.066 0 3.748-1.673 3.748-3.731Zm5.569-19.425h-19.024c-5.24 0-9.505 4.245-9.505 9.464v2.637h13.987a9.002 9.002 0 0 1 5.225-1.665c1.946 0 3.749.618 5.225 1.665h13.597v-2.637c0-5.219-4.264-9.464-9.505-9.464Zm3.85 9c0 .58-.476 1.052-1.057 1.052h-3.263a1.057 1.057 0 0 1-1.056-1.051v-3.25c0-.578.475-1.051 1.056-1.051h3.263c.581 0 1.056.473 1.056 1.052v3.249Zm-4.138 10.425c0 4.957-4.051 8.989-9.03 8.989-4.978 0-9.028-4.032-9.028-8.99 0-1.364.309-2.658.858-3.818H1215v12.953c0 5.219 4.264 9.464 9.505 9.464h19.024c5.241 0 9.505-4.245 9.505-9.464v-12.953h-10.651a8.904 8.904 0 0 1 .858 3.819Z" fill={xl ? '#ffffff' : '#FA5000'} fill-rule="evenodd" data-name="Path 8" /></g></svg>
            </div>
          </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default About
