import React from 'react'; 
import Col from 'react-bootstrap/Col';




export class TVshow extends React.Component{
    render() {
        return (
            <Col lg='2'>
                 <img 
    src= {this.props.src}
    alt= {this.props.alt}
    title={this.props.title}
    className="img-fluid" />
            </Col>
        );
    }
};