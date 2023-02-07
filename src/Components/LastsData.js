import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import LastData from './LastData'

function LastsData() {
  let {id}=useParams()
  let dataDisplay=LastData.find((a)=>a.id==id)
  return (
    <>
      <Container className='py-5'>
        <Row>
          <Col className='text-center' >
            <img src={dataDisplay.img}/>
            </Col>
            </Row>
            <Row>
                <Col className='py-3 text-center'>
                <h3>{dataDisplay.title}</h3>
            <p>{dataDisplay.date}</p>
            <p>{dataDisplay.desc}</p>

                </Col>
            </Row>
      </Container>
    </>
  )
}

export default LastsData