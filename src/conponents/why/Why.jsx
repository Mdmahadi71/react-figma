import React from 'react'
import './why.css'
import { Col, Container, Row } from 'react-bootstrap'
import Whyreusable from '../../reusable/Whyreusable'

const Why = () => {
  return (
    <div className='why_main'> 
      <Container>
        <Row className='justify-content-center'>
            <Col lg={6} className='text-center'>
                <div className="why_hedar">
                    <h5>Why Financy</h5>
                    <h2>Why Choose Us</h2>
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={6}>
                <Whyreusable item='No Extra Fee' itempp='End-to-end payments and financial management in a single solution. Meet the right platform.'/>
            </Col>
            <Col lg={6}>
                <Whyreusable item='No Extra Fee' itempp='End-to-end payments and financial management in a single solution. Meet the right platform.'/>
            </Col>
            <Col lg={6}>
                <Whyreusable item='No Extra Fee' itempp='End-to-end payments and financial management in a single solution. Meet the right platform.'/>
            </Col>
            <Col lg={6}>
                <Whyreusable item='No Extra Fee' itempp='End-to-end payments and financial management in a single solution. Meet the right platform.'/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Why
