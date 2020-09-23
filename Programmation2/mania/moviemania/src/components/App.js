import React from 'react';
import '../App.css';
import '../components/style/home.scss';


import Accueil from './Accueil.js'
import Navi from '../components/nav'
import { useLocation, Route, Switch } from "react-router-dom";
import { AjouterFilm } from './AjouterFilm';
import  FilmHooks from './Film';


function App() {
  let location = useLocation(); 

  return (
    <>
    <Navi/>
    <Switch>
          <Route path="/" exact component={Accueil} /> 
          <Route path="/Accueil" component={Accueil} /> 
          <Route path="/AjouterFilm" component={AjouterFilm} />  
          <Route path="/Films" component={FilmHooks} /> 
        
        
    </Switch>
    </>

  );
}

export default App;
