// ============================================
// src/components/SearchResultsList.jsx
// ============================================
import { useThemeContext } from "../context/ThemeContext";

import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import Banner from "./Banner";

/**
 * 🎯 Componente para mostrar los resultados de búsqueda en una grilla de columnas.
 */
export default function SearchResultsList({ resultados, query }) {
    // contexto para Theme
  const {contextTheme} = useThemeContext()
    return (
        <Container id={contextTheme}>
            
            {/* Banner con título dinámico */}
            <Banner
                title={`Resultados de "${query}"`}
                description={
                    resultados.length > 0
                        ? `Se encontraron ${resultados.length} coincidencias:`
                        : "No se encontraron productos."
                }
            />
            
            {/* 💡 Row para la grilla. align-items-stretch para que todas las tarjetas sean iguales 
                y g-4 para un buen espaciado entre ellas. */}
            <Row className="align-items-stretch d-flex g-4 p-5"> 
                {resultados.length > 0 ? (
                    resultados.map((producto) => (
                        <Col
                            key={producto.id}
                            xs={12} // 1 tarjeta por fila en móviles (xs)
                            sm={6}  // 2 tarjetas por fila en tabletas (sm)
                            md={4}  // 3 tarjetas por fila en medianos (md)
                            lg={3}  // 4 tarjetas por fila en grandes (lg/xl)
                            xl={3}
                        > 
                            {/* h-100 asegura que la tarjeta se estire dentro de la Col */}
                            <ProductCard producto={producto} className="h-100"/>
                        </Col>
                    ))
                ) : (
                    // 💡 CORRECCIÓN: Si no hay resultados, el mensaje debe ir dentro de una Col
                    <Col xs={12}> 
                        <p className="text-center mt-4">
                            😕 No se encontraron coincidencias para **"{query}"**.
                        </p>
                    </Col>
                )}
            </Row>
        </Container>
    );
}