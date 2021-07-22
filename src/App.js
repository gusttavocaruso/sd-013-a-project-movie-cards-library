import React from 'react';
import './App.css';
import Header from '../src/components/Header'
import MovieList from '../src/components/MovieList'
import movies from './data';


function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
