import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import AddedMovieCard from "./AddedMovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movies-outer-div">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watched Movies</h1>
          <span className="count-pill">
            {watched.length} {watched.length > 1 ? "Movies" : "Movie"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => {
              return (
                <AddedMovieCard key={movie.id} movie={movie} type="watched" />
              );
            })}
          </div>
        ) : (
          <h2 className="no-movies">You've not watched any movie yet!!</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
