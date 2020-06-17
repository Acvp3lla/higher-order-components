import React from 'react'
import {withCount} from './HOCs/withCount'

function Number (props){
    return(
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.increment}>Increment</button>
            <br/>
            <button onClick={props.decrement}>Decrement</button>
        </div>
    )
}

export default withCount(Number)