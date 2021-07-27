// Projeto realizado com a ajuda das mulheres da Turma 13 - Tribo A - Aline Eiko Hoshino, Débora Teodorico, Elaine Moreira, Heleny Flávia, Isabella Antunes, Jéssica Queiroz, Júlia Baptista, Lanai Conceição, Luiza Antiques, Sthefany Caroline, Vanessa Rios e tambem Pedro Delicoli.

import React from 'react';
import './App.css';
import Header from './components/Header';
Fernando-Lima-movie-cards-library
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import MovieList from './components/MovieList';
import Movies from './data';

function App() {
  return (
    <div className="App">
    Fernando-Lima-movie-cards-library
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
      <Header />
      <MovieList />
      <MovieCard />
      <Header />
      <MovieList movies={ Movies } />
    </div>
  );
}

export default App;
