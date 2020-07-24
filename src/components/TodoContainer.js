import React, { Component } from 'react';

class TodoContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
                        TodoList: ['Brush', 'Breakfast', 'lunch', 'dinner', 'sleep'],
                        Todo: "",
                    };
        this.CreateTodo = this.CreateTodo.bind(this);
        this.onChanged = this.onChanged.bind(this);
    }
    CreateTodo(e) {
        console.log(e);
        this.setState(TodoList.push(this.state.Todo));
    }

    onChanged(e) {
        this.setState({Todo: e.target.value});
        console.log(e);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add Todos" aria-label="Add Todos" aria-describedby="button-addon2" onChange={this.onChanged} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="button-addon2" onClick={this.CreateTodo}>Add Todo</button>
                    </div>
                    </div>
                </div>
                <TodoList lists={this.state.TodoList}></TodoList>
            </div>        
            );
    }
}

export default TodoContainer;