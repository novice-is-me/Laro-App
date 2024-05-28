import React, { useEffect, useRef, useState } from 'react'
import { InfoRounded, VisibilityOff, Visibility } from '@mui/icons-material';
import axios from 'axios';

 const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
 const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/; 
 const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
 const PHONE_REGEX = /^(((\+63)|0)[.\- ]?9\d{2}[.\- ]?\d{3}[.\- ]?\d{4}$)|(([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?))$/;

const CourtOwnerForm = ({setIsShow}) => {

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState('')
  const [emailFocus, setEmailFocus] = useState(false)

  const [user, setUser] = useState('')
  const [validUser, setValidUser] = useState('')
  const [userFocus, setUserFocus] = useState('')

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState('')
  const [pwdFocus, setPwdFocus] = useState('')

  const [contact, setContact] = useState('')
  const [validContact, setValidContact] = useState('')
  const [contactFocus, setContactFocus] = useState('')

  const [showPass, setShowPass] = useState('')

  const userRef = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();
    setEmail('')
    setUser('')
    setContact('')
    setPwd('')
    setIsShow('calendar'); 
    console.log('calendar')
  }

  useEffect(() =>{
    userRef.current.focus()
  }, [])

  
  useEffect(() =>{
    const result = EMAIL_REGEX.test(email)
    console.log(result)
    setValidEmail(result)
  }, [email])

  useEffect(() =>{
    const result = USER_REGEX.test(user)
    console.log(result)
    setValidUser(result)
  }, [user])

  useEffect(() =>{
    const result = PWD_REGEX.test(pwd)
    console.log(result)
    setValidPwd(result)
  }, [pwd])

  useEffect(() =>{
    const result = PHONE_REGEX.test(contact)
    console.log(result)
    setValidContact(result)
  }, [contact])

  // const handleSubmit = async (e) =>{
  //   e.preventDefault();

  //   try{
  //     const response = await axios.post('http://localhost:3002/api/v1/court-owner/create',
  //     {
  //       username: user,
  //       password: pwd,
  //       email_address: email,
  //       contact_number: contact
  //     });
  //     console.log("Success", response.data)
  //   } catch(e){
  //     console.log(e)
  //   }
  // }
  
  return (
    <div className='w-full flex 1110:justify-center pb-5'>
      <form className='flex flex-col gap-6 w-[55%] 1110:w-full' onSubmit={handleSubmit}>
        <input type="email"
          value={email}
          ref={userRef}
          autoComplete='off'
          required
          aria-describedby='emailnote'
          placeholder='Email Address or Mobile Number'
          className={`font-poppins p-4 bg-[#FFEEE6] ${emailFocus && !validEmail ? 'outline-red-500' : ''}`} 
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)} 
          onBlur={() => setEmailFocus(false)}/>
          <p id='emailnote' className={` text-red-600 font-Poppins text-[12px]
           ${emailFocus && !validEmail ? 'block' : 'hidden'}`}>
           <InfoRounded style={{fontSize:'20px'}}/>  Input valid Email or Contact number <br />
          </p>

        <input type="text"
          value={user}
          required
          aria-describedby='uidnote'
          placeholder='Username'
          autoComplete='off'
          className={`font-poppins p-4 bg-[#FFEEE6] ${userFocus && !validUser ? 'outline-red-500' : ''}`}
          onChange={(e) => setUser(e.target.value)}
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}/>
          <p id='uidnote' className={` text-red-600 font-Poppins text-[12px]
           ${userFocus && !validUser ? 'block' : 'hidden'}`}>
           <InfoRounded style={{fontSize:'20px'}}/> 4 to 24 characters. Must begin with a letter. <br />
                  Letters, numbers, underscores, hypens allowed<br />
          </p>
          
        <div className='w-full relative'>
          <input type='password'
            value={pwd}
            required
            aria-describedby='pwdnote'
            placeholder='Password'
            className={`w-full font-poppins p-4 bg-[#FFEEE6] relative ${pwdFocus && !validPwd ? 'outline-red-500' : ''}`}
            onChange={(e) => setPwd(e.target.value)}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}/>
            <span> {showPass ?  
              <Visibility className='absolute right-4 top-5' style={{fontSize:'15px', color: 'gray'}} onClick={() => setShowPass(!showPass)}/> 
                :
              <VisibilityOff className='absolute right-4 top-5' style={{fontSize:'15px',  color: 'gray'}} onClick={() => setShowPass(!showPass)}/>}</span>
        </div>
          <p id='pwdnote' className={` text-red-600 font-Poppins text-[12px]
           ${pwdFocus && !validPwd ? 'block' : 'hidden'}`}>
           <InfoRounded style={{fontSize:'20px'}}/> 8 to 24 characters.
              Must include uppercase and lowercase letters, a number and a special character. <br />
          </p>

        <input type="number"
          value={contact}
          required
          aria-describedby='contactnote'
          placeholder='Contact Number'
          className='font-poppins p-4 bg-[#FFEEE6]'
          onChange={(e) => setContact(e.target.value)}
          onFocus={() => setContactFocus(true)}
          onBlur={() => setContactFocus(false)}/>
          <p id='contactnote' className={` text-red-600 font-Poppins text-[12px]
            ${contactFocus && !validContact ? 'block' : 'hidden'}`}>
            <InfoRounded style={{fontSize:'20px'}}/> Enter a valid phone number
          </p>

        <div className='flex mt-5 1110:justify-center justify-start'>    
            <button className='bg-orange px-20 py-4 rounded-xl text-white 1110:w-full'>Next</button>  
        </div>  
      </form> 
    </div>
      
  )
}

export default CourtOwnerForm
