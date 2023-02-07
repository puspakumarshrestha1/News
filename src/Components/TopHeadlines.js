import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { LinkContainer } from 'react-router-bootstrap';

function TopHeadlines() {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=67869b37396a4ef5a26afdd2a3988d64').then(res => res.json()).then(data => setPost(data.articles))
    }, [])
    
    console.log(post)
  return (
    <>
    <Container className='py-4'>
        <Row>
            <Col>
                <h3 className='py-4 sec-title'>Top Heading News</h3>
            </Col>
        </Row>
        <Row>
        <OwlCarousel className='owl-theme' loop margin={10} items={4} autoplay={true}>
            {post.map((a) => (
              <Col>
              
                    <Card className='border-0' style={{ width: '19rem' }}>
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

        </>
  )
}

export default TopHeadlines
