import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/logo_red.png';
import './FitnessNavbar.css'

function FitnessNavbar(props) {
    return (
        <div className="c-fitness-navbar">
            <Navbar bg="transparent" expand="lg">
                <Navbar.Brand href="#home" className="bold-text"><img src={logo}/>FIT ME</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <NavDropdown title="Workouts" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#customize">Customize Workout</NavDropdown.Item>
                            <NavDropdown.Item href="#workouts">My Workouts</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="#customize">Try it out</Nav.Link>
                        <Nav.Link href="#login"><span className="red-text">Sign in</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default FitnessNavbar;