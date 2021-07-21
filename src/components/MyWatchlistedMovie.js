import React from "react";

const MyWatchlistedMovie = ({ movie, type }) => {
  return (
    <div className="watchlist-movie-card">
      <div className="overlay">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.name} Poster`}
          />
        ) : (
          <div className="filler-poster">No Poster!</div>
        )}
      </div>
    </div>
  );
};

export default MyWatchlistedMovie;
