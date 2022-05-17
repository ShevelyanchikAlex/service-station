import React, {Component} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import FooterComp from './FooterComp';
import Admin from './pages/Admin';

class NavbarComp extends Component {

    setAdminRoute() {
        if (localStorage.getItem('access_token')) {
            return (
                <Route path='/admin' element={<Admin/>}/>
            );
        }
    }

    signOut() {
        localStorage.removeItem("email");
        localStorage.removeItem("access_token");
        window.location.href = '/';
    }

    renderSignOut() {
        if (localStorage.getItem('access_token')) {
            return (
                <button onClick={this.signOut} style={{borderRadius: 15}}>Sign out</button>
            );
        }
    }

    renderEmailOrSignIn() {
        return localStorage.getItem('access_token') ? (
            <Nav>
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                <Navbar.Brand>
                    {localStorage.getItem('email')}
                </Navbar.Brand>
            </Nav>
        ) : (
            <Nav>
                <Nav.Link as={Link} to="/sign_in">
                    Sign In
                </Nav.Link>
            </Nav>
        );
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand as={Link} to="/">
                                NAT Service Station
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/home">About</Nav.Link>
                                </Nav>
                                {this.renderEmailOrSignIn()}
                            </Navbar.Collapse>
                            {this.renderSignOut()}
                        </Container>
                    </Navbar>
                </div>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/home' element={<div>home</div>}/>
                    {this.setAdminRoute()}
                    <Route path='/sign_in' element={<SignIn/>}/>
                    <Route path='*' element={<div>Not found</div>}/>
                </Routes>
                <div>
                    <FooterComp/>
                </div>
            </div>
        );
    }
}

export default NavbarComp;