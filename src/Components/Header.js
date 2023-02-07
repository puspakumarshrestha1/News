import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import Home from './Home';
import Single from './Single';
import Contact from './Contact';
import SingData from './SingData';
import LastsData from './LastsData';
import Aboutus from './Aboutus';



function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Navbar className='py-4' bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img className='header-img' src='https://discussion.qodeinteractive.com/wp-content/themes/discussionwp/assets/img/logo.png' alt='' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <LinkContainer to="/">
                        <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="feature">
                        <Nav.Link >Feature</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="s">
                        <Nav.Link >Category</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="contact">
                        <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="about">
                        <Nav.Link >About Us</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
                <Nav>
                    <Button className='canvas-btn' onClick={handleShow}>
                        &#9776;
                    </Button>
                    <Offcanvas className="bg-dark text-light" show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <img className='ms-5' src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/03/logo-footer.png' alt=''/>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Container>
                                <Row>
                                    <Col>
                                    <ul className='off-main'>
                                        <h5 className='off-heading px-3 py-1 my-3'>HomePages</h5>
                                        <li><a href=''>Main Home</a></li>
                                        <li><a href=''>NewsPaper Home</a></li>
                                        <li><a href=''>Magazine Home</a></li>
                                        <li><a href=''> Contact Us</a></li>
                                        <li><a href=''> About Us</a></li>
                                    </ul>
                                    <ul className='off-main mt-5'>
                                        <h5 className='off-heading px-3 py-1 my-3'>Latest News</h5>
                                        <li><a href=''>Business</a></li>
                                        <li><a href=''>Entertainment</a></li>
                                        <li><a href=''>Magazine Home</a></li>
                                        <li><a href=''> Contact Us</a></li>
                                        <li><a href=''> About Us</a></li>
                                    </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Nav>
            </Container>
        </Navbar>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<Aboutus />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/details/:id" element={<SingData />} />
        <Route path="/detail/:id" element={<LastsData />} />
      </Routes>
        </>
    );
}

export default Header;