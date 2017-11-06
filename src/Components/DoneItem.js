import React, { Component } from 'react';

class DoneItem extends Component {
  deleteItem(item) {
      this.props.onDelete(item, 'doneTodos');
  }
  moveItem(item) {
      this.props.onMoveItem(item, 'doneTodos');
  }
  render() {
    return (
    <li className="list-group-item list-group-item-action text-left">
        {this.props.doneTodo.todoItem}
        <div className="btn-toolbar float-right">
            <button className="btn btn-success done" onClick={this.moveItem.bind(this, this.props.doneTodo)}>✓</button>
            <button className="btn btn-danger delete" onClick={this.deleteItem.bind(this, this.props.doneTodo.id)}>✗</button>
        </div>
    </li>
    );
  }
}

export default DoneItem;
