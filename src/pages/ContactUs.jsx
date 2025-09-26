// src/components/ContactUs.jsx
import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

const ContactUs = () => {
  const contact = {
    title: "Contact Us",
    subtitle: "We’re here to help you",
    description:
      "Have questions or suggestions about the library? Fill out the contact form and our team will respond promptly.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdaJfEbpZ9CPOnlwKGOGbh7K_T0pDqnXwIpo2JTb6j6IEXssw/viewform?usp=header", // Replace with your Google Form link
    buttonText: "Open Contact Form",
  };

  return (
    <div style={{ background: "#f8fcff", padding: "50px 0" }}>
      <Container style={{ width: "100%" }}>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="px-3 mb-5">
            <Card
              style={{
                textAlign: "center",
                padding: "3rem",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                width: "100%",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <CardBody>
                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    marginBottom: "0.5rem",
                  }}
                >
                  {contact.title}
                </h2>

                <h5
                  style={{
                    color: "#007299",
                    marginBottom: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  {contact.subtitle}
                </h5>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "1.8",
                    marginBottom: "2rem",
                    fontSize: "1rem",
                  }}
                >
                  {contact.description}
                </p>

                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    style={{
                      background: "#007299",
                      border: "none",
                      color: "#fff",
                      padding: "0.75rem 2rem",
                      borderRadius: "50px",
                      fontSize: "1rem",
                      cursor: "pointer",
                      boxShadow: "0 4px 15px rgba(0, 115, 153, 0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = "translateY(-3px)";
                      e.target.style.boxShadow =
                        "0 6px 20px rgba(0, 115, 153, 0.4)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(0, 115, 153, 0.3)";
                    }}
                  >
                    {contact.buttonText}
                  </Button>
                </a>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
