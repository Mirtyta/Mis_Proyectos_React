// ============================================
// src/pages/HomePage.jsx
// ============================================
// Importamos componentes
import Boton from '../components/Boton'
import Banner from '../components/Banner'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importamos para la parte visual css, png, bootstrap
import { Container, Row, Col, Modal } from "react-bootstrap";
import Promo from "../assets/imagenpromo.png"
import Marca2 from "../assets/marca1.png"
import "./HomePage.css"

const Home = () => {

  const [oferta, setOferta] = useState(false)
  const navigate = useNavigate();

  return (
    <div>       
        <Container className='fondo-page'>
          <Banner 
            title="ZapaShop" 
            description="Zapatillas - Gorras - Accesorios" 
            />
          <Row className="align-items-center py-5">
            <Col md={6}>
              <div className="d-flex justify-content-center align-items-center flex-wrap">
                <h3 className='tituloBanner mb-0'>¡Bienvenido a</h3>
                <img 
                src={Marca2} 
                alt='Logo de ZapaShop'
                className='me-3 img-oferta' 
                />
                <h3 className='tituloBanner'>!</h3>
              </div>                  
              <br />
              <p className='textoJustify'>¡No te estreses más! En ZapaShop 
                tenemos la solución: zapatillas que te harán volar, bolsos y carteras que 
                guardarán tus secretos con estilo, y gorras que te salvarán cualquier día. 
                ¡Deja de buscar excusas y empieza a buscar tu próximo look ganador con nosotros!</p>         
                <br />
                  <Boton 
                  texto="¡Mira Nuestras Ofertas!" 
                  onClick={() => setOferta(true)}
                  className="btn btn-warning"
                  /><br /><br />
            </Col>

            <Col md={6}>
              <img 
                src={Promo} 
                alt='Logo de ZapaShop'
                className='me-3 w-100'/>
            </Col>
          </Row>
        </Container> 
            {/* OFERTA mensaje de ofertas */}
            <Modal 
            show={oferta} 
            onHide={() => setOferta(false)} centered 
            className=' d-flex justify-content-center align-content-center'>
              <Modal.Header closeButton className='text-center bg-dark text-light'>
                <Modal.Title>OFERTA ESPECIAL</Modal.Title>
              </Modal.Header>
              <Modal.Body className='text-center bg-dark text-light'>
                <h5>Zapatilla Deportiva</h5>
                <p>Zapatillas diseñadas para actividades deportivas.</p>                 
                <h6 className='text-decoration-line-through'>Precio Normal: 70000<sup>.00</sup></h6> 
                <h5 className=' text-warning fw-bold fs-3'>45.500<sup>.00</sup></h5> 
                <span className=' text-info fw-bold'> 35% de descuento.</span>   
              </Modal.Body>
              <Modal.Footer className='text-center bg-dark text-light'>
                <Boton 
                  texto="Ir a la oferta" 
                  className="btn btn-warning"
                  onClick={() => {
                  setOferta(false);
                  navigate('/producto/1');
                  }} 
                />
              </Modal.Footer>
            </Modal>
    </div>
  );
};

export default Home;