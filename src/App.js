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
      .get("http://localhost:9000/todos/todo")
      .then(response => {
        const { data } = response;
        this.setState({ todos: data });
      })
      .catch(error => {
        throw error;
      });

    axios
      .get("http://localhost:9000/todos/done")
      .then(response => {
        const { data } = response;
        this.setState({ doneTodos: data });
      })
      .catch(error => {
        throw error;
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
        if (!data.success) {
          throw new Error("Something is wrong, please try again");
        }
        todos.push({ _id: data._id, todoName: item });
        this.setState({ todos: todos });
      })
      .catch(error => {
        throw error;
      });
  }

  handleDeleteItem(id, state) {
    const updatedItems = this.state[state].filter(val => id !== val.id);
    this.setState({ [state]: updatedItems });
  }

  handleMoveItem(item, state) {
    const moveTo = state === "todos" ? "doneTodos" : "todos";
    const items = this.state[moveTo];
    const updatedItems = this.state[state].filter(val => item.id !== val.id);

    this.setState({ [state]: updatedItems });
    items.push(item);
    this.setState({ [moveTo]: items });
  }

  handleEdit(id, item, state) {
    const updatedItems = this.state[state].map(todo => {
      if (id === todo.id) {
        todo.todoItem = item;
      }
      return todo;
    });
    this.setState({ [state]: updatedItems });
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
