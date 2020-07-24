import React, {Component} from 'react';
import TodoContainer from "../components/TodoContainer";

class Container extends Component{
    constructor(){
        super();
    }

    render() {

        return(

            <div className="container">
                {/* Content Here */}
                <h3>Todo App</h3>
                <TodoContainer />
            </div>
            );

    }
}

export default Container;