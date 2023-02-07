import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Popular() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h5>Popular</h5>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                    <div className='popular'>
                        <img className='w-100' src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/what-we-should-really-be-playing-on-rnb-stations-767x337.jpg' alt='' />
                        <div className='popular-text px-4'>
                        <h4>Music Playing On R&B Stations</h4>
                        <p> February 18, 2016</p>
                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean commodo ligula eget dolor<br/>. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis</p>
                        </div>
                        </div>
                    </Col>
                    <Col lg={3} >
                        <div >
                            <div className='d-flex my-2'>
                                <img src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/how-to-organize-the-best-bridal-party-ever-117x84.jpg' alt=''/>
                                <h6 className='ms-2'>How To Oraganise The Best raganise raganise</h6>
                                
                            </div>
                            <div className='d-flex my-2'>
                                <img src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/proof-that-beauty-is-in-the-eye-of-the-beholder-117x84.jpg' alt=''/>
                                <h6 className='ms-2'>Proof That Beauty Is In TBeaut Beauty Beautys...</h6>
                            </div>
                            <div className='d-flex my-2'>
                                <img src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/the-music-festivals-you-dont-want-to-miss-117x84.jpg' alt=''/>
                                <h6 className='ms-2'>The Music Festivals You S Festival Festival...</h6>
                            </div>
                            <div className='d-flex my-2'>
                                <img src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/vote-for-the-top-tracks-of-the-month-117x84.jpg' alt=''/>
                                <h6 className='ms-2'>Vote For The Top Tracks Oraganise raganise ...</h6>
                            </div>
                            <div className='d-flex my-2'>
                                <img src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/natural-sunlight-can-boost-your-immune-system-117x84.jpg' alt=''/>
                                <h6 className='ms-2'>Natural Sunlight Boosts Y raganise raganise ...</h6>
                            </div>
                           
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div>
                        <h5><span className='bg-dark text-light px-3'>Stay Connected</span></h5>
                        <img className='w-100' src='https://i2.wp.com/www.smperth.com/wp-content/uploads/2018/11/social-media-icons.png?ssl=1' alt=''/>
                        </div>
                    </Col>

                </Row>
                <Row>
                <Row>
                    <Col>
                    <h5><span className='bg-dark text-light px-3 my-5'>Most Views</span></h5>
                    </Col>
                </Row>
                
                </Row>
            </Container>
        </>
    )
}

export default Popular
