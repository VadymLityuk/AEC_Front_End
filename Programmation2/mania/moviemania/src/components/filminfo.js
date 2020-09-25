import React, {useState, useEffect} from "react";
import { Col,Row,Card,Button} from "react-bootstrap";
import {API} from "../constante";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";



export class FilmInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        donneesRecues: {id: 0, title: '', picture: "", moviegenre : "",year : "" },
        setErrors : {}};

       
}

async componentDidMount() {
    try {
        await this.setState({id : this.props.location.search.substring(4, this.props.location.search.length)});
        await console.log(this.state.id);
        const response = await fetch(API + this.state.id);
        const reponseDeApi = await response.json();
        this.setState({ donneesRecues: reponseDeApi });

        if (!response.ok) {
            throw Error(response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}
render() {
  return (
    <>
    <Col className="text-dark">
    <h1 className='text-center'>{this.state.donneesRecues.title} </h1>
  <Image className="offset-lg-2 sm-1" sm={5} src={this.state.donneesRecues.picture} rounded width="300"  />

  <Card.ImgOverlay>
    <Card.Title className="text-center">
    
    <div class="container categories">
    <div class="row justify-content-center">
    <ul>
       <h4>Genre :  <p > {this.state.donneesRecues.moviegenre}</p> </h4>
       <h4>Date de Sortie :  <p > {this.state.donneesRecues.year}</p> </h4>
       <p ><Link to={"/Films"}>Retour aux films</Link></p>
     </ul>
 <ul>


 </ul>
      
     

</div> 
</div>
</Card.Title>
  
  </Card.ImgOverlay>

</Col>
     
     <Col className="text-center"sm={10}>

         </Col>
         
     =
        

          
      
   
    
       
      
    
     
      
      
   
       
       
      
    </>
  );
}
}