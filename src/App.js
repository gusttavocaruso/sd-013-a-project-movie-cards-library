import React from 'react';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="movie-card-header">
          <h1 className="page-title"><Header /></h1>
        </header>
      </div>
    );
  }
}

export default App;
