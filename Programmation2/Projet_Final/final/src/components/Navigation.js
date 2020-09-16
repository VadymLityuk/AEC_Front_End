import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { Onlinecinema } from '../components/Onlinecinema';

import './scss/nav.scss'

export default function Nagivation() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg nava">
                <Navbar.Brand className="movie" href="#home">MOVIEMANIA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link to='/Onlinecinema'>Online Cinema</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
      </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>
    )
}