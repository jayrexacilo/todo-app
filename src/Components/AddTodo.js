import React, { Component } from 'react';

const AddTodo = (props) => {
    const addNewTodo = (e) => {
        props.addTodo(e.target.addNewTodo)
        e.preventDefault();
    };

    return (
        <div>
            <div className="row m-5">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <form onSubmit={addNewTodo}>
                        <div className="input-group">
                            <input type="text" id="addNewTodo" className="form-control" placeholder="Add New Todo" aria-label="Search for..." />
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
};

export default AddTodo;