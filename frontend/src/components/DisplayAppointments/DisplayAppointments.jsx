import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./DisplayAppointments.css";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'

const DisplayAppointments = (props) => {
  const navigate = useNavigate();
  const [showElem, setShowElem] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const userId = props.userId
  const appointmentsPerPage = 5;
  const [appointments, setAppointments] = useState([]);
  const displayedAppointments = pageNumber * appointmentsPerPage;
  const page = Math.ceil(appointments.length / appointmentsPerPage);
  const nextPage = ({ selected }) => {
    setPageNumber(selected);
  };
  const results = appointments.length;

  useEffect(()=>{
    const fetchEvents = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/appointments/user_id?user_id=${userId}`);
        setAppointments(response.data);
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
                    <td>{appointment.email}</td>
                    <td>{appointment.phone_number}</td>
                    <td>{appointment.title}</td>
                    <td>{appointment.start}</td>
                    <td>{appointment.end}</td>
                    <td>{appointment.description}</td>
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