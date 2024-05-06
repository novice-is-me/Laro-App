import React, { useState, useRef, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { twoDudes, Logo } from '../assets';
import { Link } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm';

const Payment = () => {
  const [formData, setFormData] = useState([{ emailAdd: '' }]);
  const formContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the form container when formData updates
    if (formContainerRef.current) {
      formContainerRef.current.scrollTop = formContainerRef.current.scrollHeight;
    }
  }, [formData]);

  return (
    <div className="bg-black min-h-screen flex flex-row lg:flex-col justify-center items-center p-20 gap-4">
      {/* First screen */}
      <div className="bg-white rounded-[30px] p-12 relative w-full h-[780px] lg:h-auto lg:mr-2 mb-10 lg:mb-0 lg:p-2 ">
        <div className="flex justify-between items-center p-4 mb-4 pt-8 pb-4">
          <Link to="/">
            <div className="cursor-pointer h-auto lg:w-[70%]">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>

        </div>

        <div className="pl-6 lg:pl-3 pt-2 pb-4 w-[65%]">
          <p className="font-Poppins text-black font-semibold text-2xl text-[40px]">Payment</p><br />
          <p className="font-Poppins text-[#717171] text-[15px]">You can now make a payment here using your credit amount.</p>
        </div>

        {/* Render form fields based on formData state */}
        
        <div ref={formContainerRef} className=" w-[80%] h-auto ">
        <p className="font-Poppins text-black font-semibold text-2xl text-[40px] pb-2">Voucher</p>
          {formData.map((data, index) => (
            <PaymentForm key={index} data={data} setData={(newData) => {
              const updatedFormData = [...formData];
              updatedFormData[index] = newData;
              setFormData(updatedFormData);
            }} />
          ))}
          
        </div>

        <div className="  absolute flex flex-col gap-2 mt-4 bottom-8 right-14 lg:static lg:mt-1 lg:bottom-auto lg:flex-row lg:mb-6 lg:mr-12 lg:gap-4 lg:flex lg:justify-end">
          <Link to="/eventSuccess" className='text-[15px] bg-[#FA5000] font-Poppins border text-white py-4 px-10 rounded-[10px] lg:w-auto '>
            Pay
          </Link>
        </div>
      </div>

      {/* Second screen */}
      <div className="relative w-full h-[780px] lg:mr-2 mb-10 lg:mb-0 ">
        <img
          src={twoDudes}
          alt="girls"
          className="w-full h-full object-cover rounded-[30px]"
        />
        <div className="absolute bottom-0 left-0 text-white bg-orange-500 rounded p-2 lg:p-4 m-6 flex flex-col gap-4">
          <p className='  text-white font-Poppins font-semibold text-[16px] '>
            Be part of our organizer <br /> team and earn money.
          </p>
          <div className=''>
            <button className='bg-orange p-4 w-full text-white font-Poppins rounded-[10px]'>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
