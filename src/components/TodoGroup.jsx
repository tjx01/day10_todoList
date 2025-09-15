import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "./TodoItem";
import './TodoGroup.css';

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)

    function deleteItem(id, done) {
        if (!done) {
            alert("事件未完成，不能删除");
            return;
        }
        dispatch({ type: "DELETE_TODO", payload: { id } });
    }

    return <div>
        {
            state.map((item, index) => {
                return <div className={"todo-group"} key={index}>
                    <TodoItem todo={item} key={index} index={index}/>
                    <button onClick={() => deleteItem(item.id, item.done)}>X</button>
                </div>
            })
        }
    </div>
}