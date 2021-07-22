import React from 'react';
import './App.css';
import Header from './components/Header'; // Importa o componente Header
import MovieList from './components/MovieList'; // Importa o componente MovieList
import movies from './data'; // Variável movies é criada e recebe os Dados de movies do data,js e coloca na variável movies. Todos filmes vão para esta variável.

function App() {
  return ( // O return tem que retornar um HTML
    <div className="App">
      {/* É chamado o componente Header */}
      <Header />
      {/* Abaixo, o parametro para o componente MovieList é a PROP, ou seja, neste caso é o "movies".
      Eu coloco um igual para passar a PROP de movies para o MovieList, ou seja, para passar essa PROP eu coloco um igual.
     E também vamos passar na PROP a variável movies que recebeu o conteúdo de data.js */}
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
