import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movieData = { movies }/>
    </div>
  );
}

export default App;
