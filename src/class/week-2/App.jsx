import React, { Component } from "react";
import ChildComponent from "./sesion/ChildComponent";
import SecondChildComponent from "./sesion/SecondChildComponent";

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
    <div className="abuelo">
      <h2>Componente Abuelo:</h2>
      <ChildComponent type="air" />
    </div>
  )
}