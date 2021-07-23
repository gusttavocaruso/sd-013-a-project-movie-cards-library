import React from 'react';
import './App.css';
import movies from './data';
import MovieList from './components/MovieList';
import Header from './components/Header';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
