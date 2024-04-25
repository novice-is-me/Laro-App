import React, { useState } from 'react';

const EventDetailsForm = ({ onFormSubmit }) => {
  // Initializing state for form fields
  const [formData, setFormData] = useState({
    organizerName: '',
    communityName: '',
    eventLocation: '',
    date: '',
    time: '',
    coachName: '',
    playerNumber: '',
    fee: '',
    cashOption: false,
    difficulty: '',
    details: ''
  });

  //Handle Cassh Option
  const handleCashOptionChange = () => {
    setFormData({
      ...formData,
      cashOption: !formData.cashOption,
    });
  };

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
          name="organizerName"
          value={formData.organizerName}
          onChange={handleChange}
          placeholder='Organizer Name'
          className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
          required
        />
        <input
          type="text"
          name="communityName"
          value={formData.communityName}
          onChange={handleChange}
          placeholder='Community Name'
          className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
          required
        />
        <div className="relative">
  
  <select
    name="eventLocation"
    value={formData.eventLocation}
    onChange={handleChange}
    className='text-Poppins p-4 bg-[#D7D7D7] rounded-md w-full text-black appearance-none pr-8' // Added pr-8 for right padding
    required
  >
    <option value="" disabled >Event location</option>
    <option value="Antipolo Court" >Antipolo Court</option>
    <option value="Mandaluyong Court" >Mandaluyong Court</option>
    <option value="Marikina Court" >Marikina Court</option>
    <option value="Pasig Court" >Pasig Court</option>
  </select>
  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
</svg>



  </div>
</div>
        <div className="flex gap-2">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder='Date'
            className='p-4 bg-[#D7D7D7]  rounded-md w-1/2 placeholder-[#8D8D8D] text-black'
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder='Time'
            className='p-4 bg-[#D7D7D7] rounded-md w-1/2 placeholder-[#8D8D8D] text-black'
            required
          />
        </div>

        

          <input
            type="number"
            name="numberOfPlayers"
            value={formData.numberOfPlayers}
            onChange={handleChange}
            placeholder='No. of Players (min 10, max 35'
            className='p-4 bg-[#D7D7D7]  rounded-md w-full placeholder-[#8D8D8D] text-black'
            required
            min={10}
            max={35}
          />
          
          <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-2 rounded-md bg-[#D7D7D7]  w-1/2 text-black ">
          <div className="lg:hidden w-[30%] relative h-[58px] flex items-center justify-center ">
  <p className="text-Poppins text-[24px] text-black font-semibold">P</p>
  <div className="absolute inset-0 overflow-hidden">
    
    <div className="  rounded-md absolute inset-0 border-r-2 border-[#7A7A7A]"></div>
  </div>
</div>



  <input
    type="number"
    name="fee"
    value={formData.fee}
    onChange={handleChange}
    placeholder='Fee (min. 200)'
    className='lg:w-full w-[70%] bg-transparent rounded-md text-black focus:outline-none focus:ring-0'
    required
    min={200}
  />

</div>
      <label className="lg:w-[30%] font-Poppins text-[14px] flex flex-col gap-2 items-center cursor-pointer  rounded w-1/2 justify-between">
  {/* Checkbox */}
  <input
    type="checkbox"
    name="cashOption"
    checked={formData.cashOption}
    onChange={handleCashOptionChange}
    className="hidden"
  />
  {/* Content */}

    {/* Cash Option Text */}
    <p> Cash Option</p>
    {/* Toggle */}
    <span className={`flex items-center justify-between w-10 h-7 rounded-full border-gray-300 ${formData.cashOption ? 'bg-green-500 border-green-500' : 'bg-[#7A7A7A] border-gray-300'}`}>
      {/* Circle */}
      <span className={`rounded-full w-5 h-5 bg-white shadow-md transform transition-transform ${formData.cashOption ? 'translate-x-full' : 'translate-x-0'}`}></span>
    </span>

</label>

    </div>

<div className='relative'>
  <select
    name="difficulty"
    value={formData.difficulty}
    onChange={handleChange}
    className='p-4 bg-[#D7D7D7] rounded-md w-full text-[black] appearance-none focus:outline-none'
    required
  >
    <option value="" disabled>Difficulty</option>
    <option value="chill" className="text-black">Chill</option>
    <option value="hardcore" className="text-black">Hardcore</option>
  </select>
  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
</svg>
  </div>
</div>

          <div>
          <p className='text-[20px] pb-2 font-Poppins font-semibold'>Additional Detials</p>
          <textarea
            type="optional"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder='Other Details (Parking Slots, Referee, Benches'
            className='flex p-4 bg-[#D7D7D7]  rounded-md w-full h-[200px] placeholder-[#8D8D8D] text-black'
            required
          />
          </div>
        
      </form>
      
    </div>
  );
}

export default EventDetailsForm;
