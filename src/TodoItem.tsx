import React from "react";
import { Todo } from "./types";

type TodoItemProps={
    todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = (props) =>{
    return (
        <li
            style={{textDecoration: props.todo.completed ?
                'Line-through' : 'none'
            }}
            >{props.todo.text}</li>
        )
}
export default TodoItem