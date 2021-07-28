import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  const filmes = [
    {
      id: 1,
      name: 'Troia',
    }, {
      id: 2,
      name: 'Homem aranha',
    }, {
      id: 3,
      name: 'Coringa',
    }];
  return (
    <div className="App">
      <Header />
      {filmes.map(({ name, id }) => (
        <MovieList key={ id } movies={ name } />
      ))}
    </div>
  );
}

export default App;
