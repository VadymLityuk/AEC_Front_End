import React from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import  Accueil  from './components/Accueil';
import Navi from './components/nav'
import "bootstrap/dist/css/bootstrap.min.css";
import './components/scss/nav.scss'
import { Onlinecinema } from './components/Onlinecinema';
import {TvShow} from './components/Films'

import './App.scss';



function App() {
  return (
  <>
    
    <Navi/>
    
    <Switch>
    <Accueil/>
    <Route path="/" exact component={Accueil} /> 
      <Route path="/Home" component={Accueil} />
      <Route path="/Onlinecinema" component={Onlinecinema} />
      <Route path="/Films" component={TvShow} />
      
    </Switch>
  </>
  
  );
}

export default App;
