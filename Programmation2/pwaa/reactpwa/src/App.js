import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import  Accueil  from './components/Accueil';
import Navi from './components/nav'
import './components/nav.scss'
import {Onlinecinema} from './components/Onlinecinema'

import './components/accueil.scss'

function App() {
  let location = useLocation(); 
  console.log(location.pathname); 
  return (
  
    <>

   
    
     <Accueil/>
    
     
      
    </>
   
    
  );
}

export default App;
