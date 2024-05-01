import { useEffect, useState } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import {navLinks} from "../data/index";
import { NavLink } from "react-router-dom";
import React from "react";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if(window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
    
    return () => window.removeEventListener("scroll", changeBackgroundColor);
}, []);


  return (
    <div>
      <Navbar expand="xl" className={`navbar-custom ${changeColor ? "color-active": ""}`}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img src="/logo.png" alt="ציפי שטיין - עיצובי ברים"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map((Link) => {
                return ( 
                    <Nav.Link
                      as={NavLink}
                      to={Link.path}
                      key={Link.id}
                      className="nav-link custom-link"
                    >
                      {Link.text}
                    </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
