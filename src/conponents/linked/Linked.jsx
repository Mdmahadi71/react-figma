import React from 'react'
import './linked.css'
import { Col, Container, Row } from 'react-bootstrap'
import linkimg from '../../assets/linkimg.png'

const Linked = () => {
  return (
    <div className='linked_main'>
      <Container>
        <Row>
            <Col lg={6} sm={7} md={6}>
                <div className="link_text">
                    <h5>Our Feature</h5>
                    <h2>All payments are linked to your Financy account</h2>
                    <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    <div className="link_text_btn">
                        <a href="#">                         
                         <samp></samp>
                         <samp></samp>
                         <samp></samp>
                         <samp></samp>
                       Get Started</a>
                    </div>
                </div>
            </Col>
            <Col lg={6} sm={5} md={6}>
                <div className="link_img">
                    <img src={linkimg} className='w-100' alt="" />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Linked
