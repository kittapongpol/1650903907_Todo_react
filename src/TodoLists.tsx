import React from "react"
import { Todo } from "./types";
import TodoItem from './TodoItem'

type TodoListProps ={
    todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const todoItems: JSX.Element[] = [];

    for (const todo of props.todos) {
        todoItems.push(<TodoItem todo={todo}/>);
    }

    return (<ul>{todoItems}</ul>)
}

export default TodoList;