import React, { Component } from 'react';
import DoneItem from './DoneItem';

class Todos extends Component {
    render() {
        let doneTodoItems;
        if(this.props.doneTodos) {
            doneTodoItems = this.props.doneTodos.map(doneTodo => {
                return (
                    <DoneItem doneTodo={doneTodo} />
                );
            });
        }
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 doneTodos">
                    <h1 className="h5">Done Todos</h1>
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