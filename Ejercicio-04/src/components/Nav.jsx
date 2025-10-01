import { 
  Navbar, 
  Container, 
  Nav, 
  Badge
} from 'react-bootstrap';
import Logo from '../assets/marca.png'

// Componente principal de la aplicación para demostrar el Navbar
export default function Navigation({ 
  currentSection, 
  setCurrentSection, 
  cartCount, 
  showCart, 
  setShowCart 
}) {


  // Función para manejar la navegación y cerrar el menú después de un clic (opcional)
  // Usamos el hook useRef o una referencia para cerrar el menú si es necesario, 
  // pero collapseOnSelect es una mejor práctica para React-Bootstrap.
  
  // La lógica de cambiar la sección se mantiene igual.
  // const handleSectionChange = (section) => {
  //   setCurrentSection(section);
  // };
  
  // const handleCartToggle = () => {
  //   setShowCart(prev => !prev);
  //   // Nota: El Navbar.Collapse se cierra automáticamente con 'collapseOnSelect' en React-Bootstrap.
  // };

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
        bg="dark" 
        variant="dark" 
        className="shadow-lg sticky-top"
      >
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-3">
            <img 
            src={Logo} 
            alt='Zapashop' 
            height='80'
            className='logo'/>  
          </Navbar.Brand>
          
          {/* 4. Toggler: El ícono de hamburguesa visible en móviles */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          
          {/* 5. Collapse: El contenedor que se muestra/oculta */}
          <Navbar.Collapse id="responsive-navbar-nav">
            
            {/* Nav: Utiliza ms-auto para mover los elementos a la derecha en escritorio */}
            <Nav className="ms-auto">
              
              {/* === Link "Productos" === */}
              <Nav.Link
                // 6. Nav.Link en lugar de Button
                onClick={() => setCurrentSection('productos')}
                // 7. Prop 'active' para destacar la sección actual (estilo nativo de Nav.Link)
                active={currentSection === 'productos'}
                className="text-uppercase mx-2" // Clases de estilo para el link
              >
                📦 Productos
              </Nav.Link>
              
              {/* === Link "Contacto" === */}
              <Nav.Link                
                active={currentSection === 'contacto'}
                onClick={() => setCurrentSection('contacto')}
                className="me-2"
              >
                ✉️ Contacto
              </Nav.Link>

              {/* === Link "Carrito" (Simulando un botón de color) === */}
              {/* Usamos className="btn btn-success" para darle la apariencia de un botón 
                al Nav.Link. 
                ms-lg-3: Espacio extra en escritorio.
                mt-2/mt-lg-0: Margen superior en móvil, eliminado en desktop.
              */}
              <Nav.Link
                onClick={() => setShowCart(!showCart)}
                active={cartCount > 0} 
                className="position-relative ms-lg-3 mt-2 mb-2 mt-lg-0 mb-lg-0"
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
