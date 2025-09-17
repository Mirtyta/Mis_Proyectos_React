import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importa ReactMarkdown para renderizar contenido Markdown
import ReactMarkdown from 'react-markdown'; 

// importar archivos md contenido de los slides de recursos
import arquitecturaProyecto from '../md/arquitectura-proyecto.md?raw';
import codigoLimpio from '../md/codigo-limpio-modular.md?raw';
import errores from '../md/errores-comunes.md?raw';
import HerramientasEsenciales from '../md/herramientas-esenciales.md?raw';
import hooksAccion from '../md/hooks-en-accion.md?raw';
import manejoRecursos from '../md/manejo-de-recursos.md?raw';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../App.css";

// -----------------------------
// Array de recursos (fuera del return)
// - Facilita agregar, eliminar o reordenar recursos
// - Cada recurso tiene un `id` único, un título y contenido
// -----------------------------
const recursosItems = [
  { id: "arquitectura-Proyecto", titulo: "Arquitectura del Proyecto", contenido: arquitecturaProyecto },
  { id: "codigo-Limpio", titulo: "Código Limpio y Modular", contenido: codigoLimpio },
  { id: "errores", titulo: "Errores & Fixes", contenido: errores },
  { id: "herramientas-Esenciales", titulo: "Herramientas Esenciales", contenido: HerramientasEsenciales },
  { id: "hooks-Accion", titulo: "Hooks en Acción", contenido: hooksAccion },
  { id: "manejo-Recursos", titulo: "Manejo de Recursos", contenido: manejoRecursos },
];

const Recursos = () => {
  // -----------------------------
  // Referencia al Swiper
  // Permite controlar el Swiper desde código (ej. abrir un slide específico)
  // -----------------------------
  const swiperRef = useRef(null);

  // -----------------------------
  // Estado para controlar el aside colapsable en dispositivos móviles
  // true = abierto, false = cerrado
  // -----------------------------
  const [isOpen, setIsOpen] = useState(false);

  // -----------------------------
  // Función para alternar la visibilidad del aside en móvil
  // -----------------------------
  const toggleAside = () => setIsOpen(!isOpen);

  // -----------------------------
  // useEffect para abrir el slide correcto desde el footer
  // 1. Leemos el query param ?slide=N
  // 2. Convertimos a número
  // 3. Llamamos a swiper.slideTo(index)
  // Esto hace que si el usuario viene desde el footer, se abra el slide correspondiente automáticamente
  // -----------------------------
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slideIndex = parseInt(params.get("slide"), 10);

    if (!isNaN(slideIndex) && swiperRef.current) {
      swiperRef.current.slideTo(slideIndex); // Mueve Swiper al slide correcto
    }
  }, []);

  // -----------------------------
  // Función para manejar click en un recurso del aside
  // - Hace scroll suave hacia el slide usando el id
  // - Si es móvil, cierra el aside automáticamente
  // -----------------------------
    const handleClick = (index) => {
    // Le decimos a Swiper que se mueva al slide con el índice que recibimos
    if (swiperRef.current) {
        swiperRef.current.slideTo(index);
    }
    setIsOpen(false); // Cierra aside en móviles
};

  return (
    <Container fluid className="mt-4 espacio">
      {/* -----------------------------
          Fila principal: Aside + Contenido
          agregue espacio arriba para que no tape la navbar
          ----------------------------- */}
      <Row>
        {/* -----------------------------
            Botón hamburguesa para móvil
            - Solo visible en pantallas pequeñas (d-md-none)
            - Al presionarlo, se abre/cierra el aside
            ----------------------------- */}
        <Col xs={12} className="d-md-none mb-2 text-end">
          <Button onClick={toggleAside}>☰ Recursos</Button>
        </Col>

        {/* -----------------------------
            Columna lateral (Aside)
            - md en adelante siempre visible
            - xs-sm colapsable con isOpen
            - position-sticky para mantenerlo visible al hacer scroll
            ----------------------------- */}
        <Col
          md={3}
          className={`position-sticky mb-3 ${isOpen ? "d-block" : "d-none d-md-block"}`}
          style={{
            top: "20px",
            backgroundColor: "rgba(255,255,255,0.8)",
            padding: "20px",
            borderRadius: "8px",
            height: "fit-content",
            zIndex: 1000, // Que quede sobre el contenido en móvil
          }}
        >
          <h4>Recursos</h4>
          <ul className="list-unstyled">
            {recursosItems.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Button
                  variant="outline-primary"
                  size="sm"
                  style={{ width: "100%" }}
                  onClick={() => handleClick(index)} // Scroll al slide
                >
                  {item.titulo}
                </Button>
              </li>
            ))}
          </ul>
        </Col>

        {/* -----------------------------
            Contenido principal: Swiper
            - Cada SwiperSlide tiene su `id` (para que el scroll lateral funcione)
            - Se mantiene la configuración de navegación y paginación
            ----------------------------- */}
        <Col md={9}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            style={{ padding: "10px" }}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Guardamos referencia
          >
            {recursosItems.map((item, index) => (
              <SwiperSlide key={index} id={item.id}>
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    padding: "20px",
                    borderRadius: "8px",
                    minHeight: "300px",
                  }}
                >
                  <h3>{item.titulo}</h3>
                  {/* Aquí usamos ReactMarkdown para renderizar el contenido */}
                  <ReactMarkdown>{item.contenido}</ReactMarkdown>
                  {/* Si el contenido fuera HTML, usaríamos:
                  <div dangerouslySetInnerHTML={{ __html: item.contenido }} />
                  Pero como es Markdown, usamos ReactMarkdown arriba 
                  Con este cambio, la aplicación ahora leerá el contenido de 
                  tus archivos Markdown y la librería react-markdown lo convertirá 
                  automáticamente en HTML formateado, logrando el resultado 
                  de una manera mucho más segura y organizada que usando 
                  dangerouslySetInnerHTML.*/}
                  {/* Ejemplo de contenido adicional */}  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default Recursos;
