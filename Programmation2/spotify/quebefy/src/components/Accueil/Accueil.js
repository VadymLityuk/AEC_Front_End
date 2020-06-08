import React from "react";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import {Catalogue} from '../Catalogue/Catalogue'
import {Connexion} from '../Connexion/Connexion'
import {Deconnexion} from '../Deconnexion/Deconnexion.js'


import '../MainPage/page.css'


export class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {connecter: false};
    this.gererConnexion = this.gererConnexion.bind(this);
    this.verifierConnexion = this.verifierConnexion.bind(this);
    this.Header = this.Header.bind(this);

  }


  

  Header() {
    return (

        <Row className="d-flex align-items-center pt-2 pb-3 main">
            <Col>
            
             <Deconnexion className="dec" onClick={this.verifierConnexion}/>
                                

            </Col>
        </Row>


    )
}

  verifierConnexion(connexion){
    this.setState({ connecter: connexion });
  }

  gererConnexion(){
    if(this.state.connecter){
      return (
          <Container fluid>
             {this.Header()}
        <Catalogue />
        </Container>
      )
    }
    else{
      return(
        <Connexion onClick={this.verifierConnexion} />
      )
    }
  }
  render() {
    return (
       this.gererConnexion()
    );
  }
}
