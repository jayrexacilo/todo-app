import React, { Component } from 'react';

class DoneItem extends Component {
  deleteItem(item) {
      this.props.onDelete(item, 'doneTodos');
  }
  render() {
    return (
    <li className="list-group-item list-group-item-action text-left">
        {this.props.doneTodo}
        <div className="btn-toolbar float-right">
            <button className="btn btn-success done">✓</button>
            <button className="btn btn-danger delete" onClick={this.deleteItem.bind(this, this.props.doneTodo)}>✗</button>
        </div>
    </li>
    );
  }
}

export default DoneItem;
