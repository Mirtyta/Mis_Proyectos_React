// ============================================
// src/components/HeaderTop.jsx
// Header superior con logo, buscador, botón Cerrar sesión (si está autenticado)
// y enlace al carrito con badge.
// ============================================
// Agregamos useNavigate y useState
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { useCartContext } from "../hooks/useCarritoContext";

import { Link } from "react-router-dom";
import { Badge } from 'react-bootstrap';
import Swal from "sweetalert2";
import './HeaderTop.css'

export default function HeaderTop() {
  // Contador de items en el carrito (desde context)
  const { cartCount} = useCartContext();

  // contexto para Theme
  const {contextTheme} = useThemeContext()

  // isAuth y username los guardamos/recuperamos desde sessionStorage
  // (simulación simple de autenticación para el ejercicio)
  const isAuth = sessionStorage.getItem("auth") === "true";

  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // Cuando el usuario envía el buscador, navegamos a /buscar?query=...
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/buscar?query=${encodeURIComponent(query.trim())}`);
    }
    setQuery("")
  };

    // Cerrar sesión: limpiar sessionStorage y volver al inicio
  const handleLogout = () => {
  Swal.fire({
    title: '¿Cerrar sesión?',
    text: "¿Estás seguro que querés salir?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, salir',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      sessionStorage.removeItem("auth");
      sessionStorage.removeItem("role");
      sessionStorage.removeItem("username");
      Swal.fire(
        'Sesión cerrada',
        'Has cerrado sesión correctamente',
        'success'
      );
      navigate("/");
    }
  });
};


  return(
    // <!-- Header Top -->
    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 position-relative p-5" id={contextTheme}>

      {/* <!-- Marca --> */}
      <div className="logo flex-shrink-0 mx-lg-3">
        <h3 className="fw-bolder brand">ZapaShop</h3>
      </div>

      {/* <!-- Buscador + Lupa --> */}
      <form
        className="d-flex flex-nowrap flex-grow-1 w-100 w-sm-75 w-lg-50"
        onSubmit={handleSubmit}
      >
        <div className="input-group pe-3 bg-light border-5 rounded-5 text-primary" title="Busca por nombre, categoria y tags">
          {/* quite el fondo  "bg-transparent" y la sombra "shadow-none" del input para que se vea mejor el fondo con la lupa incluìda */}
          <input
            className="form-control bg-transparent border-0 shadow-none ms-2 text-secondary"
            type="search"
            placeholder="Buscar..."
            aria-label="Buscar"
            id="Buscar"
            name="Buscar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="input-group-text bg-transparent border-0 text-primary">
            <i className="ibuscar bi bi-search fs-5"></i>
            <span className="tbuscar fs-6 ps-3">Buscar</span>
          </button>
        </div>
      </form>
      
      {/* <!-- Iconos Login/cerrar sesion --> */}
      <div className="header-icons d-flex gap-3 flex-shrink-0 px-2 align-items-center">
        {/* Si NO está autenticado: mostrar enlace a /login */}
        {!isAuth ? (
          <Link
            to="/login"
            className="overlink text-decoration-none text-reset d-flex align-items-center pe-3"
            aria-label="Ir a Iniciar sesión"
          >
            <i className="bi bi-person fs-4"></i>
            <span className="fs-6 ps-3 brand">Ingreso/nueva</span>
          </Link>
        ) : (
          // Si está autenticado: mostrar botón cerrar sesión (ocupa el mismo espacio)
          <button
            onClick={handleLogout}
            className="overlink btn d-flex align-items-center"
            aria-label="Cerrar sesión"
            title="Cerrar sesión"
          >
            <i className="bi bi-person-x text-danger fs-4"></i>
            <span className="fs-6 ps-3 text-danger">Cerrar sesión</span>
          </button>
        )}


        {/* <!-- Icono Carrito --> */}
        <Link to="/carrito" className="overlink text-decoration-none text-reset d-flex align-items-center">
          <i className="icarrito bi bi-bag position-relative fs-5 p-2">     
            <Badge 
              bg="danger"
              pill
              className="bcart position-absolute rounded-circle translate-middle"
              >
              {cartCount}
            </Badge>
          </i>       
          <span className="fs-6 ps-3">Carrito</span>    
        </Link>
      </div>

    </div>
  );
}