import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ViewComponent = ({ images }) => {
  return (
    <Container className="view-component w-100 min-vh-100 d-flex align-items-center">
      <Row className="row">
        {images.map((img, index) => (
          <Col key={index} className="col-md-4">
            <div className='image-container'>
              <img src={img.image} alt={img.title} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ViewComponent;