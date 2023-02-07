import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Card, Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function ApiFetch(props) {
    const [post, setPost] = useState([])
    useEffect(() => {
        
        fetch(`https://newsapi.org/v2/top-headlines?country=${props.title}&apiKey=b15911b3cff74e88ad0f92e585fc0c3c`).then(res => res.json()).then(data => setPost(data.articles))
    }, [])
    
    console.log(post)
    return (
        <>
        <div className='bg-dark text-light'>
            <Container className='py-4'>
                <Row>
                    <Col>
                        <h3 className='py-4 sec-title'>Top <span>{props.title} </span>News</h3>
                    </Col>
                </Row>
                <Row>
                <OwlCarousel className='owl-theme' loop margin={10} items={4} autoplay={true} responsiveClass={true}>
                    {post.map((a) => (
                      <Col>
                     
                            <Card className='border-0 bg-dark text-light' style={{ width: '19rem' }}>
                                <Card.Img className="w-100 card-img" variant="top" src={a.urlToImage} />
                                <Card.Body>
                                
                                    <Card.Title>{a.title}</Card.Title>
                                    <Card.Text>
                                    Author : {a.author}
                                    </Card.Text>
                              
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    </OwlCarousel>
                </Row>
                    </Container>
                    </div>
                </>
                )
}

                export default ApiFetch
