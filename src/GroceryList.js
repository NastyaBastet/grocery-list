import image from './grocery.png';
import { Component } from "react";

export class GroceryList extends Component {
   state = {
            userInput: "",
            groceryList: []
        }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

addItem(input) {
    if( input === '') {
        alert("Please enter an item");
    }
    else{
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: ""})
    }
}

crosseWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

deleteItem() {
    let listArray = this.groceryList;
    listArray = [];
    this.setState({groceryList: listArray})
}

onFormSubmit(e) {
    e.preventDefault();
}

    render() {
        return (
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text" value={this.state.userInput} placeholder="What do you want to bye?" onChange={(e) => {this.onChangeEvent(e.target.value)}} />
                </div>
                <div className="container">
                    <button onClick={() => {this.addItem(this.state.userInput)}} className="add">ADD</button>
                    </div>
                    <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.crosseWord} key={index}><img src={image} alt='item' width='40px'/>{item}</li>
                    ))}
                </ul>
                <div className="container">
                    <button onClick={() => {this.deleteItem()}} className="delete">DELETE</button>
                </div>
                </form>
        )
    }
}