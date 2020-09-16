import React, { useState, useEffect } from 'react'
import './style/accueil.scss'

import { Link } from "react-router-dom";

import { Row, Col, Container,Image,Button } from 'react-bootstrap'
const picha= {
    bill: require("../components/img/bill.jpg"),
    witcher:require("../components/img/witcher.jpg"),
    boys : require("../components/img/boys2.jpeg"),
    bted : require("../components/img/billtt.jpg"),
    nm : require("../components/img/mutant.jpg"),
    tenet : require("../components/img/ten.jpg"),
    mul : require("../components/img/mul.jpg")
  };

  export class accs extends React.Component {

    render(){
        return(
<>
<div data-aos="fade-left"class="row filtres pt-3">
      <div class="col-12">
          <ul>
              <li class="boutonActif">Accueil</li>
              <li id="comedy"><Link to={"/Onlinecinema"}>Online Cinema</Link></li>
              <li id="comedy"><Link to={"/Films"}>Ajouter un Film</Link></li>
              <li>Horreurs</li>
              <li>TvShoow</li>
              <li>Noname</li>
              <li>Noname</li>
        
          </ul>   
      </div>
  </div>
</>
        );
    }
  }
