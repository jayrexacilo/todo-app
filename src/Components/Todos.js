import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        let todoItems;
		if(this.props.todos) {
			todoItems = this.props.todos.map(todo => {
				return (
					<TodoItem todo={todo} />
				);
			});
		}
        return (
            <div className="row my-4">
                <div className="col-md-2"></div>
                <div className="col-md-8 todos">
                    <h1 className="h5">Todos</h1>
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