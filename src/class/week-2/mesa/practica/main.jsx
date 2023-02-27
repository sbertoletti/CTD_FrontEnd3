import React, { Fragment } from 'recat';
import ReactDOM from 'react-dom/client';
import "./style.css";
import {App} from "./App"; 
// import Camada8 from "./App"; cuando importo por default puedo renombrarlo

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// en lugar de <App /> se llamaría <Camada8 /> por ejemplo