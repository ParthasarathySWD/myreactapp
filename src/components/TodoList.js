import React, {Component} from 'react';
import Todo from "../components/Todo";

class TodoList extends Component{
    constructor(props){
        super(props);
    }
    render(h){
        return(
            <ul className="list-group">
                {
                    this.props.lists.map((value, key) => {
                        return <Todo key={key} value={value}></Todo>;
                    })
                }
            </ul>
        );
    }
}

export default TodoList;