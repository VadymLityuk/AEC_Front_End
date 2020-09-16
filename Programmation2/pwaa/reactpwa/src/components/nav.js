import React from 'react'
import { Row, Col, Container,Image,Button } from 'react-bootstrap'


import './nav.scss'
const pica= {
    mania: require("../components/img/moviemania-logo.png")
};

export default function Navi() {
    return (
       

        <header   class="header container-fluid">
 

    <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-center">
            <div  class="headerContent">
                <div class="text-center mb-3"><Image fluid src={pica.mania}  /></div>
                <h4 class="text-center">PLUS GRAND SOURCE DE CINEMA</h4>
            </div>
        </div>
    </div>
</header>

        )
    }