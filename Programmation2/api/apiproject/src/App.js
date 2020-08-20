import React from 'react';
import {Row,Container, Form} from 'react-bootstrap';
import './App.css';
import {ListePersonnages} from './components/lp';
import {Personnage} from './components/pp';
import {ShortenURL} from './components/shorten';


function App() {
  return (
   
      <Container>
    <ShortenURL/>
    </Container>
    
  );
}

export default App;
