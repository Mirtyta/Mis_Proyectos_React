import { useState } from "react";
import { useCartContext } from "../hooks/useCarritoContext";
import { Container, Nav, Navbar, Badge } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';
import ModeSwitch from "./ModeSwitch";

export default function Navigation() {
  const location = useLocation();

  // controlar collapse (para que al click se cierre)
  const [open, setOpen] = useState(false);

  const { cartCount } = useCartContext();

  const isAuth = localStorage.getItem("auth") === "true";
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  return (
    <>
      <Navbar
        expanded={open}
        onToggle={() => setOpen(!open)}
        collapseOnSelect
        expand="lg"
        bg="primary"
        data-bs-theme="dark"
        sticky="top"
        className="px-2 px-md-4"
      >
        <Container>
          <Navbar.Brand href="#" className="fw-bolder fs-5">
            ZapaShop
          </Navbar.Brand>

          {isAuth && username && (
            <Link
              to="/perfil"
              className="ms-3 text-light fs-6 text-decoration-none"
              title="Mira tu perfil"
              style={{ opacity: 0.85 }}
            >
              Ver perfil de, {username}
            </Link>
          )}

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                active={location.pathname === '/'}
                onClick={() => setOpen(false)}
                className="px-4"
              >
                Inicio
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/about"
                active={location.pathname === '/about'}
                onClick={() => setOpen(false)}
                className="px-4"
              >
                Acerca
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/productos"
                active={location.pathname === '/productos'}
                onClick={() => setOpen(false)}
                className="px-4"
              >
                Tienda
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/contacto"
                active={location.pathname === '/contacto'}
                onClick={() => setOpen(false)}
                className="px-4"
              >
                Contacto
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/carrito"
                active={location.pathname === '/carrito'}
                onClick={() => setOpen(false)}
                className=" position-relative px-4"
              >
                Carrito
                {cartCount > 0 && (
                  <Badge
                    bg="danger"
                    pill
                    className="position-absolute top-25 start-25 translate-middle"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Nav.Link>

              {isAuth && role === "admin" && (
                <Nav.Link
                  as={Link}
                  to="/admin"
                  active={location.pathname === "/admin"}
                  onClick={() => setOpen(false)}
                  className="px-4"
                >
                  Administración
                </Nav.Link>
              )}

              <Nav.Item className="nav-item mx-lg-4">
                <ModeSwitch />
              </Nav.Item>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
