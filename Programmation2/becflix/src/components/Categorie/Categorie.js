import React from 'react'; 
import Row from 'react-bootstrap/Row';
import {TVshow} from '../TVshow/TVshow';

const tabSuspense = [
    {
        src: require('../../img/witcher.jpg'), 
        alt:"The Witcher" ,
        title:"The Witcher"},
    {
    src: require('../../img/img/Suspense/unite9.jpg'), 
        alt:"Unite 9" ,
        title:"Unite 9"},
    { 
    src: require('../../img/img/Suspense/district31.jpg'), 
        alt:"District 31", 
        title:"District 31" },
    {
    src:require('../../img/img/Suspense/fugueuse.jpg'), 
        alt:"Fugueuse", 
        title:"Fugueuse"},
    {
    src:require('../../img/img/Suspense/lesinvincibles.jpg'), 
        alt:"Les invincibles", 
        title:"Les Invincibles" },
    { 
    src:require('../../img/img/Suspense/serienoire.jpg'), 
        alt:"Serie noire", 
        title:"Serie noire" }
];

export class Categorie extends React.Component{
    render() {
        return (
            <>
                <Row>
                    <h1>{this.props.categorie}</h1>
                    <p>{this.props.title}</p>
                </Row>
                <Row>
                    {this.AfficherCategorie()}
                </Row>
            </>
        );
        }

    AfficherCategorie(){
        if (this.props.categorie === 'Suspense'){
            return(
                tabSuspense.map((element,i) => <TVshow  
    
                keys={"suspense" + i} 
                    src={element.src} 
                    alt={element.alt} 
                    title={element.title}></TVshow>) 
                )
            }
    
         }
        };
         
        Categorie.defaultProps = {
            categorie : 'Suspense'};