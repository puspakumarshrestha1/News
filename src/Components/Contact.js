import React from 'react'
import { Col, Container, FloatingLabel, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={8} className='py-4'>
                        <h3>Contact</h3>
                        <p>This is an example of a contact page with full support for the WP Forms WordPress plugin. Please use our official contact page if you have any pre-sale questions. We would love to hear from you!</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Your Name" />
                            </Form.Group>

                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Contact
