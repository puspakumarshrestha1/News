import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='bg-dark text-light'>
      <Container className='py-4'>
        <Row>
          <Col xs={6} lg={3} className='py-5'>
            <img className=' pb-4 footer-img' src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/03/logo-footer.png' alt='' />
            <img className=' py-4 footer-img' src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/03/footer-img.jpg' alt='' />
            <h5>Address</h5>
            <p>98 West 21th Street, Suite 721 New York, NY 10010 : E: discussion@qodeinteractive.com
              P: +88 (0) 101 0000 000</p>


          </Col>
          <Col xs={6} lg={3} className='py-5'>
            <h5>Recent Posts</h5>
            <Row className='pt-3'>
              <Col lg={4}>
              <img src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/we-went-deep-underground-for-this-shot-90x72.jpg' alt=''/>
              </Col>
              <Col lg={8}>
              <h6>We Went Deep....</h6>
              </Col>
            </Row>
            <Row className='pt-3'>
              <Col lg={4}>
              <img src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/we-might-have-just-discovered-the-fountain-of-youth-90x72.jpg' alt=''/>
              </Col>
              <Col lg={8}>
              <h6>We Have Disco....</h6>
              </Col>
            </Row>
            <Row className='pt-3'>
              <Col lg={4}>
              <img src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/watching-global-warming-in-action-90x72.jpg' alt=''/>
              </Col>
              <Col lg={8}>
              <h6>Watching Glob...</h6>
              </Col>
            </Row>
          </Col>
          <Col xs={6} lg={3} className='py-5'>
            <h5>Newsletter</h5>
            <p>Get in touch with us right now.</p>
            <Form className="d-flex">
            <Form.Control
              type="Your Email"
              placeholder="email"
              className="me-2"
              aria-label="email"
            />
            <Button>Submit</Button>
          </Form>
          </Col>
          <Col xs={6} lg={3} className='py-5'>
            <h5>Follow Us On Twitter</h5>
            <p>
            @impulsivecritik you can send us ticketID so we can check with colleagues in support team about your ticket. </p>
            <p> 3 days ago</p>
            <hr/>
            <p>
            @impulsivecritik you can send us ticketID so we can check with colleagues in support team about your ticket. </p>
            <p> 3 days ago</p>
            <hr/>
            <p>
            @impulsivecritik you can send us ticketID so we can check with colleagues in support team about your ticket. </p>
            <p> 3 days ago</p>
           
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Footer
