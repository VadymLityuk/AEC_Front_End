import React from 'react';
import '../App.css';
import '../components/style/accueil.scss';
import {Onlinecinema} from '../components/Onlinecinema'

import Accueil from './Accueil.js'
import Navi from '../components/nav'
import { useLocation, Route, Switch } from "react-router-dom";

function App() {
  let location = useLocation(); 

  return (
    <>
    <Navi/>
    <Switch>
          <Route path="/" exact component={Accueil} /> 
          <Route path="/Accueil" component={Accueil} /> 
          <Route path="/Onlinecinema" component={Onlinecinema} /> 
        
    </Switch>
    </>

  );
}

export default App;
