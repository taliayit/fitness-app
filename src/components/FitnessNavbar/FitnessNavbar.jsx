import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/logo_red.png';
import './FitnessNavbar.css'

function FitnessNavbar({activeUser}) {
    // activeUser = true; // for debugging purposes

    return (
        <div className="c-fitness-navbar">
            <Navbar bg="transparent" expand="lg">
                <Navbar.Brand href="#/" className="bold-text"><img src={logo}/>FIT ME</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        {activeUser ? <NavDropdown title="Workouts" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#customize">Customize Workout</NavDropdown.Item>
                            <NavDropdown.Item href="#workouts">My Workouts</NavDropdown.Item>
                        </NavDropdown> : null}
                    </Nav>
                    <Nav className="ml-auto">
                        {!activeUser ? <Nav.Link href="#customize">Try it out</Nav.Link> : null}
                        <Nav.Link href="#login"><span className="red-link">Sign {activeUser ? 'out' : 'in'}</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default FitnessNavbar;