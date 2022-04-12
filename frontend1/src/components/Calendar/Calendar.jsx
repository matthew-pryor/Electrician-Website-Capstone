import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class DemoApp extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: []
  }


  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
    )
  }
}