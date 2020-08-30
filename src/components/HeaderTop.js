import React from 'react';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';


export default class HeaderTop extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <Container >
            <Navbar variant="light" bg="light" sticky="top" expand="sm" className="navbar">
        <Navbar.Brand href="#home" className="navelement">Nuhan Ahnaf</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="navelement">About</Nav.Link>
            <Nav.Link href="#link" className="navelement">Portfolio</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/muhammadnuhanahnaf/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Resume</NavDropdown.Item>  
           </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>   








        )
    }

}



