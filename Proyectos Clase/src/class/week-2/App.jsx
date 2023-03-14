import React, { Component } from "react";
import SelectorComponent from "./mesa/SelectorComponent";
import PokemonCards from "./mesa/PokemonCards";

// class App extends React.Component {

// }

// class App extends Component {
//   render() {
//     return (
//       <div>Componente de Clase</div>
//     )
//   }
// }

// export default App;

export const App = () => {
  return (
    <div
      className="abuelo"
      style={{
        margin: "1rem",
        padding: "1rem",
        fontFamily:"Helvetica, Roboto, Arial, sans-serif"}}>
      <PokemonCards type="water" />
      <PokemonCards type="fire" />
      <PokemonCards type="air" />
      <PokemonCards type="electric" />
    </div>
  )
}