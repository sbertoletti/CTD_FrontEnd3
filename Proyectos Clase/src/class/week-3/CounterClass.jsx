import React, { Component } from "react";
import styles from './styles-mesa3/App.module.css';

class CounterClass extends Component {
/*    
constructor(props){
    super(props);
    this.state = {
        counterValue: this.props.value
    }
}
*/


    state = {
        counterValue: this.props.value
    };

    operation = (param) => {
        if (param === "minus") {
        //    this.setState({counterValue: this.state.counterValue - 1})
            this.setState(prevState => ({ counterValue: prevState.counterValue - 1 }))
        } else {
        //    this.setState({counterValue: this.state.counterValue + 1})
            this.setState(prevState => ({ counterValue: prevState.counterValue + 1 }))
        }
    }


    // intento poner una funcion que dependiendo
    // el valor de counterValue cambie el color de display
    depends = (something) => {
        if (something > 0) {
            return styles.display2;
        } else if (something < 0){
            return styles.display1;
        } else {
            return styles.display;
        };
    };


    render(){
        return (
        <div>
            <h1 className={styles.title}>Class Counter</h1>
                <div className={styles.container1}>
                    <button className={styles.buttonMinus} onClick={() => this.operation("minus")}>-</button>      
                    <div className={this.depends(this.state.counterValue)}>{this.state.counterValue}</div>
                    <button className={styles.buttonPlus} onClick={() => this.operation("plus")}>+</button>
                </div>
            </div>
        )
    };
};

export default CounterClass;