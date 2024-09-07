import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{backgroundColor: '#263b31'}} className="py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <img 
              src="/logo_irev_branco.svg" 
              alt="Logo" 
              style={{ width: '120px', height: 'auto' }} 
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
