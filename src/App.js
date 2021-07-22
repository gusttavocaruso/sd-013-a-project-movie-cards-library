import React from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';

function App() {
  console.log(data);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
