import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./DisplayElectricians.css";

const DisplayElectricians = (props) => {
  const [pageNumber, setPageNumber] = useState(0);
  const electriciansPerPage = 1;
  const electricians = props.electricians;
  const displayedElectricians = pageNumber * electriciansPerPage;
  const page = Math.ceil(electricians.length / electriciansPerPage);
  const nextPage = ({ selected }) => {
    setPageNumber(selected);
  };
  const search = props.search
  const results = electricians.length;
    console.log('Electricians Array:', electricians)

  return (
    <div>
      <div>
        <h2>Showing {results} Related Results for '{search}':</h2>
      </div>
      <div className="search-container">
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
              <th>Electrician</th>
            </tr>
          </thead>

          <tbody>
            {electricians
              .slice(displayedElectricians, displayedElectricians + electriciansPerPage)
              .map((electrician, index) => {
                return (
                  <tr key={index}>
                    <td><image src={electrician.image}/></td>
                    <td>{electrician.name}</td>
                    <td>{electrician.city}</td>
                    <td>{electrician.state}</td>
                    <td>{electrician.zip_code}</td>
                    <td>{electrician.phone_number}</td>
                    <td>{electrician.email_address}</td>
                    <td>{electrician.linkedin}</td>
                    <td>{electrician.about_me}</td>
                    <td>{electrician.services}</td>
                    <td>{electrician.rates}</td>
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