import {TodoContext} from "../contexts/TodoContext";
import {useContext} from "react";
import './TodoItem.css';
import {api} from "../api/mockApi";

function updateTodoDone(props) {
    return api.put(`todos/${props.todo.id}`, {
        id: props.todo.id,
        text: props.todo.text,
        done: !props.todo.done
    })
        .then(res => res.data);
}

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)


    function toggleTodo() {
        updateTodoDone(props)
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