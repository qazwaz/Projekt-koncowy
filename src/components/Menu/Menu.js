import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/home"><h1>Hello Alan!</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >
                            <Link to="/mustDo">Must do</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about">FreeTime</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="/summary">Summary</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;