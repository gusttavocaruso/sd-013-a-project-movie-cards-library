import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList'; 
import movies from './data';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div>
      <Header /> 
      <MovieList movies= {movies} />
      <MovieCard />
    </div>
  );
};

export default App;
