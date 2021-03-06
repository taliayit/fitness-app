import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/logo_red.png';
import './FitnessNavbar.css'

function FitnessNavbar({activeUser, onLogout}) {

    return (
        <div className="c-fitness-navbar">
            <Navbar bg="transparent" expand="lg">
                <Navbar.Brand href="#/" className="bold-text"><img src={logo} alt="hand muscle"/>FIT ME</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        {activeUser && <NavDropdown title="Workouts" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#customize">Customize Workout</NavDropdown.Item>
                            <NavDropdown.Item href="#workouts">My Workouts</NavDropdown.Item>
                        </NavDropdown>}
                    </Nav>
                    <Nav className="ml-auto">
                        {!activeUser && <Nav.Link href="#customize">Try it out</Nav.Link>}
                        {!activeUser && <Nav.Link href="#login"><span className="red-link">Sign in</span></Nav.Link>}
                        {activeUser && <Nav.Link href="#" onClick={onLogout}><span className="red-link">Sign out</span></Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default FitnessNavbar;