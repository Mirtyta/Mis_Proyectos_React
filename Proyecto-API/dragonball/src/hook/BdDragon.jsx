import { useEffect, useState } from "react"

/**
 * Hook personalizado para traer personajes de la API de Dragon Ball
 * y manejar errores con throw.
 */
export function useFetchCharacters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch("https://dragonball-api.com/api/characters");

        // Error de respuesta (ej: 404 o 500)
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        // Validar que el JSON tenga resultados
        if (!data.items || !Array.isArray(data.items)) {
          throw new Error("La respuesta no tiene el formato esperado (falta 'items').");
        }

        // Validar que los campos importantes existan en cada personaje
        const validated = data.items.map((char) => {
          if (!char.id ||!char.image || !char.name || !char.description) {
            throw new Error(`Faltan campos obligatorios en el personaje con ID: ${char.id}`);
          }
          return {
            id: char.id,
            name: char.name,
            race: char.race,
            description: char.description,
            image: char.image,
          };
        });

        setCharacters(validated);
      } catch (err) {
        // Capturamos cualquier error lanzado
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { characters, error, loading };
}
