import React from 'react';
import './App.css';
import Header from './components/Header';
import MoviList from './components/MovieList';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviList movies={ data } />
    </div>
  );
}

export default App;
