import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Section1() {
  return (
    <>
      <Container>
        <Row>
            <Col className='my-4'>
            <h3>Trending News</h3>
            </Col>
        </Row>
        <Row>
            <Col lg={8} className='banner-1 position-relative'>
                
            <img className='w-100 my-2' src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/daily-exercise-proven-to-reduce-stress-levels.jpg' alt=''/>
            <div className='position-absolute banner-text text-light'>
            <h2>Daily Exercise Scientifically Proven To Reduce<br/> Stress Levels</h2>
            <p >Share/Comments/9082 views</p>
            </div>
            </Col>
            <Col lg={4}>
                <Row >
                    <Col  className='position-relative'>
                    <img className='w-100 my-2 ' src='https://www.videogameschronicle.com/files/2020/10/PS5-global-launch-advert.jpg' alt=''/>
                    <div className='position-absolute text-light banner-text1'>
                    <h5 >Our Review Of The Sony PlayStation 4</h5>
                    <p>Share/21 Comments/ 10982 views</p>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='position-relative'>
                    <img className='w-100 my-2 position-relative' src='https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/our-new-favorite-homemade-juices.jpg' alt=''/>
                    <div className='position-absolute banner-text2 text-light'>
                    <h5>Our New Favorite Homemade Juices</h5>
                    <p>Share/21 Comments/ 10982 views</p>
                    </div>
                    </Col>
                </Row>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Section1
