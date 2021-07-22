import React, { Component } from 'react';

class Header extends Component {
  render() { // Chama o método para renderizar, criando o próprio método render
    return ( // O return tem que retornar um HTML
      <header>
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header; // Sempre exportar o componente
