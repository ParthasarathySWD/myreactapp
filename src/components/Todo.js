import React, {Component} from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);

        this.RemoveElement = this.RemoveElement.bind(this);
    }
    RemoveElement(e) {
        console.log(e);
    }
    render(h){
        return(
            <li className="list-group-item" key="{this.props.key}">{this.props.value}<button onClick={this.RemoveElement}>Remove</button></li>
        );
    }
}

export default TodoList;