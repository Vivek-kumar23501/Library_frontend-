// src/pages/AboutUs.jsx
import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const AboutUs = () => {
  return (
    <div style={{ background: "#fff", paddingBottom: "50px" }}>
      {/* Owner Section (Top) */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#000" }}>Director</h3>
        <p style={{ fontSize: "1.2rem", fontWeight: "500", color: "#333" }}>Ramesh Singh</p>
        <img 
          src="/owner.jpg" 
          alt="Ramesh Singh" 
          style={{ width: "200px", borderRadius: "50%", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
        />
      </div>

      {/* About Section */}
      <Container style={{ marginTop: "40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#d32f2f" }}>Vidyapeeth Library</h2>
        <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", fontSize: "1rem", color: "#555" }}>
          Vidyapeeth Library provides students with a peaceful environment for study and research. 
          Our facilities include high-speed Wi-Fi, CCTV surveillance, RO water, AC cabins, daily newspapers, books, monthly magazines, 
          and separate rooms for boys and girls. Discipline is strictly maintained for a productive study atmosphere.
        </p>

        {/* Facilities Section */}
        <Row style={{ marginTop: "40px" }} className="justify-content-center">
          {[
            "High-Speed Wi-Fi 5G",
            "CCTV Surveillance",
            "RO Water",
            "AC Cabin",
            "Discipline Maintain",
            "Daily Newspaper",
            "Book Facilities",
            "Monthly Wise Magazine",
            "Separate Room Provision for Boys & Girls",
          ].map((facility, idx) => (
            <Col md="4" sm="6" key={idx} style={{ marginBottom: "15px" }}>
              <Card style={{ borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                <CardBody style={{ textAlign: "center", fontWeight: "500", color: "#000" }}>
                  {facility}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Address Section */}
        <div style={{ marginTop: "50px", textAlign: "center", color: "#333" }}>
          <h4 style={{ color: "#1976d2" }}>Address</h4>
          <p>
            I.T.I Jayprakash Nagar, Bettiah (Near R.L.S.Y College), Ward No: 31 <br />
            Street Name: Kushwaha Nagar, (Street No: 11'B), West Champaran
          </p>
          <p>Contact: 6206350761, 8002115258</p>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
