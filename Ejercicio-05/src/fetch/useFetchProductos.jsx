import { useEffect, useState } from "react"

export function useFetchProductos (){

const [productos, setProductos] = useState([]);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchProductos = async () => {
      try {
        const res = await fetch("https://68d892512144ea3f6da857f0.mockapi.io/api/v1/productoComun");

        // Error de respuesta (ej: 404 o 500)
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status} ${res.statusText}`);
        }
        
        const data = await res.json();

        // Validar que el JSON tenga resultados
        if (!Array.isArray(data)) {
          throw new Error("La respuesta no tiene el formato esperado (falta 'items').");
        }

        // Validar que los campos importantes existan en cada producto
        const validated = data.map((producto) => {
          if (
            !producto.id || 
            !producto.nombre || 
            !producto.descripcion || 
            !producto.categoria || 
            (producto.precio === null || producto.precio === undefined) ||  
            (producto.descuento === null || producto.descuento === undefined) ||
            !producto.image)
          {
            throw new Error(`Faltan campos obligatorios en el personaje con ID: ${producto.id}`);
          }
       
          return {
            id: producto.id,
            nombre: producto.nombre ,
            descripcion: producto.descripcion ,
            categoria: producto.categoria,
            precio: producto.precio ,
            image: producto.image ,
            descuento: producto.descuento 
          };
        });

        setProductos(validated);
      } catch (err) {
        // Capturamos cualquier error lanzado
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
  }, []);

  return { productos, error, cargando };
}