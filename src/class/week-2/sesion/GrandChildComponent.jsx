import React from 'react'

const colorPicket = (type) => {
  switch (type) {
    case "fire":
      return "red"
    case "water":
      return "blue"
    case "electric":
      return "yellow"
    case "air":
    default:
      return "green";
  }
}

const GrandChildComponent = ({ id, name, avatar, powerLevel, type }) => {
  return (
    <div
      className='nieto'
      style={{
        width: "150px",
        backgroundColor: `${colorPicket(type)}`,
        color: "white"
      }}
    >
      <p>Nombre del Pokémon: {name}</p>
      <img style={{ width: "100%" }} src={avatar} alt={name} />
    </div>
  )
}

export default GrandChildComponent