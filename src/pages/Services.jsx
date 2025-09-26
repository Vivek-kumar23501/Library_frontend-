import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";

const services = [
  {
    title: "High-Speed WiFi",
    description: "Fast internet for research and study.",
    bg: "/wifi.jpg",
  },
  {
    title: "CCTV Cameras",
    description: "Safety and security inside the library.",
    bg: "/cctv.jpg",
  },
  {
    title: "Newspapers & Magazines",
    description: "Stay updated with daily news and monthly magazines.",
    bg: "/newspaper.jpg",
  },
 
  {
    title: "AC Cabin Rooms",
    description: "Comfortable air-conditioned study cabins.",
    bg: "/ac.jpg",
  },
  {
    title: "RO Water",
    description: "Clean and safe drinking water available for all.",
    bg: "/ro.jpg",
  },
  {
    title: "Electricity",
    description: "24/7 power supply for uninterrupted study.",
    bg: "/image7.jpg",
  },
];

const ServicesPage = () => {
  const [expanded, setExpanded] = useState(Array(services.length).fill(false));

  const toggleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section style={{ padding: "50px 0", backgroundColor: "#f5f5f5" }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: "700" }}>
          Library Services
        </h2>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md="4" sm="6" className="mb-4">
              <div
                style={{
                  position: "relative",
                  borderRadius: "15px",
                  overflow: "hidden",
                  height: "220px",
                  background: `url('${service.bg}') center/cover no-repeat`,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                }}
              >
                {/* Overlay on hover */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.4)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "15px",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                  className="overlay"
                >
                  <p style={{ fontSize: "0.95rem" }}>
                    {expanded[index]
                      ? service.description
                      : service.description.substring(0, 60) + "..."}
                  </p>
                  <Button
                    color="light"
                    size="sm"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expanded[index] ? "Read Less" : "Read More"}
                  </Button>
                </div>
              </div>
              <h5
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  color: "#007299",
                }}
              >
                {service.title}
              </h5>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Simple hover effect */}
      <style>
        {`
          .overlay:hover {
            opacity: 1 !important;
          }
        `}
      </style>
    </section>
  );
};

export default ServicesPage;
