import React from 'react';
import picture from './img/janetBW.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>My React App</h1>
    <h2>Author: Janet Clemente</h2>
      <header className="App-header">
        <img src={picture} alt="ja" />
      </header>
    </div>
  );
}

export default App;
