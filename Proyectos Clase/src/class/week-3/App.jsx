import React from "react";
import CounterFunction from './CounterFunction';
import CounterClass from './CounterClass';
import styles from './styles-mesa3/App.module.css';

const App = () => {
        return (
            <div className={styles.main}>
                <CounterClass value={0} />
                <CounterFunction value={5} />
            </div>
    )
}

export default App;