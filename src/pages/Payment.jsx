// Payment.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { twoDudes, Logo } from '../assets';
import PaymentHeader from './PaymentHeader';
import PaymentForm from '../components/PaymentForm'; // Corrected import

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null); // State to track selected payment method

  // Function to handle payment method selection
  const handleSelectPayment = (method) => {
    setSelectedPayment(method);
  }

  // Function to handle form submission
  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // You can implement logic to handle form submission here
  };

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
          <p className="font-Poppins text-black font-semibold text-2xl text-[40px]">Payment</p>
          <br />
          <p className="font-Poppins text-[#717171] text-[15px]">You can now make a payment here using your credit amount.</p>
        </div>

        {/* Render form fields based on selectedPayment state */}
        <div className="border w-[100%] h-auto  pl-2 pb-4 ">
          
      <PaymentHeader onSelectPayment={handleSelectPayment} />
      </div>
      <div className=' border w-[70%] pr-4'>
      <PaymentForm paymentMethod={selectedPayment} onFormSubmit={handleFormSubmit} />
      {/* Add other components as needed */}
    </div>

        <div className="absolute flex flex-col gap-2 mt-4 bottom-8 right-14 lg:static lg:mt-1 lg:bottom-auto lg:flex-row lg:mb-6 lg:mr-12 lg:gap-4 lg:flex lg:justify-end">
          <Link to="/eventSuccess" className='text-[15px] bg-[#FA5000] font-Poppins border text-white py-4 px-10 rounded-[10px] lg:w-auto '>
            Pay
          </Link>
        </div>
      </div>

      {/* Second screen */}
      <div className="relative w-full h-[780px] lg:mr-2 mb-10 lg:mb-0">
        <img
          src={twoDudes}
          alt="girls"
          className="w-full h-full object-cover rounded-[30px]"
        />
        <div className="absolute bottom-0 left-0 text-white bg-orange-500 rounded p-2 lg:p-4 m-6 flex flex-col gap-4">
          <p className='text-white font-Poppins font-semibold text-[16px]'>
            Be part of our organizer team and earn money.
          </p>
          <div>
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
