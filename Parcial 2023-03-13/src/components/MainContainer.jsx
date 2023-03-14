import React from 'react';
import FormColor from './FormColor';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import { Foot } from './Styles';


const MainContainer = () => {
    return (
        <div>
            <h1>FrontEnd 3 - Parcial 1</h1>
            <span>Alumno:</span><h2> Bertoletti Espejo, Santiago</h2>
            <h5>Camada 8</h5>        
            <FormLogin />
            <FormRegister />
            <FormColor />
            <Foot><p>🤗   Aprendi un montón hasta acá, muchas gracias   🤗</p></Foot>
        </div>
    )
}

export default MainContainer