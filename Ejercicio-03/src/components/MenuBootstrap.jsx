// Archivo MenuBootstrap.jsx

// ✅ Importamos dependencias necesarias de React y React Router Dom
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import imagelogo from "../assets/logo.png";

function ScrollMenu() {
  // 🔹 Estado para el efecto de scroll
  const [mostrarMenu, setMostrarMenu] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // 🔹 Hooks de React Router Dom
  // useLocation: Nos da información sobre la URL actual, como el "path" (ej. '/recursos').
  const location = useLocation();
  // useNavigate: Es una función que nos permite cambiar de ruta.
  const navigate = useNavigate();

  // 🔹 useEffect para el efecto de mostrar/ocultar menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Oculta el menú si el scroll va hacia abajo y ha superado los 100px iniciales
      // Si el scroll vuelve arriba, lo muestra
      if (currentScroll > 100 && currentScroll > lastScroll) {
        setMostrarMenu(false); // Scroll hacia abajo
      } else {
        setMostrarMenu(true);  // Scroll hacia arriba
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // 🔹 Función para manejar la navegación y el scroll a secciones
  const handleNavigation = (id) => {
    // Si ya estamos en la página de inicio ('/'), hacemos scroll
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Si estamos en otra página (ej. '/recursos'), navegamos al inicio
      // y agregamos un "hash" (#) con el ID.
      // El useEffect en App.jsx se encargará de hacer el scroll.
      navigate(`/#${id}`);
    }
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      style={{
        transform: mostrarMenu ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
        zIndex: 1050,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(4px)",
      }}
    >
      <Container>
        {/* Usamos <Link> para que el logo nos lleve a la página de inicio */}
        <Navbar.Brand onClick={() => handleNavigation("inicio")}>
          <img src={imagelogo} className="img-fluid rounded shadow logo" alt="Logo" />
          <small>Mis Ejercicios</small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
             {/* Para las secciones, usamos `onClick` con nuestra función `handleNavigation` */}
            <Nav.Link onClick={() => handleNavigation("inicio")}>Inicio</Nav.Link>          
            <Nav.Link onClick={() => handleNavigation("equipo")}>Equipo</Nav.Link>
            <Nav.Link onClick={() => handleNavigation("proyectos")}>Proyectos</Nav.Link>
            <Nav.Link onClick={() => handleNavigation("intereses")}>Intereses</Nav.Link>
            <Nav.Link onClick={() => handleNavigation("contacto")}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ScrollMenu;