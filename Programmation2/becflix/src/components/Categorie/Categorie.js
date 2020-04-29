import React from 'react'; 
import Row from 'react-bootstrap/Row';
import {TVshow} from '../TVshow/TVshow';
import Container from 'react-bootstrap/Container';


const nomCategorie ='FANTASY';
export class Categorie extends React.Component{
    render() {
        return (
            <Container fluid>
                <Row>
                    <h1>{nomCategorie}</h1>
                </Row>
                <Row>
                    <TVshow/>
                    <TVshow/>
                    <TVshow/>
                    <TVshow/>
                    <TVshow/>
                    <TVshow/>
                </Row>
            </Container>
        );
    }
};