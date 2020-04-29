import React from 'react'; 
import Col from 'react-bootstrap/Col';
import show from '../../img/witcher.jpg';

const image = <img 
    src={show}
    width="300px"
    alt="logo"
    title="logo" fluid/>

export class TVshow extends React.Component{
    render() {
        return (
            <Col lg='2'>
                {image}
            </Col>
        );
    }
};