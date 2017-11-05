import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
    <li className="list-group-item list-group-item-action text-left">
        {this.props.todo}
        <div className="btn-toolbar float-right">
            <button className="btn btn-success done">✓</button>
            <button className="btn btn-danger delete">✗</button>
        </div>
    </li>
    );
  }
}

export default TodoItem;
