import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Sobre = () => {
  return (
    <Container className="my-5">
      <h2 style={{ fontSize: 'calc(1.6rem + 1.5vw)', color: '#87C540' }} className=" mb-4">Sobre nós</h2>
      <Row>
        <Col md={6}>
            <Card className="bg-secondary text-white h-100 d-flex justify-content-center align-items-center">
                <video className="w-100" autoPlay muted controls>
                    <source
                        src="/video.mp4"
                        type="video/mp4"
                        allowFullScreen
                    />
                </video>
            </Card>
        </Col>
        <Col className='texto-sb' md={6}>
            <p className="mb-3">
                Somos uma empresa comprometida com a 
                <strong> sustentabilidade e a responsabilidade social </strong> 
                em suas operações.
            </p>
            <p className="mb-3">
                <strong>Nosso lema é:</strong> Fraternidade e Sustentabilidade são 
                bons negócios.
            </p>
            <p className="mb-3">
                Com tecnologia própria e produtos direcionados a toda a <strong>cadeia reversa e linear, </strong> 
                nossas soluções promovem a <strong>economia circular</strong> e oferecem oportunidades de 
                <strong> desenvolvimento e renda</strong> para <strong>comunidades carentes e pequenos empreendedores </strong> 
                em nosso ecossistema.
            </p>
        </Col>
      </Row>
      <div style={{ height: '3px', backgroundColor: '#0d2619', marginTop: '7%' }}></div>
    </Container>
  );
};

export default Sobre;