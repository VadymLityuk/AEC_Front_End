import React from 'react'; 
import {Categorie} from "../components/Categorie"
import { Link } from "react-router-dom";
import { Col,Container,Row } from 'react-bootstrap'

import '../App.scss';

export class Onlinecinema  extends React.Component {  

    
    render() {  
       return ( 
           
        <> 
      <Container className="">
          
      <div class="row filtres pt-3">
      <div class="col-12">
          <ul>
              <li class="boutonActif">Online Cinema</li>
              <li id="comedy"><Link to={"/Home"}>Accueil</Link></li>
              <li id="comedy"><Link to={"/Films"}>Ajouter un Film</Link></li>
              <li>Horreurs</li>
              <li>TvShow</li>
              <li>Amérique du Nord</li>
              <li>Améridque du Sud</li>
        
          </ul>   
      </div>
  </div>
    
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