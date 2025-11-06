// ============================================
// src/components/HeaderTop.jsx
// ============================================

import { Link } from "react-router-dom";
import { useCarritoContext } from "../hooks/useCarritoContext";
import { Badge } from 'react-bootstrap';
import './HeaderTop.css'

export default function HeaderTop() {

  const { cartCount} = useCarritoContext();

  return(
    // <!-- Header Top -->
    <div className="header-top d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 position-relative p-5">

      {/* <!-- Marca --> */}
      <div className="logo flex-shrink-0 mx-lg-3">
        <h2 className="fw-bolder">ZapaShop</h2>
      </div>

      {/* Simulación visual del buscador (solo decorativo) */}
      <div className="input-group pe-3 flex-grow-1 w-100 w-sm-75 w-lg-50">
        <textarea
          className="form-control"
          placeholder="Buscar..."
          disabled
          style={{ resize: "none", height: "38px" }}
        ></textarea>
          <button type="submit" className="input-group-text bg-transparent border-0">
            <i className="ibuscar bi bi-search"></i>
            <span className="tbuscar fs-5 ps-3">Buscar</span>
          </button>
      </div>


    
      
      {/* <!-- Iconos Login y Carrito --> */}
      <div className="header-icons d-flex gap-3 flex-shrink-0 px-2">
        {/* login */}
        <Link to="/login" className="overlink text-decoration-none text-reset d-flex align-items-center pe-5">
          <i className="ilogin bi bi-person"></i>        
          <span className="fs-5 ps-3">Ingresar o nueva</span>  
        </Link>

        {/* carrito */}
        <Link to="/carrito" className="overlink text-decoration-none text-reset d-flex align-items-center">
          <i className="icart bi bi-bag position-relative fs-4">     
            <Badge 
              bg="danger"
              pill
              className="bcart position-absolute rounded-circle translate-middle"
              >
              {cartCount}
            </Badge>
          </i>       
          <span className="fs-5 ps-3">Carrito</span>    
        </Link>
      </div>

    </div>
  )
}