import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard.js';
import '../styles/MovieResults.css'


const MovieResults = () => {
  const movies = useSelector((state) => state.movies.searchResults);

  return (
    <div className="container">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <p>Tap to search</p>
      )}
    </div>
  );
};

export default MovieResults;
