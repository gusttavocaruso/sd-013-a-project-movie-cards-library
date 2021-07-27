import React from 'react';
import './App.css';
import Filmes from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList xablau={ Filmes } />
    </div>
  );
}

export default App;
