import React from 'react'; 
import Row from 'react-bootstrap/Row';
import {TVshow} from '../TVshow/TVshow';

const tabSuspense = [
    {
        src: require('../../img/img/Suspense/district31.jpg'), 
        alt:"District 31" ,
        title:"Disctrict 31"},
    {
    src: require('../../img/img/Suspense/unite9.jpg'), 
        alt:"Unite 9" ,
        title:"Unite 9"},
    { 
    src: require('../../img/img/Suspense/19-2.jpg'), 
        alt:"19-2", 
        title:"19-2" },

    {
       src:require('../../img/img/Suspense/lesinvincibles.jpg'), 
        alt:"Les invincibles", 
        title:"Les Invincibles" },
    {
     src:require('../../img/img/Suspense/serienoire.jpg'), 
        alt:"Serie noire", 
        title:"Serie noire" },    

    {
    src:require('../../img/img/Suspense/fugueuse.jpg'), 
        alt:"Fugueuse", 
        title:"Fugueuse"},
     
   
   
];
const tabHumour = [

    {
        src: require('../../img/img/Humour/lanceEtCompte.jpg'), 
        alt:"Lance et Compte" ,
        title:"Lance et Compte"},
        
    {
        src: require('../../img/img/Humour/lapetitevie.jpg'), 
        alt:"La Petite Vie" ,
        title:"La Petite Vie"},   
    {
         src: require('../../img/img/Humour/lesboys.jpg'), 
         alt:"Les Boys" ,
         title:"Les Boys"},       
    
    {
        src: require('../../img/img/Humour/lesbeauxmalaises.jpg'), 
        alt:"Les Beaux Malaises" ,
        title:"Les Beaux Malaises"},     
    {
         src: require('../../img/img/Humour/lesbougon.jpg'), 
         alt:"Les Bougon" ,
         title:"Les Bougon"}, 
    {
        src: require('../../img/img/Humour/minuitlesoir.jpg'), 
        alt:"Minuit, Le Soir" ,
        title:"Minuit, Le Soir"},                

];

const tabSerieAmericaines = [
    {
        src: require('../../img/witcher.jpg'), 
        alt:"Better call Saul" ,
        title:"Better call Saul"},
    {
    src: require('../../img/img/SeriesAmericaines/breakingbad.jpg'), 
        alt:"Breaking bad" ,
        title:"Breaking bad"},
    { 
    src: require('../../img/img/SeriesAmericaines/dexter.jpg'), 
        alt:"Dexter", 
        title:"Dexter" },
    {
    src:require('../../img/img/SeriesAmericaines/got.jpg'), 
        alt:"Game of thrones", 
        title:"Game of thrones"},
    {
    src:require('../../img/img/SeriesAmericaines/mandalorian.jpg'), 
        alt:"Mandolarian", 
        title:"Mandolarian" },
    { 
    src:require('../../img/img/SeriesAmericaines/vikings.jpg'), 
        alt:"Vikings", 
        title:"Vikings" }
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
    
         
        
     if (this.props.categorie === 'Humor'){
            return(
                    tabHumour.map((element,i) =><TVshow
                    keys={'humor' + i}
                        src={element.src}
                        alt={element.src}
                        title={element.src}
                    ></TVshow>
                    )
            )
        
        } 
     if (this.props.categorie === 'Series Americaines')
        {
            return(
                    tabSerieAmericaines.map((element,i) =>
                    <TVshow
                    keys={'Series Americaines' + i}
                        src={element.src}
                        alt={element.src}
                        title={element.src}
                    ></TVshow>
                    )
                    )
        }        
        }
    
        };
         
        Categorie.defaultProps = {
            categorie : 'Suspense'};