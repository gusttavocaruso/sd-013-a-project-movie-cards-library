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

// feito com a ajuda das mulheres da Turma 13 A - Jaqueline Silva, Vanessa Rios, Debora Teodorico, Isabella Antunes, Heleny Flavia, Julia Baptista, Aline Eiko Hoshino, Elaine Moreira, Luiza Antiques, Sthefany Caroline, Jessica Queiroz, Lanai Conceicao e tambem Pedro Delicoli
