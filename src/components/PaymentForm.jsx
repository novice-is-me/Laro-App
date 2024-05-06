import React, { useState } from 'react';

const PaymentForm = ({ onFormSubmit }) => {
  // Initializing state for form fields
  const [formData, setFormData] = useState({
    voucherCode: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className='w-full flex justify-center'>
      <form className='flex flex-col  w-full pl-2 pr-2  rounded-lg ' onSubmit={handleSubmit}>
        <input
          type="text"
          name="voucherCode"
          value={formData.playerName}
          onChange={handleChange}
          placeholder='Enter Voucher Code'
          className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
          required
        />
        
      </form>
    </div>
  );
}

export default PaymentForm;
