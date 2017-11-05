import React, { Component } from 'react';

class AddTodo extends Component {
    render() {
        return (
            <div>
                <div className="row m-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="input-group">
                        <input type="text" className="form-control" placeholder="Add New Todo" aria-label="Search for..." />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button">+</button>
                        </span>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}

export default AddTodo;