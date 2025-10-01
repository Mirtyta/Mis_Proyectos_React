import "./MiBanner.css";

// 1. Desestructura (extrae) las props que esperas recibir: title y description
const Banner = ({ title, description }) => { 
    return(
        <div className="banner">
            {/* 2. Usa las variables de las props en lugar del texto fijo */}
            <h1>{title}</h1> 
            <p>{description}</p> 
        </div>
    );
};

export default Banner;