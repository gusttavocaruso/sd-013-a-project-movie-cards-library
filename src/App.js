import React from 'react';
import './App.css';
import Header from './components/Header';
import MoviList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviList />
    </div>
  );
}

export default App;
