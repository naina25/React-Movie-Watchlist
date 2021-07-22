import React from "react";
import MovieControls from "./MovieControls";

const AddedMovieCard = ({ movie, type }) => {
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

        <MovieControls type={type} movie={movie} />
      </div>
    </div>
  );
};

export default AddedMovieCard;
