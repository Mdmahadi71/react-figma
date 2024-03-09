import React from 'react'
import './clients.css'
import { Col, Container, Row } from 'react-bootstrap'
import clieone from '../../assets/clieone.png'
import clitwo from '../../assets/clitwo.png'
import clieslick from '../../assets/clieslick.png'
import Slider from "react-slick";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";



function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div className='ntxprt' onClick={onClick}><IoMdArrowForward /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className='prvprt' onClick={onClick}><IoArrowBack /></div>
    );
  }

const Clients = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="clie_fast_txt">
                    <p>Testimonials</p>
                    <h3>Check what our clients are saying</h3>
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={8}>
            <Slider {...settings}>
            <div className="clien_slick">
                    <img src={clieslick} className='w-100' alt="" />
                </div>
            <div className="clien_slick">
                    <img src={clieslick} className='w-100'  alt="" />
                </div>
            <div className="clien_slick">
                    <img src={clieslick} className='w-100'  alt="" />
                </div>
            </Slider>
            </Col>
            <Col lg={4}>
                <div className="clie_mdl_txt">
                    <img src={clieone}  alt="" />
                    <h3>Save Time Managing Social Media For Your Business</h3>
                    <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                    <p>Believing neglected so so allowance existence departure in. In design active temper be uneasy. </p>
                    <div className="clie_mdl_img">
                        <img src={clitwo}   alt="" />
                    </div>
                    <h6>Angela Taylor</h6>
                    <samp>CEO SAMSUNG</samp>
                </div>
            </Col>
        </Row>
        <Row className='clie_last'>
          <Col lg={10} sm={8} md={9} className='clie_last_pp'>
              <div className="clic_lsrs">
                <p>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
              </div>
          </Col>
          <Col lg={2} sm={4} md={3}>
          <div className="clie_lst_btn">
              <a href="#">Get Started</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Clients
