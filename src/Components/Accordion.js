import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import ApiFetch from './ApiFetch';

function Accordions() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Top News From Denmark</Accordion.Header>
                                <Accordion.Body>
                                    <ApiFetch title='de' />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Top News From France</Accordion.Header>
                                <Accordion.Body>
                                    <ApiFetch title='fr' />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Accordions;