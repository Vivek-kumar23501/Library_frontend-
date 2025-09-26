import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

function NavbarComp() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      expand="md"
      style={{
        background: "linear-gradient(90deg, #6a11cb, #2575fc)",
        padding: "10px 20px",
        borderRadius: "0 0 15px 15px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      <NavbarBrand tag={Link} to="/" className="d-flex align-items-center">
        <img
          src="/logo.jpg" // public folder path
          alt="Vidyapeeth Library"
          style={{ height: "40px", marginRight: "10px" }}
        />
        <span className="text-white fw-bold fs-4">Vidyapeeth Library</span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="bg-white" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <Link to="/" className="text-white fw-semibold nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/gallery" className="text-white fw-semibold nav-link">
              Gallery
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/services" className="text-white fw-semibold nav-link">
              Services
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="text-white fw-semibold nav-link">
              About Us
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" className="text-white fw-semibold nav-link">
              Contact Us
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavbarComp;
