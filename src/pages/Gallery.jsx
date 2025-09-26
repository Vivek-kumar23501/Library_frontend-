import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";

const Gallery = () => {
  // List of images in public folder
  const images = [
    { src: "/image9.jpg"  },
    { src: "/image2.jpg" },
    { src: "/image3.jpg" },
    { src: "/image4.jpg"  },
    { src: "/image5.jpg" },
    { src: "/image6.jpg" },
    { src: "/image7.jpg"  },
    { src: "/image13.jpg" },
    { src: "/image14.jpg" },
    { src: "/image10.jpg"  },
    { src: "/image11.jpg" },
    { src: "/image12.jpg" },
    
    // add more images here
     ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Vidyapeeth Library Gallery</h2>
      <Row>
        {images.map((img, index) => (
          <Col md="3" sm="4" xs="12" className="mb-4" key={index}>
            <Card>
              <CardImg top width="100%" src={img.src} alt={img.title} />
              <CardBody>
                <CardTitle tag="h5" className="text-center">{img.title}</CardTitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
