import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./DisplayAppointments.css";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import UpdateAppointment from "../UpdateAppointment/UpdateAppointment";

const DisplayAppointments = (props) => {
  const navigate = useNavigate();
  const [showElem, setShowElem] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const userId = props.userId
  const appointmentsPerPage = 1;
  const [appointments, setAppointments] = useState([]);
  const displayedAppointments = pageNumber * appointmentsPerPage;
  const page = Math.ceil(appointments.length / appointmentsPerPage);
  const nextPage = ({ selected }) => {
    setPageNumber(selected);
  };
  const results = appointments.length;

  useEffect(()=>{
    const updateEvents = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/appointments/user_id?user_id=${userId}`);
        setAppointments(response.data);
      }
      catch(error){
        console.log(error.message)
      }
    }
    updateEvents();
  }, []);

  return (
    <div>
      <div>
        <h2>Showing {results} Results</h2>
      </div>
      <div>
        <div className="pagination-container">
          <div>
            <ReactPaginate
              className="pagination"
              previousLabel="<PREV"
              nextLabel="NEXT>"
              pageCount={page}
              onPageChange={nextPage}
            />
          </div>
        </div>
        <div className="container">
        <table className="search-table">
          <thead>
            <tr className="header">
              <th>Appointment ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Service</th>
              <th>Scheduled Start Date</th>
              <th>Scheduled End Date</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {appointments
              .slice(displayedAppointments, displayedAppointments + appointmentsPerPage)
              .map((appointment, index) => {
                return (
                  <tr key={index}>
                    <td>{appointment.id}</td>
                    <td>{appointment.last_name}</td>
                    <td>{appointment.first_name}</td>
                    <td>{appointment.address}</td>
                    <td>{appointment.city}</td>
                    <td>{appointment.state}</td>
                    <td>{appointment.zip_code}</td>
                    <td>{appointment.email_address}</td>
                    <td>{appointment.phone_number}</td>
                    <td>{appointment.title}</td>
                    <td>{appointment.start}</td>
                    <td>{appointment.end}</td>
                    <td>{appointment.description}</td>
                    <td>{ showElem && <UpdateAppointment 
                    appointment_id={appointment.id} 
                    last_name={appointment.last_name} 
                    first_name={appointment.first_name} 
                    address={appointment.address}
                    city={appointment.city}
                    state={appointment.state}
                    zip_code={appointment.zip_code}
                    email_address={appointment.email_address}
                    phone_number={appointment.phone_number}
                    title={appointment.title}
                    start={appointment.start}
                    end={appointment.end}
                    description={appointment.description}
                    electrician_id={appointment.electrician_id}
                    /> } <button onClick={()=>{setShowElem(!showElem)}} className="button">Edit</button></td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayAppointments;