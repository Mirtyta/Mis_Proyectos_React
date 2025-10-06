// archivo: Home.jsx
// Importamos componentes
import Boton from '../components/MiBoton'
import Banner from '../components/MiBanner'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importamos para la parte visual css, png, bootstrap
import { Container, Row, Col, Modal } from "react-bootstrap";
import Promo from "../assets/imagenpromo.png"
import Marca2 from "../assets/marca1.png"
import "./Home.css"

const Home = () => {

  const [oferta, setOferta] = useState(false)
  const navigate = useNavigate();

  return (
    <div>
        <Banner 
        title="ZapaShop" 
        description="Zapatillas - Gorras - Accesorios" 
        />
        <div>
          <Row className="align-items-center">
            <Col md={6} className='texto-home'>
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
                  className="btn btn-primary"
                  /><br /><br />
            </Col>

            <Col md={6}>
              <img 
                src={Promo} 
                alt='Logo de ZapaShop'
                className='me-3' 
                style= {{width: '100%',}}/>
            </Col>
          </Row>
        </div> 
            {/* OFERTA mensaje de ofertas */}
            <Modal show={oferta} onHide={() => setOferta(false)} centered className='mensaje'>
              <Modal.Header closeButton>
                <Modal.Title>OFERTA ESPECIAL</Modal.Title>
              </Modal.Header>
              <Modal.Body >
                <h5>Zapatilla Deportiva</h5>
                <p>Zapatillas diseñadas para actividades deportivas.</p> 
                <h5 className='text-success'>45.499<sup>.99</sup></h5> 
                <h6>Precio Normal: 70000<sup>.00</sup></h6> 
                <span> 35% de descuento.</span>   
              </Modal.Body>
              <Modal.Footer>
                <Boton 
                texto="Ir a la oferta" 
                className="btn btn-primary"
                onClick={() => navigate('/productos', { state: { productoId: 1 } })} />
              </Modal.Footer>
            </Modal>
    </div>
  );
};

export default Home;