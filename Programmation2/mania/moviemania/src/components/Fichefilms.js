  
import React from "react";
import { Link } from "react-router-dom";
import { Card, Col,Image } from "react-bootstrap"
import {API} from "../constante";
import './style/films.sass'
import './style/home.scss'
import Filminfo from './filminfo'
import {toast} from "react-toastify";



export class Films extends React.Component {
  
    



    render() {
        return (
            <>
                <Col xl="4" lg="6" md="6" sm="12" className="  my-4">
                 
                    <div id="myfilms" classname="grid-pad" >
                    <div className='text-center'>
                                
                                
                                <div class="container categories ">
                                 <h1>{this.props.title}</h1>
                             
                               
                                <p><Link className=" mt-2" to={'ShowInfo/' + this.props.title + "?id=" + this.props.id}>Info</Link></p>
            <p><Link className=" mt-2" to={"FormModif/" + this.props.title + "?id=" + this.props.id}>MODIFIER</Link></p>
            <p className=" mt-1" onClick={this.removeFilm}>SUPPRIMER</p>
            

</div>
<hr></hr>
                            </div>
                   <div className="card-custom">

                            <Image className="filmimage"  src={this.props.picture} alt='photofilm' className='img-fluid ' />

                            </div>
                  
                        </div>
                        
                            
                        
                       
                
                </Col>
            </>
        );
    }
}