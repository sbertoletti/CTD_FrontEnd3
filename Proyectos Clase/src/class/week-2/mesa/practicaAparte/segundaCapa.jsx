import React from "react";

const SegundaCapa = ({ algoB, apellido }) => {
    return (
        <div>
            <p>Segunda Capa</p>
            <p>Esto viene desde App por prop: {algoB} otra prop {apellido}</p>

        </div>
    )
}

export default SegundaCapa;
