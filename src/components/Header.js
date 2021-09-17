import React from 'react';
import logo from '../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand style={{ marginLeft: "-400px"}}>
                        <img
                            alt=""
                            src={logo}
                            width="70"
                            height="70"
                            className="d-inline-flex align-center"
                        />{' '}
                        React App
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;