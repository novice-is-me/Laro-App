import React from "react";
import { useState } from "react";

function OrganizerEventCalendar () {
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [eventNotes, setEventNotes] = useState({});

    // Function to handle slot selection
    const handleSlotClick = (slot) => {
        const isSelected = selectedSlots.includes(slot);
        if (isSelected) {
        setSelectedSlots(selectedSlots.filter(s => s !== slot));
        } else {
        setSelectedSlots([...selectedSlots, slot]);
        }
    };

    // Function to handle event notes click
    const handleNotesClick = (slot) => {
        const notes = eventNotes[slot] || '';
        const newNotes = prompt('Enter event notes:', notes);
        if (newNotes !== null) {
        setEventNotes({ ...eventNotes, [slot]: newNotes });
        }
    };

     // Function to handle additional options click
    const handleOptionsClick = (slot) => {
        // Implement your logic for handling options click here
        console.log(`Options clicked for ${slot}`);
    };

    // Generate time slots starting from 12:00 PM to 4:00 AM
    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 12; hour < 29; hour++) { // Loop until 4:00 AM next day (12 + 16)
        const currentHour = hour % 24; // To handle hours beyond 24
        const time = `${currentHour.toString().padStart(2, '0')}:00`;
        slots.push(time);
        }
        return slots;
    };

    // Render time slots
    const renderTimeSlots = () => {
        const slots = generateTimeSlots();
        console.log(slots)
        return slots.map((slot, index) => ( 
        <div key={index} className={`flex items-center py-1.5 px-5 gap-5 ${selectedSlots.includes(slot) ? 'bg-blue-200' : ''}`}onClick={() => handleSlotClick(slot)}>
            <div className="w-[75px] text-center text-[#C1C1C1] flex-grow">{slot}</div>
            <div className="flex-grow w-full rounded-lg bg-[#FFEEE7] text-[#FFEEE7] text-center" onClick={() => handleNotesClick(slot)}>
                {eventNotes[slot] || 'i'}
            </div>
            <div className="absolute top-full left-0 w-full bg-orange border border-gray-200 rounded-lg p-2 group-hover:visible">
            {/* Sticky note content */}
                <button onClick={() => handleOptionsClick(slot)} className="block mb-1 text-gray-800 hover:text-blue-600">Edit Notes</button>
                <button className="block text-gray-800 hover:text-blue-600">Delete</button>
            </div>
        </div>
        ));
    };

    return (
        <div className="w-full">
            <div className="flex flex-col">
                {renderTimeSlots()}
            </div>
        </div>
    );
}

export default OrganizerEventCalendar