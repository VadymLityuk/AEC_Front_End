import React from 'react';
import '../App.css';
import '../components/style/home.scss';


import Accueil from './Accueil.js'
import Navi from '../components/nav'
import { useLocation, Route, Switch } from "react-router-dom";
import { AjouterFilm } from './AjouterFilm';
import   { ListeFilms } from './Film';
import { FormModif } from './FormModifier';
import FilmInfo from './filminfo';




function App() {
  let location = useLocation(); 

  return (
    <>
    <Navi/>
    <Switch>
          <Route path="/" exact component={Accueil} /> 
          <Route path="/Accueil" component={Accueil} /> 
          <Route path="/AjouterFilm" component={AjouterFilm} />  
          <Route path="/Films" component={ListeFilms} /> 
          <Route path="/Fichefilms/:id" component={FormModif} />
          <Route path="/FilmInfo" component={FilmInfo} />
        
        
        
    </Switch>
    </>

  );
}

export default App;
