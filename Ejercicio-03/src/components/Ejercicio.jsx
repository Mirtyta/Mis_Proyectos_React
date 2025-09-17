import React from "react";
import ReactImage from "../assets/hreactjs.webp";
import Boton from "./Boton";
import { Container, Row, Col, Button } from "react-bootstrap";

const Ejercicio = () => {
  return (
    <section id="ejercicio" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h1>Proyecto Talento 2025</h1>
            <h2>Ejercicio Práctico N° 3</h2>
            <p>En App.jsx, importa los componentes creados y úsalos para construir la página:</p>
            <p>Muestra la lista del equipo con EquipoTalentoLab.</p>
            <p>Destaca los proyectos utilizando TarjetaProyecto.</p>
            <p>Agrega una galería interactiva con GaleriaIntereses.</p>
            <p>Usa estilos para que la página sea atractiva y organizada. Considera aplicar flexbox o grid para el diseño de las secciones.</p>
            <p>Este desafío pone a prueba tu capacidad para reutilizar componentes, manejar props y diseñar interfaces dinámicas.</p>            
            <Boton 
            texto="Ingresar" 
            tipo="Azul" 
            onClick={() => alert("¡Ingresaste!")} 
            className="boton"
            />
          </Col>
        <Col md={4}>
            <img src={ReactImage}        
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Ejercicio;