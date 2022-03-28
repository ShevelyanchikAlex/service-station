import React, { useState, Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import FooterComp from './FooterComp';
import Admin from './pages/Admin';

class NavbarComp extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand as={Link} to="/">
                                NAT Service Station
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/home">About</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                                    <Nav.Link as={Link} to="/sign_in">
                                        Sign In
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <Routes>
                    <Route path='/' element={<Home></Home>} />
                    <Route path='/home' element={<div>home</div>} />
                    <Route path='/admin' element={<Admin></Admin>} />
                    <Route path='/sign_in' element={<SignIn></SignIn>} />
                    <Route path='*' element={<div>Not found</div>} />
                </Routes>
                <div>
                    <FooterComp></FooterComp>
                </div>
            </div>
        );
    }
}

export default NavbarComp;