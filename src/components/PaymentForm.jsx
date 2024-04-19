import React, { useState } from 'react';

const PaymentForm = ({ onFormSubmit }) => {
  // Initializing state for form fields
  const [formData, setFormData] = useState({
    emailAdd: '',
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
    <div className='w-full flex justify-center flex-col'>
      <form className='flex flex-col w-full pt-2 pl-2 pr-2 pb-2 rounded-lg ' onSubmit={handleSubmit}>
        <input
          type="text"
          name="emailAdd"
          value={formData.emailAdd}
          onChange={handleChange}
          placeholder='Enter your verified email address'
          className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
          required
        />
      </form>

    <div>
        <div className="flex flex-row font-Poppins pl-8 pt-8 pr-4 lg:p-2">
            <div className="text-black flex flex-col gap-2 w-full ">
            <div className="flex flex-row text-[14px]">
                <div className=" w-[100%] mr-6"><p>Event Name: </p></div>
                <div className=" w-[100%]"><p className="text-[#444444] ">Enter Event Here </p></div>
            </div>

            <div className=' flex flex-row text-[14px]'>
            <div className=" w-[100%] mr-6"><p>No. of Quarter: </p></div>
            <div className=" w-[100%]"><p className="text-[#444444]" >4 </p></div>
            </div>

            <div className=' flex flex-row text-[14px]'>
            <div className=" w-[100%] mr-6"><p>Minute Per Quarter:</p></div>
            <div className=" w-[100%]"><p className="text-[#444444] ">5 minutes </p></div>
            </div>

            <div className=' flex flex-row text-[14px]'>
            <div className=" w-[100%] mr-6"><p>No. of Player:</p></div>
            <div className=" w-[100%]"><p className="text-[#444444]">10 </p></div>
            </div>

            <div className=' flex flex-row text-[14px]'>
            <div className=" w-[100%] mr-6"><p>Location:</p></div>
            <div className=" w-[100%]"><p className="text-[#444444]">Enter Location Here </p></div>
            </div>

            <div className=' flex flex-row text-[14px]'>
            <div className=" w-[100%] mr-6"><p>Court Owner:</p></div>
            <div className=" w-[100%]"><p className="text-[#444444]">Enter Court Owner </p></div>
            </div>

            <div className=' flex flex-row pt-10 text-[16px]'>
            <div className=" w-[100%] mr-6"><p className="text-[#444444]">Amount</p></div>
            <div className=" w-[100%]"><p>5,000 </p></div>
            </div>

            </div>

        </div>
</div>


    </div>
  );
}

export default PaymentForm;
