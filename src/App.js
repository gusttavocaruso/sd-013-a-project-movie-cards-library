import React, { Component } from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
// import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
// import Rating from './components/Rating';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <MovieCard /> */}
        <MovieList movies={ movies } />
        {/* <Rating /> */}
      </>
    );
  }
}

export default App;
