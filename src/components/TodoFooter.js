import React, {Component} from 'react';
import todoStore from '../stores/TodoStore';
import {observer} from "mobx-react";
import {action} from "mobx";

@observer
class TodoFooter extends Component{

    render() {

        if (!todoStore.activeTodoCount && !todoStore.completedCount)
            return null;


        return(
            <footer className="footer">
                <div className="todo-count">{todoStore.activeTodoCount} item left</div>
                <ul className="filters">
                    {this.renderFilterLink('all', "", "All")}
                    {this.renderFilterLink('active', "active", "Active")}
                    {this.renderFilterLink('completed', "completed", "Completed")}

                </ul>

                {todoStore.completedCount === 0
                    ? null
                    :
                    <div className="clear-completed" onClick={this.clearCompleted}>clear completed</div>
                }
            </footer>
        )



    }


    renderFilterLink(filterName, url, caption) {
        return (<li>
            <a href={"#/" + url} onClick={()=>todoStore.updateFilter(filterName)}
               className={`${todoStore.filter===filterName ?"selected":""}`}>
                {caption}
            </a>
            {' '}
        </li>)
    }


    @action
    clearCompleted = () => {
        todoStore.clearCompleted();
    };




}

export default TodoFooter