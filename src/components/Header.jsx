import React from 'react';

class Header extends React.Component {
  render() { // Chama o método para renderizar, criando o próprio método render
    return ( // O return tem que retornar um HTML
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header; // Sempre exportar o componente
