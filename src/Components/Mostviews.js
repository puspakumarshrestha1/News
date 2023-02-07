import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import popData from './PopData'
function Mostviews() {
    let {id}=useParams()
    let displayData=popData.filter((a)=>a.category==id)

  return (
    <>
      <Container>
        <Row>
        
        {popData.map((aa)=>(
            <Col lg={3}>
            <div>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/details/${aa.id}`}>
            <img className='w-100 my-3' src={aa.img} alt=''/>
            <h5 className='pt-3'>{aa.title}</h5>
            <p> {aa.date}</p>
            </Link>
            </div>
            </Col>
        ))}
                        
             
        </Row>
      </Container>
    </>
  )
}

export default Mostviews
