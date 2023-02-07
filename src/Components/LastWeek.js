import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import LastData from './LastData'
import Food from './Tab/Food'
import Fun from './Tab/Fun'


function LastWeek() {
    let { id } = useParams()
    let displayData = LastData.filter((a) => a.category == id)
    return (
        <>
            <Container className='last-week'>
                <Row>
                    <Col>
                        <h5><span className='p-2 text-light'>Last Week's Post</span></h5>
                    </Col>
                </Row>
                <Row>
                    <Col lg={9} className="my-4">
                        
                            {LastData.map((aa) => ( 
                                <Row className='mt-4'>
                                   
                                 <Col lg={4}>
                                 
                                 <img className='w-100' src={aa.img} alt='' />
                             </Col>
                             <Col lg={8} className="bg-light">
                             <Link style={{ textDecoration: 'none', color: 'black' }} to={`/detail/${aa.id}`}>
                                 <h4>{aa.title}</h4>
                                 <p> {aa.date}</p>
                                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes,</p>
                                 </Link>
                             </Col>
                            
                         </Row>
                            ))}


                           
                        {/* <Row className='mt-3'>
                            <Col lg={4} >
                                <img className='w-100' src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/how-to-get-the-maximum-out-of-your-exotic-vacation-312x223.jpg' alt='' />
                            </Col>
                            <Col lg={8} className="bg-light">
                                <h4>Tips On How To Get The Maximum...</h4>
                                <p> February 19, 2016</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes,</p>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col lg={4} >
                                <img className='w-100' src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/descending-into-the-mist-a-chinese-adventure-312x223.jpg' alt='' />
                            </Col>
                            <Col lg={8} className="bg-light">
                                <h4>Descending Into The Mist – An A...</h4>
                                <p> February 19, 2016</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes,</p>
                            </Col>
                        </Row> */}

                    </Col>
                    <Col lg={3} className=''>
                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Fun">
                                <Fun />
                            </Tab>
                            <Tab eventKey="profile" title="Food">
                                <Food />
                            </Tab>
                        </Tabs>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LastWeek
