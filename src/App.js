import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Rating from './components/Rating';

function App() {
  return (
    <div>
      <Header />
      <MovieList />
      <Rating rating={ movies } />
    </div>
  );
}

export default App;
