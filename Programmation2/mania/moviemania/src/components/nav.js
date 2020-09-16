import React from 'react'
import { Row, Col, Container,Image,Button } from 'react-bootstrap'
import Aos from "aos";
import "aos/dist/aos.css"
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom' 

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
        <div class="col-12 d-flex align-items-center justify-content-center">
            <div  class="headerContent">
                <div class="text-center mb-3"><Image fluid src={pica.mania}  /></div>
                <h4 class="text-center">PLUS GRAND SOURCE DE CINEMA</h4>
            </div>
        </div>
    </div>
</header>
<div data-aos="fade-left"class="row filtres pt-3">
      <div class="col-12">
          <ul>
              <li class="boutonActif"><NavLink classname="linkin" to={"/Accueil"}>Accueil</NavLink></li>
              <li id="comedy"><Link to={"/Onlinecinema"}>Online Cinema</Link></li>
              <li id="comedy"><Link to={"/AjouterFilm"}>Ajouter un Film</Link></li>
              <li>Horreurs</li>
              <li>TvShoow</li>
              <li>Noname</li>
              <li>Noname</li>
        
          </ul>   
      </div>
  </div>

</>

        )
    }