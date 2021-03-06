import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./DisplayElectricians.css";
import Email from "../Email/Email";
import EmployeeCalendar from "../EmployeeCalendar/EmployeeCalendar"
import { useNavigate, Link } from "react-router-dom";

const DisplayElectricians = (props) => {
  const navigate = useNavigate();
  const [showElem, setShowElem] = useState(false);
  const [showContact, setShowContact] = useState(false)
  const [pageNumber, setPageNumber] = useState(0);
  const electriciansPerPage = 1;
  const electricians = props.electricians;
  const displayedElectricians = pageNumber * electriciansPerPage;
  const page = Math.ceil(electricians.length / electriciansPerPage);
  const nextPage = ({ selected }) => {
    setPageNumber(selected);
    setShowElem(!showElem)
    setShowContact(!showContact)
  };
  const results = electricians.length;
    console.log('Electricians Array:', electricians)

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
        <table className="search-table">
          <thead>
            <tr className="header">
              <h1>Featured Electricians:</h1>
            </tr>
          </thead>

          <tbody>
            {electricians
              .slice(displayedElectricians, displayedElectricians + electriciansPerPage)
              .map((electrician, index) => {
                return (
                  <tr key={index}>
                    <div><img src={electrician.image} width="193" height="130"/></div>
                    <div>Name: {electrician.name}</div>
                    <div>City: {electrician.city}</div>
                    <div>Phone Number: {electrician.phone_number}</div>
                    <div>Email: {electrician.email_address}</div>
                    <div>LinkedIn: {electrician.linkedin}</div>
                    <div>About Me: {electrician.about_me}</div>
                    <div>Credentials: {electrician.credentials}</div>
                    <div>Services Provided: {electrician.services}</div>
                    <div>Rates: {electrician.rates}</div>
                    <div>{ showElem && <EmployeeCalendar eId={electrician.id}/> } <button onClick={()=>{setShowElem(!showElem)}} className="button">View Availability</button></div>
                    <div>{ showContact && <Email email={electrician.email_address}/> } <button onClick={()=>{setShowContact(!showContact)}} className="button">Contact Me!</button></div>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayElectricians;