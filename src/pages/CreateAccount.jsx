import React, { useEffect, useRef, useState } from 'react'
import PictureComponent from '../components/PictureComponent';
import player from '../assets/image/player.png'
import {InfoRounded, Visibility, VisibilityOff} from '@mui/icons-material';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PHONE_REGEX =  /^((\+63)|0)[.\- ]?9\d{2}[.\- ]?\d{3}[.\- ]?\d{4}$/;
const EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$ /
const PHONE_EMAIL_REGEX = /^(((\+63)|0)[.\- ]?9\d{2}[.\- ]?\d{3}[.\- ]?\d{4}$)|(([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?))$/;

const CreateAccount = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pass, setPass] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    const [matchPass, setMatchPass] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [contactNum, setContactNum] = useState('');
    const [validContact, setValidContact] = useState(false);
    const [contactFocus, setContactFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)





    




    const [showPassword, setShowPassword] = useState(false);
    const [showMatchPassword, setShowMatchPassword] = useState(false);
    const [profilePic, setProfilePic] = useState('');



    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = PHONE_EMAIL_REGEX.test(email)
        console.log(result); //truue false
        console.log(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result); //truue false
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pass);
        console.log(result);
        console.log(pass);
        setValidPass(result);
        const match = pass === matchPass; // true false
        setValidMatch(match)
    
    }, [pass, matchPass])

    useEffect(() => {
        const result = PHONE_REGEX.test(contactNum);
        console.log(result); //truue false
        console.log(contactNum);
        setValidContact(result);
    }, [contactNum])

    useEffect(() => {
        setErrMsg('');
    }, [user, pass])



    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file));
        }
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        const v1 = PHONE_EMAIL_REGEX.test(email);
        const v2 = USER_REGEX.test(user);
        const v3 = PWD_REGEX.test(pass);
        const v4 = PHONE_REGEX.test(contactNum);
        if (!v1 || !v2 || !v3 || !v4){
            setErrMsg('Invalid Entry')
            return;
        }

        console.log(email, user, pass, contactNum, profilePic);
        setSuccess(true)

    }

    return (
        <div className='bg-[#FFF6F2] flex w-full overflow-x-hidden box-border px-20 lg:px-14 sm:p-0'>

            <div className='box-border mx-auto relative flex flex-col justify-center items-start gap-3 w-[50%] sm:w-[100%] pl-24 lg:pl-0 sm:items-center sm:scale-[0.9] sm:text-center'>
                <h1 className='mt-[20px] text-[40px] font-Poppins font-black'>SET-UP ACCOUNT</h1>
                <p className='font-Poppins text-sm text-[#A5A5A5] max-w-[400px]'>You
                    can now create your own account, just make sure that the information you provide is accurate.</p>
                <form className='sm:text-center' onSubmit={handelSubmit}>
                    <ol className='m-0 p-0 list-none  relative mx-auto'>
                        <li className='mb-5 '>
                            <input 
                                ref={userRef} 
                                type="text" 
                                placeholder="Email Address or Mobile Number" 
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className={`bg-[#FFEEE6] outline-none w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
                                          ${emailFocus && validEmail ? 'outline-green-600' : 'outline-none'} ${email && !validEmail? 'outline-red-600' : 'outline-none'} `}
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                            />
                             <p className={`${emailFocus && email && !validEmail? 'block' : 'hidden'} mt-2 text-red-600 font-Poppins text-[12px] w-[298px]`}>
                                <InfoRounded style={{fontSize:'20px'}}/>Input valid Email or Contact number <br />
                            </p>
                        </li>

                       
                        <li className='mb-5'>
                            <input 
                                type="text" 
                                placeholder='Username' 
                                required 
                                className={`bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
                                ${userFocus && validName ? 'outline-green-600' : 'outline-none'} ${user && !validName? 'outline-red-600' : 'outline-none'}`}
                                
                                autoComplete='off'
                                onChange={(e) => setUser(e.target.value)}
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                
                            />
                            <p className={`${userFocus && user && !validName? 'block' : 'hidden'} mt-2 text-red-600 font-Poppins text-[12px] w-[298px]`}>
                                <InfoRounded style={{fontSize:'20px'}}/> 4 to 24 characters. <br />
                                Must begin with a letter. <br />
                                Letters, numbers, underscores, hypens allowed.
                            </p>
                        </li>
                        <li className='mb-5 relative'>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="Password" 
                                required 
                                onChange={(e) => setPass(e.target.value)}
                                className={`bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
                                ${passFocus && validPass ? 'outline-green-600' : 'outline-none'} ${pass && !validPass? 'outline-red-600' : 'outline-none'}`}
                                onFocus={() => setPassFocus(true)}
                                onBlur={() => setPassFocus(false)}
                            />
                            { showPassword?
                                <Visibility className='absolute right-3 top-4' style={{fontSize:'15px', color: 'gray'}} onClick={() => setShowPassword(!showPassword)}/> 
                                :
                                <VisibilityOff className='absolute right-3 top-4' style={{fontSize:'15px',  color: 'gray'}} onClick={() => setShowPassword(!showPassword)}/>
                            }
                            <p className={`${passFocus && pass && !validPass? 'block' : 'hidden'} mt-2 text-red-600 font-Poppins text-[12px] w-[298px]`}>
                                <InfoRounded style={{fontSize:'20px'}}/> 8 to 24 characters. <br />
                                Must include uppercase and lowercase letters, a number and a special character. <br />
                                Allowed special characters: ! @ # $ %
                                
                            </p>

                        </li>
                        <li className='mb-5 relative'>
                            <input 
                                type={showMatchPassword ? "text" : "password"} 
                                placeholder="Confirm Password" 
                                required 
                                onChange={(e) => setMatchPass(e.target.value)}
                                className={`bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
                                ${matchFocus && matchPass && validMatch ? 'outline-green-600' : 'outline-none'} ${matchPass && !validMatch? 'outline-red-600' : 'outline-none'}`}
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />
                            { showMatchPassword?
                                <Visibility className='absolute right-3 top-4' style={{fontSize:'15px', color: 'gray'}} onClick={() => setShowMatchPassword(!showMatchPassword)}/> 
                                :
                                <VisibilityOff className='absolute right-3 top-4' style={{fontSize:'15px',  color: 'gray'}} onClick={() => setShowMatchPassword(!showMatchPassword)}/>
                            }
                            <p className={`${matchFocus && matchPass && !validMatch? 'block' : 'hidden'} mt-2 text-red-600 font-Poppins text-[12px] w-[298px]`}>
                                <InfoRounded style={{fontSize:'20px'}}/>Password not match<br />
                            </p>

                        </li>
                        <li className='mb-5'>
                            <input 
                                type="tel"  
                                required 
                                placeholder="Contact Number" 
                                onChange={(e) => setContactNum(e.target.value)}
                                className={`bg-[#FFEEE6] outline-none w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
                                            ${contactFocus && validContact ? 'outline-green-600' : 'outline-none'} ${ contactNum && !validContact? 'outline-red-600' : 'outline-none'}` }
                                onFocus={() => setContactFocus(true)}
                                onBlur={() => setContactFocus(false)}
                            />
                            <p className={`${contactFocus && contactNum && !validContact? 'block' : 'hidden'} mt-2 text-red-600 font-Poppins text-[12px] w-[298px]`}>
                                <InfoRounded style={{fontSize:'20px'}}/>Please enter a valid phone number.<br />
                            </p>
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

                    <button 
                        type='submit' 
                        className={`mb-5 h-[45px] outline-none bg-[#FA5000] px-5 py-2 rounded-[7px] font-Poppins text-[#ffffff] text-[13px] w-fit sm: self-center
                                    ${(!validEmail || !validName || !validPass || !validMatch || !validContact) ? 'cursor-not-allowed' : 'bg-[#FA5000] text-white'}`}

                        disabled={!validEmail || !validName || !validPass || !validMatch || !validContact? true : false}
                    >Create Account
                    </button>
                </form>



            </div>

            <div className='w-[50%] flex items-center justify-center sm:hidden 832px:scale-[0.8] 770px:scale-[0.7]'>
                <PictureComponent img={player} value={'create'} />
            </div>



        </div >


    )
}

export default CreateAccount
