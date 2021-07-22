import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    delMovieFromWatchlist,
    addMovieToWatched,
    addBackToWatchlist,
    delMovieFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button onClick={() => addMovieToWatched(movie)} className="ctrl-btn">
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            onClick={() => delMovieFromWatchlist(movie)}
            className="ctrl-btn">
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            onClick={() => {
              addBackToWatchlist(movie);
            }}
            className="ctrl-btn">
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button
            onClick={() => {
              delMovieFromWatched(movie);
            }}
            className="ctrl-btn">
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
