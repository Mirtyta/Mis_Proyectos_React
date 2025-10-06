import CharacterCard from "./CardDragon";
import "./ListDragon.css"

function CharacterList({ characters }) {
  return (
      <>
      <br />
      <hr />
      <div className="general">
        {characters.map((char) => (
          <CharacterCard
          key={char.id}
          id={char.id}
          image={char.image}
          name={char.name}
          description={char.description}
          />
        ))}
      </div>
    </>
  );
}

export default CharacterList;
