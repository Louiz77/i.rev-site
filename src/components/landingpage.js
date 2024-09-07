import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const LandingPage = () => (
  <Container fluid className="p-0 position-relative" style={{ maxWidth: '1400px', marginTop: '10%' }}>
    <div className="position-relative">
      <div className="position-relative overflow-visible" style={{ borderRadius: '70px' }}>
        <Image src="/fundo_v2.png" fluid className="w-100 background-image" style={{ height: '560px', objectFit: 'cover' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <Container className="h-100">
            <Row className="h-100 align-items-center">
              <Col xs={12} md={7}>
                <h1 className="responsive-text">
                  Para <strong>soluções na sua Logística Reversa,</strong>
                </h1>
                <h1 className="responsive-text">
                  I.Rev Solution.
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="position-absolute bottom-0 end-0 h-100 faixa-verde" style={{ width: '45%' }}>
          <div className="h-100"></div>
        </div>
      </div>
      {/* Personagem posicionado fora do container da imagem de fundo */}
      <div className="personagem-container">
        <Image 
          src="/personagem.png" 
          fluid 
          className="personagem-img"
        />
      </div>
    </div>
  </Container>
);

export default LandingPage;