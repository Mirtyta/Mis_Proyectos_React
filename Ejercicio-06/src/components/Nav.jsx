// ============================================
// src/components/Nav.jsx - CON REACT ROUTER
// ============================================
import { useState, useEffect } from "react";
import { useCarritoContext } from "../hooks/useCarritoContext";
import { Container, Nav, Navbar, NavDropdown, Badge } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';


// Componente principal de la aplicación para demostrar el Navbar
export default function Navigation() {
  const location = useLocation()
  const [mostrarMenu, setMostrarMenu] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const { cartCount} = useCarritoContext();
  
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
        bg="primary" 
        data-bs-theme="dark"
        sticky="top"
        className={`navbar-dinamica ${mostrarMenu ? "visible" : "oculta"}`}        
      >
        <Container>
          <Navbar.Brand href="#" className="fw-bolder fs-3">
          ZapaShop
          </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="responsive-navbar-nav text-primary" />       

          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="ms-auto">
              
              {/* === Link "Home" === */}
              <Nav.Link
                as={Link} 
                to="/"
                active={location.pathname === '/'}
                className="px-4" // Clases de estilo para el link
              >
                Inicio
              </Nav.Link>

              {/* === Link "Home" === */}
              <Nav.Link
                as={Link} 
                to="/about"
                active={location.pathname === '/about'}
                className="px-4" // Clases de estilo para el link
              >
                Acerca
              </Nav.Link>

                {/* === Link "Productos" === */}
                <Nav.Link 
                as={Link} 
                to="/productos"
                active={location.pathname === '/productos'}
                className="px-4">
                  Tienda
                </Nav.Link>

                {/* === Link "Contacto" === */}
                <Nav.Link
                as={Link} 
                to="/contacto"
                active={location.pathname === '/contacto'}
                className="px-4">
                  Contacto
                </Nav.Link>
                
              {/* === Link "Carrito" === */}
              {/*  ms-lg-3: Espacio extra en escritorio.
                mt-2/mt-lg-0: Margen superior en móvil, eliminado en desktop.*/}
              <Nav.Link
                as={Link} 
                to="/carrito"
                active={location.pathname === '/carrito'}
                className=" position-relative px-4"
              >
                Carrito 
                {/* aqui puse el carrito y el nombre , el carrito es un emoji */}
                {cartCount > 0 && ( 
                  <Badge 
                    bg="danger" 
                    pill 
                    className="position-absolute top-25 start-100 translate-middle"
                  >
                    {cartCount}
                  </Badge>
                  // el badge es de bootstrap es el botoncito rojo donde pongo la cantidad de productos en el canasto
                )}
              </Nav.Link>

              {/* <!-- Switch Claro/Oscuro --> */}
              <Nav.Item className="nav-item mx-lg-4">
                <div className="form-check form-switch mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="darkModeSwitch"
                  />
                  <label className="form-check-label text-white" htmlFor="darkModeSwitch">
                    Dark
                  </label>
                </div>
                
              </Nav.Item>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
