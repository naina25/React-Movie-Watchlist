import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import AddedMovieCard from "./AddedMovieCard";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movies-outer-div">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <span className="count-pill">
            {watchlist.length} {watchlist.length > 1 ? "Movies" : "Movie"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => {
              return (
                <AddedMovieCard key={movie.id} movie={movie} type="watchlist" />
              );
            })}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your watchlist!!</h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
