// ============================================
// src/pages/HomePage.jsx
// ============================================
// Importamos componentes
import Boton from '../components/Boton'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';

// Importamos para la parte visual css, png, bootstrap
import { Container, Row, Col, Modal } from "react-bootstrap";
import EnConstruccion from "../assets/en-construccion.png"
import Marca2 from "../assets/marca1.png"
import "./HomePage.css"

const Login = () => {

  return (
    <div>
        <Banner 
        title="ZapaShop" 
        description="Zapatillas - Gorras - Accesorios" 
        />
        <Container className='fondo-light pb-5 pt-5'>
          <Row className="align-items-center">
            <Col md={6}>
              <img 
                src={EnConstruccion} 
                alt='Logo de ZapaShop'
                className='me-3 w-100'/>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-center align-items-center flex-wrap">
                <h3 className='tituloBanner mb-0'>¡Mejorando tu seguridad en </h3>
                <img 
                src={Marca2} 
                alt='Logo de ZapaShop'
                className='me-3 img-oferta' 
                />
                <h3 className='tituloBanner'>!</h3>
              </div>                  
              <br />
              <p className='textoJustify'>¡El Área de Ingreso y la seguridad de tu cuenta están recibiéndose un mantenimiento especial! Pronto podrás acceder de forma segura y fácil. Mientras tanto, puedes seguir explorando 🛍️ Tienda y llenar tu 🛒 Carrito.</p>         
                <br />
                <div className='btn btn-warning'>
                  <Link 
                  to="/productos"
                  className="px-4 text-decoration-none">
                    ¡Mira nuestros productos!
                  </Link>
                </div><br /><br />
            </Col>


          </Row>
        </Container> 
    </div>
  );
};

export default Login;