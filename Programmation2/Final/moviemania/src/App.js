import React from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import  Accueil  from './components/Accueil';
import Navi from './components/nav'
import "bootstrap/dist/css/bootstrap.min.css";
import './components/nav.scss'
import { Onlinecinema } from './components/Onlinecinema';
import {TvShow} from './components/Films'

import './components/accueil.scss';




function App() {
  return (
  <React.Fragment>
    
    <Navi/>
    <Router>
    <Switch>
      <Route path="/" exact  component={Accueil} />
      <Route path="/Home" component={Accueil} />
      <Route path="/Onlinecinema" component={Onlinecinema} />
      <Route path="/Films" component={TvShow} />
      
    </Switch>
    </Router>
  </React.Fragment>
  
  );
}

export default App;
