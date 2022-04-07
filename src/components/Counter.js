import React, {useState} from 'react';
import CounterClass from './CounterClass';

function Counter(){

    const[count, setCounter] = useState(0)

    const increment = () => {
        setCounter(count + 1)
    }
    const decrement = () => {
        setCounter(count === 0 ? 0 : count - 1)
    }
    return(
        <>
            <div className="container mt-3">
                <h5>Based On Functional Component </h5>
                <button type="button" className="btn btn-primary" onClick={increment}>+</button>
                <span>  {count}  </span>
                <button type="button" className="btn btn-danger" onClick={decrement}>-</button>
            </div>

            <div className="container mt-3">
            <h5>Based On Class Component </h5>
                <CounterClass/>
            </div>
           
        </>
    )
}

export default Counter;