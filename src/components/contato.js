import React, { useState } from 'react';
import { Container, Row, Col, Form, Image, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://irevpyapi.pythonanywhere.com/api/send-email', formData);
      setAlert({ variant: 'success', message: response.data.message });
      setFormData({ nome: '', email: '', mensagem: '' });
    } catch (error) {
      setAlert({ variant: 'danger', message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.' });
    }
  };

  return (
    <Container className="my-5">
      <Row className="g-0 m-4 bg-white shadow" style={{borderRadius: '20px', overflow: 'hidden'}}>
        <Col md={6} className="p-0">
          <Image 
            src="/img_contatos.jpg"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Col>
        <Col md={6} className="p-4">
          <h2 style={{color: '#263B31'}} className="text-left mb-4 fw-bold">Entre em contato conosco</h2>
          <p className="mb-4 fw-bold" style={{fontSize: 'calc(1rem + 0.1vw)', color: '#263B31'}}>
            Saiba mais sobre como nossas soluções podem ajudar 
            sua empresa e como ela pode contribuir com as pessoas 
            e o meio ambiente.
          </p>
          {alert && (
            <Alert variant={alert.variant} onClose={() => setAlert(null)} dismissible>
              {alert.message}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control 
                style={{backgroundColor: '#d9d9d9'}} 
                type="text" 
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome completo" 
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control 
                style={{backgroundColor: '#d9d9d9'}} 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu e-mail" 
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Control
                style={{backgroundColor: '#d9d9d9'}} 
                as="textarea" 
                rows={3} 
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Fala pra gente um pouco sobre como podemos te ajudar" 
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar mensagem
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;