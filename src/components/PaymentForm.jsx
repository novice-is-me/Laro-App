// PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = ({ paymentMethod, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    gcashNumber: '',
    paypalNumber: '',
    voucherCode: '',
    firstName: '',
    lastName: '',
    creditNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    console.log('Form Data Submitted:', formData);
  };

  let formContent;
  switch (paymentMethod) {
    case 'gcash':
      formContent = (
        <div className='flex flex-col gap-2 pl-4'>
          <p className="font-Poppins text-black font-semibold text-[20px] pt-4">Set up your gcash payment</p>
          <p className="font-Poppins text-black text-[14px] pb-4 ">
          Enter your Gcash mobile number. You’ll be sent to Gcash to compete your payment
          </p>
            <input
            type="number"
            name="gcashNumber"
            value={formData.gcashNumber}
            onChange={handleChange}
            placeholder='Mobile Number'
            className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
            required
          />
          <div>
            <p className="font-Poppins text-black text-[10px] pb-4 pt-4 w-[98%]">
              By checking the checkbox below, you agree to our{' '}
              <a href="#" className="text-blue-500" target="_blank">
                Terms of Use, Privacy Statement
              </a>
              , and that you are responsible for any charges that are put in your account. Gcash will pay for your subscription and charge you the Laro Game Fee (currently P200).
            </p>
            <div className=' flex flex-row gap-2'>
              <label>
                <input type="checkbox" id="agreeCheckbox"  />
              </label>
              <p className='flex font-Poppins'>I Agree</p>
            </div>
          </div>
        </div>
      );
      break;
    case 'debitcredit':
        formContent = (
          <div className='flex flex-col gap-4 pl-4 '>
            {/* First Name */}
            <div>
              <p className="font-Poppins text-black font-semibold text-[20px] ">First Name</p>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder='First Name Here'
                className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
                required
              />
            </div>
            {/* Last Name */}
            <div>
              <p className="font-Poppins text-black font-semibold text-[20px] ">Last Name</p>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Last Name Here'
                className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
                required
              />
            </div>
            {/* Credit Card Number */}
            <div>
              <p className="font-Poppins text-black font-semibold text-[20px] ">Credit Number</p>
              <input
                type="number"
                name="creditNumber"
                value={formData.creditNumber}
                onChange={handleChange}
                placeholder='0000 0000 0000 0000'
                className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
                required
              />
            </div>
            {/* Expiry Date */}
            <div>
              <p className="font-Poppins text-black font-semibold text-[20px] ">Expiry Date</p>
              <input
                type="expirydate"
                name="Expiry Date"
                value={formData.creditNumber}
                onChange={handleChange}
                placeholder='Expiry Date'
                className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
                required
              />
            </div>
            {/* CVV */}
            <div>
              <p className="font-Poppins text-black font-semibold text-[20px] ">Security Code</p>
              <input
                type="cvv"
                name="CVV"
                value={formData.creditNumber}
                onChange={handleChange}
                placeholder='cvv'
                className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
                required
              />
            </div>
            </div>
          );
      break;
    case 'paypal':
        formContent = (
            <div className='flex flex-col gap-2 pl-4'>
            <p className="font-Poppins text-black font-semibold text-[20px] pt-4">Set up your Paypal payment</p>
            <p className="font-Poppins text-black text-[14px] pb-4 ">
            Enter your Paypal mobile number. You’ll be sent to Paypal to compete your payment
            </p>
              <input
              type="number"
              name="gcashNumber"
              value={formData.gcashNumber}
              onChange={handleChange}
              placeholder='Mobile Number'
              className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
              required
            />
            <div>
      <p className="font-Poppins text-black text-[10px] pb-4 pt-4 w-[98%]">
        By checking the checkbox below, you agree to our{' '}
        <a href="#" className="text-blue-500" target="_blank">
          Terms of Use, Privacy Statement
        </a>
        , and that you are responsible for any charges that are put in your account. Gcash will pay for your subscription and charge you the Laro Game Fee (currently P200).
      </p>
      <div className=' flex flex-row gap-2'>
      <label>
        <input type="checkbox" id="agreeCheckbox"  />
      </label>
      <p className='flex font-Poppins'>I Agree</p>
      </div>
    </div>
            </div>
          );
      break;
    case 'others':
      // Render form fields for other payment methods
      break;
    default:
      // Render default form fields
      formContent = (
        <div>
            <p className="font-Poppins text-black font-semibold text-[25px] pt-20">Voucher</p>
          <input
          type="text"
          name="voucherCode"
          value={formData.voucherCode}
          onChange={handleChange}
          placeholder='Enter Voucher Code'
          className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
          required
        />

        </div>
      );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formContent}
      </form>
    </div>
  );
};

export default PaymentForm;
