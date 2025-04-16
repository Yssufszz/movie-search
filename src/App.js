import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=API_KEY_NYA_ISI_KE_SINI`);
      setMovies(response.data.Search);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <h1>Movie Search</h1>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
