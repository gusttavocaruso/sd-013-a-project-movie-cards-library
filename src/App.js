import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Data from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-title"><Header /></h1>
        </header>
        <MovieList movies={ Data } />
      </div>
    );
  }
}

export default App;
