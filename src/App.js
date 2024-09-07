import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import LandingPage from './components/landingpage';
import Sobre from './components/sobre';
import Encontre from './components/encontre'
import Produtos from './components/produtos';
import Slide from './components/slide';
import Contato from './components/contato';
import Footer from './components/footer';
import '../src/static/globals.css';


function App() {
  return (
    <div>
      <NavbarComponent />
      <div id="home">
        <LandingPage />
      </div>
      <div id="sobre">
        <Sobre />
      </div>

      <div id="loc">
        <Encontre />
      </div>
      
      <div id="produtos">
        <Produtos />
      </div>
      
      <div id="quemusa">
        <Slide />
      </div>
      
      <div id="contato">
        <Contato />
      </div>
      <Footer />
    </div>
  );
}

export default App;