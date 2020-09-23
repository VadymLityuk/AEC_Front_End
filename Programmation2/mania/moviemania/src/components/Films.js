import React, {useRef, useEffect} from "react";
import {Card,Image} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import './style/films.sass'


const picha= {
  
  witcher:require("../components/img/witcher.jpg"),
}

export class Film extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <Col sm="12" className="my-4"> 
      <div class="container section-cards sm-4">
   <div class="row">
       <div class="col-4">
           <div class="row">
               <div class="container-cards">
                   <div class="card-custom ">
                   <Image  src={this.props.urlPhoto}  rounded width="400"/>
                       
                       <div class="body-card">
                           <div class="card-container">
                           <Link to={"movies/" + this.props.title +"?id=" + this.props.id}>
                        <h4>{this.props.title}</h4> </Link> 
                              
                           </div>
                           <div class="row">
                               <div class="col8">
                               <Link to={"movies/" + this.props.genre +"?id=" + this.props.id}>
                        <h4>{this.props.genre}</h4> </Link> 
                                   <hr></hr>
                               </div>
                               <div class="col4">
                                   <a class="comment"><i class="far fa-comment"></i><span class="nbComments">♥</span></a>
                               </div>
                           </div>

                           <div class="footer-card">
                               <h6><a href="#">WISHLIST</a></h6>
                           </div>
                       </div>
                   </div>
                   </div>
                   </div>
                   </div>
                   </div>
                   </div>
                   </Col>
  
      
      </>
    );
  }
}