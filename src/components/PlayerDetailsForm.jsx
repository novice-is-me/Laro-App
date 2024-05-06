import React, { useState } from 'react';

const PlayerDetailsForm = ({ onFormSubmit }) => {
  // Initializing state for form fields
  const [formData, setFormData] = useState({
    playerName: '',
    position: '',
    playerID: '',
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
      <form className='flex flex-col gap-4 w-full pt-2 pl-2 pr-2 pb-2 rounded-lg ' onSubmit={handleSubmit}>
        <input
          type="text"
          name="playerName"
          value={formData.playerName}
          onChange={handleChange}
          placeholder='Player Name'
          className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
          required
        />
        <div className="flex gap-2">
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder='Position'
            className='p-4 bg-[#D7D7D7]  rounded-md w-1/2 placeholder-[#8D8D8D] text-black'
            required
          />
          <input
            type="number"
            name="playerID"
            value={formData.playerID}
            onChange={handleChange}
            placeholder='Player I.D.'
            className='p-4 bg-[#D7D7D7] rounded-md w-1/2 placeholder-[#8D8D8D] text-black'
            required
          />
        </div>
        
      </form>
    </div>
  );
}

export default PlayerDetailsForm;
