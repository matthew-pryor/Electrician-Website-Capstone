import React, { useState, useEffect } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import axios from 'axios'
import { Link } from "react-router-dom";

const Calendar = (props) => {

  const [events, setEvents] = useState([]);
  const userId = props.userId

  useEffect(()=>{
    const fetchEvents = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/appointments/user_id?user_id=${userId}`);
        setEvents(response.data);
      }
      catch(error){
        console.log(error.message)
      }
    }
    fetchEvents();
  }, []);

  return (
  <div>
    <div>

      <FullCalendar
      plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: 'prev, next today',
        center: 'title',
        right: 'dayGridMonth, timeGridWeek, timeGridDay'
        
      }}
      initialView='dayGridMonth'
      timeZone='CST'
      editable={true}
      selectable={true}
      selectMirror={true}
      events={events}
      selectOverlap={false}
      navLinks={true}
      navLinkDayClick={true}
      businessHours={true}
      selectConstraint={'businessHours'}
      eventClick={
        function(arg) {
          alert(arg.event.title)
          alert(arg.event.start)    
        }
      }
      />
    </div>
  </div>);
}

export default Calendar;