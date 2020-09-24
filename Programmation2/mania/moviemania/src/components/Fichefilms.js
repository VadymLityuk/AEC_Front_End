  
import React from "react";
import { Link } from "react-router-dom";
import { Card, Col,Image } from "react-bootstrap"
import {API} from "../constante";
import './style/films.sass'
import './style/home.scss'
import Filminfo from './filminfo'



export class Films extends React.Component {
    constructor(props) {
        super(props);

        this.removeFilm = this.removeFilm.bind(this);
    }

    async removeFilm() {
        try{
            const response = await fetch(API + this.props.id, {
                method:'DELETE',
            });
            if(response.ok){
                const result = await response.json();
                this.props.history.push("/");
                

                return result;
            }
            throw new Error('Request failed!');
        }
        catch(error){
            console.log(error);
        }
    }

    render() {
        return (
            <>
                <Col xl="4" lg="6" md="6" sm="12" className="  my-4">
                 
                    <div id="myfilms" classname="grid-pad" >
                    <div className='text-center'>
                                
                                
                                <div class="container categories ">
                                <Link to={"/FilmInfo"}> <h1>{this.props.title}</h1></Link>
                                <h5>{this.props.moviegenre}</h5>
                                <h5>{this.props.year}</h5>
            
            <p><Link className=" mt-2" to={"Fichefilms/" + this.props.title + "?id=" + this.props.id}>MODIFIER</Link></p>
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