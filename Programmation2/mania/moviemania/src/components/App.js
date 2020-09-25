import React from 'react';
import '../App.css';
import '../components/style/home.scss';


import Accueil from './Accueil.js'
import Navi from '../components/nav'
import { useLocation, Route, Switch } from "react-router-dom";
import { AjouterFilm } from './AjouterFilm';
import   { ListeFilms } from './Film';
import { ModifFilm} from './FormModifier';
import {FilmInfo} from './filminfo';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'





function App() {
  let location = useLocation(); 

  return (
    <>
    <Navi/>
    <ToastContainer autoClose={3000} hideProgressBar />
    <Switch>
      
          <Route path="/" exact component={Accueil} /> 
          <Route path="/Accueil" component={Accueil} /> 
          <Route path="/AjouterFilm" component={AjouterFilm} />  
          <Route path="/Films" component={ListeFilms} /> 
          <Route path="/FormModif/:id" component={ModifFilm} />
          <Route path="/ShowInfo/:id" component={FilmInfo} />
         
        
        
    </Switch>
    </>

  );
}

export default App;
