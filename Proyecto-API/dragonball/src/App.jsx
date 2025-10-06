import {useFetchCharacters} from "./hook/BdDragon"
import CharacterList from "./components/ListDragon"
import Banner from "./components/Banner"
import "./App.css"

function App() {
  const { characters, error, loading } = useFetchCharacters();

  if (loading) return <p>Cargando personajes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <Banner/>
    <CharacterList characters={characters} />;
    </>   
  )
}

export default App;
