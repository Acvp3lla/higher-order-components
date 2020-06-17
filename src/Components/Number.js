import React from 'react'
import {withCount} from './HOCs/withCount'
import './Number.css'

function Number (props){
    return(
        <div>
            <button className="myButton" onClick={props.toggle}>{props.show? 'Hide' : 'Show'}</button>
            <br/>
            <div style={{display: props.show? 'block' : 'none'}}>
                <h1>{props.count}</h1>
            </div>
            <button className="myButton" onClick={props.increment}>Increment</button>
            <br/>
            <button className="myButton" onClick={props.decrement}>Decrement</button>
        </div>
    )
}

export default withCount(Number)