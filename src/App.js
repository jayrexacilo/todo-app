import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import axios from "axios";
import Todos from "./Components/Todos";
import DoneTodos from "./Components/DoneTodos";
import AddTodo from "./Components/AddTodo";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      doneTodos: []
    };
    this.fetchDatasfromTodosAPI();
  }

  fetchDatasfromTodosAPI() {
    axios
      .get("http://localhost:9000/todos")
      .then(response => {
        const { data } = response;
        const todos = data.filter(val => !val.done);
        const done = data.filter(val => val.done);
        this.setState({ todos: todos });
        this.setState({ doneTodos: done });
      })
      .catch(error => {
        alert("There's something wrong, reload page and try again.");
      });
  }

  handleAddTodo(item) {
    const todos = this.state.todos;

    if (!item) {
      return alert("Please fill the input");
    }
    axios
      .post("http://localhost:9000/todos/", {
        todoName: item,
        done: false
      })
      .then(response => {
        const { data } = response;
        todos.push({ _id: data._id, todoName: item });
        this.setState({ todos: todos });
      })
      .catch(error => {
        alert("There's something wrong, reload page and try again.");
      });
  }

  handleDeleteItem(id, state) {
    axios
      .delete(`http://localhost:9000/todos/delete/${id}`)
      .then(response => {
        const updatedItems = this.state[state].filter(val => id !== val._id);
        this.setState({ [state]: updatedItems });
      })
      .catch(error => {
        alert("There's something wrong, reload page and try again.");
      });
  }

  handleMoveItem(item, state) {
    const moveTo = state === "todos" ? "doneTodos" : "todos";
    const done = state === "todos" ? (item.done = true) : (item.done = false);
    const items = this.state[moveTo];

    axios
      .put("http://localhost:9000/todos/put/", item)
      .then(response => {
        const updatedItems = this.state[state].filter(
          val => item._id !== val._id
        );

        this.setState({ [state]: updatedItems });
        items.push(item);
        this.setState({ [moveTo]: items });
        console.log(response);
      })
      .catch(error => {
        alert("There's something wrong, reload page and try again.");
      });
  }

  handleEdit(item, state) {
    const { _id, todoName } = item;
    axios
      .patch("http://localhost:9000/todos/patch/", item)
      .then(response => {
        const updatedItems = this.state[state].map(todo => {
          if (_id === todo._id) {
            todo.todoName = todoName;
          }
          return todo;
        });
        this.setState({ [state]: updatedItems });
      })
      .catch(error => {
        alert("There's something wrong, reload page and try again.");
      });
    console.log(item);
  }

  render() {
    const myTodos = props => {
      return (
        <Todos
          todos={this.state.todos}
          onDelete={this.handleDeleteItem.bind(this)}
          onMoveItem={this.handleMoveItem.bind(this)}
          onEdit={this.handleEdit.bind(this)}
        />
      );
    };
    const myDoneTodos = props => {
      return (
        <DoneTodos
          doneTodos={this.state.doneTodos}
          onDelete={this.handleDeleteItem.bind(this)}
          onMoveItem={this.handleMoveItem.bind(this)}
          onEdit={this.handleEdit.bind(this)}
        />
      );
    };

    return (
      <Router>
        <div className="App container">
          <div className="row">
            <div className="col mt-3 text-center">
              <h1 className="h3">Todo App</h1>
            </div>
          </div>
          <AddTodo addTodo={this.handleAddTodo.bind(this)} />

          <div className="btn-group d-flex justify-content-center" role="group">
            <NavLink exact to="/" className="btn btn-light">
              Todos
            </NavLink>
            <NavLink to="/doneTodos" className="btn btn-light">
              Done Todos
            </NavLink>
          </div>
          <hr />
          <Switch>
            <Route exact path="/" component={myTodos} />
            <Route exact path="/doneTodos" component={myDoneTodos} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
