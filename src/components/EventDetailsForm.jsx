import React, { useState } from 'react';

const EventDetailsForm = ({ onFormSubmit }) => {
  // Initializing state for form fields
  const [formData, setFormData] = useState({
    eventName: '',
    numberOfQuarters: '',
    minutesPerQuarter: '',
    eventLocation: '',
    numberOfPlayers: '',
    coachName: '',
    entranceFee: ''
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
      <form className='flex flex-col gap-4 w-full  p-4 rounded-lg ' onSubmit={handleSubmit}>
        <input
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          placeholder='Name of Event'
          className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
          required
        />
        <div className="flex gap-2">
          <input
            type="number"
            name="numberOfQuarters"
            value={formData.numberOfQuarters}
            onChange={handleChange}
            placeholder='No. of Quarters'
            className='p-4 bg-[#D7D7D7]  rounded-md w-1/2 placeholder-[#8D8D8D] text-black'
            required
          />
          <input
            type="number"
            name="minutesPerQuarter"
            value={formData.minutesPerQuarter}
            onChange={handleChange}
            placeholder='Mins. Per Quarter'
            className='p-4 bg-[#D7D7D7] rounded-md w-1/2 placeholder-[#8D8D8D] text-black'
            required
          />
        </div>
        <div className="relative">
        <input
          type="text"
          name="eventLocation"
          value={formData.eventLocation}
          onChange={handleChange}
          placeholder='Event Location'
          className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
          required
        />
        <a href="#" className="text-[#FA5000] absolute right-5 top-4 text-orange-500 underline lg:hidden">Find Court Nearby</a>
        </div>
        
        <div className="flex gap-2">
          <input
            type="number"
            name="numberOfPlayers"
            value={formData.numberOfPlayers}
            onChange={handleChange}
            placeholder='No. of Players'
            className='p-4 bg-[#D7D7D7]  rounded-md w-1/2 placeholder-[#8D8D8D] text-black'
            required
          />
          <input
            type="text"
            name="coachName"
            value={formData.coachName}
            onChange={handleChange}
            placeholder='Coach Name'
            className='p-4 bg-[#D7D7D7]  rounded-md w-1/2 placeholder-[#8D8D8D] text-black'
            required
          />
        </div>
        <input
          type="number"
          name="entranceFee"
          value={formData.entranceFee}
          onChange={handleChange}
          placeholder='Entrance Fee'
          className='p-4 bg-[#D7D7D7]  rounded-md w-1/2 placeholder-[#8D8D8D] text-black'
          required
        />
        
      </form>
      
    </div>
  );
}

export default EventDetailsForm;
