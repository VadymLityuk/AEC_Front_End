import React from 'react';
import {Card, Col} from 'react-bootstrap';


export class Personnage extends React.Component{
    constructor(props){
        super(props)
    }

    
render() {
    console.log(this.props.data);
         return(
        //     <h1>{this.props.data.name}</h1>

        <Col lg='2'>    
            <Card>
                <Card.Body>
                
                    <Card.Text>
                    <ul> 
                    {Object.keys(this.props.data).map(key => 
                        ( <li key={key}>{key} : {this.props.data[key]}</li>))} 
                    </ul> 
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        )
    }
}


Personnage.defaultProps = {data : []};