import {observable, action, computed} from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {
    @observable todos =[]
    lastID = 0
    @observable filter="all"

    @action
    addTodo(title){
        this.todos.push(new TodoModel(this,title,false,this.lastID ++))
    }


    @computed get activeTodoCount() {
        return this.todos.reduce(
            (sum, todo) => sum + (todo.completed ? 0 : 1),
            0
        )
    }

    @computed get completedCount() {
        return this.todos.length - this.activeTodoCount;
    }


    @action
    updateFilter = filter =>{
        return this.filter = filter
    }


    @computed get todosFiltered(){
        switch (this.filter){
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            default:
                    return this.todos;

        }


    }

    @action
    clearCompleted(){
        this.todos= this.todos.filter(
            todo=> !todo.completed
        )
    }


}

const todoStore = new TodoStore()
export default todoStore
