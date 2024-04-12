import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './EventCalendar.css';

const localizer = momentLocalizer(moment);

const CustomToolbar = ({ view, onView }) => {
  const handleViewChange = (viewName) => {
    if (view !== viewName) {
      onView(viewName);
    }
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={() => handleViewChange('week')}>
          Week
        </button>
        <button type="button" onClick={() => handleViewChange('day')}>
          Day
        </button>
      </span>
    </div>
  );
};

// EventCalendar.propTypes = {
//     events: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.number.isRequired,
//           title: PropTypes.string.isRequired,
//           start: PropTypes.instanceOf(Date).isRequired,
//           end: PropTypes.instanceOf(Date).isRequired,
//         })
//       ).isRequired,
//   };

function EventCalendar(props){
    const localizer = momentLocalizer(moment);

    return(
        <div className="w-full h-full font-Poppins text-base">
            <Calendar
              defaultView={'week'}
              toolbar={false}
                {...props}
                localizer={localizer}
             
            />
        </div>
    )
}

export default EventCalendar;