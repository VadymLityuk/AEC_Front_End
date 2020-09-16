import React from 'react'; 
import {Categorie} from "../components/Categorie"
import { Link } from "react-router-dom";
import { Col,Container,Row } from 'react-bootstrap'

import '../components/style/accueil.scss';

export class Onlinecinema  extends React.Component {  

    
    render() {  
       return ( 
           
        <> 
      <Container className="">
    
       </Container>
       
       <Col className="text-center">
           <h2>Bienvenue sur notre Online Cinema</h2>
       </Col>
      
        <Categorie categorie="Suspense" />
        <Categorie categorie="Humour"/>
        <Categorie categorie="Séries américaines"/>
        
        </>          
        );  

    }  

};  