import React from 'react';
import './App.css';
import Header from 'Header.jsx';
import MovieList from 'MovieList.jsx';
import movies from './data';


class App extends React.Component {
  render() {
    return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      <Header />
      
      <MovieList movies = { movies }/>
    </div>
    );
  }
}

export default App;
