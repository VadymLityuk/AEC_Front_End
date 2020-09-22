import React from 'react';
import '../App.css';
import '../components/style/home.scss';


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
        
        
    </Switch>
    </>

  );
}

export default App;
