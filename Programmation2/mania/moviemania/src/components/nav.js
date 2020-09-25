import React from 'react'
import { Row, Col, Container,Image,Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom' 
import './style/mediaQuerry.scss'
import Zoom from 'react-reveal/Zoom';
import './style/nav.scss'
import './style/accueil.scss';
import Fade from 'react-reveal/Fade';

const pica= {
    mania: require("../components/img/moviemania-logo.png")
};

export default function Navi() {
    return (
       
<>

        <header   class="header container-fluid">
 

    <div class="row">
        <div class="col-sm-12 col-lg-12 ">
            <div  class=" text-center headerContent">
             <Zoom left>
                <div class="text-center mb-3"><Image fluid src={pica.mania}  /></div>
                <h4 class="text-center">PLUS GRAND SOURCE DE CINEMA</h4>

                </Zoom>
              
            </div>

        </div>
    </div>
</header>

<div class="container categories">
    <div class="row justify-content-center">
        <Fade left>
        <p class="selected-bg selected-category"><Link  to={"/Accueil"}>Accueil</Link></p>
       
        <p ><Link to={"/Films"}>Films</Link></p>
        <p><Link to={"/AjouterFilm"}>Ajouter un Film</Link></p>
        <p   block id="boutonInstall" ><Link>INSTALLER L'APPLICATION </Link></p>
 

        </Fade>
        

        
    </div>
</div>
        

</>

        )
    }