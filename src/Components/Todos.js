import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    deleteItem(item) {
        this.props.onDelete(item, 'todos');
    }
    render() {
        let todoItems;
		if(this.props.todos) {
			todoItems = this.props.todos.map((todo, i) => {
				return (
					<TodoItem key={i} todo={todo} onDelete={this.deleteItem.bind(this)} />
				);
			});
		}
        return (
            <div className="row my-4">
                <div className="col-md-2"></div>
                <div className="col-md-8 todos">
                    <h1 className="h5">Todo Items</h1>
                    <ul className="list-group">
                        {todoItems}
                    </ul>
                </div>
                <div className="col-md-2"></div>
            </div>
        );
    }
}

export default Todos;