import Todo from "../models/todo";

import classes from './TodoItem.module.css'

import { TodosContext } from "../store/todos-context";
import { useContext } from "react";

const TodoItem: React.FC<{ item: Todo }> = (props) => {
    const {removeTodo} = useContext(TodosContext)
    return (
        <li className={classes.item} onClick={() => removeTodo(props.item.id)}>
            {props.item.text}
        </li>
    )
}

export default TodoItem;