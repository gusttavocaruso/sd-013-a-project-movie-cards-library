import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  const moviesMap = movies.map((movie) => movie);
  return (
    <div className="App">
      <Header />
      <MovieList movies={ moviesMap } />
    </div>
  );
}
export default App;
