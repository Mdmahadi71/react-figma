import React from 'react'
import './portfolio.css'
import { Col, Container, Row ,Form ,Button } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <div className='portf_main'>
      <Container>
        <Row>
            <Col lg={6} xs={6} sm={7} md={6}>
                <div className="port_text">
                    <h5>Why Choose Us</h5>
                    <h2>Track your crytpo portfolio on the best way possible</h2>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                </div>
            </Col>
            <Col lg={6} xs={4} sm={5} md={6} >
                <div className="port_frm ">
                <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Control type="email" placeholder="Enter email" />
                     </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="mb-3 mahd"  type="submit">
                    Get Started
                      </Button>
                     </Form>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio
