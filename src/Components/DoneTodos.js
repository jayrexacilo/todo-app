import React, { Component } from "react";
import InlineEdit from "react-edit-inplace";

class DoneTodos extends Component {
  dataChanged = this.dataChanged.bind(this);

  dataChanged(data) {
    const item = {
      _id: Object.keys(data)[0],
      todoName: data[Object.keys(data)]
    };

    this.props.onEdit(item, "doneTodos");
  }

  customValidateText(text) {
    return text.length > 0 && text.length < 64;
  }
  render() {
    let doneTodoItems;
    if (this.props.doneTodos) {
      doneTodoItems = this.props.doneTodos.map((doneTodo, i) => {
        const { _id, todoName } = doneTodo;
        return (
          <li
            key={i}
            className="list-group-item list-group-item-action text-left"
          >
            <InlineEdit
              validate={this.customValidateText}
              activeClassName="editing"
              text={todoName}
              paramName={_id}
              change={this.dataChanged}
            />
            <div className="btn-toolbar float-right">
              <button
                className="btn btn-success done"
                title="Undone"
                onClick={this.props.onMoveItem.bind(
                  this,
                  doneTodo,
                  "doneTodos"
                )}
              >
                <i className="fa fa-undo" aria-hidden="true" />
              </button>
              <button
                className="btn btn-danger delete"
                title="Delete"
                onClick={this.props.onDelete.bind(this, _id, "doneTodos")}
              >
                <i className="fa fa-trash-o" aria-hidden="true" />
              </button>
            </div>
          </li>
        );
      });
    }
    return (
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8 doneTodos">
          <h1 className="h5">Done Items</h1>
          <ul className="list-group">{doneTodoItems}</ul>
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}

export default DoneTodos;
