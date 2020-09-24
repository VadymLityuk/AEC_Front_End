import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Card} from "react-bootstrap";

import './style/accueil.scss'

import { Link } from "react-router-dom";
import {API} from "../constante";
import {Films} from './Fichefilms';


export class ListeFilms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {donneesRecues: []};

    }

    async componentDidMount() {
        try {
            const response = await fetch(API);
            const reponseDeApi = await response.json();
            this.setState({donneesRecues:reponseDeApi});
            if (!response.ok) {
                throw Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.donneesRecues.map((key, i) => (
                        <Films
                            title={key.title}
                            id={key._id}
                            key={key.title + key._id}
                            moviegenre={key.moviegenre}
                            picture={key.picture}
                            year={key.year}
                            history={this.props.history}>
                           
                        </Films>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ListeFilms;