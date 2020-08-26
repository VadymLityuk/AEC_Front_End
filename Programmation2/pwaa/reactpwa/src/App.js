import React from 'react';
import logo from './img/sp.png';
import BoutonInstallPWA from './components/BoutoninstallPWA';
import DemoJSONLocal from './components/DemoJSONLocal';
import './App.css';

function App() {
  return (
    <div className="App">
      <BoutonInstallPWA/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="400 px" height="100 px"/>
        <h1>
          Swiiiing
        </h1>
      </header>
      <DemoJSONLocal/>
    </div>
  );
}

export default App;
