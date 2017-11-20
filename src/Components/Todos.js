import React, { Component } from "react";
import InlineEdit from "react-edit-inplace";

class Todos extends Component {
  dataChanged = this.dataChanged.bind(this);

  dataChanged(data) {
    let id = Object.keys(data)[0];
    let editedItem = data[Object.keys(data)];

    this.props.onEdit(id, editedItem, "todos");
  }

  customValidateText(text) {
    return text.length > 0 && text.length < 64;
  }

  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map((todo, i) => {
        return (
          <li
            key={i}
            className="list-group-item list-group-item-action text-left"
          >
            <InlineEdit
              validate={this.customValidateText}
              activeClassName="editing"
              text={todo.todoItem}
              paramName={todo.id}
              change={this.dataChanged}
            />
            <div className="btn-toolbar float-right">
              <button
                className="btn btn-success done"
                title="Done"
                onClick={this.props.onMoveItem.bind(this, todo, "todos")}
              >
                <i className="fa fa-check-square-o" aria-hidden="true" />
              </button>
              <button
                className="btn btn-danger delete"
                title="Delete"
                onClick={this.props.onDelete.bind(this, todo.id, "todos")}
              >
                <i className="fa fa-trash-o" aria-hidden="true" />
              </button>
            </div>
          </li>
        );
      });
    }
    return (
      <div className="row my-4">
        <div className="col-md-2" />
        <div className="col-md-8 todos">
          <h1 className="h5">Todo Items</h1>
          <ul className="list-group">{todoItems}</ul>
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}

export default Todos;
