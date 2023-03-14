import React from "react";
import Login from "./Login";
import Register from "";

// import CounterFunction from './CounterFunction';
// import CounterClass from './CounterClass';
// import styles from './styles-mesa3/App.module.css';

const App = () => {
        return (
            <div className={styles.main}>
                <Login value={0} />
                <Register value={0} />
            </div>
    )
}

export default App;