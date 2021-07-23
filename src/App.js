import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieCard moviesData={ movies } />
      <Rating ratingData={ movies } />
    </div>
  );
}

export default App;
