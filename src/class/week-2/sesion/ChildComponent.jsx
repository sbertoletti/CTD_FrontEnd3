import GrandChildComponent from "./GrandChildComponent";
import pokemonData from "../../../assets/static/pokemons.json"

const ChildComponent = ({ type }) => {
  const data = pokemonData[type];
  return (
    <div className="hijo">
      <h3>Tipo de Pokémon: {type}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {
          data.map(pokemon => (
            <GrandChildComponent
              key={pokemon.id}
              {...pokemon}
              type={type}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ChildComponent;