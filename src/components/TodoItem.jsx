
import {TodoContext} from "../contexts/TodoContext";
import {useContext} from "react";
import './TodoItem.css';

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)


    function makeAsDone() {
        dispatch({
            type: "TOGGLE_TODO",
            payload: {id: props.todo.id}
        })
    }

    return <div className={"todo-item"}>
        <span
            className={props.todo.done ? "todo-done" : ""}
            onClick={makeAsDone}
        >
            {props.todo.text}
        </span>
    </div>
}