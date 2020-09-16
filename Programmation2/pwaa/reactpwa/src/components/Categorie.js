import React from 'react'; 
import Row from 'react-bootstrap/Row';  
import {TvShow} from "../components/Films"
import '../components/accueil.scss';

const tabSuspense = [ 
    { 
        src : require("../components/img/bill.jpg"), 
        alt: "Les invincibles", 
        title: "Les Invincibles"  
    }, 
    {   
        src : require("../components/img/bill.jpg"), 
        alt:  "Série noire", 
        title: "Série noire" 
    } ,
    {   
        src :require("../components/img/bill.jpg"),
        alt:"19-2" ,
        title:"19-2" 
    } ,
    {   
        src:require("../components/img/bill.jpg"),
        alt:"district31" ,
        title:"District 31"  
    } ,
    {   
        src: require("../components/img/bill.jpg"), 
        alt:"Fugueuse" ,
        title:"Fugueuse"  
    } ,
    {   
        src:require("../components/img/bill.jpg"),
        alt:"Unite 9",
        title:"Unite 9" 
    } 
    ] 
    const tabHumour = [ 
        { 
            src : require("../components/img/bill.jpg"), 
            alt: "Les invincibles", 
            title: "Les Invincibles"  
        }, 
        {   
            src : require("../components/img/bill.jpg"), 
            alt:  "Série noire", 
            title: "Série noire" 
        } ,
        {   
            src :require("../components/img/bill.jpg"),
            alt:"19-2" ,
            title:"19-2" 
        } ,
        {   
            src:require("../components/img/bill.jpg"),
            alt:"district31" ,
            title:"District 31"  
        } ,
        {   
            src: require("../components/img/bill.jpg"), 
            alt:"Fugueuse" ,
            title:"Fugueuse"  
        } ,
        {   
            src:require("../components/img/bill.jpg"),
            alt:"Unite 9",
            title:"Unite 9" 
        } 
        ] 
        const tabSerieAmericaines = [ 
            { 
                src : require("../components/img/bill.jpg"), 
                alt: "Les invincibles", 
                title: "Les Invincibles"  
            }, 
            {   
                src : require("../components/img/bill.jpg"), 
                alt:  "Série noire", 
                title: "Série noire" 
            } ,
            {   
                src :require("../components/img/bill.jpg"),
                alt:"19-2" ,
                title:"19-2" 
            } ,
            {   
                src:require("../components/img/bill.jpg"),
                alt:"district31" ,
                title:"District 31"  
            } ,
            {   
                src: require("../components/img/bill.jpg"), 
                alt:"Fugueuse" ,
                title:"Fugueuse"  
            } ,
            {   
                src:require("../components/img/bill.jpg"),
                alt:"Unite 9",
                title:"Unite 9" 
            } 
            ] 


            

export class Categorie extends React.Component {  
    render() {  
       return   (   <>
                    {this.AfficherTitreCategorie()}
                    {this.AfficherSeriesCategorie()}
                    </>
                )
     } 

    AfficherTitreCategorie() {
        return  <Row className="mt-4">  
                    <h2 className="text-black ml-3">{this.props.categorie}</h2>
                </Row>  
    }

    AfficherSeriesCategorie() { 
        if(this.props.categorie === "Suspense") {      
            return ( <Row>{tabSuspense.map((element,i) => <TvShow key={"suspense" + i} src={element.src} alt={element.alt} title={element.title} ></TvShow> )}</Row>)
        }else if(this.props.categorie==="Humour"){
            return ( <Row>{tabHumour.map((element,i) => <TvShow key={"humour" + i} src={element.src} alt={element.alt} title={element.title} ></TvShow> )}</Row>)
        }else if(this.props.categorie==="Séries américaines"){
            return ( <Row>{tabSerieAmericaines.map((element,i) => <TvShow key={"seriesAmericaines" + i} src={element.src} alt={element.alt} title={element.title} ></TvShow> )}</Row>)
        }
    }     
};  