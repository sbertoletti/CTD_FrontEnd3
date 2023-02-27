// 1er Modo - Componente de Clase
// import React from "react";

// class App extends React.Component {

// }

// 2do Modo - Componente de Clase
// import React, { Component } from "react";

// class App extends Component {
//     render(){
//         return (
//             <div>Componente de Clase</div>
//         )
//     }
// }

// export default App;

// 3er Modo - Funcion

import React from "react"
import PrimeraCapa from "./primeraCapa";

export const App = () => { // exportacion de forma nombrada (cuando lo importo no lo puedo renombrar)

    const propsAlgo = {
        algunaProp: "A", //lo puso en un objeto, para pasarlo a primeraCapa se usa {...propsAlgo} o como sea que se llama
        apellido: "B"
    }

    return (
        <div>
            <div>Componente Funcional</div>
            <PrimeraCapa algunaProp="A" apellido="B"/>
        </div>
    )
}

// export default App (exportacion por default, cuando lo importo lo puedo nombrar como quiero)