import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  withRouter,
  Redirect
} from "react-router-dom";
import uuid from "uuid";
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
  }

  handleAddTodo(item) {
    if (!item) {
      return alert("Please fill the input");
    }
    let todos = this.state.todos;
    todos.push({ id: uuid.v4(), todoItem: item });
    this.setState({ todos: todos });
  }

  handleDeleteItem(id, state) {
    let updatedItems;

    switch (state) {
      case "todos":
        updatedItems = this.state.todos.filter((val, index) => {
          return id !== val.id;
        });
        this.setState({ todos: updatedItems });
        break;
      case "doneTodos":
        updatedItems = this.state.doneTodos.filter((val, index) => {
          return id !== val.id;
        });
        this.setState({ doneTodos: updatedItems });
        break;
      default:
        return false;
    }
  }

  handleMoveItem(item, state) {
    let updatedItems;

    switch (state) {
      case "todos":
        let doneTodos = this.state.doneTodos;
        updatedItems = this.state.todos.filter((val, index) => {
          return item.id !== val.id;
        });
        this.setState({ todos: updatedItems });
        doneTodos.push(item);
        this.setState({ doneTodos: doneTodos });
        break;
      case "doneTodos":
        let todos = this.state.todos;
        updatedItems = this.state.doneTodos.filter((val, index) => {
          return item.id !== val.id;
        });
        this.setState({ doneTodos: updatedItems });
        todos.push(item);
        this.setState({ todos: todos });
        break;
      default:
        return false;
    }
  }

  handleEdit(id, item, state) {
    let updatedItems;

    switch (state) {
      case "todos":
        updatedItems = this.state.todos.map(todo => {
          if (id === todo.id) {
            todo.todoItem = item;
          }
          return todo;
        });
        this.setState({ todos: updatedItems });
        break;
      case "doneTodos":
        updatedItems = this.state.doneTodos.map(todo => {
          if (id === todo.id) {
            todo.todoItem = item;
          }
          return todo;
        });
        this.setState({ doneTodos: updatedItems });
        break;
      default:
        return false;
    }
  }

  componentDidUpdate() {
    console.log(
      "todos: ",
      this.state.todos,
      "\n",
      "doneTodos: ",
      this.state.doneTodos
    );
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

    const test = withRouter(({ match, location, history }) => {
      console.log(location.pathname, location.state);
      return false;
    });

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
