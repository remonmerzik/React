import React, { Component } from "react";
import './AddItems.css'

class AddItems extends Component{
state={id:"",
    name:"",
    age:""
}

handleChange=(e) => {
    this.setState({
        [e.target.id]:e.target.value
    })

    
    
}


submitHandling= (e) => {
    e.preventDefault()
    this.props.addItems(this.state)
    this.setState({id:"",
        name:"",
        age:""})
    
}


    render(){

        return(

            <form onSubmit={this.submitHandling}>
                <input type="text" placeholder="enter your name......" id="name" onChange={this.handleChange} value={this.state.name} required />

                <input type="number" placeholder="type your age......" id="age" onChange={this.handleChange}  value={this.state.age} required/>

                <input type="submit" value='add' />
            </form>
        )
    }
}


export default AddItems