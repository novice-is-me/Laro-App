import Calendar from 'react-calendar'
import './Calendar.css'

const CalendarComponent = () => {

  const weeks = ['S', 'M', 'T', 'W', 'T', 'F', 'S']; 

  return (    
    <div>    
      <Calendar formatShortWeekday={(locale, date) => weeks[date.getDay()]}
      />  
    </div> 
  ) 
}

export default CalendarComponent
