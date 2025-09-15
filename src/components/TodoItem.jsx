import {TodoContext} from "../contexts/TodoContext";
import {useContext} from "react";
import './TodoItem.css';
import {useTodoServers} from "../useTodoServers";

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)
    const {updateTodoDone} = useTodoServers();

    function toggleTodo() {
        updateTodoDone(props.todo)
            .then(todo => {
                dispatch({
                    type: "UPDATE_TODO",
                    payload: todo
                })
            })
    }

    return <div className={"todo-item"}>
        <span
            className={props.todo.done ? "todo-done" : ""}
            onClick={toggleTodo}
        >
            {props.todo.text}
        </span>
    </div>
}