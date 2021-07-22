import React from 'react';
import './App.css';

import Header from './components/Header';

import MovieList from './components/MovieList';

import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      { movies.map((movie, index) => <MovieList key={ index } movieProps={ movie } />)}
    </div>
  );
}

export default App;
