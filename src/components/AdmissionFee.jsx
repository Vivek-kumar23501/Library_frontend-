// src/components/AdmissionFee.jsx
import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

const AdmissionFee = () => {
  const sections = [
    {
      title: "Admission Process",
      subtitle: "Complete your library admission easily",
      description:
        "Fill the admission form, submit required documents, and get your library membership activated quickly.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSexzoOiyqhaBix39nyhufzSgxY55vPG9b5l7LPflhEu0jmM1w/viewform?usp=header", // Replace with your actual link
      buttonText: "Apply Now",
    },
    {
      title: "Fee Process",
      subtitle: "Pay library fees safely online",
      description:
        "Check the fee structure, make online payments securely, and download your receipt instantly.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfqD5yVBmZjNrNWyvX1FynLvOMJ0Ef-gCyV42Eu-YRoY5f0vA/viewform?usp=headerhttps://docs.google.com/forms/d/e/1FAIpQLSfqD5yVBmZjNrNWyvX1FynLvOMJ0Ef-gCyV42Eu-YRoY5f0vA/viewform?usp=header", // Replace with your actual link
      buttonText: "Pay Fees",
    },
  ];

  return (
    <div style={{ background: "#f8fcff", padding: "50px 0" }}>
      <Container style={{ width: "100%" }}>
        <Row className="justify-content-center">
          {sections.map((section, index) => (
            <Col md={10} lg={8} className="px-3 mb-5" key={index}>
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
                    {section.title}
                  </h2>

                  <h5
                    style={{
                      color: "#007299",
                      marginBottom: "1.5rem",
                      fontWeight: "500",
                    }}
                  >
                    {section.subtitle}
                  </h5>

                  <p
                    style={{
                      color: "#555",
                      lineHeight: "1.8",
                      marginBottom: "2rem",
                      fontSize: "1rem",
                    }}
                  >
                    {section.description}
                  </p>

                  <a href={section.link} target="_blank" rel="noopener noreferrer">
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
                      {section.buttonText}
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AdmissionFee;
