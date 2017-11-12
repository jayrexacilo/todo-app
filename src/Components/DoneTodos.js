import React from 'react';

const DoneTodos = (props) => {
    let doneTodoItems;
    if(props.doneTodos) {
        doneTodoItems = props.doneTodos.map((doneTodo, i) => {
            return (
                <li key={i} className="list-group-item list-group-item-action text-left">
                    {doneTodo.todoItem}
                    <div className="btn-toolbar float-right">
                        <button className="btn btn-success done" onClick={props.onMoveItem.bind(this, doneTodo, 'doneTodos')}>✓</button>
                        <button className="btn btn-danger delete" onClick={props.onDelete.bind(this, doneTodo.id, 'doneTodos')}>✗</button>
                    </div>
                </li>
            );
        });
    }
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 doneTodos">
                <h1 className="h5">Done Items</h1>
                <ul className="list-group">
                    {doneTodoItems}
                </ul>
            </div>
            <div className="col-md-2"></div>
        </div>
    );
};

export default DoneTodos;