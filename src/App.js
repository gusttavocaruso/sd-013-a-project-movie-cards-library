import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      {/* <MovieCard moviesData={ movies } /> */}
      <Rating rating={ movies } />
    </div>
  );
}

export default App;
