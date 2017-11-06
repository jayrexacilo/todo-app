import React, { Component } from 'react';

class TodoItem extends Component {
  deleteItem(item) {
      this.props.onDelete(item, 'todos');
  }
  moveItem(item) {
      this.props.onMoveItem(item, 'todos');
  }
  render() {
    return (
    <li className="list-group-item list-group-item-action text-left">
        {this.props.todo}
        <div className="btn-toolbar float-right">
            <button className="btn btn-success done" onClick={this.moveItem.bind(this, this.props.todo)}>✓</button>
            <button className="btn btn-danger delete" onClick={this.deleteItem.bind(this, this.props.todo)}>✗</button>
        </div>
    </li>
    );
  }
}

export default TodoItem;
