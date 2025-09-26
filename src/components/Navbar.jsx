import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";

function NavbarComp() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/gallery", label: "Gallery" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <Navbar
      expand="md"
      style={{
        background: "#1a237e", // deep professional blue
        padding: "10px 20px",
        borderRadius: "0 0 12px 12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
      }}
    >
      <NavbarBrand tag={Link} to="/" className="d-flex align-items-center">
        <img
          src="/logo.jpg"
          alt="Vidyapeeth Library"
          style={{ height: "40px", marginRight: "10px" }}
        />
        <span className="text-white fw-bold fs-5">Vidyapeeth Library</span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="bg-light" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          {navLinks.map((link, idx) => (
            <NavItem key={idx}>
              <Link
                to={link.path}
                className="nav-link fw-medium"
                style={{
                  color: "#fff",
                  marginRight: "15px",
                  padding: "5px 8px",
                  borderBottom:
                    location.pathname === link.path
                      ? "2px solid #ffca28" // subtle underline for active link
                      : "2px solid transparent",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#ffca28"; // hover color
                  e.target.style.borderBottom = "2px solid #ffca28";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#fff";
                  e.target.style.borderBottom =
                    location.pathname === link.path
                      ? "2px solid #ffca28"
                      : "2px solid transparent";
                }}
              >
                {link.label}
              </Link>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavbarComp;
