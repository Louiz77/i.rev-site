import React from 'react';
import { Navbar, Nav, Container, NavDropdown  } from 'react-bootstrap';
import image from "./textura_folhas.jpg";

const NavbarComponent = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('.custom-navbar').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - navbarHeight - 20; // 20px de espaço extra

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar fixed="top" expand="lg" className="custom-navbar">
      <div className="navbar-background" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        filter: 'brightness(65%) contrast(52%)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }}></div>
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="/logo_irev_branco.svg"
            width="120"
            height="60"
            className="m-auto"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto text-white">
            <Nav.Link href="#sobre" className="text-white" onClick={handleClick}>Conheça a i.Rev</Nav.Link>
            {/* OndeEstamos - INATIVO
            <Nav.Link href="#loc" className="text-white" onClick={handleClick}>Onde estamos</Nav.Link>
            */}
            <NavDropdown
              title={<span style={{ color: 'white' }}>Produtos I.Rev</span>}
              id="basic-nav-dropdown"
              className="custom-dropdown"
              menuVariant='dark'
            >
              <NavDropdown.Item href="#gestao-ativos" onClick={handleClick}>
                Gestão de Ativos
              </NavDropdown.Item>
              <NavDropdown.Item href="#gestao-coleta" onClick={handleClick}>
                Gestão de Coleta (First Mile Linear / Reversa)
              </NavDropdown.Item>
              <NavDropdown.Item href="#triagem-pacotes" onClick={handleClick}>
                Triagem de Pacotes
              </NavDropdown.Item>
              <NavDropdown.Item href="#custodia" onClick={handleClick}>
                Custódia
              </NavDropdown.Item>
            </NavDropdown>
            {/* FazendoDif - INATIVO
            <Nav.Link href="#" className="text-white" onClick={handleClick}>Fazendo a diferença</Nav.Link>
            */}
            {/* NossosClientes - INATIVO
            <Nav.Link href="#quemusa" className="text-white" onClick={handleClick}>Nossos clientes</Nav.Link>
            */}
            <Nav.Link href="#contato" className="text-white" onClick={handleClick}>Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;