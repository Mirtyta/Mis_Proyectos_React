// ============================================
// src/components/Nav.jsx - CON REACT ROUTER
// ============================================
import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/zapashop.png'
import './Nav.css'

// Componente principal de la aplicación para demostrar el Navbar
export default function Navigation({ cartCount, showCart, setShowCart }) {
  const location = useLocation()
  const [mostrarMenu, setMostrarMenu] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 100 && currentScroll > lastScroll) {
          setMostrarMenu(false);
        } else {
          setMostrarMenu(true);
        }
        setLastScroll(currentScroll);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

  return (
    <>
      {/* 1. collapseOnSelect: Cierra el menú hamburguesa al hacer clic en un Nav.Link.
        2. expand="lg": El menú se colapsa (muestra el hamburguesa) en dispositivos pequeños (sm, md) 
        y se expande en 'lg' (desktop).
        3. variant="dark": Asegura que el color del ícono del toggle sea claro para el fondo oscuro.
      */}
      <Navbar 
        collapseOnSelect 
        expand="lg"  
        variant="light" 
        className={`navbar-dinamica ${mostrarMenu ? "visible" : "oculta"}`}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-3">
            <img 
            src={Logo} 
            alt='Zapashop' 
            height='80'
            className='logo'/>  
          </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="responsive-navbar-nav text-primary" />
          

          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="ms-auto">
              
              {/* === Link "Home" === */}
              <Nav.Link
                as={Link} 
                to="/"
                active={location.pathname === '/'}
                className="text-uppercase mx-2" // Clases de estilo para el link
              >
                🏡 Home
              </Nav.Link>

              {/* === Link "Productos" === */}
              <Nav.Link
                as={Link} 
                to="/productos"
                active={location.pathname === '/productos'}
                className="text-uppercase mx-2" // Clases de estilo para el link
              >
                📦 Productos
              </Nav.Link>
              
              {/* === Link "Contacto" === */}
              <Nav.Link                
                as={Link} 
                to="/contacto"
                active={location.pathname === '/contacto'}
                className="text-uppercase mx-2 me-2"
              >
                ✉️ Contacto
              </Nav.Link>

              {/* === Link "Carrito" === */}
              {/*  ms-lg-3: Espacio extra en escritorio.
                mt-2/mt-lg-0: Margen superior en móvil, eliminado en desktop.
              */}
              <Nav.Link
                onClick={() => setShowCart(!showCart)}
                active={cartCount > 0} 
                className="position-relative ms-lg-3 mt-2 mb-2 mt-lg-0 mb-lg-0 text-uppercase mx-2"
                style={{ height: 'fit-content' }} // Ajusta la altura del link
              >
                🛒 Carrito 
                {/* aqui puse el carrito y el nombre , el carrito es un emoji */}
                {cartCount > 0 && ( 
                  <Badge 
                    bg="danger" 
                    pill 
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {cartCount}
                  </Badge>
                  // el badge es de bootstrap es el botoncito rojo donde pongo la cantidad de productos en el canasto
                )}
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
