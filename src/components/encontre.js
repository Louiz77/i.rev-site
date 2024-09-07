import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Sobre = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2 style={{ fontSize: 'calc(1.6rem + 1.5vw)', color: '#87C540' }} className="mb-4">
            Onde você encontra a gente
          </h2>
          <p className="mb-5 justify-content-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="mb-5">
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center position-relative">
          <Image
            src="/onde-estamos-mapa_brasil.png"
            fluid
            style={{ top: 0, right: 0, zIndex: 0 }}
          />
        </Col>
      </Row>
      <div style={{ height: '3px', backgroundColor: '#0d2619', marginTop: '3%' }}></div>
    </Container>
  );
};

export default Sobre;
