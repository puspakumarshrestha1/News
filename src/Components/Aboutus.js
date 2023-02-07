import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Aboutus() {
    return (
        <>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <h2 className='py-3'>Our Location</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14128.005405703296!2d85.32395955!3d27.71724455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1675752080569!5m2!1sen!2snp" width="1200" height="750"></iframe>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Aboutus
