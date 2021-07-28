import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      {movies.map(({ title, subtitle, storyline, rating, imagePath }) => (
        <MovieList
          key={ title }
          title={ title }
          subtitle={ subtitle }
          storyline={ storyline }
          rating={ rating }
          imagePath={ imagePath }
        />
      ))}
    </div>
  );
}

export default App;
