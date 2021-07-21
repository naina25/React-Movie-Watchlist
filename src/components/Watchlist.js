import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MyWatchlistedMovie from "./MyWatchlistedMovie";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="watchlisted-movies-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
        </div>

        {watchlist.length > 0 ? (
          <div className="watchlisted-movie-grid">
            {watchlist.map((movie) => {
              return (
                <MyWatchlistedMovie
                  key={movie.id}
                  movie={movie}
                  type="watchlist"
                />
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
