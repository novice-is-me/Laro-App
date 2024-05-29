// Payment.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { twoDudes, Logo } from "../assets";
import PaymentHeader from "./PaymentHeader";
import PaymentForm from "../components/PaymentForm"; // Corrected import

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null); // State to track selected payment method

  // Function to handle payment method selection
  const handleSelectPayment = (method) => {
    setSelectedPayment(method);
  };

  // Function to handle form submission
  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // You can implement logic to handle form submission here
  };

  return (
    <div className="bg-black h-screen flex p-20 gap-5 1110:flex-col-reverse 1110:h-full 1110:p-0 1110:bg-white">
      {/* First screen */}
      <div className="flex flex-col gap-3 bg-white rounded-[30px] p-12 relative w-full h-full 1110:rounded-none">
        <div className="flex justify-between items-center ">
          <Link to="/">
            <div className="cursor-pointer h-auto w-1/2 lg:w-[70%]">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>
        </div>

        <div className="w-full">
          <p className="font-Poppins text-black font-semibold text-2xl text-[40px]">
            Payment
          </p>
          <br />
          <p className="font-Poppins text-[#717171] text-[15px]">
            You can now make a payment here using your credit amount.
          </p>
        </div>

        {/* Render form fields based on selectedPayment state */}
        <div className="w-[100%] h-auto ">
          <PaymentHeader onSelectPayment={handleSelectPayment} />
        </div>
        <div className="w-[70%] h-[50vh] overflow-y-auto sm:w-full">
          <PaymentForm
            paymentMethod={selectedPayment}
            onFormSubmit={handleFormSubmit}
          />
          {/* Add other components as needed */}
        </div>

        <div className="absolute flex flex-col gap-2 mt-4 bottom-12 right-14 lg:static lg:mt-1 lg:bottom-auto lg:flex-row lg:mb-6 lg:gap-4 lg:flex lg:justify-end">
          <Link
            to="/eventSuccess"
            className="text-[15px] bg-[#FA5000] font-Poppins text-white py-4 px-10 rounded-[10px] lg:w-auto "
          >
            Pay
          </Link>
        </div>
      </div>

      {/* Second screen */}
      <div className="relative w-full h-full 1110:scale-105">
        <img
          src={twoDudes}
          alt="girls"
          className="w-full h-full object-cover rounded-[30px] 1110:rounded-none 1110:h-[335px]"
        />
        <div className="absolute bottom-0 left-0 text-white bg-orange-500 rounded p-2 lg:p-4 m-6 flex flex-col gap-4">
          <p className="text-white font-Poppins font-semibold text-[16px]">
            Be part of our organizer team and earn money.
          </p>
          <div>
            <button className="bg-orange p-4 w-full text-white font-Poppins rounded-[10px]">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
