// ============================================
// src/pages/SearchResultsPage.jsx
// ============================================
import { useLocation } from "react-router-dom";
import SearchResultsList from "../components/SearchResultsList";
import { useFetchProductos } from "../hooks/useFetchProductos";
import { normalizeText } from "../utils/calculos"; // <-- importamos

export default function SearchResultsPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query") || "";

  const { productos } = useFetchProductos();

  const resultados = productos.filter((p) => {
    const q = normalizeText(query);
    return (
      normalizeText(p.nombre).includes(q) ||
      normalizeText(p.categoria).includes(q) ||
      (p.tags && p.tags.some((tag) => normalizeText(tag).includes(q)))
    );
  });

  return <SearchResultsList resultados={resultados} query={query} />;
}
