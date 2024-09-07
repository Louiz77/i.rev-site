import React from 'react';
import { Container } from 'react-bootstrap';

const Slide = () => {
  return (
    <Container className="my-5">
      <h2 style={{color: '#263B31'}} className="text-center mb-4 fw-bold">Clientes que já se beneficiam da logística reversa</h2>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            {/* Natura */}
            <img src="/natura.svg" height="90" width="200" alt="" />
          </div>
          <div className="slide">
            {/* McDonalds */}
            <img src="/mcdonalds.png" height="90" width="200" alt="" />
          </div>
          <div className="slide">
            {/* Coca Cola */}
            <img src="/coca-cola.png" height="90" width="200" alt="" />
          </div>
          <div className="slide">
            {/* Apple */}
            <img src="/apple.png" height="70" width="100" alt="" />
          </div>
          <div className="slide">
            {/* Ambev */}
            <img src="/Ambev.png" height="70" width="125" alt="" />
          </div>
          <div className="slide">
            {/* HP */}
            <img src="/HP.png" height="70" width="100" alt="" />
          </div>
          <div className="slide">
            {/* Bridgestone */}
            <img src="/bridgestone.png" height="70" width="100" alt="" />
          </div>

          {/* REPETIÇÃO */}
          
          <div className="slide">
            {/* Natura */}
            <img src="/natura.svg" height="90" width="200" alt="" />
          </div>
          <div className="slide">
            {/* McDonalds */}
            <img src="/mcdonalds.png" height="90" width="200" alt="" />
          </div>
          <div className="slide">
            {/* Coca Cola */}
            <img src="/coca-cola.png" height="90" width="200" alt="" />
          </div>
          <div className="slide">
            {/* Apple */}
            <img src="/apple.png" height="70" width="100" alt="" />
          </div>
          <div className="slide">
            {/* Ambev */}
            <img src="/Ambev.png" height="70" width="125" alt="" />
          </div>
          <div className="slide">
            {/* HP */}
            <img src="/HP.png" height="70" width="100" alt="" />
          </div>
          <div className="slide">
            {/* Bridgestone */}
            <img src="/bridgestone.png" height="70" width="100" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Slide;