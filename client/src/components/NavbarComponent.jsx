import {Navbar, Container, Nav} from "react-bootstrap";
import {navLinks} from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">ציפי שטיין - עיצובי ברים</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map((Link) => {
                return ( 
                  <div className="nav-link" key={Link.id}>
                    <NavLink to={Link.path}>{Link.text}</NavLink>
                  </div>
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
