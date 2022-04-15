import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Paginate.css";

const Paginate = (props) => {
  const [pageNumber, setPageNumber] = useState(0);
  const electriciansPerPage = 1;
  const electricians = props.electricians;
  const displayedElectricians = pageNumber * gamesPerPage;
  const page = Math.ceil(games.length / electriciansPerPage);
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
              <th>Rank</th>
              <th>Title</th>
              <th>Platform</th>
              <th>Release Year</th>
              <th>Genre</th>
              <th>Publisher</th>
            </tr>
          </thead>

          <tbody>
            {electricians
              .slice(displayedElectricians, displayedElectricians + electriciansPerPage)
              .map((electrician, index) => {
                return (
                  <tr key={index}>
                    <td>{electrician.rank}</td>
                    <td>{electrician.name}</td>
                    <td>{electrician.platform}</td>
                    <td>{electrician.year}</td>
                    <td>{electrician.genre}</td>
                    <td>{electrician.publisher}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Paginate;