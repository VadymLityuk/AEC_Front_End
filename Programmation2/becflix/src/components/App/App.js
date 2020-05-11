import React from "react";  
import flix from '../../img/img/becflix.png';
import "./App.css";
import Container from 'react-bootstrap/Container';
import {Cataloge} from '../Catalogue/Catalogue';

const larg = "100px"; 


const flixlogotype = <img 
    src={flix}
    alt="logotype"
    height={larg}
    width={larg}/>
    

function App() {
  return (
    <Container fluid>
      {flixlogotype}
      <Cataloge/>
    </Container>
  );
}

export default App;
