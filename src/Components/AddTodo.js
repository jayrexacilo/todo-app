import React, { Component } from 'react';

class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }
    handleSubmit(e) {
        if(this.refs.todoItem.value === '') {
            alert('It should not be empty when submitting');
        } else {
            this.setState({newTodo: this.refs.todoItem.value}, function() {
                this.props.addTodo(this.refs.todoItem.value);
                this.refs.todoItem.value = '';
            });
        }
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <div className="row m-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Add New Todo" ref="todoItem" aria-label="Search for..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-primary" type="submit">+</button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}

export default AddTodo;