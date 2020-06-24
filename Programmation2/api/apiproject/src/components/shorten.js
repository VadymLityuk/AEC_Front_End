import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './main.css'



export class ShortenURL extends React.Component {
    constructor(props) {
      super(props);
      this.state = {longURL : "https://www.youtube.com/watch?v=3VmtibKpmXI", shortURL : ""};
      this.getlink=this.getlink.bind(this);
      this.handleUrlChange=this.handleUrlChange.bind(this);
      this.checkValidity=this.checkValidity.bind(this);
    }
  
    getlink(){
  const apiKey = "0fb06289d64d420db830a8cd968eb6aa"; 
  const getData = async () => { 
     try{ 
      console.log("try");
        const response = await fetch('https://api.rebrandly.com/v1/links', { 
           method:'POST', 
           headers: {'Content-Type': 'application/json','apikey': apiKey  }, 
           body:JSON.stringify({destination: this.state.longURL }) 
         }); 
        if(response.ok){ 
           const jsonResponse = await response.json(); 
           console.log(jsonResponse);
           this.setState({shortURL : jsonResponse.shortUrl});
           return jsonResponse; 
        } 
        throw new Error('Request failed!'); 
     } 
     catch(error){ 
        console.log(error); 
     } 
  } 
  getData();
    }
    handleUrlChange(e){
      this.setState({ url: e.target.value }); 
  }

  checkValidity(){
      if(document.getElementById('inputUrl').checkValidity()===true)
      this.getlink();
  }
  
    render() {
      return (
        <Container fluid className="bg-primary h-100">
        <Container className="pt-5">
        <Form onSubmit={e =>{e.preventDefault()}} >
              <Container>
                  <Row  className='text-center mt-5'>
                      <Col >
                      <img src='https://rebrandly.com/images/URL-Shortener.fileextension.svg'/>
                          <h1>URL shortener</h1>
                      </Col>
                  </Row>
                  <Row className='text-center' >
                      <Col
                      className='p-5'>
                          
                          <Row className='mb-3'>
                              <Col>
                                  <h1>Enter a URL</h1>
                              </Col>
                          </Row>
                          <Row className='mb-5'>
                              <Col >
                                  <input id='inputUrl'  type="url" name="url" onChange={this.handleUrlChange} 
                                  size="30" defaultValue={this.state.value} pattern="(([\w]+:)?//)?(([\d\w]|%[a-fA-F\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?"
                                  required />
                              </Col>
                          </Row >
                          <Row className='mb-3'>
                              <Col>
                                  <Button type='submit' variant="primary" onClick={this.checkValidity}>Shorten</Button>
                              </Col>
                          </Row>
                          <Row >
                              <Col>
                                  <div className='result' >
                                      <p>Your shortened url is:</p>
                                      <p>{this.state.shortURL }</p>
                                  </div>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
              </Container>
          </Form>
        </Container>
    </Container>
      );
    }
  }
  