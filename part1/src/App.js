import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieCard from './components/MovieCard.js';
import MovieDetail from './components/MovieDetails.js';
import SearchBar from './components/SearchBar.js';
import './App.css';
import MovieResults from './components/MovieResults.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<>
        <h1>Movies</h1>
          <SearchBar />
          <MovieResults />
        </>} />
        <Route path="/movie/:id" element={<MovieDetail />} />

      </Routes>
    </div>
  );
}

export default App;
