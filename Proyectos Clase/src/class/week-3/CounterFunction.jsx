import React, { useState } from 'react';
//import { TitleStyles } from './styles-mesa3/styles_por_JS';
//import "./styles-mesa3/styles_por_css.css";
import styles from './styles-mesa3/App.module.css';


const CounterFunction = () => {
    const [counterValue, setCounterValue] = useState(0);
        
    // Handler
    const operation = (X) => {
        if (X === "minus"){
            //setCounterValue(counterValue - 1);
            setCounterValue(prevValue => prevValue - 1);
        } else {
            //setCounterValue(counterValue + 1);
            setCounterValue(prevValue => prevValue + 1);
        }
    }

    // intento poner una funcion que dependiendo
    // el valor de counterValue cambie el color de display
    function depends (something) {
        if (something > 0) {
            return styles.display2;
        } else if (something < 0){
            return styles.display1;
        } else {
            return styles.display;
        };
    };

    return (
        <div>
            <h1 className={styles.title}>Function Counter</h1>
            <div className={styles.container1}>
                <button className={styles.buttonMinus} onClick={() => operation("minus")}>-</button>
                <div className={depends(counterValue)}>{counterValue}</div>
                <button className={styles.buttonPlus} onClick={() => operation("plus")}>+</button>
            </div>
        </div>
    )
}

export default CounterFunction;