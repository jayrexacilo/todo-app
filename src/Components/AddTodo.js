import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { todoItem: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ todoItem: event.target.value });
  }

  handleSubmit(event) {
    this.props.addTodo(this.state.todoItem);
    this.setState({ todoItem: "" });
    event.target.addNewTodo.value = "";
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="row m-5">
          <div className="col-md-2" />
          <div className="col-md-8">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  id="addNewTodo"
                  className="form-control"
                  placeholder="Add New Todo"
                  aria-label="Add New Todo"
                  onChange={this.handleChange}
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="submit">
                    +
                  </button>
                </span>
              </div>
            </form>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}

export default AddTodo;
