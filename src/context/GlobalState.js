import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // adding to local storage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const delMovieFromWatchlist = (movie) => {
    dispatch({ type: "DEL_MOVIE_FROM_WATCHLIST", payload: movie });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const addBackToWatchlist = (movie) => {
    dispatch({ type: "ADD_BACK_TO_WATCHLIST", payload: movie });
  };

  const delMovieFromWatched = (movie) => {
    dispatch({ type: "DEL_MOVIE_FROM_WATCHED", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        delMovieFromWatchlist,
        addMovieToWatched,
        addBackToWatchlist,
        delMovieFromWatched,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
