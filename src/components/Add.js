import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const Add = () => {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  useEffect(() => {
    if (query) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
        )
        .then((res) => {
          setResults(() => res.data.results);
          console.log(results);
        })
        .catch((err) => {
          console.log(err);
          setResults([]);
        });
    } else {
      setResults([]);
    }
  }, [query, API_KEY]);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Search for a movie"
              onChange={handleChange}
            />
            {results.length > 0 &&
              results.map((result) => (
                <MovieCard key={result.id} movie={result} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
