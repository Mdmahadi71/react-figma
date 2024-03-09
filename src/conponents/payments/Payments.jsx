import React from 'react'
import './payments.css'
import { Col, Container, Row } from 'react-bootstrap'
import paymmimg from '../../assets/paymimg.png'

const Payments = () => {
  return (
    <div className='paymentss'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="pay_img">
                    <img src={paymmimg} className='w-100' alt="" />
                </div>
            </Col>
            <Col lg={6}>
                <div className="pay_part">
                    <h5>Our Feature</h5>
                    <h2>Receive payments quickly from anywhere</h2>
                    <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    <div className="paym_btn">
                        <a href="#">
                        <samp></samp>
                        <samp></samp>
                        <samp></samp>
                        <samp></samp>
                          Get Started</a>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Payments
