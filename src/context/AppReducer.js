export default (state, action) => {
  const filteredMoviesFromWatchlist = (delMovie) => {
    return state.watchlist.filter((movie) => movie.id !== delMovie.id);
  };

  const filteredMoviesFromWatched = (delMovie) => {
    return state.watched.filter((movie) => movie.id !== delMovie.id);
  };

  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "DEL_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: filteredMoviesFromWatchlist(action.payload),
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: filteredMoviesFromWatchlist(action.payload),
        watched: [action.payload, ...state.watched],
      };
    case "ADD_BACK_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
        watched: filteredMoviesFromWatched(action.payload),
      };
    case "DEL_MOVIE_FROM_WATCHED":
      return {
        ...state,
        watched: filteredMoviesFromWatched(action.payload),
      };

    default:
      return state;
      break;
  }
};
