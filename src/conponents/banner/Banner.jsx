import React from 'react'
import './banner.css'
import { Col, Container, Row } from 'react-bootstrap'
import { IoMdArrowDroprightCircle } from "react-icons/io";
import bnrimg from '../../assets/bnr.png'
import bnrlst from '../../assets/bnrlast.png'

const Banner = () => {
  return (
    <div className='banner_main'>
      <Container>
        <Row>
            <Col lg={7}>
                <div className="bnr_main">
                    <h2>Managing business payments has never been easier</h2>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                    <div className="bnr_btn">
                        <a href='#'>
                        <samp></samp>
                        <samp></samp>
                        <samp></samp>
                        <samp></samp>
                            Get Started</a>
                        <a href='#'>
                        <samp></samp>
                        <samp></samp>
                        <samp></samp>
                        <samp></samp>
                             <i><IoMdArrowDroprightCircle /></i>See How It Works</a>
                    </div>

                </div>
            </Col>
            <Col lg={5}>
                <div className="banner_img">
                    <img src={bnrimg} className='w-100' alt="" />
                </div>
            </Col>
        </Row>
      </Container>
      <div className="bannar_last">
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6} className='text-center'>
                    <div className="bner_txt">
                        <h4>Over 32k+ software  businesses growing with AR Shakir</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <div className="bnr_txt_img">
                        <img src={bnrlst} className='w-100' alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default Banner
