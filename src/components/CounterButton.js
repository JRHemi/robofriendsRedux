import React, { Component } from "react";

class CounterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextState) {
        if (this.state.count !== nextState.count){
            return true;
        }
        return false;
    }

    updateCount = () => {
        this.setState(state => {
            return { count: state.count + 1 }
        })
    }

render() {
    return(
        <button id='counter' color={this.props.color} style={{color: this.props.color}} onClick={this.updateCount}>
            Count: {this.state.count}
        </button>
    )}
}

export default CounterButton;