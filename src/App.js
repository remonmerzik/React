import React, { Component } from "react";
import TodoItems from "./components/TodoItems/TodoItems";
import AddItems from "./components/AddItems/AddItems";
class App extends Component {
  state = {
    items: [
      { id: 1, name: "vero", age: 5 },
      { id: 2, name: "mera", age: 7 },
      { id: 3, name: "bellla", age: 1 },
    ],
  };

  deleteItem = (id) => {

    let items=this.state.items.filter(item=>item.id!==id)

    this.setState({items})

    // or use this way 
    // let items = this.state.items;

    // let i = items.findIndex((item) => item.id === id);
    // items.splice(i, 1);
    // this.setState({ items:items });
  };



  addItems=(item) => {
    item.id=Math.random()
    let items=this.state.items
    items.push(item)
    this.setState({items})
    
  }

  render() {
    return (
      <div className="app container">
        <h1 className="textCenter">TO-D0-LIST-APP</h1>
        <TodoItems deleteItem={this.deleteItem} items={this.state.items} />
        <AddItems addItems={this.addItems}/>
      </div>
    );
  }
}
export default App;
