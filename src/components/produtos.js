import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Produtos = () => {
  return (
    <Container className="my-5">
      <h2 style={{color: '#263B31'}} className="text-center mb-4 fw-bold">Nossos produtos</h2>

      {/* Gestao de ativos */}
      <Card className="border-0">
        <Card.Body className="p-0">
          <h2 id="gestao-ativos"style={{color: '#263B31'}} className="mb-4 mt-5 text-left ps-5">Gestão de Ativos</h2>
          <Row className="g-0 d-flex align-items-stretch position-relative">
            <Col md={5} className="d-flex align-items-center justify-content-center">
              <img
                src="/mulher_logistica.png"
                alt="Gestão de Ativos"
                className="img-fluid"
                style={{
                  borderRadius: '50px',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Col>
            <Col
              md={7}
              className="d-flex align-items-center text-overlay-col"
            >
              <div 
                style={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <ul className="list-unstyled m-0">
                  <li className="mb-0">• Envio de equipes técnicas habilitadas e especializadas para realização de inventário, identificação para controle do ativo e avaliação das condições dos ativos logístico;</li>
                  <li className="mb-0">• Emissão de relatório de visita com laudo técnico;</li>
                  <li className="mb-0">• Coleta e reposição de ativo;</li>
                  <li className="mb-0">• Armazenamento de ativos em condições de uso para reposição e de ativos recolhidos;</li>
                  <li className="mb-0">• Manutenção de ativos recolhidos em condição de reparo, reposição com fornecedor ou descarte ecológico.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* VoceSabia - INATIVO
      <div className='texto-vs'>
        <h3 style={{color: '#263B31'}} className="mt-5 mb-2 text-left ps-5">Você sabia?</h3>
        <p className="mb-0 justify-content-center mt-3 text-left ps-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p className="mb-0 justify-content-center text-left ps-5">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      */}
      <div style={{ height: '3px', backgroundColor: '#8ebf22', marginTop: '5%' }}></div>
      {/* Divider para separar produtos */}

      {/* Gestao de coleta */}
      <Card className="border-0">
        <Card.Body className="p-0">
            <h2 id="gestao-coleta" style={{color: '#263B31'}} className="mb-4 mt-5 text-left ps-5">Gestão de Coleta (First Mile Linear / Reversa)</h2>
            <Row className="g-0 d-flex align-items-stretch position-relative">
              <Col md={4} className="d-flex align-items-center justify-content-center">
                <img
                  src="/homem_entrega.jpg"
                  alt="Gestão de Coleta"
                  className="img-fluid"
                  style={{
                    borderRadius: '50px',
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Col>
              <Col
                md={7}
                className="d-flex align-items-left text-overlay-col2"
              >
                <div 
                  style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <ul className="list-unstyled m-0">
                    <li className="mb-0">• <strong>Coleta Shopeer</strong> - Agendamento de coleta no cliente final ou Seller no local de sua escolha;</li>
                    <li className="mb-0">• <strong>PUDO</strong> - Disponibilização de rede de pontos para recebimento de pacotes de Seller, transportadoras ou Cliente Final seguindo fluxo de entrega ou Reversa;</li>
                    <li className="mb-0">• <strong>Packing</strong> - Embalagem do produto final ou substituição de embalagem fora das especificações para coleta; impressão de etiquetas de entrega ou Reversa mais documentos fiscais; etiquetagem do pacote de acordo com as necessidades de cuidado do produto;</li>
                    <li className="mb-0">• <strong>Recebimento ou Coleta de Operações Logística</strong> - Agendamento, Recebimento de transportadoras ou Coleta de pacotes que tiveram insucesso com status finalizador ou pacotes de Logística Reversa em Hubs e Operações Logística para consolidação e destinação;</li>
                    <li className="mb-0">• Tracking e monitoramento do processo.</li>
                  </ul>
                </div>
              </Col>
            </Row>
        </Card.Body>
      </Card>
      {/* VoceSabia - INATIVO
      <div className='texto-vs'>
        <h3 style={{color: '#263B31'}} className="mt-5 mb-2 text-left ps-5">Você sabia?</h3>
        <p className="mb-0 justify-content-center mt-3 text-left ps-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p className="mb-0 justify-content-center text-left ps-5">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      */}
      <div style={{ height: '3px', backgroundColor: '#8ebf22', marginTop: '5%' }}></div>
      {/* Divider para separar produtos */}

      {/* Triagem de pacotes*/}
      <Card className="border-0">
        <Card.Body className="p-0">
          <h2 id="triagem-pacotes" style={{color: '#263B31'}} className="mb-4 mt-5 text-left ps-5">Triagem de Pacotes</h2>
          <Row className="g-0 d-flex align-items-stretch position-relative">
            <Col md={5} className="d-flex align-items-center justify-content-center">
              <img
                src="/homem_pacotes.jpg"
                alt="Gestão de Ativos"
                className="img-fluid"
                style={{
                  borderRadius: '50px',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Col>
            <Col
              md={7}
              className="d-flex align-items-center text-overlay-col3"
            >
              <div 
                style={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <ul className="list-unstyled m-0">
                  <li className="mb-1">• Triagem de pacotes analisando condições físicas da embalagem, etiqueta e documentos fiscais;</li>
                  <li className="mb-1">• Packing - Embalagem do produto final ou substituição de embalagem fora das especificações para coleta; impressão de etiquetas de entrega ou Reversa mais documentos fiscais; etiquetagem do pacote de acordo com as necessidades de cuidado do produto;</li>
                  <li className="mb-1">• Triagem de cargas e consolidação de lotes por Destino.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* VoceSabia - INATIVO
      <div className='texto-vs'>
        <h3 style={{color: '#263B31'}} className="mt-5 mb-2 text-left ps-5">Você sabia?</h3>
        <p className="mb-0 justify-content-center mt-3 text-left ps-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p className="mb-0 justify-content-center text-left ps-5">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      */}
      <div style={{ height: '3px', backgroundColor: '#8ebf22', marginTop: '5%' }}></div>
      {/* Divider para separar produtos */}

      {/* Custodia */}
      <Card className="border-0">
        <Card.Body className="p-0">
          <h2 id="custodia" style={{color: '#263B31'}} className="mb-4 mt-5 text-left ps-5">Custódia</h2>
          <Row className="g-0 d-flex align-items-stretch position-relative">
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <img
                src="/custodia_mulher_armazenando.jpg"
                alt="Gestão de Ativos"
                className="img-fluid"
                style={{
                  borderRadius: '50px',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Col>
            <Col
              md={7}
              className="d-flex align-items-center text-overlay-col4"
            >
              <div 
                style={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <ul className="list-unstyled m-0">
                  <li className="mb-0">• Guarda provisória de pacotes;</li>
                  <li className="mb-0">• Realização ou recebimento de contato do cliente para tratar informações do pedido;</li>
                  <li className="mb-0">• Packing - Embalagem do produto final ou substituição de embalagem fora das especificações para coleta; impressão de etiquetas de entrega ou Reversa mais documentos fiscais; etiquetagem do pacote de acordo com as necessidades de cuidado do produto;</li>
                  <li className="mb-0">• Alteração ou Complementação de informações na etiqueta do pacotes, redirecionamento e atualizações sistêmica para registro de ocorrência;</li>
                  <li className="mb-0">• Tracking e monitoramento do processo.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* VoceSabia - INATIVO
      <div className='texto-vs'>
        <h3 style={{color: '#263B31'}} className="mt-5 mb-2 text-left ps-5">Você sabia?</h3>
        <p className="mb-0 justify-content-center mt-3 text-left ps-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p className="mb-0 justify-content-center text-left ps-5">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      */}
      <div style={{ height: '3px', backgroundColor: '#8ebf22', marginTop: '5%' }}></div>
      {/* Divider para separar produtos */}
    </Container>
  );
};

export default Produtos;
