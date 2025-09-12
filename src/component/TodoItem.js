
import {TodoContext} from "../context/TodoContext";
import {useContext} from "react";

export function TodoItem(props) {
    const {state, dispatch} = useContext(TodoContext)

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