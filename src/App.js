// Projeto realizado com a ajuda das mulheres da Turma 13 - Tribo A - Aline Eiko Hoshino, Débora Teodorico, Elaine Moreira, Heleny Flávia, Isabella Antunes, Jéssica Queiroz, Júlia Baptista, Lanai Conceição, Luiza Antiques, Sthefany Caroline, Vanessa Rios e tambem Pedro Delicoli.

import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ Movies } />
    </div>
  );
}

export default App;
