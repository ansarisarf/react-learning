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

                <button type="button" className="btn btn-success btn-circle mx-1" onClick = {increment}>
                    <i className="fas fa-plus-circle"> </i>
                </button >

                <button className="btn btn-primary mx-1" type="button"> Count: {this.state.count} </button> 

                <button type="button" className="btn btn-danger btn-circle" onClick={decrement}>
                    <i className="fas fa-minus-circle"> </i>
                </button >
            </>
        )
    }
}

export default CounterClass; 