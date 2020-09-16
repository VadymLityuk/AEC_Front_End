import React from 'react';
import  Accueil  from './components/Accueil';
import Navi from './components/nav'
import "bootstrap/dist/css/bootstrap.min.css";
import './components/nav.scss'
import { Route, Switch } from 'react-router-dom';
import {Onlinecinema} from './components/Onlinecinema'

import './components/accueil.scss'

function App() {
  return (

<>
    <Navi/>
    
      <Switch>
      <Route path="/" exact  component={Accueil} />
      <Route path="/Home" component={Accueil} />
      <Route path="/Onlinecinema" component={Onlinecinema} />
     
      
    </Switch>
    </>
    
    
  );
}

export default App;
