import React, {Component} from 'react';

class CounterClass extends Component{
    state = {
        count: 0
    }

    render(){
        const increment = () => {
            this.setState({count: this.state.count + 1})
        }
        const decrement = () => {
            this.setState({count: this.state.count === 0 ? 0 : this.state.count - 1})
        }
        return(
            <>
                <button type="button" className="btn btn-info" onClick = {increment}> + </button>
                <span> {this.state.count} </span>
                <button type="button" className="btn btn-warning" onClick = {decrement}> - </button>
            </>
        )
    }
}

export default CounterClass; 