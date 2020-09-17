import React from 'react'
import { Row, Col, Container,Image,Button } from 'react-bootstrap'
import Aos from "aos";
import "aos/dist/aos.css"
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom' 
import './style/mediaQuerry.scss'

import './style/nav.scss'
import './style/accueil.scss';

const pica= {
    mania: require("../components/img/moviemania-logo.png")
};

export default function Navi() {
    return (
       
<>
        <header  data-aos="fade-right"  class="header container-fluid">
 

    <div class="row">
        <div class="col-sm-12 col-lg-12 ">
            <div  class="headerContent">
                <div class="text-center mb-3"><Image fluid src={pica.mania}  /></div>
                <h4 class="text-center">PLUS GRAND SOURCE DE CINEMA</h4>
            </div>
        </div>
    </div>
</header>
<div data-aos="fade-left" class="container categories">
    <div class="row justify-content-center">
        <p class="selected-bg selected-category"><Link  to={"/Accueil"}>Accueil</Link></p>
        <p ><Link to={"/Onlinecinema"}>Online Cinema</Link></p>
        <p><Link to={"/AjouterFilm"}>Ajouter un Film</Link></p>
        <p>Nature</p>
        
    </div>
</div>

</>

        )
    }