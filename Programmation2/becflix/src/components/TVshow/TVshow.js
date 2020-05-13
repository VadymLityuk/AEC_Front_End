import React from 'react'; 
import Col from 'react-bootstrap/Col';




export class TVshow extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            hovered: false
        }
    }

    render() {
        return (
            <Col lg='2'>
                 <img 

    onMouseOver={ () => this.setState( {hovered: true} ) } 
    onMouseOut= { () => this.setState( {hovere: false} ) }     
    src= {this.props.src}
    alt= {this.props.alt}
    title={this.props.title}
    className="img-fluid" 
    style={{transform: `${this.state.hovered ? 'scale(1.5,1.5)' : 'scale(1,1)' }`}}  

    />
    
    
            </Col>
        );
    };
    


};