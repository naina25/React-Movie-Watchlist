import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  const storedMovie = watchlist.find((obj) => obj.id === movie.id);

  const alreadyWatched = watched.find((obj) => obj.id === movie.id);

  const watchlistDisabled = storedMovie || alreadyWatched ? true : false;

  const watchedDisabled = alreadyWatched ? true : false;

  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.name} Poster`}
          />
        ) : (
          <div className="filler-poster">No Poster!</div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="controls">
          <button
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
            className="btn">
            Add to Watchlist
          </button>
          <button
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
            className="btn">
            Add to Watched list
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
