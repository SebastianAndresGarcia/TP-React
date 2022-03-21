import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

class Navigation extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/home">INICIO</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
          </Nav>

          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="mr-sm-2" aria-label="Search"/>
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </React.Fragment>

    );

  }
}

export default Navigation;