import React from 'react'
import './financy.css'
import { Col, Container, Row } from 'react-bootstrap'
import finanimg from '../../assets/financy.png'

const Financy = () => {
  return (
    <div className='financy_main'>
      <Container>
        <Row>
            <Col lg={7} sm={7} md={7}>
                <div className="finan_part_txt">
                    <h6>Our Feature</h6>
                    <h2>All payments arelinked to your Financy account</h2>
                    <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    <div className="finan_btn">
                        <a href='#'>
                        <samp></samp>
                        <samp></samp>
                        <samp></samp>
                        <samp></samp>
                          Get Started</a>
                    </div>
                </div>
            </Col>
            <Col lg={5} sm={5} md={5}>
                <div className="finan_imgs">
                    <img src={finanimg} className='w-100' alt="" />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Financy
