import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Popular2() {
    return (
        <>
            <Container className='pop2'>
                <Row className='mt-5 mb-3'>
                    <Col>
                        <h5><span className='p-2 text-light'>Don't Miss</span></h5>
                    </Col>
                </Row>
                <Row >
                    <Col lg={8}>
                        <img className='w-100' src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/surfs-up-the-best-locations-to-catch-killer-waves.jpg' alt='' />
                        <h4 className='mt-3'>Surfs Up – Places For Killer Waves</h4>
                        <p> February 19, 2016</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam</p>
                    </Col>
                    <Col lg={4}>
                        <Row>
                        <Col>
                        <h5><span className='p-2 text-light ms-4'>Category</span></h5>
                        </Col>
                        </Row>
                        <Row className='cat2'>
                            <Col>
                            <ul>
                            <li><a href="">Business (12)</a></li>
                            <li><a href="">Fashion (19)</a></li>
                            <li><a href="">Food (10)</a></li>
                            <li><a href="">Fun (19)</a></li>
                            <li><a href="">Health (11)</a></li>
                            <li><a href="">Technology (13)</a></li>
                            <li><a href="">Travel (18)</a></li>
                            <li><a href="">World (19)</a></li>
                             <li><a href="">Fashion (19)</a></li>
                            </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Popular2
