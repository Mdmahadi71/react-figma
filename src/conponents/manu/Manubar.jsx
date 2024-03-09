import React from 'react'
import {Container ,Navbar ,Nav} from 'react-bootstrap'
import bwfce from '../../assets/BWFC (1).png'
import './manubar.css'
import { IoIosArrowDown } from "react-icons/io";

const Manubar = () => {
  return (
    <div>
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={bwfce} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Product <IoIosArrowDown /></Nav.Link>
            <Nav.Link href="#link">Template <IoIosArrowDown /></Nav.Link>
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
          </Nav>
          <div className="manu_last_part">
            <a href="#">
            <samp></samp>
            <samp></samp>
            <samp></samp>
            <samp></samp>
              Sign In</a>
            <a href="#">
            <samp></samp>
            <samp></samp>
            <samp></samp>
            <samp></samp>
              Start Free</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Manubar
