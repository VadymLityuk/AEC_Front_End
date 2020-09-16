import React from 'react';
import '../App.css';
import '../components/style/accueil.scss';
import Accueil from './Accueil.js'
import { useLocation, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  let location = useLocation(); 

  return (
    
    <Route path="/" exact component={Accueil} />
  );
}

export default App;
