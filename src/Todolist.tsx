import React from "react"
import { Todo } from "./types";

type TodoListProps ={
    todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const todoItems: JSX.Element[] = [];

    for (const todo of props.todos) {
        todoItems.push(<li>{todo.text}</li>);
    }

    return (<ul>{todoItems}</ul>)
}

export default TodoList;