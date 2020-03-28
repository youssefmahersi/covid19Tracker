import React from "react";
import { Navbar ,Nav } from 'react-bootstrap';
import { Link } from "react-scroll";
import logo from "../../assets/images/coronavirus.svg";
const ToolBar = (props)=>(
    

  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      A-virus
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        
            <Link
    activeClass="active"
    to="countries"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}>
        <Nav.Link >Countries</Nav.Link></Link>

    
    <Link
    activeClass="active"
    to="daily"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
><Nav.Link >Daily</Nav.Link></Link>

    </Nav>
    
  </Navbar.Collapse>
</Navbar>
);

export default ToolBar;