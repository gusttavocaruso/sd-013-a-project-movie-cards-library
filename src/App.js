import React from 'react';
import './App.css';
import Data from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

// console.log(Data);

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList allmovies={ Data } />
    </div>
  );
}

export default App;
