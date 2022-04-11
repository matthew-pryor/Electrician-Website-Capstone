import React from 'react'
import FullCalendar, {formatDate} from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useEffect, useState } from 'react/cjs/react.production.min'
import axios from 'axios'

const Calendar = () => {

  const [events, setEvents] = useState([])

  useEffect(()=>{
    const fetchAppointments = async () => {
      try{
        let response = await axios.get("http://127.0.0.1:8000/api/appointments/all/")
        let formatData = events.map((e)=>{
          return {id:e.id.toString(), start: e.appointment_date_start}
        })
        console.log(formatData)
        setEvents(formatData)
      } catch (error){
        console.log(error.message);
      }
    };
    fetchAppointments();
    console.log("Event Data: ", events)
  }, []);

  return ( 
    <div>
      <div>
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev, next, today',
          center: 'title',
          right: 'dayGridMonth, timeGridWeek, timeGridDay'
        }}
        initialView='dayGridMonth'
        editable={true}
        selectable={true}
        selectMirror={true}
        events={events}
        />
      </div>
    </div>
   );
}
 
export default Calendar;