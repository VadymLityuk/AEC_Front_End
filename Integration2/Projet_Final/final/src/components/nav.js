import React from 'react'
import { Row, Col, Container,Image,Button } from 'react-bootstrap'
import {NavLink} from 'react-router-dom' 
import '../App.scss'
import Aos from "aos";
import "aos/dist/aos.css"

import './scss/nav.scss'
const pica= {
    mania: require("../components/img/moviemania-logo.png")
};

export default function Navi() {
    return (
       

        <header  data-aos="fade-right"  class="header container-fluid">
 

    <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-center">
            <div  class="headerContent">
                <div class="text-center mb-3"><Image fluid src={pica.mania}  /></div>
                <h4 class="text-center">PLUS GRAND SOURCE DE CINEMA</h4>
            </div>
        </div>
    </div>
    <div data-aos="fade-left"class="row filtres pt-3">
      <div class="col-12">
          <ul>
              <li class="boutonActif">Accueil</li>
              <li id="comedy"><NavLink to={"/Onlinecinema"}>Online Cinema</NavLink></li>
              <li id="comedy"><NavLink to={"/Films"}>Ajouter un Film</NavLink></li>
              <li>Horreurs</li>
              <li>TvShoow</li>
              <li>Noname</li>
              <li>Noname</li>
        
          </ul>   
      </div>
  </div>
</header>

        )
    }