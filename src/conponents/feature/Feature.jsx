import React from 'react'
import './feature.css'
import { Col, Container, Row ,Form ,Button  } from 'react-bootstrap'

const Feature = () => {
  return (
    <div className='feaure_main'>
      <Container>
        <Row>
            <Col lg={7} sm={7} md={7}>
                <div className="fea_part_one">
                    <h6>Our Feature</h6>
                    <h2>Receive payments quickly from anywhere</h2>
                    <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>

                </div>
            </Col>
            <Col lg={5} sm={5} md={5}>
               <div className="fea_frm_Prt">
                  <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Control type="email" placeholder="Enter email" />
                     </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="mb-3"  type="submit">
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

export default Feature
