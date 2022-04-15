import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Paginate = (props) => {
  const [pageNumber, setPageNumber] = useState(0);
  const gamesPerPage = 20;
  const games = props.games;
  const displayedGames = pageNumber * gamesPerPage;
  const page = Math.ceil(games.length / gamesPerPage);
  const nextPage = ({ selected }) => {
    setPageNumber(selected);
  };
  const search = props.search
  const results = games.length;
    console.log('Games array:', games)

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
            {games
              .slice(displayedGames, displayedGames + gamesPerPage)
              .map((game, index) => {
                return (
                  <tr key={index}>
                    <td>{game.rank}</td>
                    <td>{game.name}</td>
                    <td>{game.platform}</td>
                    <td>{game.year}</td>
                    <td>{game.genre}</td>
                    <td>{game.publisher}</td>
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