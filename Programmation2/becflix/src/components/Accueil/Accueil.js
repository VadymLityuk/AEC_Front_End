
import React from "react"; 
import '../App/App.css';
import Container from 'react-bootstrap/Container';  
import flix from '../../img/img/becflix.png';
import {Cataloge} from '../Catalogue/Catalogue';
import {Connexion} from '../Connexion/Connexion';

const larg = "100px"; 


const flixlogotype = <img 
    src={flix}
    alt="logotype"
    height={larg}
    width={larg}/>


export class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            connected: true
        }
        this.gestionConnexion = this.gestionConnexion.bind(this); 
       
    }
   
    gestionConnexion(){
        let connected = this.state.connected;
        if(connected){
        return <Cataloge/>;
            }
        if(!connected){
            return <Connexion/>
        }   
        
       

        }
       
    render() {
        return (
            <Container fluid>
              {flixlogotype}
             
              {this.gestionConnexion}
            </Container>
          );
         
    }
   
};

