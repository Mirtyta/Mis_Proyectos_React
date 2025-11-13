import { Link } from "react-router-dom";
import ColorSizeSelector from "./ColorSizeSelector";
import { formatearPrecio} from "../utils/calculos";
import AddToCartButton from "./AddToCartButton";
import { useState } from "react";
import "./ProductCard.css";

export default function FeaturedProductCard({ producto }) {

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="detalles-internos product-card featured">
      {/* Imagen del producto */}
      <div className="image-container-featured">
        <img 
          src={producto.image} 
          alt={producto.nombre} 
        />

       {/* Badge de descuento (solo si tiene descuento > 0) */}
        {producto.descuento > 0 && (
          <span className="image-badge-estrella">
            {producto.descuento * 100}%<sup className=' fs-6'>Off</sup>
          </span>
        )}

         {/* Íconos superpuestos */}
        <div className="btn-group icons-overlay-f">
          <button className="btn btn-success rounded-pill fs-4">
            <Link to={`/producto/${producto.id}`}>
            <i className=" text-light bi bi-eye"  title="Detalle de producto"></i>
            </Link>
          </button>
            <AddToCartButton
              producto={producto}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              redirect={false}
              iconOnly={true}
              className="btn btn-success rounded-pill fs-4"
            />
        </div>
      </div>

      {/* Información del producto */}
      <div className="product-info featured-info">
        <h5 className=" fs-3 fw-bolder">{producto.nombre}</h5>
        <div className="btn btn-danger pb-3 pt-3 my-3">🔥 Oferta especial -  {producto.descuento * 100}%<sup className='fs-6'>Off</sup></div>        
        <div className="price mb-2 fs-2">{formatearPrecio(producto.precio)}.<sup>00</sup></div>
        <div>Elige Color y talle:</div>
        <ColorSizeSelector
          colores={producto.colores}
          tamanos={producto.tamanos}
          onSeleccion={({ color, talle }) => {
            setSelectedColor(color);
            setSelectedSize(talle);
          }}
        />
      </div>
    </div>
  );
}
