import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies ? movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      )) : <p>No movies found.</p>}
    </div>
  );
};

export default MovieList;
