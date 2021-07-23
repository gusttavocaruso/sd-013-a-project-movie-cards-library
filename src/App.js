import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
// import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movieData={ movies } />
      {/* <MovieCard moviesData={ movies } /> */}
      {/* <Rating ratingData={ movies } /> */}
    </div>
  );
}

export default App;
