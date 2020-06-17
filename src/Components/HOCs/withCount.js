import React, {Component} from 'react'

class Count extends Component{
    constructor(){
        super()
        this.state = {
            count: 0,
            on: true
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
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
                <Component increment={this.increment} decrement={this.decrement} count={this.state.count} show={this.state.on} toggle={this.toggle} {...this.props}/>
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