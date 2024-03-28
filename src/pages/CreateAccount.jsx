import React, { useState } from 'react'
import PictureComponent from '../components/PictureComponent';
import player from '../assets/image/player.png' 


const CreateAccount = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [profilePic, setProfilePic] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file));
        }
    };

    return (
        <div className='bg-[#FFF6F2] flex w-screen overflow-x-hidden box-border'>

            <div className='box-border mx-auto relative flex flex-col justify-center items-start gap-3  w-[50%] pl-[15%] sm:w-[100%] sm:items-center sm:pl-0 sm:scale-[0.9] sm:text-center'>
                <h1 className='mt-[20px] text-[40px] font-Poppins font-black'>SET-UP ACCOUNT</h1>
                <p className='font-Poppins text-sm text-[#A5A5A5] max-w-[400px]'>You
                    can now create your own account, just make sure that the information you provide is accurate.</p>
                <form className='sm:text-center'>
                    <ol className='m-0 p-0 list-none  relative mx-auto'>
                        <li className='mb-5 '>
                            <input type="text" placeholder="Email Address or Mobile Number" required className='bg-[#FFEEE6] outline-none w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins' />
                        </li>
                        <li className='mb-5'>
                            <input type="text" placeholder='Username' required className='bg-[#FFEEE6] outline-none w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins' />
                        </li>
                        <li className='mb-5'>
                            <input type={showPassword ? "text" : "password"} placeholder="Password" required className='bg-[#FFEEE6] outline-none w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins' />
                        </li>
                        <li className='mb-5'>
                            <input type="tel" pattern="[0-9]{11}" required placeholder="Contact Number" className='bg-[#FFEEE6] outline-none w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins' />
                        </li>
                        <li className='mb-5'>
                            <div className="flex items-center justify-end w-[298px]">
                                <div className="w-16 h-16 rounded-full overflow-hidden bg-white">
                                    <img src={profilePic || "src/assets/image/noimg.png"} alt='' className="object-cover w-full h-full" />
                                </div>
                                <label htmlFor="file-upload" className='bg-[#FFEEE6] outline-none w-[160px] h-[45px] rounded-[7px] border-none flex justify-center items-center font-Poppins text-[#A5A5A5] ml-4 text-[12px]'>Upload Image</label>
                                <input id="file-upload" type="file" accept="image/jpeg, image/jpg, image/jpg" className="hidden" onChange={handleFileChange} />
                            </div>
                        </li>
                    </ol>

                    <button type='submit' className='mb-5 h-[45px] outline-none bg-[#FA5000] px-5 py-2 rounded-[7px] font-Poppins text-[#ffffff] text-[13px] w-fit sm: self-center'>Create Account</button>
                </form>



            </div>

            <div className='w-[50%] flex items-center justify-center sm:hidden 832px:scale-[0.8] 770px:scale-[0.7]'>
                <PictureComponent img={player} value={'create'}/>
            </div>



        </div >


    )
}

export default CreateAccount
