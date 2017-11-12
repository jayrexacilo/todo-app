import React, { Component } from 'react';
import uuid from 'uuid';
import Todos from './Components/Todos';
import DoneTodos from './Components/DoneTodos';
import AddTodo from './Components/AddTodo';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			todos: [],
			doneTodos: []
		}
	}
  
	handleAddTodo(item) {
		if(!item.value) {
			return alert('Please fill the input');
		}
		let todos = this.state.todos;
		todos.push({id: uuid.v4(), todoItem: item.value});
		this.setState({todos: todos});
		item.value = '';
	}
	
	handleDeleteItem(id, state) {
		let updatedItems;

		switch(state) {
			case 'todos':
				updatedItems = this.state.todos.filter((val, index) => {
					return id !== val.id;
				});
				this.setState({todos: updatedItems});
				break;
			case 'doneTodos':
				updatedItems = this.state.doneTodos.filter((val, index) => {
					return id !== val.id;
				});
				this.setState({doneTodos: updatedItems});
				break;
			default:
				return false;
		}
	}

	handleMoveItem(item, state) {
		let updatedItems;

		switch(state) {
			case 'todos':
				let doneTodos = this.state.doneTodos;
				updatedItems = this.state.todos.filter((val, index) => {
					return item.id !== val.id;
				});
				this.setState({todos: updatedItems});
				doneTodos.push(item);
				this.setState({doneTodos: doneTodos});
				break;
			case 'doneTodos':
				let todos = this.state.todos;
				updatedItems = this.state.doneTodos.filter((val, index) => {
					return item.id !== val.id;
				});
				this.setState({doneTodos: updatedItems});
				todos.push(item);
				this.setState({todos: todos});
				break;
			default:
				return false;
		}
	}

	componentDidUpdate() {
		console.log('todos: ',this.state.todos, "\n", 'doneTodos: ', this.state.doneTodos);
	}

	render() {
		return (
			<div className="App container">
				<div className="row"><div className="col mt-3 text-center"><h1 className="h3">Todo App</h1></div></div>
					<AddTodo addTodo={this.handleAddTodo.bind(this)}/>
					<Todos todos={this.state.todos} onDelete={this.handleDeleteItem.bind(this)} onMoveItem={this.handleMoveItem.bind(this)}/>
					<DoneTodos doneTodos={this.state.doneTodos} onDelete={this.handleDeleteItem.bind(this)} onMoveItem={this.handleMoveItem.bind(this)} />
			</div>
		);
	}
}

export default App;
