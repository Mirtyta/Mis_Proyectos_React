// ============================================
// src/components/Banner.jsx
// ============================================
import "./Banner.css";

// 1. Desestructura (extrae) las props que esperas recibir: title y description
const Banner = ({ title, description }) => { 
    return(
        <div className="fondo-light-tr banner  p-2 p-md-5">
            {/* 2. Usa las variables de las props en lugar del texto fijo */}
            <h1 className=" fw-light">{title}</h1> 
            <p>{description}</p> 
        </div>
    );
};

export default Banner;