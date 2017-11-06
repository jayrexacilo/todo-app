import React, { Component } from 'react';
import DoneItem from './DoneItem';

class Todos extends Component {
    deleteItem(item) {
        this.props.onDelete(item, 'doneTodos');
    }
    moveItem(item) {
        this.props.onMoveItem(item, 'doneTodos');
    }
    render() {
        let doneTodoItems;
        if(this.props.doneTodos) {
            doneTodoItems = this.props.doneTodos.map((doneTodo, i) => {
                return (
                    <DoneItem key={i} doneTodo={doneTodo} onDelete={this.deleteItem.bind(this)} onMoveItem={this.moveItem.bind(this)} />
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
    }
}

export default Todos;