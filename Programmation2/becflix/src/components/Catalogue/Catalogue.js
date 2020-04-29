import React from 'react';
import logo from '../../img/netflix.png'; 
import Container from 'react-bootstrap/Container';
import {Categorie} from '../Categorie/Categorie';

const longueur = "150px"; 
const largeur = "200px";


const logoAcceuil = <img 
    src={logo}
     alt="logo"
    height={longueur}
    width={largeur}/>


export class Cataloge extends React.Component{
    render() {
        return (
            <Container fluid>
              {logoAcceuil}  
                <Categorie/>
                <Categorie/>
                <Categorie/>
                <Categorie/>
                <Categorie/>
            </Container>
        );
    }
};