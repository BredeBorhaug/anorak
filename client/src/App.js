import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Navigation from './features/navigation/navigation';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn about </span>
          <a
            className="App-link"
            href="https://github.com/BredeBorhaug/anorak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anorak
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
