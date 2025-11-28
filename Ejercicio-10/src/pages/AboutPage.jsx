// ============================================
// src/pages/HomePage.jsx
// ============================================
import Banner from "../components/Banner";
import { useThemeContext } from "../context/ThemeContext";

// Importamos para la parte visual css, png, bootstrap
import { Container, Row, Col, Modal } from "react-bootstrap";
import Marca1 from "../assets/esfuerzo.png"
import Marca2 from "../assets/inicios.png"
import "./HomePage.css"

const About = () => {
// contexto para Theme
  const {contextTheme} = useThemeContext()
  return (
        <Container className='p-5' id={contextTheme} >
          <Banner title="Acerca" description={'Conoce más sobre NosotrosS'} />
          <Row className="align-items-center p-5">
            <Col md={6}>
              <div>
                <h3 className='tituloBanner mb-0'>El Origen de ZapaShop: </h3>
              </div>                  
              <br />
              <p className='textoJustify'>
                    Nuestra historia no comienza en un almacén, sino en una sesión de brainstorming algo frustrada. Queríamos un nombre para nuestra tienda de zapatillas que fuera pegadizo, moderno y que se destacara del mar de opciones obvias.

                    Mirábamos la competencia: "Tienda de Zapatillas", "Sneakers Shop", "Shoe Plaza"... ¡Todo parecía ya usado y sin chispa! Necesitábamos algo que, al escucharlo, se quedara en la mente.

                    Así comenzó el juego de palabras: ¿Y si mezclamos idiomas?

                    Tienda y Sneakers: Tienda de Sneakers... demasiado formal.

                    Shop y Zapatillas: Shop de Zapatillas... mejor, pero le faltaba ritmo.

                    Zapatillas Shop: Zapatillas Shop... un poco largo.

                    Y entonces, llegó la revelación: ¿ZapaShop?

                    ¡Eureka! El nombre era corto, rítmico, fácil de recordar y se sentía actual. Pero había un "pequeño" detalle: ZapaShop... suena a Zapallo (calabaza).

                    Lejos de ser un problema, esa asociación se convirtió en la identidad visual que necesitábamos. Decidimos abrazar lo inesperado: si suena a Zapallo, ¡que el logo sea una zapatilla con forma de zapallo!

                    Así surgió ZapaShop: un nombre que es 50% castellano, 50% inglés, y 100% original. Es un recordatorio de que las mejores ideas nacen cuando uno se atreve a ser diferente. Y por eso, en ZapaShop, prometemos que tu estilo nunca será aburrido.</p>         
                <br />
            </Col>
            <Col md={6}>
              <img 
                src={Marca2} 
                alt='Logo de ZapaShop'
                className='me-3 w-100 rounded-5'/>
            </Col>

            
          </Row>
           {/* <!-- Franja parallax --> */}
          <div className="parallax-divider"></div>
          <Row className="align-items-center p-5">
            <Col md={6}>
              <img 
                src={Marca1} 
                alt='Logo de ZapaShop'
                className='me-3 w-100 rounded-5'/>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-center align-items-center flex-wrap">
                <h3 className='tituloBanner mb-0'>Con esfuerzo construimos nuestra tienda digital </h3>
              </div>                  
              <br />
              <p className='textoJustify'>Como todo gran proyecto, ZapaShop comenzó con una idea diminuta, casi como una semilla de zapallo en un huerto de sueños. No fue un camino fácil; cada paso, cada línea de código y cada selección de producto requirieron dedicación, madrugadas de trabajo y un espíritu inquebrantable. Construimos este espacio digital con la misma meticulosidad con la que se diseña un calzado perfecto: pensando en cada detalle, en la comodidad y en la experiencia de quien lo va a usar.

              Este ecommerce es el resultado de mucho más que transacciones; es el fruto de un esfuerzo colectivo, de la creencia en nuestra visión y de la promesa de acercarte el mejor estilo directamente a tu pantalla. Cada clic en ZapaShop es un reconocimiento a ese camino y nos inspira a seguir mejorando y creciendo junto a vos. ¡Gracias por ser parte de nuestra evolución!</p>         
                <br />                
            </Col>
          </Row>
        </Container> 

  );
};

export default About;