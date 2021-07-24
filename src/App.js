import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Movies from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="movie-list">
          <MovieList movies={ Movies } />
        </div>
      </div>
    );
  }
}

export default App;
