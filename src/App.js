import React, { Component } from 'react';
import Todos from './Components/Todos';
import DoneTodos from './Components/DoneTodos';
import AddTodo from './Components/AddTodo';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
      todos: ['Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac'],
      doneTodos: ['Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac']
		}
	}

	render() {
		return (
			<div className="App container">
        <div className="row"><div className="col mt-3 text-center"><h1 className="h3">Todo App</h1></div></div>
				<AddTodo />
				<Todos todos={this.state.todos}/>
        <DoneTodos doneTodos={this.state.doneTodos} />
			</div>
		);
	}
}

export default App;
