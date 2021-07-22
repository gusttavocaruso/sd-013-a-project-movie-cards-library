import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCards from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieCards />
    </div>
  );
}

export default App;
