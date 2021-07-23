import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      {movies.map(({ title, subtitle, storyLine, rating, imagePath }, i) => (
        <MovieList
          key={ i }
          title={ title }
          subtitle={ subtitle }
          storyLine={ storyLine }
          rating={ rating }
          imagePath={ imagePath }
        />
      ))}
    </div>
  );
}

export default App;
