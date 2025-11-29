// Hook de React Router para obtener datos de la URL
import { useLocation } from "react-router-dom";

// Componente que muestra la lista de resultados
import SearchResultsList from "../components/SearchResultsList";

// Hook personalizado para traer los productos desde la API
import { useFetchProducts } from "../hooks/useFetchProducts";

// Función para normalizar texto (quitar acentos, pasar a minúsculas, etc.)
import { normalizeText } from "../utils/calculos";

export default function SearchResultsPage() {
  // Obtenemos la información de la URL actual
  const location = useLocation();

  // Leemos los parámetros de búsqueda de la URL (?query=algo)
  const params = new URLSearchParams(location.search);

  // Tomamos el parámetro "query" o devolvemos string vacío si no existe
  const query = params.get("query") || "";

  // Traemos los productos usando el hook
  const { productos } = useFetchProducts();

  // Filtramos los productos según la búsqueda
  const resultados = productos.filter((p) => {
    // Normalizamos el texto de búsqueda
    const q = normalizeText(query);

    // Verificamos si coincide con:
    // - el nombre
    // - la categoría
    // - o algún tag
    return (
      normalizeText(p.nombre).includes(q) ||
      normalizeText(p.categoria).includes(q) ||
      (p.tags && p.tags.some((tag) => normalizeText(tag).includes(q)))
    );
  });

  // Renderizamos el componente de resultados
  // Le pasamos los productos filtrados y el texto buscado
  return <SearchResultsList resultados={resultados} query={query} />;
}
