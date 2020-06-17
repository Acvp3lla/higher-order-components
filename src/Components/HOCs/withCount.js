import React, {useState, Component} from 'react'

class Count extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render(){
        const Component = this.props.component
        return(
            <div>
                <Component increment={this.increment} decrement={this.decrement} count={this.state.count} {...this.props}/>
            </div>
        )
    }
  
}

export function withCount(component){
    return (props)=>{
        return(
            <Count component={component} {...props} />
        )
    }

}