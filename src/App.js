import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import Rating from './components/Rating';

function App() {
  // const rating = this.props
  return (
    <div className="App">
      <Header />
      <MovieList />
      <MovieCard />
      <Rating />
    </div>
  );
}

export default App;
