import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {API} from "../constante";
import {toast} from "react-toastify"

export class ModifFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            donneesRecues: {id: 0, title: '', picture: "", moviegenre : "",year : "" },
            setErrors : {}};

            this.handleEdit = this.handleEdit.bind(this);
            this.handlePic = this.handlePic.bind(this);
            this.editFilm = this.editFilm.bind(this);
            this.removeFilm = this.removeFilm.bind(this);
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

    async editFilm(title, picture, moviegenre,year  ) { 
        try{ 
          const response = await fetch( API + this.state.id, { 
            method:'PUT', 
            headers: {'Content-Type': 'application/json'  }, 
            body:JSON.stringify({ 
                id:this.state.id,

             title : title,
             picture : picture,
             moviegenre: moviegenre,
             year : year
            }) 
          }); 
          if(response.ok){ 
            const jsonResponse = await response.json(); 
            this.props.history.push("/Films");
            toast.success("Modification d'un film " + this.state.id);
           
    
            return jsonResponse; 
          } 
          throw new Error('Request failed!'); 
      } 
       catch(error){ 
          console.log(error); 
       } 
    }
    async removeFilm() {
        try{
            const response = await fetch(API + this.state.id, {
                method:'DELETE',
            });
            if(response.ok){
                const result = await response.json();
                this.props.history.push("/Films");
                toast.success("Supression d'un film");
             
                
                

                return result;
            }
            throw new Error('Request failed!');
        }
        catch(error){
            console.log(error);
        }
    }
    handleEdit(event){
        event.preventDefault();

        const title = document.getElementById('titreFilm').value;
       const picture = document.getElementById('photoFilm').value;
       const moviegenre = document.getElementById('genreFilm').value;
       const year = document.getElementById('anFilm').value;

        this.editFilm(title, picture, moviegenre, year);
      
        toast.success("Modification d'un film' " + title );
    }

    handlePic(){
        const picture = document.getElementById('photoFilm').value;
        this.setState( {picture : picture});
    }

    render() {
        return (
            <>
                      <Container>
                    <Row>
                        <Col width={60}>
                        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="titreFilm">
      <Form.Label><h4>Titre d'un film</h4></Form.Label>
      <Form.Control type="text" defaultValue={this.state.donneesRecues.title}/> 
    </Form.Group>

 </Form.Row>
 <Form.Group controlId="photoFilm">
        <Form.Label><h4>Coller URL d'une image</h4></Form.Label>
        <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto} defaultValue={this.state.donneesRecues.picture}/>
        {this.state.donneesRecues.picture !== "" && <Image src={this.state.donneesRecues.picture} rounded width="240"/>}
</Form.Group>

 


  <Form.Row>
  <Form.Group controlId="genreFilm">
                                    <Form.Label><h4>Gendre de film</h4></Form.Label>
                                    <Form.Control type="text" placeholder="Entrer le genre d'un film" defaultValue={this.state.donneesRecues.moviegenre}/>
                                </Form.Group>
 

</Form.Row>
  <Form.Row>
  <Form.Group controlId="anFilm">
                                    <Form.Label><h4>Date de sortie d'un film</h4></Form.Label>
                                    <Form.Control type="text" placeholder="Entre date de sortie d'un film" defaultValue={this.state.donneesRecues.year }/>
                                </Form.Group>

</Form.Row>


  <Button variant="dark" type="submit" onClick={this.handleEdit}>
                                    Sauvegarder
                                </Button>

                                <Button className="" variant="light" type="submit" ><Link to={"/Films"}> Retour aux Films </Link>
                                </Button>

                                
                                <Button className="" variant="danger" type="submit" className=" btn btn-danger" onClick={this.removeFilm} >Supprimer
                                </Button>
</Form>
                   </Col>
                   </Row>
                </Container>
            </>
          );
        }
      }