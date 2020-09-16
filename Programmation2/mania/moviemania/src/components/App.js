import React from 'react';
import '../App.css';
import '../components/style/accueil.scss';
import Accueil from './Accueil.js'
import Navi from '../components/nav'
import { useLocation, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  let location = useLocation(); 

  return (
    <>
    <Navi/>
    <Accueil/>
    </>

  );
}

export default App;
