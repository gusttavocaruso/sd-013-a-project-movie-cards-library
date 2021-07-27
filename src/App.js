import React from 'react';
import './App.css';
import Header from './components/Header';
import arrayMovies from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ arrayMovies } />
    </div>
  );
}

export default App;
