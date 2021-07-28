import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <Rating />
      {/* <MovieList movies={ movies } /> */}
    </div>
  );
}

export default App;
