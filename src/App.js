import React from 'react';
import './App.css';
import './Header'
import MeuComponente from './Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {<header>
          <MeuComponente ></MeuComponente>
        </header>}
      </div>
    );
  }
}



export default App;
