import React from "react";
import SegundaCapa from "./segundaCapa";


export const PrimeraCapa = ({ algunaProp, apellido }) => { //si le paso el objeto completo, con ...propsAlgo, acá llamo al contenido de esas tags
    return (
        <div>
            <p>Primera Capa</p>
            <p>Esto viene desde App por prop: {algunaProp} {apellido}</p>
            <div style={{margin:"2px", padding:"2px"}}>
                <SegundaCapa algoB="b" apellido={apellido}/>

                <SegundaCapa />

                <SegundaCapa />
            </div>
        </div>
    )
}