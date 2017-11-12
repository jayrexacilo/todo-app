import React from 'react';

const Todos = (props) => {
    let todoItems;
    if(props.todos) {
        todoItems = props.todos.map((todo, i) => {
            return (
                <li key={i} className="list-group-item list-group-item-action text-left">
                    {todo.todoItem}
                    <div className="btn-toolbar float-right">
                        <button className="btn btn-success done" onClick={props.onMoveItem.bind(this, todo, 'todos')}>✓</button>
                        <button className="btn btn-danger delete" onClick={props.onDelete.bind(this, todo.id, 'todos')}>✗</button>
                    </div>
                </li>
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
};

export default Todos;