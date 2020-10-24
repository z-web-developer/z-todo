import React ,{Component} from 'react';
import TodoStore from '../stores/TodoStore';
import {observer} from "mobx-react";
import TodoModel from "../stores/TodoModel";

@observer
class TodoItem extends Component{

    onToggle=() =>{
        this.props.todo.toggle()
    }
    destroyTodo=() =>{
        this.props.todo.destroy()
    }

    render() {
        const {todo} = this.props;

        return(
            <li className={todo.completed ? 'completed' : ''}>
                <div className="view">
                    <input onChange={this.onToggle}
                        type="checkbox" className="toggle" value="on" checked={todo.completed}/>
                    <label>{todo.title}</label>
                    <button className="destroy" onClick={this.destroyTodo} />
                </div>
            </li>
        );
    }
}
export default TodoItem