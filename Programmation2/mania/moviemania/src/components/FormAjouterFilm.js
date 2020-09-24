import React from "react";
import { Form, Button , Image, Container, Row , Col } from "react-bootstrap";
import {API} from "../constante";
import { Link } from "react-router-dom";
import './style/home.scss'


export class AjouterFilms extends React.Component {
    constructor(props) {
      super(props);
      this.state = {photo: "", setErrors : {}};
  
      this.handleAdd = this.handleAdd.bind(this);
      this.handlePhoto = this.handlePhoto.bind(this);
      this.addFilm = this.addFilm.bind(this);
    }
  
    async addFilm(titre, photo, genre,an  ) { 
      try{ 
        const response = await fetch( API , { 
          method:'POST', 
          headers: {'Content-Type': 'application/json'  }, 
          body:JSON.stringify({
           title : titre,
           picture : photo,
           moviegenre: genre,
           year : an
          }) 
        }); 
        if(response.ok){ 
          const jsonResponse = await response.json(); 
          this.props.history.push("/");
         
  
          return jsonResponse; 
        } 
        throw new Error('Request failed!'); 
    } 
     catch(error){ 
        console.log(error); 
     } 
  }
  
  formIsValid(titre, photo, genre,an){
    const _errors = {};
    if(!titre) _errors.titre = "Le titre est obligatoire";
    if(!photo) _errors.photo = "La photo est obligatoire";
    if(!genre) _errors.genre = "Le genre est obligatoire";
    if(!an) _errors.an = "Le ans de film obligatoire";
    
    this.setState({setErrors : _errors});
  
    if (Object.keys(_errors).length !== 0){
    
    }
  
    return Object.keys(_errors).length === 0;
  }
  
  
    handleAdd(event){
      event.preventDefault();
      
      const titre = document.getElementById('titreFilm').value;
      const photo = document.getElementById('photoFilm').value;
      const genre = document.getElementById('genreFilm').value;
      const year = document.getElementById('anFilm').value;
     
  
  
      if(!this.formIsValid(titre,photo,genre,year)) return;
  
        this.addFilm(titre,photo,genre,year);
      
    }
  
    handlePhoto(event){
      const photo = document.getElementById('photoFilm').value;
      this.setState( {photo : photo});
    }
  
  
    render() {
      console.log(this.props.history);
      return (
        <>
        <Container className='p-4 text-center'>   
          <h4>Ajoute votre Film dans notre Libraries</h4> 
        </Container>
        <Container className='pb-4'>
          <Row>
            <Col>
              <Form>
              <Form.Label><h4>Titre</h4></Form.Label>
                <Form.Group as={Row} controlId="titre" className='border py-2'>
                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="titreFilm">
                    <Form.Label>Titre </Form.Label>
                    <Form.Control type="text" placeholder="Entrer le titre d'un film" isInvalid={!!this.state.setErrors.titre} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.setErrors.titre}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Group>
                <Form.Label className='mt-4'><h4>Poster</h4></Form.Label>
                <Form.Group as={Row} controlId="photo" className='border  py-2'>
                  
                  
                      <Form.Group  as={Col} xl="9" lg="9" md="12" sm="12" xs="12" controlId="photoFilm">
                        <Form.Label>Coller Url d'une image d'un film</Form.Label>
                        <Form.Control type="text" placeholder="URL" onBlur={this.handlePhoto} isInvalid={!!this.state.setErrors.photo} required/>
                        <Form.Control.Feedback type='invalid'>
                          {this.state.setErrors.photo}
                        </Form.Control.Feedback>
                      </Form.Group>
                  
                  <Col as={Col} xl="3" lg="3" md="6" sm="12" xs="12" className='text-center'> 
                      <div>
                        {this.state.photo !== "" && <Image src={this.state.photo} rounded height='300'/>}
                      </div>
                  </Col> 
  
                </Form.Group>
                <Form.Label className='mt-4'><h4>Genre de film</h4></Form.Label>
                <Form.Group as={Row} controlId="" className='border border-black py-3'>
                  <Form.Group as={Col} xl="12" lg="12" md="12" sm="12" xs="12" controlId="genreFilm">
                          <Form.Label>Genre</Form.Label>
                          <Form.Control type="text" placeholder="Entrer du genre d'un film" isInvalid={!!this.state.setErrors.genre}  required/>
                          <Form.Control.Feedback type='invalid'>
                            {this.state.setErrors.genre}
                          </Form.Control.Feedback>
                  </Form.Group>
                </Form.Group>
  
                <Form.Label className='mt-4'><h4>Date de sortie</h4></Form.Label>
                <Form.Group as={Row} controlId="add" className='border border-black py-3'>
                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="anFilm">
                    <Form.Label>Date de sortie</Form.Label>
                    <Form.Control type="text" placeholder="Entrer an d'un film" isInvalid={!!this.state.setErrors.year} required/>
                    <Form.Control.Feedback type='invalid'>
                      {this.state.setErrors.year}
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Group>
                
  
  
              <Button variant="primary" className="violet" onClick={this.handleAdd}>
                  Sauvegarder un Film
              </Button>
              <Link className='links mx-2  btn btn-danger' to={"/Accueil"}>
                        
                                  Cancele
              </Link>
              </Form>  
              </Col>    
            </Row>
          </Container>
        </>
      );
    }
  }