import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footerimg from '../../assets/footer.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer_main'>
      <Container>
        <Row>
            <Col lg={5}>
                <div className="ftr_frst_txt">
                    <img src={footerimg} alt="" />
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                </div>
            </Col>
            <Col lg={7}>
                <div className="frt_last">
                    <div className="part_one">
                        <ul>
                            <li>
                                <p>Company</p>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div className="part_one">
                        <ul>
                             <li>
                                <p>Product</p>
                            </li>
                            <li>
                                <a href="#">Invoicing Platform</a>
                            </li>
                            <li>
                                <a href="#">Accounting Plateform</a>
                            </li>
                            <li>
                                <a href="#">Create Proposal</a>
                            </li>
                            <li>
                                <a href="#">Contracts</a>
                            </li>
                        </ul>
                    </div>
                    <div className="part_one">
                        <ul>
                             <li>
                                <p>Resources</p>
                            </li>
                            <li>
                                <a href="#">Proposal Template</a>
                            </li>
                            <li>
                                <a href="#">Invoice Template</a>
                            </li>
                            <li>
                                <a href="#">Tuturoial</a>
                            </li>
                            <li>
                                <a href="#">How to write a contract</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className='footer_main_last'>
            <Col lg={12}>
                <div className="ftr_last">
                    <div className="last_txt">
                        <p>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</p>
                    </div>
                    <div className="last_txt">
                        <p>Supported by Microsoft Startup</p>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
