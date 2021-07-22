import React from 'react';
import './App.css';
import movies from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
