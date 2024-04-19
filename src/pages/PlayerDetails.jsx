import React, { useState, useRef, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { girlsBasket, Logo } from '../assets';
import { Link } from 'react-router-dom';
import PlayerDetailsForm from '../components/PlayerDetailsForm';

const PlayerDetails = () => {
  const [formData, setFormData] = useState([{ playerName: '', position: '', playerID: '' }]);
  const formContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the form container when formData updates
    if (formContainerRef.current) {
      formContainerRef.current.scrollTop = formContainerRef.current.scrollHeight;
    }
  }, [formData]);

  // Function to add a new set of form fields
  const addFormFields = () => {
    setFormData([...formData, { playerName: '', position: '', playerID: '' }]);
  };

  return (
    <div className="bg-black min-h-screen flex flex-row lg:flex-col justify-center items-center p-20 gap-4">
      {/* First screen */}
      <div className="bg-white rounded-[30px] p-12 relative w-full h-[780px] lg:h-auto lg:mr-2 mb-10 lg:mb-0 lg:p-2">
      <div className="flex justify-between items-center p-4 mb-4 pt-8 pb-4">
          <Link to="/">
            <div className="cursor-pointer h-auto lg:w-[70%]">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>
          <div className="flex flex-row items-center gap-3 ">
            <div className="text-[#000000] font-Poppins text-[14px] lg:hidden">
              Available Credits
            </div>
            <div className="bg-black rounded-[10px] pl-12 pr-12 pt-4 pb-4 text-white font-Poppins lg:p-4">
              7,000
            </div>
          </div>
        </div>
        
        <div className="pl-6 pt-2 pb-4 w-[65%] lg:pl-3">
          <p className="font-Poppins text-black font-semibold text-2xl text-[40px] ">Player Details</p><br />
          <p className="font-Poppins text-[#717171] text-[15px]">You are now able to initiate an event, just ensure the accuracy of the information you provide.</p>
        </div>

        {/* Render form fields based on formData state */}
        <div ref={formContainerRef} className=" w-[65%] h-[50%]  overflow-auto h-[50%] mb-2">
          {formData.map((data, index) => (
            <PlayerDetailsForm key={index} data={data} setData={(newData) => {
              const updatedFormData = [...formData];
              updatedFormData[index] = newData;
              setFormData(updatedFormData);
            }} />
          ))}
        </div>
        <div className="mt-2 ml-2 lg:pb-[100px] ">
        <button className="text-[15px] bg-orange font-Poppins border p-2 text-white rounded-full justify-center" onClick={addFormFields}>
            <AddIcon />
        </button>
        </div>

        <div className="absolute flex flex-row gap-2 mt-4 bottom-8 right-14">
          <Link to="/payment" className='text-[15px] bg-[#FA5000] font-Poppins border text-white py-4 px-10 rounded-[10px] w-full flex justify-center items-center'>
            Next 
          </Link>
        </div>


      </div>

            {/* Second screen */}
      <div className="relative w-full h-[780px] lg:mr-2 mb-10 lg:mb-0 ">
        <img
          src={girlsBasket}
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

export default PlayerDetails;
