import React from 'react';
import logo from './logo.svg';
import BoutonPWA from './components/BouttonPWA';
import './App.css';
import DemoTLOU from './components/DemoLASTOF.js';

function App() {
  return (
    <div className="App">
      <BoutonPWA/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="400 px" height="100 px"/>
      </header>
      <DemoTLOU/>
    </div>
  );
}

export default App;
