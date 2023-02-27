import React from 'react'
import pokemonData from "../../week-2/mesa/pokemons.json"
import Card from "./Card"

const PokemonCards = ({ type }) => {

  const data = pokemonData[type];

  return (
    <div className="card">
      <h3>Tipo de Pokémon: {type}</h3>
      <div style={{ border: "1px solid blue", margin: "10px", padding: "10px", display: "flex",flexWrap: "wrap", gap: "20px" }}>
        {
          data.map(pokemon => (
            <Card
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

export default PokemonCards;